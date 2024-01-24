const fetch = require('node-fetch');
// async always returns a promise
// async & await are not support in IE but only on modern browsers

const getTodos = async () => {
    const response = await fetch('https://fakestoreapi>>>.com/products/1');
    if (response.status !== 200) {
        throw new Error();
    }
    const data = await response.json();
    return data;
};

console.log(1)
console.log(2)
getTodos().then(data => {
    console.log('getTodos() => ', data);
}).catch(err => {
     console.log('Error encountered while processing...',err);
});

console.log(3)
console.log(4)

const fetchProducts = async () => {
    return await fetch('https://fakestoreapi.com/products/1')
};

fetchProducts()
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    }).catch((err) => {
    console.log(err);
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