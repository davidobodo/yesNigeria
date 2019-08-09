$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10, //space between each image
    nav:true, // should nav arrow show
    autoplay:1000, //seconds to pass before autoplay 
    responsive:{
        0:{
            items:1
        },
        576:{
            items:4,
        },
        992:{
            items:6
        }
    }
})