function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        let mailtoLink = `mailto:your-email@example.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
        window.location.href = mailtoLink;
    } else {
        alert("Please fill in all fields before sending.");
    }
}
