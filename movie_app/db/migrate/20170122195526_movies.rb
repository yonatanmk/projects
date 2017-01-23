class Movies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :image_url, null: false, unique: true
      t.datetime :release_date
      t.text :description
      t.timestamps null: false
    end
  end
end
