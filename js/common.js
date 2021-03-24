/* Common Javascript */
jQuery( document ).ready(function($) {
    // Toggle the side navigation
    $(".sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sidebar-toggled");
    });

    // Add active to sidbar nav links
    var path = window.location.href;
    
    $("#containerMain_nav .sidebar a.nav-link").each(function() {
        if (this.href === path) {
            $(this).addClass("active");
        }
    });
});
