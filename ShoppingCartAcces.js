var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  } 
  
  var CartVal = document.getElementById("cart_cnt");
  var AddToCart1 = document.getElementById("btn1");
  var AddToCart2 = document.getElementById("btn2");
  var AddToCart3 = document.getElementById("btn3");
  var AddToCart4 = document.getElementById("btn4");
  var AddToCart5 = document.getElementById("btn5");
  var checkout_buy = document.getElementById("checking");
  var num = 0;

  var total1 = 0;
  var total2 = 0;
  var total3 = 0;
  var total4 = 0;
  var total5 = 0;


  var phone1 = " ";
  var phone2 = " ";
  var phone3 = " ";
  var phone4 = " ";
  var phone5 = " ";

  var cnt1=0;
  var cnt2=0;
  var cnt3=0;
  var cnt4=0;
  var cnt5=0;

  var totalall= 0;

    checkout_buy.addEventListener("click", function(event){  
        alert("List of items: " + "   "+ phone1 + "   "+ phone2 +"   "+phone3 + "   "+phone4 + "   "+phone5);
        alert("The total items: " + (total1 + total2 + total3+ total4+ total5));
        alert("Thank You")
        CartVal.textContent = 0;
    })
    AddToCart1.addEventListener("click", function(event){  
        alert("Adding item Huawei P30 Pro");
        num++;
        cnt1++;
        total1 = cnt1 * 24200.00;
        phone1 = cnt1 + "-Huawei P30 Pro: " + total1;
        CartVal.textContent = num;
    })
    AddToCart2.addEventListener("click", function(event){ 
        alert("Adding item Huawei P40 pro 5G");
        num++;
        cnt2++;
        total2 = cnt2 * 39200.00;
        phone2 = cnt2 + "-Huawei P40 pro 5G: " + total2;
        CartVal.textContent = num;
    })
    AddToCart3.addEventListener("click", function(event){ 
        alert("Adding item Xiaomi Mi 10T 5G");
        num++;
        cnt3++;
        total3 = cnt3 * 24700.00;
        phone3 = cnt3 + "-Xiaomi Mi 10T 5G: " + total3;
        CartVal.textContent = num;
    })
    AddToCart4.addEventListener("click", function(event){ 
        alert("Adding item Xiaomi Mi 11 Ultra 5G");
        num++;
        cnt4++;
        total4 = cnt4 * 24500.00;
        phone4 = cnt4 + "-Xiaomi Mi 11 Ultra 5G: " + total4;
        CartVal.textContent = num;
    })
    AddToCart5.addEventListener("click", function(event){ 
        alert("Adding item Apple iphone 12 Pro Max");
        num++;
        cnt5++;
        total5 = cnt5 * 79000.00;
        phone5 = cnt5 + "-Apple iphone 12 Pro Max: " + total5;
        CartVal.textContent = num;
    })

  
  