const ctsresultroll = localStorage.getItem('roll');
const ctsresultdate = document.getElementById("ctsresultdate");
const ctsresultsearchButton = document.getElementById("ctsresultsearch"); // Renamed the button element to avoid naming conflict with the function
const ctserror = document.getElementById("ctsresulterror");

async function ctsresultsearch() {
    ctsresultsearchButton.innerText = "Searching..";
    ctsresultsearchButton.disabled = true;

    try {
        const response = await fetch(`https://server-as2k.onrender.com/getresult/cts/${ctsresultroll}/${ctsresultdate.value}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        
        if (response.ok) {
            ctserror.classList.add("none")
            const showctsresult = document.getElementById("ctsresultdisplay");
            showctsresult.innerHTML = `
            <div class="container mt-3 mb-5">
            <h3 class="text-center bold bottom-border mb-2 ">Your Result</h3>
            <div class="table-responsive">
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td class="bold" >Exam Type</td>
                            <td>${data.Exam_Type}</td>
                        </tr>
                        <tr>
                            <td class="bold" >Exam Date</td>
                            <td>${data.Exam_Date}</td>
                        </tr>
                        <tr>
                            <td class="bold" >Full Marks</td>
                            <td>${data.Full_Marks}</td>
                        </tr>
                        <tr>
                            <td class="bold" >Obtained Marks</td>
                            <td>${data.Obtained_Marks}</td>
                        </tr>
                        <tr>
                            <td class="bold" >Percentage</td>
                            <td>${(data.Obtained_Marks/data.Full_Marks)*100}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>`;
        }
        else {
            ctserror.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert" id="incorrectalert">
            <strong>Not Found!</strong> Exam Date is incorrect.
          </div>`;
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        ctsresultsearchButton.innerText = "Search";
        ctsresultsearchButton.disabled = false;
    }
}

ctsresultsearchButton.addEventListener('click', ctsresultsearch);
