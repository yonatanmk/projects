class FoldersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @folders = Folder.all
    respond_to do |format|
      format.html
      format.json { render json: @folders }
    end
  end

  def create
    Folder.create(name: folder_params[:name])
  end

  private

    def folder_params
      params.require(:folder).permit(:name)
    end

end
