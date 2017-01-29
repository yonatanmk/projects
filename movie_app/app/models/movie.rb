class Movie < ApplicationRecord
  attr_accessor :status
  def initialize()
    @status = nil
  end

  def attributes
    super.merge('status' => self.status)
  end

  validates :title, presence: true

  has_many :user_movies
  has_many :users, through: :user_movies
end
