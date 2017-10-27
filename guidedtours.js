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
    
    // click to book, to show info and close button and span
   $('li').on('click', 'button', function(){
      var offerName = $(this).closest('.tour').data('name');
      var offerPrice = $(this).closest('.tour').data('price')
      var message = $('<ol class="breadcrumb"><li class="breadcrumb-item active" style="color:#3CB371">Success! You have booked '+offerName+' offer for '+offerPrice+'!</li></ol>');
       $(this).closest('.tour').append(message);
       
       $(this).prev().closest('.details').remove();
       $(this).remove();        
       $('li').unbind("click");
   }); 
    
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
       var priceOffer = +$('li').closest('.tour').data('price');
        
        
        $('li').find('#numberNightsOffer').each(function(index) {
            $(this).text(numberNights); 
        });
        
        $('li').find('#numberPriceOffer').each(function(index){
            
              $(this).text(numberNights * priceOffer);
        })
        
        
        
        
        
        $('#numberPriceOffer').text(numberNights * priceOffer);
        
        text(numberNights);
        $('.numberNights').on('focus', function() {
           $('.numberNights').val(7); 
        });
    });
    
    $(document.body).append('hello');
});


// to do: each for every price lern looping in jqeury for different examples.