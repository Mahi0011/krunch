// ------BUTTON FUNCTION------
let show = (n) => {
    const t = document.getElementById("jst");
    const txt1 =
      "It really saves me time and effort. web design is exactly what our business has been lacking. Duis cursus, mi quis<br />viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id<br />rutrum lorem imperdiet. Nunc ut sem risus tristique posuere.<br/><br/> WALTER WARD";
  
    t.classList.add("slide-out","slide-in");
  
    setTimeout(function () {
      if (n == 1) {
        t.innerHTML = txt1;
      } else if (n == 2) {
        t.innerHTML = txt1;
      } else {
        t.innerHTML = txt1;
      }
      t.classList.add("slide-in");
      t.classList.remove("slide-out");
    }, 300);
  };
// -----------NAVBAR INVISIBLE-----------------
    var p = window.pageYOffset;
    window.onscroll = function() {
    var c = window.pageYOffset;
      if (p > c) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
      p = c;
    }
    // ------------------------NAVBAR SCROLL BG CHANGE-----------------------
    window.addEventListener("scroll", function() {
        var header = document.getElementById("hdt");
        var top = window.pageYOffset;
        var fp = document.querySelector(".sec2").offsetHeight;
        if (top >= fp) {
          header.style.backgroundColor="black";
        } 
        else {
            header.style.backgroundColor="transparent";
            header.style.opacity=0.5;
        }
      });
// ----------------------------LINK COLOR CHANGE------------------------------


// window.addEventListener('scroll', function() {
// let hdr = this.document.getElementsByClassName("h-a")
// const l1 = document.getElementById("l1").offsetTop;
// const l2 = document.getElementById("l2").offsetTop;
// const l3 = document.getElementById("l3").offsetTop;
// const l4 = document.getElementById("l4").offsetTop;
// const l5 = document.getElementById("l5").offsetTop;
// const l6 = document.getElementById("l6").offsetTop;
// const l7 = document.getElementById("l7").offsetTop;
// const l8 = document.getElementById("l8").offsetTop;
// var top = window.pageYOffset;
//   if(top >= l1 && top <= l2){
//     hdr[0].style.color = "blue";
//   }
//   else{
//   hdr[0].style.color = "white";
//   }
//   if(top >= l2 && top <= l3){
//   hdr[1].style.color = "blue"; 
//     }
//   else{
//     hdr[1].style.color = "white";
//   }
//   if(top >= l3 && top <= l4){
//     hdr[2].style.color = "blue"; 
//   }else{
//     hdr[2].style.color = "white";
//   }
//   if(top >= l4 && top <= l5-200){
//     hdr[3].style.color = "blue"; 
//   }else{
//     hdr[3].style.color = "white";
//   }
//   if(top >= l5 && top <= l6){
//     hdr[4].style.color = "blue"; 
//   }else{
//     hdr[4].style.color = "white";
//   }
//   if(top >= l6-100 && top <= l7){
//     hdr[5].style.color = "blue"; 
//   }else{
//     hdr[5].style.color = "white";
//   }
//   if(top >= l7  && top <= l8){
//     hdr[6].style.color = "blue"; 
//   }else{
//     hdr[6].style.color = "white";
//   }
// });

      

window.addEventListener('scroll', function() {
  const hdr = document.getElementsByClassName("h-a");
  const offsets = Array.from(Array(8), (_, i) => document.getElementById("l" + (i + 1)).offsetTop);
  const top = window.pageYOffset;

  for (let i = 0; i < hdr.length; i++) {
    if (top >= offsets[i] && top <= offsets[i + 1]) {
      hdr[i].style.color = "blue";
    } else {
      hdr[i].style.color = "white";
    }
  }
});
