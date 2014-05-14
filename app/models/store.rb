class Store < ActiveRecord::Base
	validates :price, :presence => true,
              :format => { :with => /\A^(\$)?(\d+)(\.|,)?\d{0,2}?$\z/ }

	def self.search(search)
      if search
        where("drugs_name like ?" ,"%#{search}%")
    else
    	scoped
      end
	end
end
