class HomeController < ApplicationController
	def new
	end

	def email_contact
    @name = params[:contact][:name]
    @email = params[:contact][:email]
    @number = params[:contact][:number]
    @product = params[:contact][:product]
    @message = params[:contact][:message]
    @to_email = "arvind@yopmail.com"
      ContactMailer.contact_email(@email, @to_email, @name, @number, @product, @message).deliver
      flash[:notice] = "The Contact Information has been sent"
      redirect_to root_url
    
  end
end
