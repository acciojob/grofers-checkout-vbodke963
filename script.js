const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    // select all price elements
    const prices = document.querySelectorAll(".prices");

    let total = 0;

    // calculate total
    prices.forEach((price) => {
        total += Number(price.innerText);
    });

    // create new row
    const tr = document.createElement("tr");

    // create new cell
    const td = document.createElement("td");

    td.colSpan = 2;
    td.innerText = total;

    tr.appendChild(td);

    // append row to table
    document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);