const input = document.getElementById("input")
const form = document.getElementById('form')
const error = document.querySelector('error')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkinputs();
})

function checkinputs() {
    const inputvalue = input.value.trim();
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    if (inputvalue ==="") {
        small.className = 'error error-1';
    }
    else if (!isEmail(inputvalue)) {
		small.className = 'error error-1';
        input.className = 'error-2';
	}
    else {
        small.className = 'error';
        alert("success")
    }
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
