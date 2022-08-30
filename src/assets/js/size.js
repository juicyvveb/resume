
  

  function setSize(){
    let size = window.innerWidth;
    let device;
    if(size < 720){
      device = 'mobile';
    }
    else if( size >= 720 && size < 1024){
      device = 'laptop';
    }
    else {
      device = 'desktop';
    }
    return device
  }

  


export default setSize
