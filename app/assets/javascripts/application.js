// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require bootstrap.min
//= require jquery.validate
//= require additional-methods
//= require_tree ./validations/
//= require_tree .


$(function(){
    $("a#invite_fb_friends").click(function(){
        FB.init({
        appId: '522841571170977',
        status: true,
        cookie: false,
        // xfbml: true
        });

FB.ui({
method: 'apprequests',
message: '<%=current_user.name %> has invite you to a party for <%=get_current_board.bp_name%>'});
});
});