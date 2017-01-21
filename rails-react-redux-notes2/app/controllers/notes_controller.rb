class NotesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @folder = Folder.find(params[:folder_id])
    @notes = @folder.notes
    render json: @notes
  end

  def create
    Note.create(note_params)
  end


  def update
    @note = Note.find(params[:id])
    @note.update(note_params)
  end

  def destroy
  end

  private

    def note_params
      params.require(:note).permit(:folder_id, :body, :id, :text)
    end
end
