$(document).ready(function() {
    $('.my-steps ul li').click(function() {
        console.log( $($(this).data("class")))
        $(this).addClass('active').siblings().removeClass('active')
        $(".my-steps .my-tab").hide();
        $($(this).data("class")).show();
    });
    $(".my-steps .next-prev .fa-chevron-left , .my-steps .next-prev .fa-chevron-right").click(function() {
        if ($(this).hasClass("fa-chevron-right")) {
            $(".my-steps .my-tab.active").fadeOut(100, function() {
                $(this)
                    .removeClass("active")
                    .next(".my-tab")
                    .addClass("active")
                    .fadeIn();
            });
            //when click on the left arrow the current will fadeOut and the Previous one will fadeIn
        } else {
            $(".my-steps .my-tab.active").fadeOut(100, function() {
                $(this)
                    .removeClass("active")
                    .prev(".my-tab")
                    .addClass("active")
                    .fadeIn();
            });
        }
    });
});
