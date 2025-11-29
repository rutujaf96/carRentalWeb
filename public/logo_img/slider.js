$(".main-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    center: true,
});
$(".tranding-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    items: 2,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
    ]
});

{/* <script> */}
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});
// </script>

{/* <script> */}
// date month and day 
var day=new Date().getDay();
var date=new Date().getDate();
var month=new Date().getMonth()+1;
var year=new Date().getFullYear();
document.getElementById("date").innerHTML=date;

document.getElementById("year").innerHTML=year

switch (day) {
 
    case day=1:
        document.getElementById("day").innerHTML=" Monday "
        break;
    case day=2:
        document.getElementById("day").innerHTML=" Tuesday  "
        break;
    case day=3:
        document.getElementById("day").innerHTML=" Wednesday"
        break;
    case day=4:
        document.getElementById("day").innerHTML=" Thursday"
        break;
    case day=5:
        document.getElementById("day").innerHTML=" Friday"
        break;
    case day=6:
        document.getElementById("day").innerHTML=" Saturday"
        break;
    case day=7:
        document.getElementById("day").innerHTML=" Sunday"
        break;
   
    default:
       document.getElementById("date").innerHTML=(date<10)?"0"+date:date
        break;
}
switch (month) {
    case month=1:
        document.getElementById("month").innerHTML=" Jan"
        break;
    case month=2:
        document.getElementById("month").innerHTML=" Feb"
        break;
    case month=3:
        document.getElementById("month").innerHTML=" Mar"
        break;
    case month=4:
        document.getElementById("month").innerHTML=" April"
        break;
    case month=5:
        document.getElementById("month").innerHTML=" May"
        break;
    case month=6:
        document.getElementById("month").innerHTML=" Jun"
        break;
    case month=7:
        document.getElementById("month").innerHTML=" July"
        break;
    case month=8:
        document.getElementById("month").innerHTML=" Oug"
        break;
    case month=9:
        document.getElementById("month").innerHTML=" Sap"
        break;
    case month=10:
        document.getElementById("month").innerHTML=" Oct"
        break;
    case month=11:
        document.getElementById("month").innerHTML=" Nov"
        break;
    case month=12:
        document.getElementById("month").innerHTML=" dec"
        break;

    default:
       document.getElementById("month").innerHTML=(month<10)?"0"+month:month

        break;
}



// Entrtainment Page


$(document).on('ready', function () {
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 5
    });

});



// End Entertainment Page