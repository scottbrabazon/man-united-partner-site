var mupartners = function() {
 
  //tests for document finished loading - jquery replacement
  function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
  //make the functions available
  return {
    ready: ready,
  }
  
}();

mupartners.ready( function onReady() {
  

});

document.getElementById('playVideo').onclick = function () {
  BigPicture({
    el: this,
    vimeoSrc: '278674789',
    noLoader: true
  })
}