class CreateLakeQuizzes < ActiveRecord::Migration[7.0]
  def change
    create_table :lake_quizzes do |t|
      t.references :lake_quiz_pack, foreign_key: true
      t.string :question, null: false
      t.string :correct, null: false

      t.timestamps
    end
  end
end
