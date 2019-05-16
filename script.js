
jQuery(document).ready(function (){
  jQuery("#wrapper").hide();
  $('#opening-text').click(function(){
    $("#opening-text").hide(2000);
    $("#wrapper").show(2000);
  });


  $('#webdevpopup').hide();
  $('#designpopup').hide();
  $('#bakingpopup').hide();

  $('#btn1').click(function(){
    $('#webdevpopup').toggle();
    $('#webdevpopup').addClass('show-popup');
    $('#sprite-container').toggleClass('s-background');

    });

  $('#btn2').click(function(){
    $('#designpopup').toggle();
    $('#designpopup').addClass('show-popup');
    $('#sprite-container').toggleClass('s-background');
    });

  $('#btn3').click(function(){
    $('#bakingpopup').toggle();
    $('#bakingpopup').addClass('show-popup');
    $('#sprite-container').toggleClass('s-background');
  });

  $('#closebtn1').click(function(){
    $('#webdevpopup').toggle();
    $('#webdevpopup').removeClass('show-popup');
    $('#sprite-container').toggleClass('s-background');
  });
  $('#closebtn2').click(function(){
    $('#designpopup').toggle();
    $('#designpopup').removeClass('show-popup');
    $('#sprite-container').toggleClass('s-background');
  });
  $('#closebtn3').click(function(){
    $('#bakingpopup').toggle();
    $('#bakingpopup').removeClass('show-popup');
    $('#sprite-container').toggleClass('s-background');
  });



});
