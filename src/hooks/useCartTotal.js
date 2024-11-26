import { useEffect, useState } from "react";
import { useCartStore } from "../store/cart";

const useCartTotal = () => {
    const [total, setTotal] = useState(0);
    const { cart } = useCartStore();

    useEffect(() => {
        const calculateTotal = () => {
            const totalAmount = cart.reduce((acc, item) => {
                return acc + item.count * item.price;
            }, 0);
            setTotal(totalAmount);
        };

        calculateTotal();
    }, [cart]);

    return total;
};

export default useCartTotal;
