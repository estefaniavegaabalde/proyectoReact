const products = [
    {
        id: '1',
        name: 'Remera 1',
        price: 4500,
        category: 'remera',
        stock: 25,  
        description: 'descripcion de remera 1'
    },
    {
        id: '2',
        name: 'Pantalon 1',
        price: 8000,
        category: 'pantalon',
        stock: 15,
        description: 'Descripción del pantalón 1.'

    },
    {
        id: '3',
        name: 'Vestido 1',
        price: 6000,
        category: 'vestido',
        stock: 20,
        description: 'Descripción vestido 1'
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
})
}
export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export default asyncMock