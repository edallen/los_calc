/* Line of Sight Calculator for TCS games, by Ed Allen */


$(document).ready(function(){
  
  function calculate_height (){
    hi = $("#higher_elevation").val();

    low = $("#lower_elevation").val();
 
    hi_d = $("#lower_to_higher_distance").val();

    ob_d = $("#lower_to_obstacle_distance").val();

    hi_lo = hi - low;
    dhml =  ob_d * hi_lo;
    blocking_over_low = dhml / hi_d 
    blocking_height =  parseInt(low * 1 + blocking_over_low);
    
    $("#blocking_height").val(blocking_height);
  }
  
   $("#height_button").bind("click", function(){ calculate_height();});

});

