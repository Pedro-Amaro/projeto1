document.getElementById("Coffe").innerHTML = "Wine time";

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const spinner = document.querySelector("#spinner")
setTimeout(()=> {
  spinner.style.display = "none";
}, 2000)


$('.your-class').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
}) ;
