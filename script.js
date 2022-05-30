function myFunction(x) {
    x.classList.toggle("change");
    const butnav = document.querySelector(".bars");
  const headerEl = document.querySelector(".header");
  butnav.addEventListener('click' ,function(){
    headerEl.classList.toggle('bars');
  });
  }
  //mobile nav
  // const butnav = document.querySelector(".bars");
  // const headerEl = document.querySelector(".header");
  // butnav.addEventListener('click' ,function(){
  //   headerEl.classList.toggle('bars');
  // });
 
    