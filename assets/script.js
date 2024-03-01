const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const secondname = document.getElementById('secondname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
        e.preventDefault();

        validateInputs();
    });

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error'); 

    errorDisplay.innerText = message; // This innerText is a reserve for the messages that appears if there is an error. It is displayed in the div tag of error that was reserved in HTML. It could be anyother text apart from what is written but it must mash its name allover. And this statement targets the const line 17. it works like scss.
    inputControl.classList.add('error');//if you comment on this error message, error will still appear beacause we have specified it in the validation below. and also its name is given after innerText.
    inputControl.classList.remove('success'); //under the error statement, when classList is used it says add which is addind the a class in the element as specified remove viseversal.
}

// element for HTML elements such as the error class if our HTML file
 
function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = ''; // if you wish for a success message to appear, you can do same as above in  line 19. It can still be commented on it wont affect anything but on line 19, if you comment the error message will not apply.
    inputControl.classList.add('success'); // if this is commented on succes outline of green color will not appear.
    inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// if(form){
//     alert("you are in.");
// };

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const secondnameValue = secondname.value.trim();
    const ageValue = age.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim(); 
    
    // I am thinking of using an arrey data type to represent my values so as to keep the code clean such as errors of even .
    alert(firstnameValue.toUpperCase() +" "+ secondnameValue.toUpperCase() +' you are welcome');
    if(firstnameValue === '') {
        setError(firstname, 'firstname is required');
    } else {
        setSuccess(firstname);
    }

    if(secondnameValue === '') {
        setError(secondname, 'secondname is required');
    } else {
        setSuccess(secondname);
    }
    if(ageValue === '' ) {
        setError(age, 'age is required');
    } else if (isNaN(ageValue)) {
        setError(age, 'age must be a number.')
    } else {
        setSuccess(age);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Your email should be in the format "name@gmail.com".');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

let imageSlider = document.querySelector('.colRight img');

  let images = [];
  let   i = 0;
  let time = 5000

images[0] = 'assets/image/OIP.jpeg';
images[1] = 'assets/image/OIP1.jpeg';
images[2] = 'assets/image/OIP2.jpeg';
// images[3] = 'assets/images/pexels-vlada-karpovich-4050325.jpg';

function changeImg() {

  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout('changeImg()', time);
}
   window.onload = changeImg();