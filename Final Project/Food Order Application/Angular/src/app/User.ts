export interface User{
   
    userId: number
    fullName: string
    email: string
    passwordHash: string
    role:string
    orders: []
    ownedRestaurants: []
    deliveries: []
}