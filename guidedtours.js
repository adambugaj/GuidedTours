//// hide offer before the Dom is loaded
//$('ul').hide()
$(document).ready(function() {   
    
    function showHideOffer() {
        $('ul').slideToggle();
    }
    
    //click to show offers
    $('.card').on('click', '.showOffers', showHideOffer, function() {
       $('.showOffers').html('Hide Offers');
    });
    
    //click to hide offers - change name to show offers doesn't work!!
    $('.card').on('click','.showOffers', showHideOffer);
    
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
                $('#buttons').on('click', '.filterNew', function() {
                    $('.highlightnew').removeClass('highlightnew');
                });
        });
    
        // filter by popular offers
        $('#buttons').on('click', '.filterPopular', function() { 
            $('.tour').filter('.popular').addClass('highlightpopular');
            $('.highlightnew').removeClass('highlightnew');
        });
    
    // input for number nights
    $('.numberNights').on('keyup', function() {
       var numberNights = +$(this).val(); 
       var priceOffer = +$('li').closest('.tour').data('price');
        
        $('#numberPriceOffer').text(numberNights * priceOffer);
        $('li').find('#numberNightsOffer').text(numberNights);
        $('.numberNights').on('focus', function() {
           $('.numberNights').val(7); 
        });
    });
    
    
});