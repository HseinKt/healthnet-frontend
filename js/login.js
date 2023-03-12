
const login_button = document.getElementById("login-button")

login_button.addEventListener('click', () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const data = new FormData();
    data.append('email',email);
    data.append('password',password);

    axios
        .post('http://localhost/healthnet/healthnet-backend/login_api.php',data)
        .then((result) => {
            if (result.status == 200){
                console.log(result.data.id);
                sessionStorage.setItem('user_id',result.data.id)
                window.location.href = "../Index.html";
            }
        })
})