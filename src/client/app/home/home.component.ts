import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
declare var $: any
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}
  
  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.setInitJs();
  }

  /**
   * Handle the header and ease scroll
   */
  setInitJs() {
	/*if( $('#nav-menu-container').length ) {
	      var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
	      $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
	      $('body').append( $mobile_nav );
	      $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
	      $('body').append( '<div id="mobile-body-overly"></div>' );
	      $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
	      
	      $(document).on('click', '.menu-has-children i', function(e: any){
	          $(this).next().toggleClass('menu-item-active');
	          $(this).nextAll('ul').eq(0).slideToggle();
	          $(this).toggleClass("fa-chevron-up fa-chevron-down");
	      });
	      
	      $(document).on('click', '#mobile-nav-toggle', function(e: any){
	          $('body').toggleClass('mobile-nav-active');
	          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
	          $('#mobile-body-overly').toggle();
	      });
	      
	      $(document).click(function (e: any) {
	          var container = $("#mobile-nav, #mobile-nav-toggle");
	          if (!container.is(e.target) && container.has(e.target).length === 0) {
	             if ( $('body').hasClass('mobile-nav-active') ) {
	                  $('body').removeClass('mobile-nav-active');
	                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
	                  $('#mobile-body-overly').fadeOut();
	              }
	          }
	      });
	  } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
	      $("#mobile-nav, #mobile-nav-toggle").hide();
	  }*/
	  
	  // Stick the header at top on scroll
	  $("#header").sticky({topSpacing:0, zIndex: '50'});

	  // Smoth scroll on page hash links
	  $('a[href*="#"]:not([href="#"])').on('click', function() {
	      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	          var target = $(this.hash);
	          if (target.length) {
	              
	              var top_space = 0;
	              
	              if( $('#header').length ) {
	                top_space = $('#header').outerHeight();
	              }
	              
	              $('html, body').animate({
	                  scrollTop: target.offset().top - top_space
	              }, 1500, 'easeInOutExpo');

	              if ( $(this).parents('.nav-menu').length ) {
	                $('.nav-menu .menu-active').removeClass('menu-active');
	                $(this).closest('li').addClass('menu-active');
	              }

	              if ( $('body').hasClass('mobile-nav-active') ) {
	                  $('body').removeClass('mobile-nav-active');
	                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
	                  $('#mobile-body-overly').fadeOut();
	              }
	              
	              return false;
	          }else{
	          	return false;
	          }
	      }else{
	      	return false;
	      }
	  });
	  
	  // Back to top button
	  $(window).scroll(function() {

	      if ($(this).scrollTop() > 100) {
	          $('.back-to-top').fadeIn('slow');
	      } else {
	          $('.back-to-top').fadeOut('slow');
	      }
	      
	  });
	  
	  $('.back-to-top').click(function(){
	      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
	      return false;
	  });
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
