class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true

  devise :database_authenticatable, :registerable, :recoverable, :rememberable,
    :trackable, :validatable
end
