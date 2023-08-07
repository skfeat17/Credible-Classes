const addstdbtn = document.getElementById("addexamdata")

async function addexamdatat() {
    addstdbtn.innerText = "Saving.."
    addstdbtn.disabled = true;

    const addexamtype = document.getElementById("addexamtype").value;
    const addexamdate = document.getElementById("addexamdate").value;
    const addexamroll = document.getElementById("addexamroll").value;
    const addfullmarks = document.getElementById("addfullmarks").value;
    const addexammarks = document.getElementById("addexammarks").value;

    try {
        const response = await fetch(`https://server-as2k.onrender.com/updateresult/${addexamroll}/${addexamtype}/${addexamdate}/${addfullmarks}/${addexammarks}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            alert("Marks saved to Database successfully");
        } else {
            alert("Error ocurred");
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        addstdbtn.innerText = "Save Students Marks"
        addstdbtn.disabled = false;
    }
}