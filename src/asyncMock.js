const products = [
    {
        id: '1',
        name: 'Remera 1',
        price: 4500,
        category: 'remera',
        img: 'https://www.freepik.com/free-photo/smiling-passionate-woman-dress-high-heels_3882549.htm#fromView=image_search_similar&page=1&position=12&uuid=be4e3e75-dc45-4cd8-8f81-4f50c80d5d54',
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