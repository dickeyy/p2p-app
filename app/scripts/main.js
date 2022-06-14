// Sign Up Function
export const signUp = (email, password, username) => {
    if (email == null) {
        return
    }  

    fetch('https://api.mirky.app/auth/signup', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: {
            "email": email,
            "password": password,
            "username": username,
            "apiKey": 'A1QLvjgLty6iwZAiX2xhytgJvALZyl5LanOlGwUVYnfFP8WIzkLIdO06Em9vVwURjcOnn773utJ1HK2nAbkIWzrqGBR9CY7yvdCwgNvBsnU0xEaBgHtUoW235YdAINGYDLhhkLZCJB79FyNmvwX1VG5X5FEnd7j99EiQO8OzCyCene6nYJce3PJpPTjem69oHwnckhxiCPg4v52IIQE3IxvPcFBjE2G7n5oTeoZgHaxRcOGRBRKCi8WL87I7IGRd'
        }
    }).then(response => {
        response.json()

        console.log(response)
    })
    
    .catch(err => console.error(err));

}