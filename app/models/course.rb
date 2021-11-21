class Course < ApplicationRecord
  belongs_to :subject
  has_many :books, dependent: :destroy
end
