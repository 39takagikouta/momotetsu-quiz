class RenameNameToCountryUrlInCountryOptions < ActiveRecord::Migration[7.0]
  def change
    rename_column :country_options, :name, :country_url
  end
end
