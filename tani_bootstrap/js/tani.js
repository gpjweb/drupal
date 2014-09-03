Drupal.behaviors.clickableRowsOnViews = {
  attach: function() {

    jQuery('.clickable-row').each(function() {
      if (jQuery(this).find('a').length) {
        jQuery(this).click(function() {
          window.location = jQuery(this).find('a').attr('href');
          return false;
        });
      }
    });
  }
}