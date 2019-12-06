var images = [
    "images/001.jpg",
    "images/002.jpg",
    "images/003.jpg",
    "images/004.jpg",
    "images/005.jpg",
    "images/006.jpg",
    "images/007.jpg",
    "images/008.jpg",
    "images/009.jpg",
    "images/010.jpg",
    "images/011.jpg",
    "images/012.jpg",
    "images/013.jpg",
    "images/014.jpg",
    "images/015.jpg",
    "images/016.jpg",
    "images/017.jpg",
    "images/018.jpg",
    "images/019.jpg",
    "images/020.jpg",
    "images/021.jpg",
    "images/022.jpg",
    "images/023.jpg",
    "images/024.jpg",
    "images/025.jpg",
    "images/026.jpg",
    "images/027.jpg",
    "images/028.jpg",
    "images/029.jpg",
    "images/030.jpg",
    "images/031.jpg",
    "images/032.jpg",
    "images/033.jpg",
    "images/034.jpg",
    "images/035.jpg",
    "images/036.jpg"
];

var obj = {curImg: 0};

var tween = TweenMax.to(obj, 0.5,
    {
        curImg: images.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          $(".myimg").attr("src", images[obj.curImg]); // set the image source
        }
    }
);

var tween2 = TweenMax.to(obj, 0.5,
    {
        curImg: images.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          $(".myimg").attr("src", images[obj.curImg]); // set the image source
        }
    }
);


var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger-1", duration: 1000})
										.setTween(tween)
										.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);
                                        


var scene = new ScrollMagic.Scene({triggerElement: "#trigger-3", duration: 1000})
										.setTween(tween2)
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);