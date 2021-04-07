/* Email Inbox Javascript */

$(".email-inbox-left .nav li.nav-item").on("click", function() {
    $(".email-inbox-left .nav li").removeClass("active");
    $(this).addClass("active");

    if($(".email-inbox-left .nav li.nav-item a").hasClass("collapsed")) {
        $(".email-inbox-left .nav li.nav-item a svg").addClass("fa-angle-down");
        $(".email-inbox-left .nav li.nav-item a svg").removeClass("fa-angle-right");
    } else {
        $(".email-inbox-left .nav li.nav-item a svg").addClass("fa-angle-right");
        $(".email-inbox-left .nav li.nav-item a svg").removeClass("fa-angle-down");
    }
});

// Toggle the side navigation for add package
$(".sidepanelToggle").on("click", function(e) {
    e.preventDefault();
    $(".modal.new-email-modal").toggleClass("sidepanel-toggled");
    $('.new-email-modal').scrollTop(0);
});

$('#expiration-date').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true
});
