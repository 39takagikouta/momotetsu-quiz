class CountryQuizPack < ApplicationRecord
  has_many :country_quizzes, dependent: :destroy
end
