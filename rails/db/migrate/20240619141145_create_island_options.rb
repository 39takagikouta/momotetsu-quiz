class CreateIslandOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :island_options do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
