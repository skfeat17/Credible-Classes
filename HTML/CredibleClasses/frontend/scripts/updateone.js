const addstdbtn = document.getElementById("onetrasnfernote");

async function onetransfernotes() {
    addstdbtn.innerText = "Transferring..";
    addstdbtn.disabled = true;

    const updateoneroll = document.getElementById("updateoneroll").value;
    const updateonesubject = document.getElementById("updateonesubject").value;
    const updateonenotename = document.getElementById("updateonenotename").value;
    const upadteonenotelink = document.getElementById("upadteonenotelink").value;


    const data = {
        note_name: updateonenotename,
        note_link: upadteonenotelink
    };

    try {
        const response = await fetch(`https://server-as2k.onrender.com/updatenoteone/${updateonesubject}/${updateoneroll}`, {
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
        addstdbtn.innerText = "Transfer Note";
        addstdbtn.disabled = false;
    }
}
