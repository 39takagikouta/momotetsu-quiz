class CreateCountryOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :country_options do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
