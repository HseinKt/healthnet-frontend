
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
                console.log("acess 1");
                console.log(result.data.id);
                sessionStorage.setItem('user_id',result.data.id);
                // check the patie  nt is assigned to a hospital by admin
                axios
                    .post('http://localhost/healthnet/healthnet-backend/patient_assigned.php',data)
                    .then((result) => {
                        if (result.status == 200){
                            console.log("acess 2");
                            console.log(result.data.usertype_id);
                            sessionStorage.setItem('usertype_id',result.data.usertype_id)
                            window.location.href = "../Index.html";
                        } else {
                            console.error('Error in inner API call:', innerResult);
                          }
                        })
                        .catch((err) => {
                          console.error('Error in inner API call:', err);
                        });
                }
            })
            .catch((err) => {
                    console.error('Error in outer API call:', err);
            });
})