var colorvals = [[[Math.random() * (300) + 10,Math.random() * (60) + 20,Math.random() * (60) + 20], [Math.random() * (300) + 10,Math.random() * (60) + 20,Math.random() * (60) + 20], [Math.random() * (300) + 10,Math.random() * (60) + 20,Math.random() * (60) + 20], [Math.random() * (300) + 10,Math.random() * (60) + 20,Math.random() * (60) + 20]]];

var colorActivated = 1;

var rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
var hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

var rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
var hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

var rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][0][1], colorvals[0][2][2]);
var hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

var rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
var hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

//Function to maanage all actions on the page
$(document).ready(function() {

  addItem();

  toggleColor1();
  toggleColor2();
  toggleColor3();
  toggleColor4();

  $("#reveal").click(function(){
    $("#addTaskForm").slideToggle();
  });

  $('#lightness').rangeslider({
      polyfill: false,

      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},
      

  })
  .on('input', function() {
    adjustLightness(this.value);

  });

  $('#hue').rangeslider({
      polyfill: false,

      // Default CSS classes
      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},

  })
  .on('input', function() {
    adjustHue(this.value);

  });

  $('#saturation').rangeslider({
      polyfill: false,

      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},
      
  })
  .on('input', function() {
    adjustSaturation(this.value);

  });

  $('#lightness2').rangeslider({
      polyfill: false,

      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},
      

  })
  .on('input', function() {
    adjustLightness2(this.value);

  });

  $('#hue2').rangeslider({
      polyfill: false,

      // Default CSS classes
      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},

  })
  .on('input', function() {
    adjustHue2(this.value);

  });

  $('#saturation2').rangeslider({
      polyfill: false,

      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},
      
  })
  .on('input', function() {
    adjustSaturation2(this.value);

  });

  $('#lightness3').rangeslider({
      polyfill: false,

      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},
      

  })
  .on('input', function() {
    adjustLightness3(this.value);

  });

  $('#hue3').rangeslider({
      polyfill: false,

      // Default CSS classes
      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},

  })
  .on('input', function() {
    adjustHue3(this.value);

  });

  $('#saturation3').rangeslider({
      polyfill: false,

      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},
      
  })
  .on('input', function() {
    adjustSaturation3(this.value);

  });

  $('#lightness4').rangeslider({
      polyfill: false,

      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},
      

  })
  .on('input', function() {
    adjustLightness4(this.value);

  });

  $('#hue4').rangeslider({
      polyfill: false,

      // Default CSS classes
      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},

  })
  .on('input', function() {
    adjustHue4(this.value);

  });

  $('#saturation4').rangeslider({
      polyfill: false,

      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      onInit: function() {},

      onSlide: function(position, value) {

      },

      onSlideEnd: function(position, value) {},
      
  })
  .on('input', function() {
    adjustSaturation4(this.value);

  });
});

//Function to change a color's hue/lightness/stauration values by adding a new row of colors

function addItem() {
  var color = $('#color').val();
  $("#listClasses").empty(); 

  for (i = 0; i < colorvals.length; i++) { 

    var firstVal = colorvals[i][0][0].toString();
    var secondVal = colorvals[i][0][1].toString();
    var thirdVal = colorvals[i][0][2].toString();

    var firstVal2 = colorvals[i][1][0].toString();
    var secondVal2 = colorvals[i][1][1].toString();
    var thirdVal2 = colorvals[i][1][2].toString();

    var firstVal3 = colorvals[i][2][0].toString();
    var secondVal3 = colorvals[i][2][1].toString();
    var thirdVal3 = colorvals[i][2][2].toString();

    var firstVal4 = colorvals[i][3][0].toString();
    var secondVal4 = colorvals[i][3][1].toString();
    var thirdVal4 = colorvals[i][3][2].toString();

    $("#listClasses").append('<tr class="colorfill">'+'<td style="background-color: hsl('+firstVal+', '+secondVal+'%,'+thirdVal+'%);">'+hexCode+'</td>'+'<td style="background-color: hsl('+firstVal2+', '+secondVal2+'%,'+thirdVal2+'%);">'+hexCode2+'</td>'+'<td style="background-color: hsl('+firstVal3+', '+secondVal3+'%,'+thirdVal3+'%);">'+hexCode3+'</td>'+'<td style="background-color: hsl('+firstVal4+', '+secondVal4+'%,'+thirdVal4+'%);">'+hexCode4+'</td>'+'</tr>');
  }
}

