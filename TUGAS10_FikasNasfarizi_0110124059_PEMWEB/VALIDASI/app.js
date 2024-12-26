function validateForm() {
    resetErrors();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const departureTime = document.getElementById("departure-time");
    const destination = document.getElementById("destination");
    const ticketQuantity = document.getElementById("ticket-quantity");

    if (name.value.trim() === "") {
        displayError("name", "Nama Pelanggan harus diisi");
        valid = false;
    } else if (name.value.length > 30) {
        displayError("name", "Nama Pelanggan maksimal 30 karakter");
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.value.trim() === "") {
        displayError("email", "Email harus diisi");
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        displayError("email", "Email tidak valid");
        valid = false;
    }

    const timePattern = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
    if (departureTime.value.trim() === "") {
        displayError("time", "Jam keberangkatan harus diisi");
        valid = false;
    } else if (!timePattern.test(departureTime.value)) {
        displayError("time", "Jam keberangkatan tidak valid (format 00:00 - 23:59)");
        valid = false;
    }

    if (destination.value.trim() === "") {
        displayError("destination", "Tujuan keberangkatan harus diisi");
        valid = false;
    }

    const quantity = parseInt(ticketQuantity.value, 10);
    if (ticketQuantity.value.trim() === "") {
        displayError("quantity", "Jumlah tiket harus diisi");
        valid = false;
    } else if (quantity < 1 || quantity > 10) {
        displayError("quantity", "Jumlah tiket harus antara 1 dan 10");
        valid = false;
    }

    if (valid) {
        displayResult(name.value, email.value, departureTime.value, destination.value, ticketQuantity.value);
    }

    return false; 
}

function displayError(field, message) {
    const errorElement = document.getElementById(field + "-error");
    errorElement.textContent = message;
    document.getElementById(field).style.borderColor = "red";
}

function resetErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (message) {
        message.textContent = "";
    });
    const inputs = document.querySelectorAll("input");
    inputs.forEach(function (input) {
        input.style.borderColor = "";
    });
}

function displayResult(name, email, time, destination, quantity) {
    document.getElementById("result-name").textContent = name;
    document.getElementById("result-email").textContent = email;
    document.getElementById("result-time").textContent = time;
    document.getElementById("result-destination").textContent = destination;
    document.getElementById("result-quantity").textContent = quantity;

    document.getElementById("result").style.display = "block";
}
