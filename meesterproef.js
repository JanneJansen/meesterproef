var tekst = document.querySelector('#kleding');

tekst.addEventListener('click', function() {
   tekst.classList.toggle('turn');
    });


let jurk = document.getElementById("jurk-path");
  
// This handler will be executed only once when the cursor
// moves over the unordered list
jurk.addEventListener("mouseover", function( event ) {   
  // highlight the mouseenter target
  event.target.style.fill = "url(#img1)";
//    console.log('jemoeder');
})

jurk.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})
    
//    fill="url(#img1)"