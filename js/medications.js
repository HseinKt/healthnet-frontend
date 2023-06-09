const submit_button = document.getElementById("submit_button")

axios
    .get("http://localhost/healthnet/healthnet-backend/display_medications.php")
    .then((response) => {
        const DATA = response.data;
        let my_table = document.getElementById("my_table");
        DATA.map((data) => {
            let div = document.createElement("div");
            div.innerHTML = `
                <tr>
                    <td>- ${data.id}       </td>
                    <td>${data.name}      : </td>
                    <td>${data.cost} $</td>
                </tr>`
            my_table.appendChild(div);
        });
    })
    .catch((err) => {
        console.error(err);
    });    

submit_button.addEventListener('click', () => {
    const user_id = document.getElementById("user_id").value
    const medication_id = document.getElementById("medication_id").value
    const quantity = document.getElementById("quantity").value
    
    const data = new FormData();
    data.append('user_id',user_id)
    data.append('medication_id',medication_id)
    data.append('quantity',quantity)

    axios
        .post("http://localhost/healthnet/healthnet-backend/choose_medication.php",data)
        .then((result) => {
            console.log(result);
            if (result.status == 200) {
                console.log("request success ");
                const confirmation = confirm(" diplay patient medications: ")
                if(confirmation) {
                    const data2 = new FormData();
                    data2.append('user_id',user_id);
                    axios
                    .post('http://localhost/healthnet/healthnet-backend/display_patient_medications.php',data2)
                    .then((result) => {
                        if (result.status == 200){
                            alert(JSON.stringify(result.data));
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
            console.error(err);
        });
})