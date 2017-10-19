$(document).ready(function() {
   $('ul').on('click', 'button', function(){
      var message = $('<ol class="breadcrumb"><li class="breadcrumb-item active" style="color:#3CB371">Success! You have booked the offer travel!</li></ol>');
       $(this).closest('.tour').append(message);
       $(this).remove();
       $('li span').remove();
   });
});