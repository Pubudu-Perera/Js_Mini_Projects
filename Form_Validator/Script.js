const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');


function validationError(input,message){
    let parentEle = input.parentElement;
    parentEle.classList.add('error');
    errorField = parentEle.querySelector('small');
    errorField.innerText = message;
}


function validationSuccess(input){
  let parentEle = input.parentElement;
  parentEle.classList.remove('error');
  parentEle.classList.add('success');
  console.log(parentEle)
}


// check required function which is called in 
function checkRequired(elementArray){
    elementArray.forEach(function(inputElement){
      if(inputElement.value.trim() === ""){
          validationError(inputElement, getElementName(inputElement) +  " is required");
      }else{
          validationSuccess(inputElement);
      }
    })
}


// check length of the values of input fields 
function checkLength(input,min,max){
  if(input.value.length < min){
    validationError(input,getElementName(input) + " should be more than " + min + " characters!");
  }else if(input.value.length > max){
    validationError(input,getElementName(input) + " should be less than " + max + " characters!");
  }else{
    validationSuccess(input);
  }
}


// getting elements name
function getElementName(inputID){
    return inputID.id.charAt(0).toUpperCase() + inputID.id.slice(1);
}


//validating password
function validatePassword(){
  if(password.value === confirm.value){
    validationSuccess(confirm);
  }else{
    validationError(confirm,"The type the exact same password!");
  }
}


form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,confirm]);

    checkLength(username,3,10);
    checkLength(password,5,20);

    validatePassword();
});



// event listiner at the submit
// inefficient
/* 
form.addEventListener('submit',function(e){
  e.preventDefault();

  if(username.value === ''){
    validationError(username,'username field is required!');
    
  }else{
    validationSuccess(username);
  }


  if(email.value === ''){
    validationError(email,'email field is required!');
    
  }else{
    validationSuccess(email);
  }


  if(password.value === ''){
    validationError(password,'password field is required!');
    
  }else{
    validationSuccess(password);
  }


  if(confirm.value === ''){
    validationError(confirm,'Confirm Password field is required!');
    
  }else{
    validationSuccess(confirm);
  }
})
*/
