$(document).ready(function() {
   $('ul').on('click', 'button', function(){
      var offerName = $(this).closest('.tour').data('name');
      var message = $('<ol class="breadcrumb"><li class="breadcrumb-item active" style="color:#3CB371">Success! You have booked '+offerName+' offer!</li></ol>');
       $(this).closest('.tour').append(message);
       
       $(this).prev().closest('.details').remove();
   });
});