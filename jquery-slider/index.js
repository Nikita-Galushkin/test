function hexFromRGB(r, g, b) {
  var hex = [
    r.toString( 16 ),
    g.toString( 16 ),
    b.toString( 16 )
  ];
  $.each( hex, function( nr, val ) {
    if ( val.length === 1 ) {
      hex[ nr ] = "0" + val;
    }
  });
  return hex.join( "" ).toUpperCase();
}

function refreshSwatch() {
  var red = $( "#red" ).slider( "value" ),
    green = $( "#green" ).slider( "value" ),
    blue = $( "#blue" ).slider( "value" ),
    hex = hexFromRGB( red, green, blue );
  $( "#swatch" ).css( "background-color", "#" + hex );

  var red2 = $( "#red2" ).slider( "value" ),
    green2 = $( "#green2" ).slider( "value" ),
    blue2 = $( "#blue2" ).slider( "value" ),
    hex2 = hexFromRGB( red2, green2, blue2 );
  $( "#swatch-text" ).css( "color", "#" + hex2 );
}

$(function() {
  $('.button__color').bind('click', function() {
    hundleClickButtonColor();
  });
  $('.button__background-color').bind('click', function() {
    hundleClickButtonBackgroundColor();
  });
  $( "#red, #green, #blue, #red2, #green2, #blue2" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $( "#red" ).slider( "value", 255 );
  $( "#green" ).slider( "value", 140 );
  $( "#blue" ).slider( "value", 60 );

  $( "#red2" ).slider( "value", 60 );
  $( "#green2" ).slider( "value", 140 );
  $( "#blue2" ).slider( "value", 255 );
});

function hundleClickButtonBackgroundColor() {
  $('.button__background-color').addClass("active");
  $('.button__color').removeClass("active");

  $('.slider-container-color').addClass("disabled");
  $('.slider-container-background').removeClass("disabled");
};

function hundleClickButtonColor() {
  $('.button__color').addClass("active");
  $('.button__background-color').removeClass("active");

  $('.slider-container-background').addClass("disabled");
  $('.slider-container-color').removeClass("disabled");
};

