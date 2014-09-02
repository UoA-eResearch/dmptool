class Api::V1::UsersController < Api::V1::BaseController
	# before_action :authenticate

	http_basic_authenticate_with name: 'admin', password: 'secret'

	respond_to :json

	def index         
  	@users = User.all     
	end 

	def show
    @user = User.find(params[:id])
  end


  # protected
  # def authenticate
  # 	authenticate_or_request_with_http_basic do |username, password|
  # 		Ldap_User.valid_ldap_credentials?(username, password)
  # 	end
  # end




  # def self.valid_ldap_credentials?(uid, password)
  #   begin
  #     res = Ldap_User::LDAP.authenticate(uid, password)
  #   rescue LdapMixin::LdapException => ex
  #     return false
  #   end
  #   return res && true
  # end

end