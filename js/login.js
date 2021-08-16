var user = [
    {
        Email: "mylo@gmail.com",
        password: "mylo1234"
    },
    {
        Email: "ashwin@gmail.com",
        password: "ashw1234"
    },
    {
        Email: "abilash@gmail.com",
        password: "abil1234"
    },
    {
        Email: "anish@gmail.com",
        password: "anis1234"
    },
    {
        Email: "niru@gmail.com",
        password: "niru1234"
    }
]
function login() {
    var Email = document.getElementById("Email").value
    var password = document.getElementById("password").value

    for (var x = 0; x < user.length; x++) {
        if (Email == user[x].Email && password == user[x].password) {
            alert("Login Successful")
            return
        } else {
            alert("Login Unsuccessful")
        };
    };

};
