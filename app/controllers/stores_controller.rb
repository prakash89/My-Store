class StoresController < ApplicationController
	before_filter :require_login

	def index
		# @stores = Store.all
		@stores = Store.search(params[:search]).order("drugs_name").page(params[:page]).per(5)
		# @store = Store
	end

	def show
		@store = Store.find(params[:id])
	end

	def new
       @store =Store.new
	end

	def create
		@store = Store.new(store_params)
		if @store.save
		redirect_to @store
	else
		render 'new'
    end
	end

	

	def edit
       @store = Store.find(params[:id])
	end

	def update
       @store = Store.find(params[:id])
       if @store.update(store_params)
       	redirect_to @store
       else
       	render 'edit'
       end
	end

	def destroy
       @store = Store.find(params[:id])
       @store.destroy
       redirect_to stores_path
	end

	def billing_items
		@store = Store.new
	end

	private
	def store_params
	  params.require(:store).permit(:drugs_name, :price, :company, :quantity, :date)
	end

end
