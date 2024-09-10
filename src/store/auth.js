import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            setAuthData: (data) => set(() => ({
                user: data?.user,
                token: data?.token
            })),
            setUser: (data) => set(() => ({
                user: data
            })),
            setToken: (data) => set(() => ({
                token: data
            }))
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);