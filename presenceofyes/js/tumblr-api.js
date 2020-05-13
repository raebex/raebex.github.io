

//how outside world is going to know where our sandbox is, must be unique to the page, semi-public!
var POY = (function($){
	'use strict';
	

	var _tumblr_blog_url = 'http://presenceofyes.tumblr.com';


	//reference
	var $menu_icon = $('#menu-icon');
	var $small_nav = $('.small-nav');

	var $ccc = $('#ccc');
	var $ccc_sub = $('#ccc-sub');

	var $ccc_s = $('#ccc-s');
	var $ccc_sub_s = $('#ccc-sub-s');

	var $post_list = $('#post-list');

	//add clicked track to playlist
	var _setup_event_listener = function(){
		//bring out menu on narrow screen widths
		$menu_icon.on('click', function(e){
			$small_nav.addClass('active');
			if(!$(this).next().hasClass('active')){
				$(this).next().addClass('active');
			}else {
				$(this).next().removeClass('active');
			}
			e.preventDefault();
			e.stopPropagation();
			return false;
		});

		$ccc.on('click', function(e){
			e.preventDefault();
			$ccc_sub.slideToggle();
		});

		$ccc_s.on('click', function(e){
			e.preventDefault();
			$ccc_sub_s.slideToggle();
		});

		//click anywhere to remove menu
		$(document).on('click', function(e){
			if(e.target !== $('#ccc-s')[0]) {
		        $small_nav.removeClass('active');
		    }else{
		    	$small_nav.addClass('active');
		    }
			
		});
	};

	//sandbox will return something; door into sandbox;
	return {
		//objects
		initialize: function(){
			//populate with posts
    		POY.populate_posts();

    		//call private functions
    		_setup_event_listener();

		},

		populate_posts: function(response){
			$.get("php/api.php", // This is the path to your api.php file
			    {}, // PARAMS
			    function(response) {
			        response = JSON.parse(response);

			        for (var i = 0; i < response.response.posts.length; i++){

			        	var post_template = _.template($('#post-template').html());
						var post_values;
						var post_markup;
						var back_image;

						switch(i){
							//stuebenville
							case 0:
							back_image = 'http://www.merakoh.com/wp-content/uploads/2013/03/ISP0667044-1.jpg';
							break;

							//obama launches initiative on college campuses
							case 1:
							back_image = 'http://www.csmonitor.com/var/ezflow_site/storage/images/media/content/2013/0315/0316-steubenville-protest-rape.jpg/15289845-1-eng-US/0316-Steubenville-protest-rape.jpg_full_600.jpg';
							break;

							//girls rights in kenya
							case 2:
							back_image = 'http://goodmenproject.com/wp-content/uploads/2014/01/Obama-Launches-Initiative-To-Combat-Rape-photo-by-Austen-Hufford.jpg';
							break;

							//lindsey vonn
							case 3:
							back_image = 'http://www.childfund.ie/wp-content/uploads/2011/05/Kenya-Beatrice-Nailantei-6-in-class-1-at-Naningoi-Girls-Primary-and-Boarding-School.jpg';
							break;

							//gloria steinem
							case 4:
							back_image = 'images/vonn.jpg';
							break;

							//nuts
							case 5:
							back_image = 'http://i.huffpost.com/gen/1696985/thumbs/o-GLORIA-STEINEM-AND-DOROTHY-PITMAN-HUGHES-570.jpg';
							break;

							//aspire
							case 6:
							back_image = 'images/nut.jpg';
							break;

							//underwear
							case 7:
							back_image = 'images/aspire.jpg';
							break;

							//legal gay marriage in illinois
							case 8:
							back_image = 'images/underwear.png';
							break;

							//north dakota
							case 9:
							back_image = 'http://america.aljazeera.com/content/ajam/articles/2013/11/20/illinois-legalizesgaymarriage/_jcr_content/mainpar/adaptiveimage/src.adapt.480.low.jpg';
							break;

							//kermit gosnell
							case 10:
							back_image = 'http://graphics8.nytimes.com/images/2013/03/27/opinion/3272013abortion/3272013abortion-blog480.jpg';
							break;

							//more obama
							case 11:
							back_image = 'http://murderpedia.org/male.G/images/gosnell-kermit/kermit-gosnell-5.jpg';
							break;

							//one billion rising
							case 12:
							back_image = 'http://goodmenproject.com/wp-content/uploads/2014/01/Obama-Launches-Initiative-To-Combat-Rape-photo-by-Austen-Hufford.jpg';
							break;

							//prison for rapists
							case 13:
							back_image = 'http://www.onebillionrising.org/wp-content/uploads/2013/10/1BRFJ-VerticalLogo-Blob.jpg';					
							break;

							//13 signs
							case 14:
							back_image = 'http://www.globalresearch.ca/wp-content/uploads/2013/01/prison2.jpg';
							break;

							default:
							back_image = 'images/paper-xs.jpg';
							break;
						}
							
						post_values = {
							url: response.response.posts[i].url,
							title: response.response.posts[i].title,
							id: response.response.posts[i].id,
							photo: back_image
						}
						

						post_markup = post_template(post_values);
						$post_list.append(post_markup);
			        }

			    }
			);		
		}
		
	};
})(window.jQuery); 


//kickstart our sandbox
POY.initialize();