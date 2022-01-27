import Splide from '../../node_modules/@splidejs/splide';

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