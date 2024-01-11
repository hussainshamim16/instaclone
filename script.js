// document.write('heello')






var abby = 2;
var bady = 4;

var folwer = document.getElementById('folwer');

var folow = document.getElementById('baara')
folow.addEventListener('click',function(){
  
    if (abby < bady) {
        folow.style.backgroundColor='#405DE6';
        folow.style.color='white';
        folow.innerHTML='following'
        folwer.innerHTML= '700 followers'
        abby = 4;
        bady = 2;       
    
    } else{
        folow.style.backgroundColor=' #C13584';
        folow.style.color='white';
        folow.innerHTML='follow';
        folwer.innerHTML= '699 followers'

         bady = 4;
         abby = 2;
    }
})

   
    var green= document.getElementById('greenbtn');
    green.addEventListener('click',function(){ 
       if (abby < bady) {
           
          //  green.style.backgroundColor= 'red';
        // document.getElementById('inpu').style.border='1px solid red';
alert('user is not found' );
document.getElementById('inpu').value ='';

        abby = 4;
        bady = 2;  
       } else {
        // green.style.backgroundColor= '#405DE6';

        document.getElementById('inpu');

        bady = 4;
        abby = 2;
       }
    
     
    })

    // --------------------
var myinput = document.getElementById('myinput');

var myoutput = document.getElementById('myoutput');

var save = document.getElementById('save');

// myinput.addEventListener('input',function(){
  

 
    
// })


   var edit=document.getElementById('er'); 
   edit.addEventListener('click',function(){
   
    if (abby < bady) { 

       

        edit.style.backgroundColor='#405DE6';
        edit.style.color='white';
        myinput.style.display='block'
        myinput.style.border='2px solid #405DE6'
        myoutput.style.display='none'
myinput.style.padding='10px 30px';
        edit.innerHTML='save'
      
        abby = 4;
        bady = 2;       
    
    } else{

      
        myoutput.textContent = '' + myinput.value;
        edit.innerHTML='edit profile'
        edit.style.backgroundColor='#C13584';
        edit.style.color='white';

        // input.style.padding='10px 30px';

        myinput.style.display='none'
        myoutput.style.display='block'

        
        
    

         bady = 4;
         abby = 2;
    }



   })


//    ---------------------------
var images = document.getElementById('images');
var draf = document.getElementById('draf');

var swiper = new Swiper(".mySwiper", {
   spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // -------------------------------
var raan = document.getElementById('ran');
  var man = document.getElementById('maneu');
 
  man.addEventListener('click',function(){
    // raan.style.border = '2px solid red';
    alert('this page is not found')

  })