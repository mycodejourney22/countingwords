class CreateCountwords < ActiveRecord::Migration[7.0]
  def change
    create_table :countwords do |t|
      t.string :words

      t.timestamps
    end
  end
end
