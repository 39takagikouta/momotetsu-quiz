class RenameQuestionToQuestionUrlInLakeQuizzes < ActiveRecord::Migration[7.0]
  def change
    rename_column :lake_quizzes, :question, :question_url
  end
end
