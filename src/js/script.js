import Splide from '../../node_modules/@splidejs/splide';
// import Pushbar from '../../node_modules/pushbar.js/src/pushbar';

var splide = new Splide( '.splide', {
    direction: 'ttb',
    height   : '100vh',
    wheel    : true,
    arrows   : false,
    pagination: true,
    speed: 1000,
    // autoHeight: true
  } );
  
  splide.mount();



  const pushbar = new Pushbar({
    blur:true,
    overlay:false,
  });

  
  //open a pushbar
  pushbar.open('mypushbar1');	
  //close all pushbars
  pushbar.close();	
