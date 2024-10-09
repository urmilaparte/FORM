
const btn1 = document.getElementById('btn');

btn1.addEventListener('click',function(){


const user = document.getElementById('username').value;
const num = document.getElementById('number').value;
const email = document.getElementById('emails').value;

       
 if (user === "" || num === "" || email=== "") {
     alert('First fill required section');
    }
   else{
    
    alert('Your Form succesfully sumbmitted'); 
}

});
 