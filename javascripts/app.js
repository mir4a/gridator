/**
 * Created with JetBrains RubyMine.
 * User: mir4a
 * Date: 28.09.13
 * Time: 15:23
 * To change this template use File | Settings | File Templates.
 */

function Gridator() {
  this.bg = bg;
}

if (window.File && window.FileReader && window.FileList && window.Blob) {


  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
//                console.log(f);
      // Only process image files.
      if (!f.type.match('image.*')) {
        alert("We need only images, bro! No junky trash are available!");
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function (theFile) {
        return function (e) {
          // Render thumbnail.
          var imgCheck = $(".gridator");
          console.log(e.target.result);
          imgCheck.css('background', 'url(' + e.target.result + ')');
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }


  bg.addEventListener('change', handleFileSelect, false);


} else {
  alert('The File APIs are not fully supported in this browser.');
}

console.log(bg);

//angular.module('app')

var app = angular.module('gridator', ['ngGrid']);
app.controller('MyCtrl', function ($scope) {

  $scope.gridOptions = {
    columnDefs:
      [{cellClass: 'columns large-1'}]

  };
});
