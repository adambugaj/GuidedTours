//// hide offer before the Dom is loaded
//$('ul').hide()
$(document).ready(function() {   
    
    function showHideOffer() {
        $('ul').slideToggle();
    }
    
    //click to show offers, change name of button
    $('.card').on('click', '.showOffers', function() {
        
    /* My idea for changing name of button  
        if ($(this).text() === "Show Offers") {
                $(this).text('Hide Offers');
        } 
        else if ($(this).text() === "Hide Offers") {
                $(this).text('Show Offers');
            };   
            */ 
        
    // the fastest way of optimization code
        $(this).text($(this).text() === 'Hide Offers' ? 'Show Offers' : 'Hide Offers');
        
    });  
    
    $('.card').on('click','.showOffers', showHideOffer);
    
    
    // filter new offers by clicking a "new" button
    
         $('.filterNew').on('click', function(){
            $('.tour').closest('.newOffer').toggleClass('highlightnew');
             $('.highlightpopular').removeClass('highlightpopular');
         });
 
        // filter by popular offers
        $('#buttons').on('click', '.filterPopular', function() { 
            $('.tour').closest('.popular').toggleClass('highlightpopular');
            $('.highlightnew').removeClass('highlightnew');
            
            //monitor how many times button is clicked
            if (this.id === 'filterPopular') {
                console.log('this button was clicked');
            };
        });
    
    
    
    // input for number nights
    $('.numberNights').on('keyup', function() {
       var numberNights = +$(this).val(); 
        
        $('.offer').find('li').each(function() {
            $(this).find('#numberNightsOffer').text(numberNights); 
        });
        
        $('.offer').find('li').each(function(){
            var priceOffer = +$(this).closest('.tour').data('price');
              $(this).find('#numberPriceOffer').text(numberNights * priceOffer);
        });
        
                   
        $('#numberPriceOffer').text(numberNights * priceOffer);
        
        text(numberNights);
        $('.numberNights').on('focus', function() {
           $('.numberNights').val(7); 
        });
    });
    
    $(document.body).append('hello');
});

    // click to book, to show info and close button and span
   $('li').on('click', 'button', function(){
      var offerName = $(this).closest('.tour').data('name');
      var offerPrice = $(this).closest('.tour').data('price');
      var offerNights = +$('.numberNights').val();
      var offerCost = offerNights * offerPrice;
       
       
    if (offerPrice === 0) {
        var message = $('<ol class="breadcrumb"><li class="breadcrumb-item active" style="color:#3CB371">Success! You have booked '+offerName+' offer for 7 nights! Total Price: '+offerPrice+'$</li></ol>');
        $(this).closest('.tour').append(message);
    }
       
    else {
        var message = $('<ol class="breadcrumb"><li class="breadcrumb-item active" style="color:#3CB371">Success! You have booked '+offerName+' offer for '+offerNights+' nights! Total Price: '+offerCost+'$</li></ol>');
        $(this).closest('.tour').append(message);
    }
       
       $(this).prev().closest('.details').remove();
       $(this).remove();        
       $('li').unbind("click");
   }); 
   $('.numberNights').on('keyup', function() {
         
       });

// to do: each for every price lern looping in jqeury for different examples.