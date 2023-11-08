//adds commas in numbner outputs

function addCommasToNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatSummaryTableNumbers() {
    document.getElementById("yearsToInvest").textContent = addCommasToNumber(document.getElementById("yearsToInvest").textContent);
    document.getElementById("retirementFund").textContent = addCommasToNumber(document.getElementById("retirementFund").textContent);
    document.getElementById("lifetimeSalary").textContent = addCommasToNumber(document.getElementById("lifetimeSalary").textContent);
    document.getElementById("totalSaved").textContent = addCommasToNumber(document.getElementById("totalSaved").textContent);
    document.getElementById("earnedInterest").textContent = addCommasToNumber(document.getElementById("earnedInterest").textContent);
}

function formatDetailTableNumbers() {
    const detailTable = document.getElementById("detailTable");
    const rows = detailTable.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            const cellContent = cells[j].textContent;
            if (!isNaN(parseFloat(cellContent))) {
                cells[j].textContent = addCommasToNumber(cellContent);
            }
        }
    }
}
