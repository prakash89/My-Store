class AddCompanyAndQuantityToStores < ActiveRecord::Migration
  def change
    add_column :stores, :company, :string
    add_column :stores, :quantity, :integer
  end
end
