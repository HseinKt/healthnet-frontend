
const submit_button = document.getElementById("submit_button")

submit_button.addEventListener('click', () => {
    const patient = document.getElementById("patient").value
    const department = document.getElementById("department").value
    const room = document.getElementById("room").value
    const bed = document.getElementById("bed").value

    const data = new FormData();
    data.append('user_id',patient);
    data.append('department_id',department);
    data.append('room_id',room);
    data.append('bed_id',bed);

    axios
        .post('http://localhost/healthnet/healthnet-backend/book-a-room.php',data)
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

