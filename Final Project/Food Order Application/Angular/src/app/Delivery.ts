export interface Delivery {
    deliveryId: number;        // Unique ID for the delivery
    orderId: number;           // Foreign key to Order
    deliveryStaffId: number;   // Foreign key to User (Delivery Staff)
    pickupTime?: Date | null;          // Time when the delivery was picked up
    deliveryTime?: Date | null; // Time when the delivery was completed (nullable)
    status: string;            // Current status (Assigned, PickedUp, Delivered)
  }
  