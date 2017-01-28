class Movies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :poster_path, null: false, unique: true
      t.datetime :release_date
      t.text :overview
      t.boolean :adult, default: false
      t.timestamps null: false
    end
  end
end
