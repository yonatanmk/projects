class NotesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @folder = Folder.find(params[:folder_id])
    @notes = @folder.notes
    render json: @notes
  end

  def create
    Note.create(note_params)
    @new_note_id = Note.last.id
    render json: @new_note_id
  end


  def update
    @note = Note.find(params[:id])
    @note.update(note_params)
  end

  def destroy
    binding.pry
  end

  private

    def note_params
      params.require(:note).permit(:folder_id, :body, :id, :text)
    end
end
