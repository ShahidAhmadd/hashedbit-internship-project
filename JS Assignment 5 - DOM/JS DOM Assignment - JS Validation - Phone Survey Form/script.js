function ageChange(event) {
    const age = event.target.value;
    const errorsHolder = document.getElementById('errors-holder');
    const submitButton = document.getElementById('submitbutton');

    if (age === '') {
        errorsHolder.innerText = 'Please choose age';
        submitButton.disabled = true;
    } else if (age < 5) {
        errorsHolder.innerText = 'You need to be at least 5 years old to participate';
        submitButton.disabled = true;
    } else {
        errorsHolder.innerText = '';
        submitButton.disabled = false;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const ageInput = document.getElementById('q_age');
    const ownsPhoneInput = document.getElementById('q_owns_phone');
    const errorsHolder = document.getElementById('errors-holder');
    const resultHolder = document.getElementById('result-holder');

    const age = ageInput.value;
    const ownsPhone = ownsPhoneInput.checked;

    if (age === '' || age < 5) {
        errorsHolder.innerText = 'Please choose age';
        return;
    }

    if (ownsPhone) {
        if (age < 13) {
            resultHolder.innerText = 'You are too young to have a phone';
        } else {
            resultHolder.innerText = 'Use your phone in moderation';
        }
    } else {
        if (age < 13) {
            resultHolder.innerText = 'You will get a phone soon';
        } else {
            resultHolder.innerText = 'You should get a phone';
        }
    }
}
