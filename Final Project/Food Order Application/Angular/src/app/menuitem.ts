export interface MenuItem {
    menuItemId: number;
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    image: string;
    restaurantId?: number;
}