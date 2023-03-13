
const employee = document.getElementById("employee")
const patient = document.getElementById("patient")

patient.addEventListener('click', () => {
    const hospital_id = document.getElementById("hospital_id").value
    const user_id = document.getElementById("user_id").value
    const is_active = document.getElementById("is_active").value

    const data = new FormData();
    data.append('hospital_id',hospital_id);
    data.append('user_id',user_id);
    data.append('is_active',is_active);

    axios
        .post('http://localhost/healthnet/healthnet-backend/patient_assigned.php',data)
        .then((result) => {
            if (result.status == 200){
                console.log("Patient success ");
                alert("Patient success")
            }
        })
        .catch((err) => {
                console.error('Error in outer API call:', err);
        });
})


employee.addEventListener('click', () => {
    const hospital_id = document.getElementById("hospital_id").value
    const user_id = document.getElementById("user_id").value
    const is_active = document.getElementById("is_active").value

    const data = new FormData();
    data.append('hospital_id',hospital_id);
    data.append('user_id',user_id);
    data.append('is_active',is_active);

    axios
        .post('http://localhost/healthnet/healthnet-backend/employee_assigned.php',data)
        .then((result) => {
            if (result.status == 200){
                console.log("Employee success ");
                alert("Employee success")
            }
        })
        .catch((err) => {
                console.error('Error in outer API call:', err);
        });
})

