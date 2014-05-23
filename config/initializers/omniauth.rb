OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '522841571170977', 'd8396f624adc12e6bac10c0695328470'
  provider :twitter, '2TCQfwohLrebjrvYObddhfiqY', 'QPhq9yGDaJFBLyPByVCp3xUVGlTfHkWrl6buuJkRmibL1OB59N'
end