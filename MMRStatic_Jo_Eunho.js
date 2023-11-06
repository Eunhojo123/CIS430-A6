function clearForm() {
    document.getElementById("retirementForm").reset();
    document.getElementById("summaryTable").classList.add("hidden");
    document.getElementById("detailTable").classList.add("hidden");
}

function setDefaults() {
    document.getElementById("startingAge").value = 25;
    document.getElementById("retirementAge").value = 65;
    document.getElementById("startingSalary").value = 50000;
    document.getElementById("annualSavings").value = 10.0.toFixed(1);
    document.getElementById("annualRaise").value = 2.0.toFixed(1);
    document.getElementById("interestRate").value = 7.0.toFixed(1);
}

document.getElementById("retirementForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("summaryTable").classList.remove("hidden");
    document.getElementById("detailTable").classList.remove("hidden");
});
