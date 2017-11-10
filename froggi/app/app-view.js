//namespace
var FroggiApp = window.FroggiApp || {};

//create a new application view
FroggiApp.AppView = Backbone.View.extend({
	//boundaries of our application; it will only
	//operate inside of the element specified below
	el: $('#froggi-app'),

	//set up event handlers
	events:{
		'click #save': 'get_values', //save button gets values and outputs a new fav
		'click #calculate': 'calculate', //calculate does the math and outputs stitch count
		'click #round': 'round_active', //selects in-the-round technique
		'click #straight': 'straight_active', //selects straight technique
		'click #heart': 'save_overlay', //brings in save form
		'click .settings': 'units_overlay', //brings in form to change default units
		'click #clear': 'clear_form', //clears form
		'click #menu-icon': 'menu_things', //brings in menu
		'click .close': 'hide_modal', //close modal
		'click .back-home': 'go_back_home', //back button to go back to form
		'click .favorites': 'open_favorites_preview', //goes to favorties page
		'click .about': 'open_about_page'
	},

	//called automatically when you call an instance of view
	initialize: function() {
		this.$favs_list = $('#favs-list');

		//get reference to form elements
		this.$form = $('#froggi-form');
		this.$banner = $('.banner');
		this.$logo_pic = $('#logo-pic');
		this.$logo = $('#logo');
		this.$save_form = $('#save-form');
		this.$title = $('#title');
		this.$measurement = $('#measurement');
		this.$needle_type = $('#needle-type');
		this.$needle_size = $('#needle-size');
		this.$yarn_weight = $('#yarn-weight');
		this.$stitch_type = $('#stitch-type');

		//technique buttons
		this.$round = $('#round');
		this.$straight = $('#straight');		

		//reference to stitch count
		this.$stitch_count = $('#stitch-count');

		//menu
		this.$menu = $('.menu');

		//modals and overlays
		this.$overlay = $('#overlay');
		this.$modal_save = $('.modal-save');
		this.$modal_units = $('.modal-units');

		//about information
		this.$about_click = $('.about');
		this.$about_things = $('#about-things');

		//make this application view listen for favs coming from collection
		//added to our collection
		this.listenTo(FroggiApp.Favs, 'add', this.add_fav);

		this.listenTo(FroggiApp.Favs, '.hide', this.show_fav);
		//get all existing todos saved in local storage
		//fetch() will work with local storage and urls for APIs
		FroggiApp.Favs.fetch();
	},

	//where all the math happens
	calculate: function(e){
		e.preventDefault();
		//make sure there is a value for measurement
		if (this.$measurement.val() === ''){
			alert('You must enter a value for measurement!');
		}else {
			//empty the stitch_count span first 
			this.$stitch_count.empty();

			//total_count is value to eventually append to stitch count
			//initialize it to the measurement value
			var total_count = this.$measurement.val();

			//needle size
			switch(this.$needle_size.val())  {
				case '0':
				    total_count = total_count * 2;
				    break;
				case '1':
				    total_count = total_count * 4;
				    break;
				case '2':
				    total_count = total_count * 4;
				    break;
				case '3':
				    total_count = total_count * 4;
				    break;
				case '4':
				    total_count = total_count * 4;
				    break;
				case '5':
				    total_count = total_count * 4;
				    break;
				case '6':
				    total_count = total_count * 4;
				    break;
				case '7':
				    total_count = total_count * 4;
				    break;
				case '8':
				    total_count = total_count * 4;
				    break;
				case '9':
				    total_count = total_count * 4;
				    break;
				case '10':
				    total_count = total_count * 4;
				    break;
				case '10.5':
				    total_count = total_count * 4;
				    break;
				case '11':
				    total_count = total_count * 4;
				    break;
				case '13':
				    total_count = total_count * 4;
				    break;
				case '15':
				    total_count = total_count * 4;
				    break;
				case '17':
				    total_count = total_count * 4;
				    break;
				case '19':
				    total_count = total_count * 4;
				    break;
				case '35':
				    total_count = total_count * 4;
				    break;
				case '50':
				    total_count = total_count * 4;
				    break;
				default:
				   	total_count = total_count;
				   	break;
			}

			//yarn weight
			switch(this.$yarn_weight.val())  {
				case '0: Fingering':
				    total_count = total_count - 10;
				    break;
				case '1: Sock/baby':
				    total_count = total_count - 11;
				    break;
				case '2: Sport':
				    total_count = total_count - 12;
				    break;
				case '3: DK':
				    total_count = total_count - 13;
				    break;
				case '4: Worsted':
				    total_count = total_count - 14;
				    break;
				case '5: Chunky':
				    total_count = total_count - 15;
				    break;
				case '6: Bulky':
				    total_count = total_count - 16;
				    break;
				default:
				   	total_count = total_count;
				   	break;
			}

			//stitch type
			switch(this.$stitch_type.val()){
				case 'Garter':
				    total_count = total_count + 5;
				    break;
				case 'Stockinette':
				    total_count = total_count - 2;
				    break;
				case 'Rib':
				    total_count = total_count + 10;
				    break;
				case 'Seed':
				    total_count = total_count + 10;
				    break;
				default:
				   	total_count = total_count;
				   	break;
			}

			//in the round
			if (this.$round.hasClass('active')){
				//needle type
				switch(this.$needle_type.val()){
					case 'DPN':
					    total_count = total_count - 20;
					    break;
					case 'Circle':
					    total_count = total_count + 5;
					    break;
					case 'Magic Loop':
					    total_count = total_count + 10;
					    break;
					default:
					   	total_count = total_count;
					   	break;
				}
			}else {
				//the count stays the same
				total_count = total_count;
			}

			//append the final stitch count to the stitch_count span
			this.$stitch_count.append(total_count);

			//set value of stitch count to the total_count
			this.$stitch_count.val(total_count);
		}
		
	},

	//get form values once 'save' is clicked
	get_values: function(e){
		e.preventDefault();

		//change technique value depending on which technique button is selected
		if (this.$round.hasClass('active')){
			this.$round.val('In the Round');
		}else {
			//else make it false
			this.$round.val('Straight');
		}

		//populate with user inputs
		var fav_values = {
			stitch_count: this.$stitch_count.val(),
	        title: this.$title.val(),
	        measurement: this.$measurement.val(),
	        technique: this.$round.val(),
	        needle_type: this.$needle_type.val(),
	        needle_size: this.$needle_size.val(),
	        yarn_weight: this.$yarn_weight.val(),
	        stitch_type: this.$stitch_type.val()
		};
		//add a new fav into collection
		FroggiApp.Favs.create(fav_values);

		//remove modals and overlays
		FroggiAppView.hide_modal();

		//reset the forms and stitch counts
		FroggiAppView.clear_form();

		//fade out form and show list of favs
		FroggiAppView.open_favorites_preview();

		//remove active class from technique buttons
		$('.technique-button').removeClass('active');
		$('#show-needle-type').slideUp();	    
	},

	//add favorite to the favs list
	add_fav: function(fav){
		//create an instance of the view
		var view = new FroggiApp.FroggiView({model: fav});

		//append to dom
		this.$favs_list.prepend(view.render().el);
	},

	//open the favorites "page"
	open_favorites_preview: function(){
		//make sure the menu is closed
		this.$menu.removeClass('active');
		$('.open').slideUp();

		//fade out form and show list of favs
	    this.$banner.slideUp();
	    this.$form.slideUp('normal', function(){
	    	FroggiAppView.$favs_list.slideDown();

	    	//add class 'open'
	    	FroggiAppView.$favs_list.addClass('open');

	    	//create "back button"
	    	FroggiAppView.$logo_pic.attr({
	    		'src': 'images/back.png',
	    		'class': 'back-home'
	    	});
	    	//change header text to favorites
	    	FroggiAppView.$logo.text('Favorites');

	    });
	},

	//open the about "page"
	open_about_page: function(){
		//make sure the menu is closed
		this.$menu.removeClass('active');
		$('.open').slideUp();

		//fade out form and show list of favs
	    this.$banner.slideUp();
	    this.$form.slideUp('normal', function(){
	    	FroggiAppView.$about_things.slideDown();

	    	//add class 'open'
	    	FroggiAppView.$about_things.addClass('open');

	    	//create "back button"
	    	FroggiAppView.$logo_pic.attr({
	    		'src': 'images/back.png',
	    		'class': 'back-home'
	    	});
	    	//change header text to favorites
	    	FroggiAppView.$logo.text('About');

	    });
	},

	//clears main form
	clear_form: function(){
		//reset the forms and stitch counts
		this.$form[0].reset();
		this.$save_form[0].reset();
		this.$stitch_count.text(0);	

		//remove active class from technique buttons
		$('.technique-button').removeClass('active');
		$('#show-needle-type').slideUp();
	},

	//brings in menu
	menu_things: function(e){
		e.preventDefault();

		//bring menu into viewport by adding active class
		if (this.$menu.hasClass('active')){
		 	this.$menu.removeClass('active');
		 }else {
		 	this.$menu.addClass('active');	
		 }	
	},

	//go back to the form
	go_back_home: function(e){
		e.preventDefault();

		//slide up the elements with 'open class'
		$('.open').slideUp('normal', function(){
			$(this).removeClass('open');
			//slide down banner and form
			FroggiAppView.$banner.slideDown();
			FroggiAppView.$form.fadeIn();

			//revert the "back button"
	    	FroggiAppView.$logo_pic.attr({
	    		'src': '',
	    		'class': ''
	    	});
	    	//change text back to Froggi
	    	FroggiAppView.$logo.text('Froggi');
		});
	},

	//slide down needle type section if knitting in the round
	round_active: function(e){
		e.preventDefault();
		$('.technique-button').removeClass('active');
		this.$round.addClass('active');

		if (this.$round.hasClass('active')){
			$('#show-needle-type').slideDown();
		}else {
			$('#show-needle-type').slideUp();
		}
	},

	//slide up needle type section
	straight_active: function(e){
		e.preventDefault();
		$('.technique-button').removeClass('active');
		$('#show-needle-type').slideUp();
		this.$straight.addClass('active');
	},

	//modals and overlays
	save_overlay: function(e){
		e.preventDefault();
		$('.modal-save').fadeIn();
		this.$modal_save.addClass('show');
	    this.$overlay.addClass('show');
	},
	units_overlay:function(e){
		e.preventDefault();
		this.$menu.removeClass('active');

		$('.modal-units').fadeIn();
		this.$modal_units.addClass('show');
	    this.$overlay.addClass('show');
	},
	//hide model when clicking close button on save modal
	hide_modal: function(){
		//e.preventDefault();
	    this.$modal_units.removeClass('show');
	    this.$modal_save.removeClass('show');
	    this.$overlay.removeClass('show');
	}
	
});

//create an instance of our application view
//this instance acts as the ingnition swith of our application
window.FroggiAppView = new FroggiApp.AppView();