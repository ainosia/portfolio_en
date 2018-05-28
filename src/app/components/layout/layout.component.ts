import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let $:any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    $(window).on('scroll', scrollEffects);

    let levelIntro, isSticky = false, depth;

    $(document).ready(function() {
        // sistema de desplazamiento vertical
        $('.move').on('click', navigate);

        // Calculate target depth
    	  levelIntro = $('.stick').offset().top - $('.menu').innerHeight();
    });


    function scrollEffects() {
    	depth = $(window).scrollTop();
    	$('.reveal').each(function() {
    		if (depth >= $(this).offset().top - $(window).innerHeight() / 2) {
    			let objReveal = $(this);
    			setTimeout(function() {
    				objReveal.addClass('visible');
    		}, $(this).data('delay') );
    	}
    });


    // Sticky menu
    if (levelIntro <= depth) {
    	  if (!isSticky) {
          fixMenu(true);
    		}
      } else {
        if (isSticky) {
          fixMenu(false);
        }
      }
    }


    function fixMenu(fix) {
    	if (fix) {
        $('.menu').css({ position: 'fixed', top: 0, left: 0 });
        $('#projects').css({ marginTop: $('.menu').innerHeight() });
    	  isSticky = true;
    	} else {
          $('.menu').css('position', 'static');
          $('#projects').css({ marginTop: 0 });
          isSticky = false;
    	}
    }


    function navigate(e) {
      e.preventDefault();
    	let depth = $( $(this).data('nivel') ).offset().top;
    	let distanciaAbs = Math.abs( $(window).scrollTop() - depth );
    	$('body, html').animate({
    		scrollTop: depth
    	}, distanciaAbs * .4);
    }


    // Responsive Menu
    $(document).ready(function() {
      $('.menu-trigger').click(function() {
        $('nav ul').slideToggle(768);
        $('nav ul').css({ position: 'fixed' });
      });

      $('nav ul li').click(function() {
        if ($(window).width() < 768) {
          $('nav ul').css('display', 'none');
        }
      });

      $(window).resize(function() {
    		if ( $(window).width() >= 768 ) {
    			$('nav ul').css('display', 'none');
    		}
    	});
    });

  }
}
