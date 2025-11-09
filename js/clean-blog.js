/*!
 * Clean Blog Theme JavaScript
 * Based on Start Bootstrap - Clean Blog
 */

(function($) {
  "use strict";

  // Start Bootstrap - Clean Blog JavaScript for navbar shrinking
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("is-fixed");
    } else {
      $("#mainNav").removeClass("is-fixed");
    }
  });

  // Initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

})(jQuery);