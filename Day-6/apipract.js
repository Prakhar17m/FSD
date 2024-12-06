// function getData() {
//     fetch("https://api.github.com/users").then((response)=> {
//         const data = response.json();
//         return data;
//     }).then((response)=>{
//         const data =document.getElementById("parent");
//         data.innerHTML = response[0].login;
//         data.innerHTML = response[0].id;
//         data.innerHTML = response[0].avatar_url;
        

//     })
// }





    function getData() {
        const parentDiv = document.getElementById("parent");
        const data = document.getElementById().value()
        fetch("https://api.github.com/users")
            .then(response => response.json())
            .then(data => {
                parentDiv.innerHTML = `
                    <p><strong>Username:</strong> ${data.login}</p>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                    <p><strong>Followers:</strong> ${data.followers}</p>
                    <img src="${data.avatar_url}" alt="Avatar" width="100">
                `;
            })
            
    }


