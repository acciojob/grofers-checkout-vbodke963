const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    const prices = document.querySelectorAll(".prices");

    let sum = 0;

    prices.forEach((price) => {
        sum += Number(price.innerText);
    });

    // create row
    const newRow = document.createElement("tr");

    // create cell
    const newCell = document.createElement("td");

    // required id
    newCell.setAttribute("id", "ans");

    // total value
    newCell.innerText = sum;

    // append cell to row
    newRow.appendChild(newCell);

    // append row to table
    document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);