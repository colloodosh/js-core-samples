const greetUser = () => {
    console.log('Hello User');
}
setTimeout(greetUser, 2000);

setInterval(greetUser, 3000);

// Recursive setTimeouts
setTimeout(() => {
    setTimeout(greetUser, 100);
}, 100);