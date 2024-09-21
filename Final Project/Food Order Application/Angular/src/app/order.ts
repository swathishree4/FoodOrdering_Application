import { Delivery } from "./Delivery";

export interface Order {
    orderId: number;
    customerName: string;        // Optional property
    customerEmail?: string;       // Optional property
    customerPhone: string;       // Optional property
    customerPlatNo: string;      // Optional property
    customerStreet: string;      // Optional property
    customerCity: string;        // Optional property
    customerState: string;       // Optional property
    totalPrice: number;
    deliveries: any[]; 
        // Optional property, Delivery interface should also be defined
  }