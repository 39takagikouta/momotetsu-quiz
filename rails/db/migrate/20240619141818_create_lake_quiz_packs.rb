class CreateLakeQuizPacks < ActiveRecord::Migration[7.0]
  def change
    create_table :lake_quiz_packs do |t|

      t.timestamps
    end
  end
end
