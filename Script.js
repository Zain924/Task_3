document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        latitude: document.getElementById('latitude').value,
        longitude: document.getElementById('longitude').value,
        employeeID: document.getElementById('employeeID').value,
        city: document.getElementById('city').value,
        country: document.getElementById('country').value
    };

    fetch('https://api.findofficers.com/hiring_test/add_employee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Employee information submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});