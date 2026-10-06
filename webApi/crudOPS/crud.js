let url = 'https://api.restful-api.dev/objects'

var samsung = {
    "id": 14,
    "name": "Samsung s21 Ultra",
    "data": {
        "capacity": "256GB",
        "processor": "Snapdragon 888",
        "price": 1200,
        "Screen size": "6.8 inch",

    },
    "price": 1000,
    "color": "black"
}

async function createphone(phone) {
    let response = await fetch(url,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(phone)
        }
    )
    return response.json()
}




async function editphone(phone , id) {
    let response = await fetch(`${url}/${id}`,
        {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(phone)

        })
    return response.json()
}

async function showonephone(id){
    let response = await fetch(`${url}/${id}`,
        {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        })
    return response.json()
}


async function deletephone(id) {
    let response = await fetch(`${url}/${id}`,
        {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"}
        })
    return response.json()
}


// createphone(samsung)
// .then(data => console.log(data)
// )

// editphone(samsung, 'ff808181a09d98f701a0aea82b2925d4')
// .then(data => console.log(data)
// )

// showonephone(13)
// .then(data => console.log(data)
// )

deletephone('ff808181a09d98f701a0aea82b2925d4')
.then(data => console.log(data)
)

let apiEndpoint = "https://jsonplaceholder.typicode.com/users"