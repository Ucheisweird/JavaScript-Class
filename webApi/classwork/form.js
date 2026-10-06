const userApi = "https://jsonplaceholder.typicode.com/users"

let employeeName = document.getElementById("employeeName").value;
let userName = document.getElementById("userName").value;
let phoneNumber = document.getElementById("phoneNumber").value;
let email = document.getElementById("email"), value;
let street = document.getElementById("street").value;
let companyName = document.getElementById("companyName").value;
let catchPhrase = document.getElementById("catchPhrase").value;
let suite = document.getElementById("suite").value;
let city = document.getElementById("city").value;

let data = {
    "employeeName": "employeeName",
    "userName": "userName",
    "phoneNumber": "phoneNumber",
    "email": "email",
    "street": "street",
    "companyName": "companyName",
    "catchPhrase": "catchPhrase",
    "suite": "suite",
    "city": "city"
}

    fetch(userApi,
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }
    ).then(res => res.json())
    .then(data => console.log(data)
)


console.log(createData(data));

console.log(employeeName, userName, phoneNumber, email, street, companyName, catchPhrase, suite, city);

document.createElement;
let row = document.createElement("tr");
let cell = document.createElement("td");
let cell2 = document.createElement("td");
let cell3 = document.createElement("td");
let cell4 = document.createElement("td");
let cell5 = document.createElement("td");
let cell6 = document.createElement("td");
let cell7 = document.createElement("td");
let cell8 = document.createElement("td");
let cell9 = document.createElement("td");

cell.textContent = employeeName;
cell2.textContent = userName;
cell3.textContent = phoneNumber;
cell4.textContent = email;
cell5.textContent = street;
cell6.textContent = companyName;
cell7.textContent = catchPhrase;
cell8.textContent = suite;
cell9.textContent = city;
row.appendChild(cell);











