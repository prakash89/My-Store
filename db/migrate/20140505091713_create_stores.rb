class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      t.string :drugs_name
      t.string :price
      t.timestamps
    end
  end
end
