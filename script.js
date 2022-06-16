const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(fnameValue === '') {
		setErrorFor(fname, 'firstname cannot be empty');
	} 
	
	if(lnameValue === '') {

		setErrorFor(lname, 'last name cannot be empty');
	} 
	
	if(emailValue === '') {
		setErrorFor(email, 'Looks like this is not an email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Looks like this is not an email');
	} 
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	} 
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

