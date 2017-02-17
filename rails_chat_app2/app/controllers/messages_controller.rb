class MessagesController < ApplicationController

  def login
    session[:username] = params[:username]
    redirect_to messages_url
  end

  def index
    @messages = Message.all
    @new_message = Message.new(username: session[:username])
  end

  def create
    @message = Message.create(body: params[:message][:body], username: session[:username])
    # publish the message to rabbitmq
    channel = $rabbit.create_channel
    exchange = channel.fanout("chat")
    logger.info "Publishing a message"
    message = {message: params[:message][:body]}.to_json
    logger.debug message

    exchange.publish(message, routing_key: "new_message")

    # change to JSON
    respond_to do |format|
      format.json {render json: {message: @message}}
    end
  end

end
