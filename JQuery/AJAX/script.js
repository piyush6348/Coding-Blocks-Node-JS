$(() => {
    const getRequestButton = $('#getRequestButton')
    const userList = $('#userList')

    getRequestButton.click(() => {
        $.get('https://reqres.in/api/users', (response) => {
            console.log(response);
            for(let user of response.data) {
                userList.append(`<li>${user.first_name} ${user.last_name}</li>`)
            }
        })
    })
})