window.onload = () => {
    const register_button = document.getElementById("register-button")

    register_button.addEventListener('click', () => {
    
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const first_name = document.getElementById("first_name").value
        const last_name = document.getElementById("last_name").value
        const birth_date = document.getElementById("birth_date").value
        const name = first_name +" "+last_name
    
        const data = new FormData();
        data.append('name',name)
        data.append('email',email)
        data.append('password',password)
        data.append('dob',birth_date)

        console.log(name);

        axios
            .post("http://localhost/healthnet/healthnet-backend/register_api.php",data)
            .then((result) => {
                console.log(result);
                if (result.status == 200) {
                    alert("registered succesfully");
                }
            })
            .catch((err) => {
                console.error(err);
            });
    })
}