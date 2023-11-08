//function for the clear button
function clearForm() {
    document.getElementById("retirementForm").reset();
    document.getElementById("summaryTable").classList.add("hidden");
    document.getElementById("detailTable").classList.add("hidden");
}
//function for the default button that sets input
function setDefaults() {
    document.getElementById("startingAge").value = 25;
    document.getElementById("retirementAge").value = 65;
    document.getElementById("startingSalary").value = 50000;
    document.getElementById("annualSavings").value = 10.0.toFixed(1);
    document.getElementById("annualRaise").value = 2.0.toFixed(1);
    document.getElementById("interestRate").value = 7.0.toFixed(1);
}
//function for the makeMeRich button
document.getElementById("retirementForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve user input values from the form
    let startingAge = parseFloat(document.getElementById("startingAge").value);
    let retirementAge = parseFloat(document.getElementById("retirementAge").value);
    let startingSalary = parseFloat(document.getElementById("startingSalary").value);
    let annualSavings = parseFloat(document.getElementById("annualSavings").value);
    let annualRaise = parseFloat(document.getElementById("annualRaise").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);

    // Calculate total years to invest and initialize financial variables
    let totalYearsToInvest = retirementAge - startingAge;
    let retirementFund = 0;
    let lifetimeSalary = 0;
    let totalSaved = 0;
    let earnedInterest = 0;

    const detailTableBody = document.getElementById("detailTableBody");

    detailTableBody.innerHTML = '';

    //loop through each year
    for (let i = 1; i <= totalYearsToInvest; i++) {
       
        const newRow = document.createElement("tr");

        
        newRow.innerHTML = `
            <td><span id="currentAge${i}"></span></td>
            <td><span id="currentSalary${i}"></span></td>
            <td><span id="currentSavings${i}"></span></td>
            <td><span id="currentInterest${i}"></span></td>
            <td><span id="currentRetirement${i}"></span></td>
        `;

      
        detailTableBody.appendChild(newRow);
        
        //calculation
        let currentSalary = startingSalary * (1 + (annualRaise / 100));
        let currentSavings = currentSalary * (annualSavings / 100);
        let currentRetirement = retirementFund + currentSavings;
        let currentInterest = currentRetirement * (interestRate / 100);

        retirementFund = currentRetirement + currentInterest;
        totalYearsToInvest--;
        lifetimeSalary += currentSalary;
        totalSaved += currentSavings;
        earnedInterest += currentInterest;

        document.getElementById("currentAge" + i).textContent = startingAge + i - 1;
        document.getElementById("currentSalary" + i).textContent = currentSalary.toFixed(2);
        document.getElementById("currentSavings" + i).textContent = currentSavings.toFixed(2);
        document.getElementById("currentInterest" + i).textContent = currentInterest.toFixed(2);
        document.getElementById("currentRetirement" + i).textContent = currentRetirement.toFixed(2);
    }
    //update tables with calculation
    document.getElementById("yearsToInvest").textContent = retirementAge - startingAge;
    document.getElementById("retirementFund").textContent = retirementFund.toFixed(2);
    document.getElementById("lifetimeSalary").textContent = lifetimeSalary.toFixed(2);
    document.getElementById("totalSaved").textContent = totalSaved.toFixed(2);
    document.getElementById("earnedInterest").textContent = earnedInterest.toFixed(2);

    //adds commas to number outputs
    formatSummaryTableNumbers();
    formatDetailTableNumbers();
    
    //show both tables
    document.getElementById("summaryTable").classList.remove("hidden");
    document.getElementById("detailTable").classList.remove("hidden");

    
});
