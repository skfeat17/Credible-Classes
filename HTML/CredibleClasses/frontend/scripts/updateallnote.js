const addstdbtn = document.getElementById("alltrasnfernote");

async function transfernotes() {
    addstdbtn.innerText = "Transferring..";
    addstdbtn.disabled = true;

    const updateallclass = document.getElementById("updateallclass").value;
    const updateallsubject = document.getElementById("updateallsubject").value;
    const updateallnotename = document.getElementById("updateallnotename").value;
    const upadteallnotelink = document.getElementById("upadteallnotelink").value;
console.log(updateallclass,updateallnotename,updateallsubject,upadteallnotelink)
    const data = {
        note_name: updateallnotename,
        note_link: upadteallnotelink
    };

    try {
        const response = await fetch(`https://server-as2k.onrender.com/updatenotes/${updateallsubject}/${updateallclass}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        console.log(responseData);

        if (response.ok) {
            alert("Notes Transferred Success");
        } else {
            alert("Error occurred");
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        addstdbtn.innerText = "Transfer Notes";
        addstdbtn.disabled = false;
    }
}
