;(function($) {
	'use strict';

	//sounds
	var $sounds = $('.sound');

	//shapes
	var $shapes = $('#shapes');
	var $container = $('body');
	var $hint = $('.hint');

	
//initialize keydown
	window.onkeydown = keydown;	


//check for mobile
	if (has.mobile === true){
		$hint.children('p').html('Touch anywhere, everywhere!' + '<br><br>' + 'Turn up your speakers for the audio features!');
	}else {
		$hint.children('p').html('Press any key A to Z!' + '<br><br>' + 'Turn up your speakers for the audio features!');
	}

	window.addEventListener('load', function(){ // on page load
	 
	document.body.addEventListener('touchstart', function(e){
	  $hint.fadeOut();
	 }, false)
	 
	}, false)


//audio sprite
	var sound = new Howl({  
		urls: ['sounds/fool_sprite.mp3', 'sounds/fool_sprite.ogg'],  
		sprite: {    
			fool1: [0, 1000],   
			fool2: [1500, 500],
			fool3: [2500, 3500],
			fool4: [6500, 300], 
			fool5: [7000, 300], 
			fool6: [7500, 700], 
			fool7: [8500, 500], 
			fool8: [9500, 2500], 
			fool9: [12500, 2500], 
			fool10: [15500, 1200], 
			fool11: [16500, 500], 
			fool12: [17500, 500], 
			fool13: [18500, 300], 
			fool14: [19000, 1500], 
			fool15: [21000, 1500], 
			fool16: [23000, 700],
			fool17: [24000, 300], 
			fool18: [24500, 3200],  
			fool19: [28000, 1500], 
			fool20: [30000, 500], 
			fool21: [31000, 700], 
			fool22: [32000, 500], 
			fool23: [33000, 500], 
			fool24: [34000, 300], 
			fool25: [34500, 300], 
			fool26: [35000, 300], 
			fool27: [35500, 500], 
		},
		autoplay: false,
        loop: false,
	});



//animations--------------------->

	var qZoom = function(){	
		sound.play('fool1');
		$('#qZoom').attr('class', 'down_swoosh');		

		var el = $('#qZoom'); 
		el.before( el.clone(true) ).remove();
	} 

	var wJiggleZoom = function(){	
		sound.play('fool2');
		$('#two').attr('class', 'scale');		

		var el = $('#two'); 
		el.before( el.clone(true) ).remove();					
	}

	var eJiggle = function(){
		sound.play('fool3');
		$('#eJiggle').attr('class', 'hideshow');		

		var el = $('#eJiggle'); 
		el.before( el.clone(true) ).remove();
	}

	var rFadeIn = function(){
		sound.play('fool4');
		$('#four').attr('class', 'hideshow');		

		var el = $('#four'); 
		el.before( el.clone(true) ).remove();
	}

	var tSkyAqua = function(){
		sound.play('fool5');
		$('#skyaqua').attr('class', 'hideshow');		

		var el = $('#skyaqua'); 
		el.before( el.clone(true) ).remove();
	}

	var ySquiggle = function(){
		sound.play('fool6');
		$('#ySguiggle').attr('class', 'hideshow');		

		var el = $('#ySguiggle'); 
		el.before( el.clone(true) ).remove();
	}

	var uZoomOut = function(){
		sound.play('fool7');
		$('#seven').attr('class', 'min_scale');		

		var el = $('#seven'); 
		el.before( el.clone(true) ).remove();
	}

	var iPink = function(){
		sound.play('fool8');
		$('#eight').attr('class', 'left');	
		$('#six').attr('class', 'right');		

		var el = $('#iPink'); 
		el.before( el.clone(true) ).remove();
	}

	var oSplit = function(){
		sound.play('fool9');
		$('#nine').attr('class', 'splitup');	
		$('#thirtyseven').attr('class', 'splitdown');	

		var el = $('#oSplit'); 
		el.before( el.clone(true) ).remove();
		
	}

	var pFadeIn = function(){
		sound.play('fool10');
		$('#ten').attr('class', 'down_swoosh');		

		var el = $('#ten'); 
		el.before( el.clone(true) ).remove();
	}

	var aTanGold = function(){
		sound.play('fool11');
	    $('.tan, .gold').stop(true, true).fadeIn().delay(100).fadeOut();
	}

	var sFadeIn = function(){
		sound.play('fool12');
	   	$('#sFadeIn').attr('class', 'hideshow');		

		var el = $('#sFadeIn'); 
		el.before( el.clone(true) ).remove();
	}

	var dTanDots = function(){
		sound.play('fool13');
		$container.css({
			"background-color": "#6bd4f9"
		});
	}

	var fZoomOut = function(){
		sound.play('fool14');
		$('#fZoomOut').attr('class', 'min_scale');	

		var el = $('#fZoomOut'); 
		el.before( el.clone(true) ).remove();
	}

	var gBack = function(){
		sound.play('fool15');
		$container.css({
	    	"background-color": "#efafa5"
	    });
	}

	var hSmile = function(){
		sound.play('fool16');
		$('#hSmile').attr('class', 'hideshow');		

		var el = $('#hSmile'); 
		el.before( el.clone(true) ).remove();
	}

	var jFadeIn = function(){
		sound.play('fool17');
		$('#jFadeIn').attr('class', 'hideshow');		

		var el = $('#jFadeIn'); 
		el.before( el.clone(true) ).remove();
	}

	var kJiggle = function(){
		sound.play('fool18');
		$('#kJiggle').attr('class', 'hideshow');		

		var el = $('#kJiggle'); 
		el.before( el.clone(true) ).remove();
	}

	var lSplit = function(){
		sound.play('fool19');
		$('#seventeen').attr('class', 'splitup');	
		$('#sixteen').attr('class', 'splitdown');	
		$('#fortynine').attr('class', 'splitdown');	

		var el = $('#lSplit'); 
		el.before( el.clone(true) ).remove();
	}

	var zZoom = function(){
		sound.play('fool20');
	    $('#zZoom').attr('class', 'down_swoosh');		

		var el = $('#zZoom'); 
		el.before( el.clone(true) ).remove();
	}

	var xSguiggle = function(){
		sound.play('fool21');
	    $('#xSguiggle').attr('class', 'hideshow');		

		var el = $('#xSguiggle'); 
		el.before( el.clone(true) ).remove();
	}

	var cSplit = function(){
		sound.play('fool22');
		$('#eighteen').attr('class', 'right');	
		$('#twenty').attr('class', 'left');	

		var el = $('#cSplit'); 
		el.before( el.clone(true) ).remove();
	}

	var vBack = function(){
		sound.play('fool23');
		$container.css({
			"background-color": "#fff100"
		});
	}

	var bBlack = function() {
		sound.play('fool24');
	    $('.black').stop(true, true).fadeIn().delay(100).fadeOut();
	}

	var nZoomOut = function(){
		sound.play('fool25');
		$('#nZoomOut').attr('class', 'splitup');		

		var el = $('#nZoomOut'); 
		el.before( el.clone(true) ).remove();
	}

	var backDefault =  function(){
		sound.play('fool27');
		$container.css({
			"background-color": "#eee"
		});
	}

	//keyboard----------------------->
	function keydown(e) {

		if (e.which >= 65 && e.which <= 90 || e.which === 32) {
			$hint.fadeOut();
		}else {
			//hint doesn't come back!
		}
	  switch(e.which)
		{
	          case 81: //q
	            qZoom();	
	            break;
	          case 87: //w
	            wJiggleZoom();
	            break;
	          case 69: //e
	            eJiggle();
	            break;
	          case 82: //r
	            rFadeIn();
	            break;
	          case 84: //t
	            tSkyAqua();
	            break;
	          case 89: //y
	            ySquiggle();
	            break;
	          case 85: //u
	            uZoomOut();
	            break;
	          case 73: //i
	            iPink();
	            break;
	          case 79: //o
	            oSplit();
	            break;
	          case 80: //p
	            pFadeIn();
	            break;
	          case 65: //a
	          	aTanGold();
	            break;
	          case 83: //s
	          	sFadeIn();
	            break;
	          case 68: //d
	          	dTanDots();
	            break;
	          case 70://f
	            fZoomOut();
	            break;
	          case 71: //g
	            gBack();
	            break;
	          case 72: //h
	          	hSmile();
	            break;
	          case 74: //j
	            jFadeIn();
	            break;
	          case 75: //k
	            kJiggle();
	            break;
	          case 76: //l
	           	lSplit();
	            break;
	          case 90: //z
	          	zZoom();
	            break;
	          case 88: //x
	          	xSguiggle();
	            break;
	          case 67: //c
	          	cSplit();
	            break;
	          case 86: //v
	            vBack();
	            break;
	          case 66: //b
	            bBlack();
	            break;
	          case 78: //n
	            nZoomOut();
	            break;
	          case 77: //m
	          	qZoom();           
	            break;

		case 13: //enter
			backDefault();
			return false;
		  break;

		case 32: //space
			e.preventDefault();
	        backDefault();
	        break;

		default:
			backDefault();
		break;
		}
	}



//
//touch screen------------------------------->
//


  //
  //  START - Touch "enter" interaction
  //

  var $squares = $('.square'),
      note;

  $squares.bind("touchstart", function(e){
    e.preventDefault();

    showIndication(this);
  });

  document.body.addEventListener("touchmove", function(e){
    var touch = e.changedTouches[0],
        x = touch.clientX,
        y = touch.clientY,
        touched = document.elementFromPoint(x, y);

    if (touched.id != note) {
      note = touched.id;

      if (touched.className == "square") {
        showIndication(touched);
      }
    }
    
  }, false);

  document.body.addEventListener("touchend", function(e){
    $squares.removeClass('active');  
  }, false);

  function showIndication(target){
    var self = this,
      el = $(target),
        attribute = el.data('touch-response'),
        warning = 'Add a data-touch-response attribute',
        data = el.data('touch-response');

    if (data) {
      // play an audio file or call your animation functions from this data. It comes from data attributes on your grid of buttons.
      //console.log(data);

      //console.log(data); // This matches the name of your animation functions
      eval(data + '()'); // This calls the animation function - I hear eval is evil

    } else {
      console.warn(warning);
    }

    $squares.removeClass('active');

    el.addClass('active');
  }

  function clearIndication(){
    $(note).removeClass('active');
    note = "";
  }

  //
  //  END - Touch "enter" interaction
  //



})(window.jQuery);