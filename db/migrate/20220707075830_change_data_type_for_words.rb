class ChangeDataTypeForWords < ActiveRecord::Migration[7.0]
  def change
    change_column :countwords, :words, :text
  end
end
