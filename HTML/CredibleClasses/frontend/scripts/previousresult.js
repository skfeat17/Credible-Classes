const resultsContainer = document.getElementById("results-container");

fetch("https://server-as2k.onrender.com/previousresult/2021")
    .then(response => response.json())
    .then(data => {
        data.results.forEach(result => {
            const card = createCard(result);
            resultsContainer.appendChild(card);
        });
    })
    .catch(error => console.error("Error fetching data:", error));

function createCard(result) {
    const card = document.createElement("div");
    card.className = "card m-3 d-inline-block shadow";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const examTitle = document.createElement("h5");
    examTitle.className = "text-center font-weight-bold border-bottom mt-2";
    examTitle.textContent = `${result.Exam_Type} ${result.Exam_Date} Result`;

    const table = document.createElement("table");
    table.className = "table table-bordered";

    const tbody = document.createElement("tbody");

    const rows = [
        ["Exam Type", result.Exam_Type],
        ["Exam Date", result.Exam_Date],
        ["Full Marks", result.Full_Marks],
        ["Obtained Marks", result.Obtained_Marks],
        ["Percentage", `${((result.Obtained_Marks / result.Full_Marks) * 100).toFixed(2)}%`]
    ];

    rows.forEach(rowData => {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        cell1.className = "font-weight-bold";
        cell1.textContent = rowData[0];
        cell2.textContent = rowData[1];
        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    cardBody.appendChild(examTitle);
    cardBody.appendChild(table);
    card.appendChild(cardBody);

    return card;
}