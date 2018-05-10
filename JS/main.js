'use strict';

$(function () {

    $('#count-sum').click(function () {

        var pobierzKase = $('.salary');

        var suma = 0;

        for (var i = 0; i < pobierzKase.length; i++) {
            suma = suma + parseInt(pobierzKase[i].innerHTML);
            console.log(suma);
        }
        $('#sum').empty().append(suma);

    });

});

            
        
        
      
        

    
 
    
    
    
    
