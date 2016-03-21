

PhotosModule = (function() {

  var bSelectNameFocus = false;
  var $currentTagObject;

  var clickHandlerNames = function() { 
    $('.names-content li').on('click', function(event) {
      bSelectNameFocus = false;
      event.stopPropagation();

      $textDiv = $('<div class="names-text"></div>');
      $textDiv.html( $(this).html() )

      $nameDropdown = $currentTagObject.children().filter('.names-content')
      $nameDropdown.hide()
      $('#selector').append($nameDropdown);
      $currentTagObject.append( $textDiv );
    });
  }

  var mouseMoveHandler = function() {

    $('#photo-container').on('mousemove', function(event) {
      if( !bSelectNameFocus ) {
          // create box around mouse cursor
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        var ele = $('#selector');
        ele.css({left: mouseX - 25, top: mouseY - 25});
        ele.append($('.names-content'));
        $('#selector .names-content').hide();
      }
    });
  };

  var photoClickHandler = function() {
   $('#photo-container').on('click', function(event) {
      if( !bSelectNameFocus ) {

        var mouseX = event.pageX;
        var mouseY = event.pageY;

        var ele = $('<div class="tag"></div>');
        ele.css({left: mouseX - 25, top: mouseY - 25});

        $('#selector .names-content').show();
        ele.append($('.names-content'));
        $('#photo-container').append(ele);

        bSelectNameFocus = true;
        $currentTagObject = ele;
      } else {
        bSelectNameFocus = false;
        $('#selector').append($currentTagObject.children().filter('.names-content'));
        $currentTagObject.remove();
      }
    });
  }

  var init = function() {
    clickHandlerNames();
    mouseMoveHandler();
    photoClickHandler();
  };

  return {
    init: init,
  };

})();


$(document).ready(function() {
  if($('#photos-index').length){
    PhotosModule.init();
  } 
});
