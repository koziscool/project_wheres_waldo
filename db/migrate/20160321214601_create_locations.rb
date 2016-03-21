class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.integer :left
      t.integer :top
      t.string  :character_name
      t.string  :photo_name
      t.timestamps null: false
    end
  end
end
