
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
                console.log("acess 1");
                console.log(result.data.id);
                window.location.href = "../Index.html"
            }
        })
        .catch((err) => {
                console.error('Error in outer API call:', err);
        });
})

