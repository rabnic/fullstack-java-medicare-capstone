export interface Order {
    id: number | 0;
    fullName: string | null;
    address: string | null;
    email: string | null;
    phone: string | null;
    date: string;
    quantity: number;
    totalAmount: number;
    productIDs: number[];
}

