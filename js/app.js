$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

$(document).ready(function() {

	$('.sequence .how-part').click(function() {
		$('.sequence .how-part-info.active').fadeOut(500);
		$('.sequence .how-part-info.active').removeClass('active');
		var str = $(this).attr('class');
		var id = str.split(' ')[1]
		$('.sequence .how-part-info.' + id + '-more').fadeIn(700);
		$('.sequence .how-part-info.' + id + '-more').addClass('active');
	});


	$('nav i').click(function() {
		$('nav').animate({
				marginLeft: '-250'
		}, 500, function () {
			$('.open-nav').fadeIn("slow");
		});
		
		$('section #content').animate({
				width: '80%'
		}, 500);
	});
	
	$('.open-nav').click(function() {
	
		$('nav').animate({
				marginLeft: '0'
		});
		
		$('section #content').animate({
				width: '85%'
		}, 500);
		
		$(this).fadeOut("slow");
	});
});

var title_divider = "-";

function setCookie(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) {
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1) {
		c_value = null;
	} else {
	c_start = c_value.indexOf("=", c_start) + 1;
	var c_end = c_value.indexOf(";", c_start);
	if (c_end == -1) {
		c_end = c_value.length;
	}
		c_value = unescape(c_value.substring(c_start,c_end));
	}
	
	return c_value;
}

$(function() {
    setTimeout(function() {
		$( "#loading" ).fadeOut( "slow" );
    }, 5000);
});

$(function() {
	$( ".indicator" ).animate({
		width: "100%"
	}, 5000 );
});

default_page_title = "Lamprecht GmbH";
curr_page_title = document.title;

$(document).ready(function() {

	$('section.products i.back').click(function() {
		var whereto = $(this).attr("data-to");
		
		$("section.products .offers.active").fadeOut(120);
		$("section.products .offers.active").removeClass("active");
		
		if (whereto == "all") {
			$(this).fadeOut(230);
			window.history.pushState("angefeuert", "Angebot", "/produkte/");
			document.title = default_page_title + " - Angebot";
		}
		
		if (whereto == "oefen") {
			window.history.pushState("angefeuert", "Öfen", "/produkte/oefen/");
			document.title = default_page_title + " - Öfen";
			$(this).attr("data-to", "all");
			$("section.products .offers.oefen").addClass("active");
		}
		
		if (whereto == "zubehoer") {
			window.history.pushState("angefeuert", "Zubehör", "/produkte/zubehoer/");
			document.title = default_page_title + " - Zubehör";
			$(this).attr("data-to", "all");
			$("section.products .offers.zubehoer").addClass("active");
		}
		
		if (whereto == "brennstoffe") {
			window.history.pushState("angefeuert", "Brennstoffe", "/produkte/brennstoffe/");
			document.title = default_page_title + " - Brennstoffe";
			$(this).attr("data-to", "all");
			$("section.products .offers.brennstoffe").addClass("active");
		}
		
		if (whereto == "weiteres") {
			window.history.pushState("angefeuert", "Weitere Angebote", "/produkte/weiteres/");
			document.title = default_page_title + " - Weitere Angebote";
			$(this).attr("data-to", "all");
			$("section.products .offers.weiteres").addClass("active");
		}
		
		setTimeout(function() {
			$("section.products .offers." + whereto).fadeIn(600);
		}, 200);
	});
	
	function open_prod(forurl, cat_title, back_to) {
	
		$("section.products .offers." + back_to).fadeOut(120);
		document.title = default_page_title + " " + title_divider + " " + cat_title;
		var newurled = window.location.pathname + forurl + "/";
		window.history.pushState("angefeuhhert", cat_title, newurled);
		$("section.products .offers." + forurl).addClass("active");
		
		setTimeout(function() {
			$("section.products .offers." + forurl).fadeIn(800);
			$("section.products h1 i.back").fadeIn(800);
		}, 150);
		
		$("section.products i.back").attr("data-to", back_to);
		
	}

	$('.offers.all .o-1 img, .offers.all .o-1 h3').click(function() {
		open_prod('oefen', 'Öfen', 'all');
	});
		
	$('.offers.all .o-2 img, .offers.all .o-2 h3').click(function() {
		open_prod('zubehoer', 'Zubehör', 'all');
	});
	
	$('.offers.all .o-3 img, .offers.all .o-3 h3').click(function() {
		open_prod('brennstoffe', 'Brennstoffe', 'all');
	});

	$('.offers.all .o-4 img, .offers.all .o-4 h3').click(function() {
		open_prod('weiteres', 'Weitere Angebote', 'all');
	});
	
	
	
	$('.offers.oefen .o-1 img, .offers.oefen .o-1 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('oefen_1', 'Kachelöfen', 'oefen');
	});
		
	$('.offers.oefen .o-2 img, .offers.oefen .o-2 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('oefen_2', 'Specksteinöfen', 'oefen');
	});
	
	$('.offers.oefen .o-3 img, .offers.oefen .o-3 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('oefen_3', 'Speicher&ouml;fen (Speckstein)', 'oefen');
	});

	$('.offers.oefen .o-4 img, .offers.oefen .o-4 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('oefen_4', 'Back-/Kochherde', 'oefen');
	});
	
	
	
	$('.offers.zubehoer .o-1 img, .offers.zubehoer .o-1 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('zubehoer_1', 'Kaminbesteck', 'zubehoer');
	});
		
	$('.offers.zubehoer .o-2 img, .offers.zubehoer .o-2 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('zubehoer_2', 'Holzwagen/Holzkorb', 'zubehoer');
	});
	
	$('.offers.zubehoer .o-3 img, .offers.zubehoer .o-3 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('zubehoer_3', 'Feuerschalen', 'zubehoer');
	});

	$('.offers.zubehoer .o-4 img, .offers.zubehoer .o-4 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('zubehoer_4', 'Reinigungsmittel', 'zubehoer');
	});
	
	
	
	$('.offers.brennstoffe .o-1 img, .offers.brennstoffe .o-1 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('brennstoffe_1', 'Kaminbesfsdfdsteck', 'brennstoffe');
	});
		
	$('.offers.brennstoffe .o-2 img, .offers.brennstoffe .o-2 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('brennstoffe_2', 'Holzwagensfsdf/Holzkorb', 'brennstoffe');
	});
	
	$('.offers.brennstoffe .o-3 img, .offers.brennstoffe .o-3 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('brennstoffe_3', 'Feuerscfsdfdhalen', 'brennstoffe');
	});

	$('.offers.brennstoffe .o-4 img, .offers.brennstoffe .o-4 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('brennstoffe_4', 'Reinigungfsdsmittel', 'brennstoffe');
	});
	
	
	
	$('.offers.weiteres .o-1 img, .offers.weiteres .o-1 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('weiteres_1', 'fsdfdfssfsfdsfds', 'weiteres');
	});
		
	$('.offers.weiteres .o-2 img, .offers.weiteres .o-2 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('weiteres_2', 'Holzwagen/Hfsdfolzkorb', 'weiteres');
	});
	
	$('.offers.weiteres .o-3 img, .offers.weiteres .o-3 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('weiteres_3', 'Feuerschafsdfsddlen', 'weiteres');
	});

	$('.offers.weiteres .o-4 img, .offers.weiteres .o-4 h3').click(function() {
		$(".products.active").removeClass("active");
		open_prod('weiteres_4', 'Reinigungsmfsdfdsittel', 'weiteres');
	});
});

