var userName = prompt("Please enter your name");

if (userName.length <= 2) {
    alert("Please try once again");
} else {
    window.localStorage.setItem('name', userName);
}

window.onload = function () {
    var storedValue = window.localStorage.getItem('name');
    if (storedValue !== null) {
        document.getElementById("myP").innerHTML = "Hello " + userName
    } else {
        document.getElementById("myP").innerHTML = "Hello guest";
    }
}
