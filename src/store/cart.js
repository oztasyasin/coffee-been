import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCartStore = create(
    persist(
        (set) => ({
            cart: [],

            addToCart: (product) => set((state) => {
                const productExists = state.cart.find(item => item.id === product.id);

                if (productExists) {
                    return {
                        cart: state.cart.map(item =>
                            item.id === product.id ? { ...item, count: item.count + 1 } : item
                        ),
                    };
                } else {
                    return {
                        cart: [...state.cart, { ...product, count: 1 }],
                    };
                }
            }),

            increaseCount: (id) => set((state) => ({
                cart: state.cart.map(item =>
                    item.id === id ? { ...item, count: item.count + 1 } : item
                ),
            })),

            decreaseCount: (id) => set((state) => ({
                cart: state.cart
                    .map(item =>
                        item.id === id ? { ...item, count: item.count - 1 } : item
                    )
                    .filter(item => item.count > 0),
            })),

            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
