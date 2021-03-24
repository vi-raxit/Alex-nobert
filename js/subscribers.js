/* Text packages Javascript */
jQuery( document ).ready(function($) {
    /* Select and Deselect All */
    var $selectAll = $('#selectallSelect')
      
    $selectAll.click(function () {
      $(this).toggleClass("selectInvert");
      if ($("#selectallSelect").hasClass("selectInvert")) {
        $(this).text("Deselect All");
        $(".selectTable input.form-check-input").each(function (index,item) {
          item.checked = true;
        });
      } else {
        $(this).text("Select All");
        $(".selectTable input.form-check-input").each(function (index,item) {
          item.checked = false;
        });
      }
  });

  $(".selectTable input.form-check-input").click(function () {
    var total = $(".selectTable input.form-check-input").length;
    var numberOfChecked = $('.selectTable input.form-check-input:checkbox:checked').length;
    
    if(total === numberOfChecked) {
      $(this).addClass('selectInvert');
      $("#selectallSelect").addClass("selectInvert").removeClass("active");
      $("#selectallSelect").text("Deselect All");
    } else {
      $("#selectallSelect").removeClass("selectInvert");
      $("#selectallSelect").text("Select All");
    }
  });

  var $selectRemove = $('#selectremoveSelect')
  $selectRemove.click(function () {
    $(this).text("Select All");
    $(".selectremoveTable input.form-check-input").each(function (index, item) {
      item.checked = true;
    });
  });

  var $deselectRemove = $('#selectremoveDeselect')
  $deselectRemove.click(function () {
    $(this).text("Deselect All");
    $(".selectremoveTable input.form-check-input").each(function (index, item) {
      item.checked = false;
    });
  });

});
