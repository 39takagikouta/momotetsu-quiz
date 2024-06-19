class CreateIslandQuizPacks < ActiveRecord::Migration[7.0]
  def change
    create_table :island_quiz_packs do |t|

      t.timestamps
    end
  end
end
