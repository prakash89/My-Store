class ContactMailer < ActionMailer::Base
 def contact_email(from_email, to_email, name, number, product, message )
   @from_email = from_email
   @to_email = to_email
   @name = name
   @number = number
   @product = product
   @message = message
   @body = "Name : " + @name + "\n" + "Number : " + @number + "\n" + "Product : " + @product + "\n" + "Message : " + @message
   mail(:from => @from_email, :to => @to_email, :subject => "Contact Info", :body => @body)
 end

end