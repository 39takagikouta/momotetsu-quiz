class RenameCorrectToCorrectUrlInCountryQuizzes < ActiveRecord::Migration[7.0]
  def change
    rename_column :country_quizzes, :correct, :correct_url
  end
end
