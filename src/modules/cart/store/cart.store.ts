import { IProduct } from '@/modules/products';
import { toast } from 'sonner';
import { StateCreator, create } from 'zustand';

interface ICart {
    product: IProduct;
    quantity: number;
}

interface CartState {
    cart: ICart[];
    total: number;
    isCartOpen: boolean;
}


interface Actions {
    calcTotal: () => void;
    cleanCart: () => void;
    handleCartOpen: () => void;
    addProductToCart: (product: IProduct) => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
}

const storeApi: StateCreator<CartState & Actions> = (set, get) => ({
    cart: [],
    total: 0,
    isCartOpen: false,

    handleCartOpen: () => {
        const { isCartOpen } = get();
        set({ isCartOpen: !isCartOpen })
        console.log(isCartOpen);
    },

    addProductToCart: (product: IProduct) => {
        const { cart } = get();

        const productExists = cart.some(item => item.product.id === product.id)

        if (!productExists) {
            set({
                cart: [...cart, { product, quantity: 1 }]
            })

            toast.success('Product agregado al carrito')

            return;
        }

        toast.warning('El producto ya se agrego')

    },

    incrementQuantity: (id: number) => {
        const { cart, calcTotal } = get()

        const updateCartProducts = cart.map((item) => {
            if (item.product.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            }

            return item;
        })


        set({ cart: updateCartProducts })
        calcTotal();
    },



    decrementQuantity(id: number) {
        const { cart, calcTotal } = get()

        const updateCartProducts = cart.map((item) => {

            if (item.quantity === 1) {
                return item;
            }

            if (item.product.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            }

            return item;
        })


        set({ cart: updateCartProducts })
        calcTotal();
    },

    removeProductToCart(id: number) {
        const { cart, calcTotal } = get()

        const updateCartProducts = cart.filter((item) => item.product.id != id);

        set({ cart: updateCartProducts });
        calcTotal();

    },

    cleanCart: () => {
        set({ cart: [], total: 0 });
    },

    calcTotal: () => {
        const { cart } = get();
        let subTotal = 0;

        cart.forEach((item) => {
            subTotal += +item.product.price * item.quantity
        })

        set({ total: subTotal });
    }

})


export const useCartStore = create<CartState & Actions>()(
    storeApi
);