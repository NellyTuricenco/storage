// var userName = prompt("Please enter your name");

// if (userName.length <= 2) {
//     alert("Please try once again");
// } else {
//     window.localStorage.setItem('name', userName);
// }

// window.onload = function () {
//     var storedValue = window.localStorage.getItem('name');
//     if (storedValue !== null) {
//         document.getElementById("myP").innerHTML = "Hello " + userName
//     } else {
//         document.getElementById("myP").innerHTML = "Hello guest";
//     }
// }

var localStorageKey = "userName";

function showMessage() {
    var localStorageValue = localStorage.getItem(localStorageKey);

    document.getElementById("myP").innerHTML = localStorageValue ? "Hello " + localStorageValue : "Hello guest";
}

function handleReset() {
    localStorage.removeItem(localStorageKey);

    showMessage();
}

function handlePrompt() {
    var userName = prompt("Please enter your name");

    if (!userName) {
        alert("Please try once again");
        return;
    } else if (userName.length <= 2) {
        alert("Please try once again");
        handleReset();
    } else {
        window.localStorage.setItem(localStorageKey, userName);
    }

    showMessage();
}

showMessage();

document.getElementById('reset').addEventListener('click', handleReset);
document.getElementById('prompt').addEventListener('click', handlePrompt);