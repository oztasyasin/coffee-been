import CreateNewPassword from "../pages/auth/login/CreateNewPassword";
import ForgotPassword from "../pages/auth/login/ForgotPassword";
import Login from "../pages/auth/login/Login";
import Register1 from "../pages/auth/register/Register1";
import Register2 from "../pages/auth/register/Register2";
import Register3 from "../pages/auth/register/Register3";
import Register4 from "../pages/auth/register/Register4";
import Register5 from "../pages/auth/register/Register5";
import CoverPlace from "../pages/main/Home/CoverPlace";
import History from "../pages/main/Home/History";
import Pay from "../pages/main/Home/Pay";
import PlaceDetail from "../pages/main/Home/PlaceDetail";
import Promo from "../pages/main/Home/Promo";
import TopUp from "../pages/main/Home/TopUp";
import Main from "../pages/main/Main";
import Onboarding1 from "../pages/onboarding/Onboarding1";
import Onboarding2 from "../pages/onboarding/Onboarding2";
import Onboarding3 from "../pages/onboarding/Onboarding3";

export const routes = [
    {
        key: 0,
        name: "/onboarding1",
        component: Onboarding1,
        options: {
            gestureEnabled: false
        },
        initialParams: {
            image: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfDF8MHx8fDI%3D"
        },
    },
    {
        key: 1,
        name: "/onboarding2",
        component: Onboarding2,
        options: {
            gestureEnabled: true
        },
        initialParams: {
            image: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfDF8MHx8fDI%3D"
        },
    },
    {
        key: 2,
        name: "/onboarding3",
        component: Onboarding3,
        options: {
            gestureEnabled: true
        },
        initialParams: {
            image: "https://images.unsplash.com/photo-1522120331923-bd99e51eb26e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhZmV8ZW58MHwxfDB8fHwy"
        },
    },
    {
        key: 3,
        name: "/login",
        component: Login,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 4,
        name: "/forgotPassword",
        component: ForgotPassword,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 5,
        name: "/createNewPassword",
        component: CreateNewPassword,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 6,
        name: "/register1",
        component: Register1,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 7,
        name: "/register2",
        component: Register2,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 8,
        name: "/register3",
        component: Register3,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 9,
        name: "/register4",
        component: Register4,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 10,
        name: "/register5",
        component: Register5,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 11,
        name: "/main",
        component: Main,
        options: {
            gestureEnabled: false
        },
    },
    {
        key: 12,
        name: "/topUp",
        component: TopUp,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 13,
        name: "/pay",
        component: Pay,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 14,
        name: "/promo",
        component: Promo,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 15,
        name: "/history",
        component: History,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 16,
        name: "/coverPlace",
        component: CoverPlace,
        options: {
            gestureEnabled: true
        },
    },
    {
        key: 17,
        name: "/placeDetail",
        component: PlaceDetail,
        options: {
            gestureEnabled: true
        },
    }
]