$(document).ready(function() {
    
    // click to book, to show info and close button and span
   $('li').on('click', 'button', function(){
      var offerName = $(this).closest('.tour').data('name');
      var offerPrice = $(this).closest('.tour').data('price')
      var message = $('<ol class="breadcrumb"><li class="breadcrumb-item active" style="color:#3CB371">Success! You have booked '+offerName+' offer for '+offerPrice+'!</li></ol>');
       $(this).closest('.tour').append(message);
       
       $(this).prev().closest('.details').remove();
       $(this).remove();     
   });
    
    // filter new offers by clicking a "new" button
    $('#buttons').on('click','.filterNew', function() {
        $('.tour').filter('.newOffer').addClass('highlightnew');
        $('.highlightpopular').removeClass('highlightpopular');
        });
    
        // filter by popular offers
        $('#buttons').on('click', '.filterPopular', function() { 
        $('.tour').filter('.popular').addClass('highlightpopular');
        $('.highlightnew').removeClass('highlightnew');
        });
});