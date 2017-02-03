function activer() {
  $('#photo').toggle();
  $('#cacher').toggle();

  if ($('#btnstart').html() == "Retour"){
    $('#btnstart').html("Joindre l'equipe ?");
  } else if ($('#btnstart').html() == "Joindre l'equipe ?") {
    $('#btnstart').html("Retour");
  }
};
// $(document).ready(function(){
//   $('#btnstart').on('click',function(){
//     if($(this).html() == 'retour'){
//       $(this).html("Joindre l'équipe ?");
//     }
//     else if($(this).html() == "Joindre l'équipe ?"){
//       $(this).html("retour");
//     }
//   });
// })
