const fetch = require('node-fetch');

const fetchProducts = async () => {
    return await fetch('https://fakestoreapi.com/products/1')
};

fetchProducts().then((res) => res.json()).then((data) => {
    console.log(data)
});

const respondAfterXSeconds = new Promise((resolve) => {
    let x = 0;
    while (x != 9) {
        setTimeout(() => {
            resolve('Responded After X Secs.' + new Date());
        }, 10000);
        console.log(x + '- ' + new Date());
        x++;
    }
});

respondAfterXSeconds.then((res) => {
    console.log(res);
}).finally(() => {
    console.log('Finally Responded')
});


const respondAfterYSeconds = async () => {
    setTimeout(() => {
        console.log(new Date());
    }, 10000);
};


respondAfterYSeconds();