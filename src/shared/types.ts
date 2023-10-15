export type Nullable<T> = T | null;

export type Cart = {
	id: number;
	items: CartItem[];
	cart_total: number;
};

export type CartItem = {
	id: number;
	name: string;
	brand: string;
	price: number;
	status?: string;
	quantity: number;
	category: string;
};
