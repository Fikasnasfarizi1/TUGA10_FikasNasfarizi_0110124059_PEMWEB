const validUsername = "ahmad2017";
const validPassword = "integrity";

function validateLogin() {
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (username === validUsername && password === validPassword) {
        
        alert("Login Sukses");
        
        window.location.href = "berhasil.html";
        return false; 
    } else {
        
        alert("Login Gagal! Username atau Password salah.");
        return false; 
    }
}
