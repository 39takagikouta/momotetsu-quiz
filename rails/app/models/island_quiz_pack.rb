class IslandQuizPack < ApplicationRecord
  has_many :island_quizzes, dependent: :destroy
end
