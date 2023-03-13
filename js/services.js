
const submit_button = document.getElementById("submit_button")

submit_button.addEventListener('click', () => {
    const patient = document.getElementById("patient").value
    const employee = document.getElementById("employee").value
    const department = document.getElementById("department").value
    const cost = document.getElementById("cost").value
    const description = document.getElementById("description").value
    
    const data = new FormData();
    data.append('patient_id',patient);
    data.append('employee_id',employee);
    data.append('department_id',department);
    data.append('description',description);
    data.append('cost',cost);

    axios
        .post('http://localhost/healthnet/healthnet-backend/request_services.php',data)
        .then((result) => {
            if (result.status == 200){
                console.log("request success ");
                const confirmation = confirm(" asking the admin to approve ")
                if(confirmation) {

                    const data2 = new FormData();
                    data2.append('user_id',patient);
                    axios
                    .post('http://localhost/healthnet/healthnet-backend/admin_approve.php',data2)
                    .then((result) => {
                        if (result.status == 200){
                            console.log("approve success ");
                            window.location.href = "../Index.html";
                        }
                    })
                    .catch((err) => {
                            console.error('Error in outer API call:', err);
                    });                    
                }
            }
        })
        .catch((err) => {
                console.error('Error in outer API call:', err);
        });
})

