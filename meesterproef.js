var tekst = document.querySelector('#kleding');

tekst.addEventListener('click', function() {
   tekst.classList.toggle('turn');
    });


let jurk = document.getElementById("jurk-path");

jurk.addEventListener("mouseover", function( event ) {   
  // highlight the mouseenter target
  event.target.style.fill = "url(#img1)";
//    console.log('jemoeder');
})

jurk.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})
    
let broek = document.getElementById("broek-path");

broek.addEventListener("mouseover", function( event ) {   
  // highlight the mouseenter target
  event.target.style.fill = "url(#img2)";
//    console.log('jemoeder');
})

broek.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})

let tshirt = document.getElementById("tshirt-path");

tshirt.addEventListener("mouseover", function( event ) {   
  event.target.style.fill = "url(#img3)";
    console.log('jemoeder');
})

tshirt.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})
    