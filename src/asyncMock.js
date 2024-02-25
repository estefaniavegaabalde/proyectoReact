// asyncMock.js
const products = [
    {
        id: '1',
        name: 'Remera 1',
        price: 4500,
        img: 'https://i.postimg.cc/ydyQH8bR/remera1.jpg',
        category: 'remera',
        stock: 25,  
        description: 'descripcion de remera 1'
    },
    {
        id: '2',
        name: 'Pantalon 1',
        price: 8000,
        img: 'https://i.postimg.cc/s2XDSMpj/pantalon2.jpg',
        category: 'pantalon',
        stock: 15,
        description: 'Descripción del pantalón 1.'

    },
    {
        id: '3',
        name: 'Vestido 1',
        price: 6000,
        img: 'https://i.postimg.cc/KcgjJ3C4/vestido2.jpg',
        category: 'vestido',
        stock: 20,
        description: 'Descripción vestido 1'
    }
];

export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (category) {
                resolve(products.filter(product => product.category === category));
            } else {
                resolve(products);
            }
        }, 500);
    });
};

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};
