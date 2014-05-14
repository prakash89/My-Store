class AddDateToStores < ActiveRecord::Migration
  def change
    add_column :stores, :date, :string
  end
end
