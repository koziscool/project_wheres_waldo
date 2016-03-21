

PhotosModule = (function() {

  var bSelectNameFocus = false;
  var $currentTagObject;
  var photoName = "first_photo";
  var locationLeft;
  var locationTop;

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

     // if( !bSelectNameFocus ) {

     //    var mouseX = event.pageX;
     //    var mouseY = event.pageY;

     //    var $ele = $('<div></div>');
     //    $ele.css({left: mouseX - 25, top: mouseY - 25});
     //    if ( mouseX <= locationLeft && locationLeft <= mouseX + 50 &&
     //        mouseY <= locationTop && locationTop <= mouseY + 50) {
     //      $ele.addClass('hit');
     //    } else {
     //      $ele.addClass('miss');          
     //    }

     //    $('#selector .names-content').show();
     //    $ele.append($('.names-content'));
     //    $('#photo-container').append($ele);

     //    bSelectNameFocus = true;
     //    $currentTagObject = $ele;


  var photoClickHandler = function() {
   $('#photo-container').on('click', function(event) {
      if( !bSelectNameFocus ) {

        var mouseX = event.pageX;
        var mouseY = event.pageY;

        // var ele = $('<div class="tag"></div>');
        // ele.css({left: mouseX - 25, top: mouseY - 25});

        var $ele = $('<div></div>');
        // debugger;
          console.log(mouseX);
          console.log(locationLeft);
          console.log(mouseY);
          console.log(locationTop);

        $ele.css({left: mouseX - 25, top: mouseY - 25});
        if ( mouseX <= locationLeft + 25 && locationLeft <= mouseX + 25 &&
            mouseY <= locationTop + 25 && locationTop <= mouseY + 25) {
          console.log('hit');
          $ele.addClass('hit');
        } else {
          console.log('miss');
          $ele.addClass('miss');          
        }

        $('#selector .names-content').show();
        $ele.append($('.names-content'));
        $('#photo-container').append($ele);

        bSelectNameFocus = true;
        $currentTagObject = $ele;
      } else {
        bSelectNameFocus = false;
        $('#selector').append($currentTagObject.children().filter('.names-content'));
        $currentTagObject.remove();
      }
    });
  };

  var photoCallback = function(data) {
    locationLeft = data.left;
    locationTop = data.top;
  };

  var errorCallback = function(xhr, status, err){
    console.log(status);
    console.log(err);
  };

  var getLocation = function() {
    var url = "http://localhost:3000/photos.json";

    $.ajax( {
      url: url, 
      success: photoCallback,
      error: errorCallback,
    } );
  }

  var init = function() {
    getLocation();
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
