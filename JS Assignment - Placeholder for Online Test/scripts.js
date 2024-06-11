function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const bookingId = 'BID' + Math.floor(Math.random() * 10000);

    console.log('Storing data:', { bookingId, name, email, mobile });

    localStorage.setItem('bookingId', bookingId);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('mobile', mobile);

    window.location.href = 'confirmation.html';
}

window.onload = function() {
    if (window.location.pathname.includes('confirmation.html')) {
        const bookingId = localStorage.getItem('bookingId');
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const mobile = localStorage.getItem('mobile');

        console.log('Retrieved data:', { bookingId, name, email, mobile });

        document.getElementById('bookingId').innerText = bookingId;
        document.getElementById('userName').innerText = name;
        document.getElementById('userEmail').innerText = email;
        document.getElementById('userMobile').innerText = mobile;
    }
}
