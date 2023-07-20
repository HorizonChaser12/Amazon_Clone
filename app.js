function handleScroll(event, slideClass, scrollAmount) {
    console.log("done");
    const connect = document.querySelector(slideClass);
    connect.scrollLeft += scrollAmount;
    event.preventDefault();
  }
  
  const leftbtn = document.querySelector(".l-btn");
  const rightbtn = document.querySelector(".r-btn");
  const leftbtnr = document.querySelector(".btn-lb");
  const rightbtnl = document.querySelector(".btn-ra");
  const leftbtn2r = document.querySelector(".btn-2b");
  const rightbtn2l = document.querySelector(".btn-2a");
  
  rightbtn.addEventListener('click', function(event) {
    handleScroll(event, ".product-slide", 1100);
  });
  
  leftbtn.addEventListener('click', function(event) {
    handleScroll(event, ".product-slide", -1100);
  });
  
  rightbtnl.addEventListener('click', function(event) {
    handleScroll(event, ".product-slide-1", 1100);
  });
  
  leftbtnr.addEventListener('click', function(event) {
    handleScroll(event, ".product-slide-1", -1100);
  });

  rightbtn2l.addEventListener('click', function(event) {
    handleScroll(event, ".product-slide-2", 1100);
  });
  
  leftbtn2r.addEventListener('click', function(event) {
    handleScroll(event, ".product-slide-2", -1100);
  });
  