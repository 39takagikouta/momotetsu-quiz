class LakeQuizPack < ApplicationRecord
  has_many :lake_quizzes, dependent: :destroy
end
