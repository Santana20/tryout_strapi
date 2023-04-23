module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/list_clothes',
            handler: 'cloth.listClothes',
            config: {
                auth: false,
            }
        }
    ]
}