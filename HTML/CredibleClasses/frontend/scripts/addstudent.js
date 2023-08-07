const addstdbtn = document.getElementById("addstdbtn")

async function addnewstudent() {
    addstdbtn.innerText = "Adding.."
    addstdbtn.disabled = true;

    const addstdname = document.getElementById("addstdname").value;
    const addstdclass = document.getElementById("addstdclass").value;
    const addstdroll = document.getElementById("addstdroll").value;
    const addstdpass = document.getElementById("addstdpass").value;

    console.log(addstdclass, addstdname, addstdpass, addstdroll);

    try {
        const response = await fetch(`https://server-as2k.onrender.com/signup/${addstdname}/${addstdroll}/${addstdpass}/${addstdclass}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            alert("Student added successfully");
        } else {
            alert("Student not added");
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        addstdbtn.innerText = "Add Student"
        addstdbtn.disabled = false;
    }
}