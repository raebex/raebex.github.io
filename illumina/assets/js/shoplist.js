$(function() {
	var shopArray = [];
	$.get('/shoplist/shoplist.csv',function(data){

		var csv = $.csv.toArrays(data)
		$(csv).each(function(i){
			if(i == 0) return true;
			if(!this[0]) return;
			shopArray[i] = new Array();
			shopArray[i][0] =  this[0];
			shopArray[i][1] =  this[1].replace( /-/g , "" );
			shopArray[i][2] =  this[2];
			shopArray[i][3] =  this[3] + this[4];
			shopArray[i][4] =  this[5];
			if(this[6] == 'undefined') this[6] == '';
			shopArray[i][5] =  this[6];
			shopArray[i][6] =  this[7];
			shopArray[i][7] =  this[0] + this[1] + this[2] + this[3] + this[4] + this[5] + this[6];
		});
		shopArray.sort(function(a,b) {
			return a[1]-b[1]
		});
	});

	function katakanaToHiragana(src) {
		return src.replace(/[\u30a1-\u30f6]/g, function(match) {
			var chr = match.charCodeAt(0) - 0x60;
			return String.fromCharCode(chr);
		});
	}

	function searchShop() {
		var pref = $('.shoplist__search section select option:selected').val();
		var check = $('.shoplist ul li.check input:checked').val();
		var word = $('.shoplist ul li.text input').val();
		shopSet(pref,check,word);
	}

	$('.form__btn .form__btn--input').on('click', function() {
		searchShop();
		return false;
	});

	$(".shoplist__search select, .shoplist__search input").on('change, input',function () {
		var str = $(this).val();
		if(str) {
			$('.form__btn').removeClass('disable');
		}
	});
	$(".shoplist__search input").on('keyup',function (e) {
		if(e.keyCode == 13) {
			searchShop();
		}
	});

	var initStr = $(".shoplist__search section select").val();
	if(initStr) {
		$('.form__btn').removeClass('disable');
	} else {
		$('.form__btn').addClass('disable');
	}
	function shopSet(pref,check,word) {
		$('.shoplist .inner article.shoplist__detail section ul li').remove();
		var count = 0;
		for (var i = 0; i < shopArray.length; i++) {
			if(shopArray[i]) {
				var web = shopArray[i][5];
				if(web == 'undefined') web = "";
				if (web.indexOf('http://') === -1 && web.indexOf('http')  ) {
					if(web != "") web = 'http://' + web;
				}

				var webD = '<a href="'+ web +'" target="_blank">WEB SITE</a>';
				if(web === "") webD = "";
				var cc = shopArray[i][6];
				if ( check === 'ON' && !(cc === '有' || cc === '可') ) {
					continue;
				}
				if(pref && pref !== shopArray[i][2]) {
					continue;
				}
 				if ( word != '') {
					if (
						katakanaToHiragana((shopArray[i][7]).toLowerCase()).indexOf(
							katakanaToHiragana(word.toLowerCase())
						) === -1
					) {
						continue;
					}
				}
				if(cc === '有' | cc === '可') {
					cc = '<dd class="shoplist__detail--cc">CC VEIL</dd>';
				} else {
					cc = '';
				}
				var tel = shopArray[i][4];
				if(tel === undefined) tel = '';
				$('.shoplist .inner article.shoplist__detail section ul').append('<li><dl class="clearfix"><dt>'+ shopArray[i][0] +'</dt><dd class="shoplist__detail--area">'+ shopArray[i][2] +'</dd><dd class="shoplist__detail--address">'+ shopArray[i][3] +'</dd><dd class="shoplist__detail--tel">'+ tel +'</dd><dd class="shoplist__detail--web">'+ webD +'</dd>'+ cc +'</dl></li>');
				count++;
			}
		}
		if(count === 0) {
			$('.shoplist .inner article.shoplist__detail section ul').append('<li><dl class="clearfix"><dt>一致する情報は見つかりませんでした</dt></dl></li>');
		}
	}
	$('.shoplist .inner article.shoplist__detail section ul').append('<li class="shoplist--defult">都道府県を選択し検索してください</li>');
});
