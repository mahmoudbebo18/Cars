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
// attach every nav link with their corresponding section 
$(document).ready(function() {
    $(".navbar-nav .nav-item .nav-link").click(function() {
        $(this).parent().addClass("active").siblings().removeClass("active");
        $("body, html").animate({
                // scrollTop = divId.offset().top
                scrollTop: $($(this).data("target")).offset().top - $('.navbar').innerHeight()
            },
            500
        );
    });
    $(".navbar-nav .nav-item .nav-link").click(function() {
        $(".navbar-collapse").removeClass("show");
    })
    $(window).scroll(function () {
    //async active  nav links with sections
    $("section.async").each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - $(".navbar").innerHeight()) {
          var bebo = $(this).attr("id");
          $(".navbar-nav .nav-item").removeClass("active");
          $('.navbar-nav .nav-item a[data-slide = "' + bebo + '"]')
            .parent()
            .addClass("active");
        }
      });
    })



    // adjust left part depend on sideBar width 

    
    $('.brand-toggle').click(function(){
      var mySide = $('.sid-bar').innerWidth();
      $('.left-part').css({
        marginRight : mySide
     })

    })

    $('.left-part').css({
      marginRight : $('.sid-bar').innerWidth()
   })
})








// charts 

//line
var ctxL = document.getElementById("lineChart1").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
    datasets: [{
      pointBackgroundColor: '#fff',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255, 255, 255)',
      data: [2500, 2550, 5000, 3100, 7000, 5500, 4950, 16000, 10500, 8000],
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
          drawBorder: false,
          color: "rgba(255,255,255,.25)",
          zeroLineColor: "rgba(255,255,255,.25)"
        },
        ticks: {
          fontColor: "#fff",
          beginAtZero: true,
          stepSize: 5000
        },
      }],
    }
  }
});




