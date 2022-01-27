import Splide from '@splidejs/splide';

var splide = new Splide( '.splide', {
    direction: 'ttb',
    height   : '100vh',
    wheel    : true,
    arrows   : false,
    pagination: true,
    // autoHeight: true
  } );
  
  splide.mount();