class CreateLakeOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :lake_options do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
