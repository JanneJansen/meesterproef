var kleding = document.querySelector('#kleding');

var jurk1 = document.querySelector('#jurk')

var dierlijk = document.querySelector('.dierlijk')

var synthetisch = document.querySelector('.synthetisch')

var plantaardig = document.querySelector('.plantaardig')


var texttitle = document.querySelector('.text')

var svg2 = document.querySelector('.svgdetail1')

var menu1 = document.querySelector('.menu1')
var menu2 = document.querySelector('.menu2')
var menu3 = document.querySelector('.menu3')
var menu4 = document.querySelector('.menu4')
var menu5 = document.querySelector('.menu5')
var tip  = document.querySelector('.tip')
var een  = document.querySelector('.een')
var materiaal  = document.querySelector('.materiaal')



jurk1.addEventListener('click', function() {
   kleding.classList.toggle('turn');
    });


jurk1.addEventListener('click', function() {
texttitle.classList.toggle('slideout1');
    });

jurk1.addEventListener('click', function() {
menu1.classList.toggle('slideout1');
    });
jurk1.addEventListener('click', function() {
menu2.classList.toggle('slideout1');
    });
jurk1.addEventListener('click', function() {
menu3.classList.toggle('slideout1');
    });
jurk1.addEventListener('click', function() {
menu4.classList.toggle('slideout1');
    });
jurk1.addEventListener('click', function() {
menu5.classList.toggle('slideout1');
    });






jurk1.addEventListener('click', function() {
  dierlijk.classList.toggle('slidein1');
    });

jurk1.addEventListener('click', function() {
  synthetisch.classList.toggle('slidein1');
    });

jurk1.addEventListener('click', function() {
  plantaardig.classList.toggle('slidein1');
    });



jurk1.addEventListener('click', function() {
  tip.classList.toggle('slidein1');
    });
jurk1.addEventListener('click', function() {
  een.classList.toggle('slidein1');
    });
jurk1.addEventListener('click', function() {
  materiaal.classList.toggle('slidein1');
    });







jurk1.addEventListener('click', function() {
   svg2.classList.toggle('slidein1');
    console.log('jemoeder');
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