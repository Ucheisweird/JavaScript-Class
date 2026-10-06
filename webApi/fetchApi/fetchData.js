let apiendpoint = "https://jsonplaceholder.typicode.com/users"

fetch(apiendpoint)
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => console.log('thanks')
)