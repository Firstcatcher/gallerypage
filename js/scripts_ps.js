var openPhotoSwipe = function() {
	 $('#gallery_id').show();
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array
    var items = [
		{
            src: 'img/weddings/0/IMG_1656.JPG',
            w: 896,
            h: 598
        },
        {
		 src: 'img/weddings/0/1K9A2414.JPG',
            w: 598,
            h: 896
	  },
        {
            src: 'img/weddings/0/1K9A2428.JPG',
            w: 896,
            h: 598
        },
        {
            src: 'img/weddings/0/IMG_1594.JPG',
            w: 598,
            h: 896
        }
        
    ];
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0    
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

var openPhotoSwipe1 = function() {
	 $('#gallery_id').show();
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array
    var items = [
		{
            src: 'img/weddings/1/1 (1763).jpg',
            w: 598,
            h: 896

        },
        {
		 src: 'img/weddings/1/1 (305).jpg',
            w: 598,
            h: 896

		},
        {
            src: 'img/weddings/1/1 (1443).jpg',
            w: 598,
            h: 896

        }
        
    ];
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0    
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

var openPhotoSwipe2 = function() {
	 $('#gallery_id').show();
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array
    var items = [
		{
            src: 'img/weddings/2/150426-047.JPG',
            w: 598,
            h: 896

        },
        {
		 src: 'img/weddings/2/040.jpg',
            w: 896,
            h: 598

	  },
        {
            src: 'img/weddings/2/042.jpg',
            w: 598,
            h: 896

        },
        {
            src: 'img/weddings/2/150426-057.JPG',
            w: 896,
            h: 598
        }
    ];
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0    
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

var openPhotoSwipe3 = function() {
	 $('#gallery_id').show();
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array
    var items = [
		{
            src: 'img/weddings/3/thumb_IMG_3653_1024.jpg',
            w: 598,
            h: 896

        },
        {
		 src: 'img/weddings/3/thumb_498C3295_1024.jpg',
            w: 896,
            h: 598
	  },
        {
            src: 'img/weddings/3/thumb_498C4715_1024.jpg',
            w: 598,
            h: 896

        },
        {
            src: 'img/weddings/3/thumb_498C4807_1024.jpg',
            w: 896,
            h: 598
        }
        
    ];
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0    
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

var openPhotoSwipe4 = function() {
	 $('#gallery_id').show();
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array
    var items = [
		{
            src: 'img/weddings/4/11301537_10206624525875543_1038761381_n.jpg',
            w: 598,
            h: 896

        },		
        {
		 src: 'img/weddings/4/10297617_10206620190487161_657168234404430_n.jpg',
            w: 896,
            h: 598
		},
        {
            src: 'img/weddings/4/11267334_10206624525915544_496821032_n.jpg',
            w: 598,
            h: 896

        },
        {
            src: 'img/weddings/4/11292965_10206624525995546_728690732_n.jpg',
            w: 896,
            h: 598

        },
        {
		 src: 'img/weddings/4/11303720_10206624527875593_759082371_n.jpg',
            w: 896,
            h: 598

		},
    ];
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0    
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};




document.getElementById('btn').onclick = openPhotoSwipe;
document.getElementById('btn1').onclick = openPhotoSwipe1;
document.getElementById('btn2').onclick = openPhotoSwipe2;
document.getElementById('btn3').onclick = openPhotoSwipe3;
document.getElementById('btn4').onclick = openPhotoSwipe4;