$(document).ready(function() {
	
	var playing = getCookie("audio");
	var audiobtn = document.getElementById("audio");
	var sndinfo = document.getElementById('info');
	
	if (!playing) {
		document.getElementById('fire-crackle').play();
		setCookie("audio", true, 1);
		audio.className = "played";
	}
	
	$('#audio').click(function() {
	 	var playing = getCookie("audio");
		
		if (playing == "true") {
			document.getElementById('fire-crackle').pause();
			setCookie("audio", false, 1);
			audio.className = "paused";
		} else {
			document.getElementById('fire-crackle').play();
			setCookie("audio", true, 1);
			audio.className = "played";
		}
	});
	
});

$(document).ready(function() {
	
	function killsth() {
		window.history.pushState("object or string", "nix", "/");
		$(".logo-inner img").removeAttr("class");
		$(".logo-inner img").removeAttr("title");
		document.title = default_page_title;
	}
	
	function loman(term,ts) {
		$("section." + term + ", section.active").slideToggle(ts);
		$("section." + term + ", section.active").toggleClass("active");
		$(".navi li." + term + ", .navi li.active").toggleClass("active");
		$('nav .footer').fadeIn('slow');
	}
	
	function yobro(title, qsnew, path) {
		
		name = unescape(title);
		
		if (qsnew == true) {
			window.history.pushState("angefeuert", name, path);
		}
		
		$(".logo-inner img").addClass("clickable");
		$('.logo-inner img').attr('title', 'Zur Startseite');
		document.title = name + ' ' + title_divider + ' ' + curr_page_title;
	}
	
	var url = window.location.pathname;
	
	pages = new Array("/", "/produkte/", "/service/", "/ausstellung/", "/unternehmen/", "/kontakt/", "/produkte/öfen", "/produkte/zubehör", "/produkte/brennstoffe", "/produkte/weiteres");
	
	var have_page = $.inArray(url, pages);
	
	if (have_page > -1) {
		
		if (url == "/produkte/"){
			loman('products', 0);
			yobro('Produkte', false);
			$('nav').addClass('open');
		}
		
		if (url == "/produkte/öfen"){
			loman('products', 0);
			$("section .products.all").fadeOut(0);
			$("section .products.oefen").fadeIn(700);
			$("section .products.oefen").addClass("active");
			$("section.products h1 i.back").fadeIn(700);
			$("section.products h1 i.back").attr("data-to", "all");
			document.title = curr_page_title + " " + title_divider + " " + "Öfen";
			$('nav').addClass('open');
		}
		
		if (url == "/produkte/zubehör"){
			loman('products', 0);
			$("section .products.all").fadeOut(0);
			$("section .products.zubehoer").fadeIn(700);
			$("section .products.zubehoer").addClass("active");
			$("section.products h1 i.back").fadeIn(700);
			$("section.products h1 i.back").attr("data-to", "all");
			document.title = curr_page_title + " " + title_divider + " " + "Zubehör";
			$('nav').addClass('open');
		}
		
		if (url == "/produkte/brennstoffe"){
			loman('products', 0);
			$("section .products.all").fadeOut(0);
			$("section .products.brennstoffe").fadeIn(700);
			$("section .products.brennstoffe").addClass("active");
			$("section.products h1 i.back").fadeIn(700);
			$("section.products h1 i.back").attr("data-to", "all");
			document.title = curr_page_title + " " + title_divider + " " + "Brennstoffe";
			$('nav').addClass('open');
		}
		
		if (url == "/produkte/weiteres"){
			loman('products', 0);
			$("section .products.all").fadeOut(0);
			$("section .products.weiteres").fadeIn(700);
			$("section .products.weiteres").addClass("active");
			$("section.products h1 i.back").fadeIn(700);
			$("section.products h1 i.back").attr("data-to", "all");
			document.title = curr_page_title + " " + title_divider + " " + "Weitere Angebote";
			$('nav').addClass('open');
		}
		
		if (url == "/service/"){
			loman('service', 0);
			yobro('Service', false);
			$('nav').addClass('open');
		}
		
		if (url == "/ausstellung/"){
			loman('exhibition', 0);
			yobro('Ausstellung', false);
			$('nav').addClass('open');
		}
	
		if (url == "/unternehmen/"){
			loman('about', 0);
			yobro('%DCber uns', false);
			$('nav').addClass('open');
		}
	
		if (url == "/kontakt/"){
			loman('contact', 0);
			yobro('Kontakt', false);
			$('nav').addClass('open');
		}
		
	} else { 
		window.location.replace("/");
	}
	
	function sfuus() {
		
		$('section.products i.back').fadeOut(230);
		$("section .products.active").fadeOut(230);
		$("section .products.active").removeClass("active");
		
		setTimeout(function() {
			$("section.products .products.all").fadeIn(300);
		}, 250);
		
	}
	
	
	$(".logo-inner img").click(function() {
	
		if ( $( this ).hasClass( "clickable" ) ) {
			killsth();
			sfuus();
	
			$('nav').removeAttr('class');
			$('nav .footer').fadeOut('slow');
		}
		
		$("section.active").slideToggle(700);
		$("section.active").removeClass("active");
		$(".navi li.active").removeClass("active");
		
	});
	
	$('.navi li').click(function() {
	
		var id = $(this).attr('class');
		
		if (id.indexOf('products') != -1) {
			var name = 'Produkte';
			var url = 'produkte';
		}
		
		if (id.indexOf('service') != -1) {
			var name = 'Service';
			var url = 'service';
		}
		
		if (id.indexOf('exhibition') != -1) {
			var name = 'Ausstellungen';
			var url = 'ausstellung';
		}
		
		if (id.indexOf('about') != -1) {
			var name = 'Über uns';
			var url = 'unternehmen';
		}
		
		if (id.indexOf('contact') != -1) {
			var name = 'Kontakt';
			var url = 'kontakt';
		}
	
		if ($(this).hasClass('active') != true) {

			if ( $( this ).hasClass( "active" ) ) {
				killsth();
			} else {
				yobro(name, true, "/" + url + "/");
			}
		
			loman(id, 700);
			sfuus();
			
		}
		
		if ($('nav').hasClass('open') != true) {
			$('nav').addClass('open');
		}
		
	});
	
	
});