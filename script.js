function myFunction(x) {
  x.classList.toggle("change");
}
//mymobile nav
const butnav = document.querySelector(".bars");
const headerEl = document.querySelector(".nav-links");
butnav.addEventListener("click", function () {
  headerEl.classList.toggle("bar");
});
