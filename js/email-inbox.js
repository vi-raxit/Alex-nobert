/* Email Inbox Javascript */

$(".email-inbox-left .nav li").on("click", function() {
    $(".email-inbox-left .nav li").removeClass("active");
    $(this).addClass("active");

    
    if($(".email-inbox-left .nav li a").hasClass("collapsed")) {
        $(".email-inbox-left .nav li a svg").addClass("fa-angle-down");
        $(".email-inbox-left .nav li a svg").removeClass("fa-angle-right");
    } else {
        $(".email-inbox-left .nav li a svg").addClass("fa-angle-right");
        $(".email-inbox-left .nav li a svg").removeClass("fa-angle-down");
    }
});