   
export interface Restaurant{
   
  
    restaurantId:number,
    name: string,
    address: string,
    phoneNumber:string,
    rating: number,
    cuisineType:string,
    image: string,
    isActive: boolean,
    ownerId: number,
    owner?:any[],
    menuItems?: any[],
    orders?: any[]
  }