function adjustLightness(change) {
 
  for (i = 0; i < colorvals.length; i++) { 
    colorvals[i][0][2] = parseInt(change);
  }

  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][0][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

function adjustLightness2(change) {
 
  for (i = 0; i < colorvals.length; i++) { 
      colorvals[i][1][2] = parseInt(change);
  }
  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][0][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

function adjustLightness3(change) {
 
  for (i = 0; i < colorvals.length; i++) { 
    
      colorvals[i][2][2] = parseInt(change);    
  }

  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][0][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

//change lightness of color
function adjustLightness4(change) {
 
  for (i = 0; i < colorvals.length; i++) { 
      colorvals[i][3][2] = parseInt(change);
  }

  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][0][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

//change hue of color
function adjustHue(change) {
  var color = $('#color').val();

 
  for (i = 0; i < colorvals.length; i++) { 
      colorvals[i][0][0] = parseInt(change);
  }

  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][0][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

//change hue of color 2
function adjustHue2(change) {
  var color = $('#color').val();

 
  for (i = 0; i < colorvals.length; i++) { 
    colorvals[i][1][0] = parseInt(change);
  }

  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][0][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

//change hue of color 3
function adjustHue3(change) {
  var color = $('#color').val();

 
  for (i = 0; i < colorvals.length; i++) { 

    colorvals[i][2][0] = parseInt(change);

  }
  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][0][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

//change hue of color 4
function adjustHue4(change) {
  var color = $('#color').val();

 
  for (i = 0; i < colorvals.length; i++) { 

      colorvals[i][3][0] = parseInt(change);

  }
  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][0][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

//change saturation of color 1
function adjustSaturation(change) {
  var color = $('#color').val();

 
  for (i = 0; i < colorvals.length; i++) { 
    colorvals[i][0][1] = parseInt(change);
  }

  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][2][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

//change saturation of color 2
function adjustSaturation2(change) {
  var color = $('#color').val();

 
  for (i = 0; i < colorvals.length; i++) { 
   
      colorvals[i][1][1] = parseInt(change);
   
  }
  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][2][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

//change saturation of color 3
function adjustSaturation3(change) {
  var color = $('#color').val();

 
  for (i = 0; i < colorvals.length; i++) { 

    colorvals[i][2][1] = parseInt(change);
    
  }
  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][2][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

//change saturation of color 4
function adjustSaturation4(change) {
  var color = $('#color').val();

 
  for (i = 0; i < colorvals.length; i++) { 

    colorvals[i][3][1] = parseInt(change);
  
  }
  rgbCode = hsl2rgb(colorvals[0][0][0], colorvals[0][0][1], colorvals[0][0][2]);
  hexCode = rgbToHex(rgbCode[0],rgbCode[1],rgbCode[2]).substr(0, 7);

  rgbCode2 = hsl2rgb(colorvals[0][1][0], colorvals[0][1][1], colorvals[0][1][2]);
  hexCode2 = rgbToHex(rgbCode2[0],rgbCode2[1],rgbCode2[2]).substr(0, 7);

  rgbCode3 = hsl2rgb(colorvals[0][2][0], colorvals[0][2][1], colorvals[0][2][2]);
  hexCode3 = rgbToHex(rgbCode3[0],rgbCode3[1],rgbCode3[2]).substr(0, 7);

  rgbCode4 = hsl2rgb(colorvals[0][3][0], colorvals[0][3][1], colorvals[0][3][2]);
  hexCode4 = rgbToHex(rgbCode4[0],rgbCode4[1],rgbCode4[2]).substr(0, 7);

  addItem();

}

//sync up value between colors and sliders
function toggleColor1() {

  $('#hue').val(colorvals[0][0][0]).change();
  $('#saturation').val(colorvals[0][0][1]).change();
  $('#lightness').val(colorvals[0][0][2]).change();

}

function toggleColor2() {

  $('#hue2').val(colorvals[0][1][0]).change();
  $('#saturation2').val(colorvals[0][1][1]).change();
  $('#lightness2').val(colorvals[0][1][2]).change();

}

function toggleColor3() {

  $('#hue3').val(colorvals[0][2][0]).change();
  $('#saturation3').val(colorvals[0][2][1]).change();
  $('#lightness3').val(colorvals[0][2][2]).change();

}

function toggleColor4() {

  $('#hue4').val(colorvals[0][3][0]).change();
  $('#saturation4').val(colorvals[0][3][1]).change();
  $('#lightness4').val(colorvals[0][3][2]).change();
}

// Handle hex/rgb/hsl color converting with functions below

// taken from http://stackoverflow.com/questions/11804027/farbtastic-convert-hsl-back-to-rgb-or-hex
function hsl2rgb(h, s, l) {
  var m1, m2, hue;
  var r, g, b
  s /=100;
  l /= 100;
  if (s == 0)
    r = g = b = (l * 255);
  else {
    if (l <= 0.5)
      m2 = l * (s + 1);
    else
      m2 = l + s - l * s;
    m1 = l * 2 - m2;
    hue = h / 360;
    r = HueToRgb(m1, m2, hue + 1/3);
    g = HueToRgb(m1, m2, hue);
    b = HueToRgb(m1, m2, hue - 1/3);
  }
  return [Math.round(r), Math.round(g), Math.round(b)];
}

// credit: http://stackoverflow.com/questions/11804027/farbtastic-convert-hsl-back-to-rgb-or-hex
function HueToRgb(m1, m2, hue) {
  var v;
  if (hue < 0)
    hue += 1;
  else if (hue > 1)
    hue -= 1;

  if (6 * hue < 1)
    v = m1 + (m2 - m1) * hue * 6;
  else if (2 * hue < 1)
    v = m2;
  else if (3 * hue < 2)
    v = m1 + (m2 - m1) * (2/3 - hue) * 6;
  else
    v = m1;

  return 255 * v;
}

// credit: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// credit: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

