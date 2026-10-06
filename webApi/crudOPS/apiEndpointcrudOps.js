let apiEndpoint = 'https://jsonplaceholder.typicode.com/users'

var Henry = {
    "id": 20,
    "name": "Henry Cavallan",
    "website": "superman.com",
    "email": "Roy.Pedberg@katrina.biz",
    "company": {
        "name": "Superman plc",
        "catchPhrase": "WWhat goes around comes around"
    },
    "zipcode": "12428-2261"
}

async function createEmployee(employee) {
    let response = await fetch(apiEndpoint,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        }
    )
    return response.json()
}


async function showEmployee(id) {
    let response = await fetch(`${apiEndpoint}/${id}),
        {
            method: 'GET',
            headers: {"Content-Type": "application/json"},

        }
    )
    return response.json()
}


//  createEmployee(Henry)
// .then(data => console.log(data)

// showEmployee(10)
// .then(data => console.log(data)
