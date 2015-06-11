var openPhotoSwipe = function() {
	 $('#gallery_id').show();
    
   
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
		 src: 'img/weddings/1/1.jpg',
            w: 1024,
            h: 683
		},
        {
            src: 'img/weddings/1/2.jpg',
            w: 1024,
            h: 683
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



document.getElementById('btn').onclick = openPhotoSwipe;
document.getElementById('btn1').onclick = openPhotoSwipe;
document.getElementById('btn2').onclick = openPhotoSwipe;
document.getElementById('btn3').onclick = openPhotoSwipe;
document.getElementById('btn4').onclick = openPhotoSwipe;