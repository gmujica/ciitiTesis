window.fbAsyncInit = function() {
    FB.init({
      appId      : '1587234491539169',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.4'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "http://connect.facebook.net/es_ES/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   function validarUsuario() {
       FB.getLoginStatus(function(response) {
           if(response.status == 'connected') {
               document.getElementById("login").innerHTML=response.name;
           } else if(response.status == 'not_authorized') {
               alert('Debes autorizar la app!');
           } else {
               alert('Debes ingresar a tu cuenta de Facebook!');
           }
       });
   }
   function ingresar() {
    FB.login(function(response){
        validarUsuario();
    }, {scope: 'public_profile, email'});
}
