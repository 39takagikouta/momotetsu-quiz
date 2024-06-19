class RenameQuestionToQuestionUrlInIslandQuizzes < ActiveRecord::Migration[7.0]
  def change
    rename_column :island_quizzes, :question, :question_url
  end
end
