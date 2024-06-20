class CreateCountryQuizzes < ActiveRecord::Migration[7.0]
  def change
    create_table :country_quizzes do |t|
      t.references :country_quiz_pack, foreign_key: true
      t.string :question, null: false
      t.string :correct, null: false

      t.timestamps
    end
  end
end
