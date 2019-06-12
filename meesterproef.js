var kleding = document.querySelector('#kleding');

var jurk1 = document.querySelector('#jurk')

var text1 = document.querySelector('.text')

jurk1.addEventListener('click', function() {
   kleding.classList.toggle('turn');
    });

jurk1.addEventListener('click', function() {
   text1.classList.toggle('slidein1');
    });



var broek1 = document.querySelector('#broek')

broek1.addEventListener('click', function() {
   kleding.classList.toggle('turn');
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
})

tshirt.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})
    


let trui = document.getElementById("trui-path");

trui.addEventListener("mouseover", function( event ) {   
  event.target.style.fill = "url(#img4)";
})

trui.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})



let jas = document.getElementById("jas-path");

jas.addEventListener("mouseover", function( event ) {   
  event.target.style.fill = "url(#img5)";
})

jas.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})