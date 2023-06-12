export const SingleProductQuery = `
    #graphql
    query SingleProduct($user: String,$pass: String) {
        products(filter: {username: {_eq: $user} password:{_eq: $pass}}) {
            id
            username
            p_latitud
            p_longitud
        }
    }
`
