// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".transparent_header");
//     $nav.toggleClass('navbar-gradient-color', $(this).scrollTop() > $nav.height());
//   });
// });

window.addEventListener("scroll", function(){
  var header = document.querySelector(".transparent_header");
  header.classList.toggle("navbar-gradient-color", window.scrollY > 0);
})

$('.slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows : false,
});

$('.tesimonial-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  adaptiveHeight: true,
  arrows : false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".brand-nav-color");
//     $nav.toggleClass('navbar-gradient-color', $(this).scrollTop() > $nav.height());
//   });
// });

window.addEventListener("scroll", function(){
  var header = document.querySelector(".brand-nav-color");
  header.classList.toggle("navbar-gradient-color", window.scrollY > 0);
})

// Payment
let bank = document.getElementById("Bank");
let paypal = document.getElementById("Paypal");
let check = document.getElementById("Check");
function Bank() {
  let bankRadio = document.getElementById("bank");

  if (bankRadio.checked == true){
    bank.style.display = "block";
    paypal.style.display = "none";
    check.style.display = "none";
  } else{
    bank.style.display = "none";
  }
}
function PayPal() {
  let paypalRadio = document.getElementById("paypal");

  if (paypalRadio.checked == true){
    paypal.style.display = "block";
    check.style.display = "none";
    bank.style.display = "none";
  } else{
    paypal.style.display = "none";
  }
}
function Check(){
  let checkRadio = document.getElementById("check");

  if (checkRadio.checked == true){
    check.style.display = "block";
    bank.style.display = "none";
    paypal.style.display = "none";
  } else{
    check.style.display = "none";
  }
}


// Shipping
let radio1 = document.getElementById("Radio1");
let radio2 = document.getElementById("Radio2");
let radio3 = document.getElementById("Radio3");
let radio4 = document.getElementById("Radio4");
let radio5 = document.getElementById("Radio5");
let radio6 = document.getElementById("Radio6");

function radioOne() {
  let Radio1radio = document.getElementById("radio1");

  if (Radio1radio.checked == true){
    radio1.style.display = "block";
    radio2.style.display = "none";
    radio3.style.display = "none";
    radio4.style.display = "none";
    radio5.style.display = "none";
    radio6.style.display = "none";
  } else{
    radio1.style.display = "none";
  }
}
function radioTwo() {
  let Radio12radio = document.getElementById("radio2");

  if (Radio12radio.checked == true){
    radio2.style.display = "block";
    radio3.style.display = "none";
    radio4.style.display = "none";
    radio5.style.display = "none";
    radio6.style.display = "none";
    radio1.style.display = "none";
  } else{
    radio2.style.display = "none";
  }
}
function radioThree() {
  let Radio13radio = document.getElementById("radio3");

  if (Radio13radio.checked == true){
    radio3.style.display = "block";
    radio4.style.display = "none";
    radio5.style.display = "none";
    radio6.style.display = "none";
    radio1.style.display = "none";
    radio2.style.display = "none";
  } else{
    radio3.style.display = "none";
  }
}
function radioFour() {
  let Radio4radio = document.getElementById("radio4");

  if (Radio4radio.checked == true){
    radio4.style.display = "block";
    radio5.style.display = "none";
    radio6.style.display = "none";
    radio1.style.display = "none";
    radio2.style.display = "none";
    radio3.style.display = "none";
  } else{
    radio4.style.display = "none";
  }
}
function radioFive() {
  let Radio5radio = document.getElementById("radio5");

  if (Radio5radio.checked == true){
    radio5.style.display = "block";
    radio6.style.display = "none";
    radio1.style.display = "none";
    radio2.style.display = "none";
    radio3.style.display = "none";
    radio4.style.display = "none";
  } else{
    radio5.style.display = "none";
  }
}
function radioSix() {
  let Radio6radio = document.getElementById("radio6");

  if (Radio6radio.checked == true){
    radio6.style.display = "block";
    radio5.style.display = "none";
    radio1.style.display = "none";
    radio2.style.display = "none";
    radio3.style.display = "none";
    radio4.style.display = "none";
  } else{
    radio6.style.display = "none";
  }
}



const loginsection = document.querySelector(".user-login");
const resetsection = document.querySelector(".reset-password");
const resetBtn = document.querySelector('#resetBtn');
const backButton = document.querySelector('#backBtn');

// console.log(resetsection.style.display='none');

resetBtn.addEventListener('click', ()=>{
  if(resetsection.style.display === 'none'){
    loginsection.style.display = 'none';
    resetsection.style.display = 'block';
  }else{
    resetsection.style.display = 'none';
  }
});

backButton.addEventListener('click', ()=>{
  if(loginsection.style.display === 'none'){
    resetsection.style.display = 'none';
    loginsection.style.display = 'block';
  }else{
    loginsection.style.display = 'none';
  }
});




// form validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()





