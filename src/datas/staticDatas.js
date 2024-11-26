import { CardStyleInterpolators } from "@react-navigation/stack";
import { Dimensions, Platform } from "react-native";
export const baseHeight = 812;
export const baseWidht = 375;
export const isIos = Platform.OS === 'ios';
const screen = Dimensions.get('window');
export const fullHeight = screen.height;
export const fullWidth = screen.width;
export const navigatorScreenOptions = {
    screenOptions: {
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: 'none',
    }
}
export const photoURL = "https://instagram.fada1-13.fna.fbcdn.net/v/t51.2885-19/378003406_309419415107003_7739899493114553396_n.jpg?_nc_ht=instagram.fada1-13.fna.fbcdn.net&_nc_cat=111&_nc_ohc=axAP1lf4NfoQ7kNvgH7LpkO&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYC8qggrFMMUaT03RF4H5LxxmUOtngf7a8up4s-L2LU-xA&oe=66A0B989&_nc_sid=8f1549"
export const shadow = {
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
}

export const promoData = [
    {
        key: 0,
        img: "https://plus.unsplash.com/premium_photo-1668472274328-cd239ae3586f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfDB8MHx8fDA%3D",
        title: "Free 1 Coffee",
        description: "Buy 10 Coffees and get 1 Coffee for free",
        remainingTime: 12,
        remain: 8,
        total: 10
    },
    {
        key: 1,
        img: "https://plus.unsplash.com/premium_photo-1663932463883-897e71481fc4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FmZXxlbnwwfDB8MHx8fDA%3D",
        title: "Buy 2 get 1",
        description: "Buy 2 Coffees and get 1 Coffee for free",
        remainingTime: 12,
    },
    {
        key: 2,
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhZmV8ZW58MHwwfDB8fHww",
        title: "25% discount up to IDR 20.000",
        description: "Buy Coffee and get discount up to 25%",
        remainingTime: 24,
    },
    {
        key: 3,
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhZmV8ZW58MHwwfDB8fHww",
        title: "35% discount up to IDR 10.000",
        description: "Buy Coffee and get discount up to 35%",
        remainingTime: 48,
    },
    {
        key: 4,
        img: "https://images.unsplash.com/photo-1457518919282-b199744eefd6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmt8ZW58MHwwfDB8fHww",
        title: "40% discount up to IDR 35.000",
        description: "Buy Coffee and get discount up to 50%",
        remainingTime: 72,
    },
    {
        key: 5,
        img: "https://plus.unsplash.com/premium_photo-1661540515873-0d7c4e07891a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJpbmt8ZW58MHwwfDB8fHww",
        title: "50% discount up to IDR 50.000",
        description: "Buy Coffee and get discount up to 50%",
        remainingTime: 12,
    },
]
const promoCopy = [...promoData];
export const promoGroups = [
    {
        title: "Hottest Promo",
        data: promoData.slice(0, 2)
    },
    {
        title: "Recomendation Promo",
        data: [...promoCopy.reverse()]
    }
]
export const languages = [
    {
        id: 0,
        name: "Türkçe",
        isoCode: "tr",
        langCode: "tr",
        size: 26
    },
    {
        id: 1,
        name: "English",
        isoCode: "us",
        langCode: "en",
        size: 26
    },
    {
        id: 2,
        name: "Français",
        isoCode: "fr",
        langCode: "fr",
        size: 26
    },
    {
        id: 3,
        name: "Nederlands",
        isoCode: "nl",
        langCode: "nl",
        size: 26
    },
    {
        id: 4,
        name: "Español",
        isoCode: "es",
        langCode: "es",
        size: 26
    },
    {
        id: 5,
        name: "Deutsch",
        isoCode: "de",
        langCode: "de",
        size: 26
    },
    {
        id: 6,
        name: "Русский",
        isoCode: "ru",
        langCode: "ru",
        size: 26
    }
];

export const peopleImage = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfDF8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHwxfDB8fHwy",
    "https://images.unsplash.com/photo-1672863542525-33ce46829448?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHVzZXJ8ZW58MHwxfDB8fHwy",
    "https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHVzZXJ8ZW58MHwxfDB8fHwy",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfDF8MHx8fDI%3D"
]

const reviewData = [
    {
        key: 0,
        user: {
            name: "Alex Stanton",
            title: "CEO at Bukalapak",
            photo: peopleImage[0]
        },
        comment: "We are very happy with the services of the Coffee Shop Application. Coffee Shop...",
    }
]
export const placesData = [
    {
        key: 0,
        name: "Coffee Been",
        address: "Bali, Indonesia",
        rating: 4.9,
        profiles: peopleImage,
        peopleCount: 101,
        image: "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNhZmV8ZW58MHwxfDB8fHwy",
        info: "Bali is an island in Indonesia known for its verdant volcanoes, unique rice terraces, beaches, and beautiful coral reefs. Before becoming a tourist attraction, Kuta was a trading port where local products were traded to buyers from outside Bali.",
    },
    {
        key: 1,
        name: "Coffee Been",
        address: "Bali, Indonesia",
        profiles: peopleImage,
        rating: 4.8,
        peopleCount: 101,
        image: "https://images.unsplash.com/photo-1601379342258-6f1e994c575c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhZmV8ZW58MHwxfDB8fHwy",
        info: "Bali is an island in Indonesia known for its verdant volcanoes, unique rice terraces, beaches, and beautiful coral reefs. Before becoming a tourist attraction, Kuta was a trading port where local products were traded to buyers from outside Bali.",
    },
    {
        key: 2,
        name: "Coffee Been",
        address: "Bali, Indonesia",
        profiles: peopleImage,
        rating: 4.6,
        peopleCount: 101,
        image: "https://images.unsplash.com/photo-1519452845394-8f77d3cc766c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNhZmV8ZW58MHwxfDB8fHwy",
        info: "Bali is an island in Indonesia known for its verdant volcanoes, unique rice terraces, beaches, and beautiful coral reefs. Before becoming a tourist attraction, Kuta was a trading port where local products were traded to buyers from outside Bali.",
    }
]


export const commetsData = [
    {
        key: 0,
        image: peopleImage[0],
        name: "Alex Stanton",
        title: "CEO at Bukalapak",
        rating: 4,
        date: "21 July 2022",
        comment: "We are very happy with the services of the Coffee Shop Application. Coffee Shop"
    },
    {
        key: 1,
        image: peopleImage[1],
        name: "Skylar Dias",
        title: "CEO at Amazon",
        rating: 3,
        date: "20 July 2022",
        comment: "We are very happy with the services of the Coffee Shop Application. Coffee Shop"
    },
    {
        key: 2,
        image: peopleImage[2],
        name: "John Doe",
        title: "CTO at Trendyol",
        rating: 3,
        date: "20 July 2022",
        comment: "We are very happy with the services of the Coffee Shop Application. Coffee Shop"
    },
    {
        key: 3,
        image: peopleImage[3],
        name: "Skylar Doe",
        title: "CTO at Trendyol",
        rating: 3,
        date: "20 July 2022",
        comment: "We are very happy with the services of the Coffee Shop Application. Coffee Shop"
    },
]
export const shop = [
    {
        id: 0,
        name: "Ice Americano",
        image: "https://images.unsplash.com/photo-1531835207745-506a1bc035d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwYW1lcmljYW5vfGVufDB8MXwwfHx8Mg%3D%3D",
        price: 100,
        categoyId: 1,
    },
    {
        id: 1,
        name: "Ice Latte",
        image: "https://images.unsplash.com/photo-1527156231393-7023794f363c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGljZSUyMGxhdHRlfGVufDB8MXwwfHx8Mg%3D%3D",
        price: 120,
    },
    {
        id: 4,
        name: "Ice FLat White",
        image: "https://images.unsplash.com/photo-1620360290038-71942f99fa96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZyYXBwZXxlbnwwfDF8MHx8fDI%3D",
        price: 127,
    },
    {
        id: 2,
        name: "Ice Mocha",
        image: "https://images.unsplash.com/photo-1642647392502-dcc287d39b74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGljZSUyMG1vY2hhfGVufDB8MXwwfHx8Mg%3D%3D",
        price: 135,
    },
    {
        id: 3,
        name: "Affogato",
        image: "https://images.unsplash.com/photo-1594631661960-34762327295a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFmZm9nYXRvfGVufDB8MXwwfHx8Mg%3D%3D",
        price: 140
    },
    {
        id: 5,
        name: "Milkshake",
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pbGtzaGFrZXxlbnwwfDF8MHx8fDI%3D",
        price: 160
    }
]

export const nominalTopUps = [
    {
        key: 0,
        id: 0,
        price: 50,
    },
    {
        id: 1,
        key: 1,
        price: 100,
    },
    {
        id: 2,
        key: 2,
        price: 200,
    },
    {
        id: 3,
        key: 3,
        price: 250,
    }
]

export const historyData = [
    {
        id: 0,
        isIncome: true,
        type: "Top Up",
        price: 700,
        description: "Congratulations, you have successfully made a top up of",
        date: "22 August 2022, 04:00 PM"
    },
    {
        id: 1,
        isIncome: false,
        type: "Buy Coffee",
        price: 120,
        description: "Congratulations, you have successfully made a coffee purchase",
        date: "22 August 2022, 10:00 AM"
    },
    {
        id: 2,
        isIncome: false,
        type: "Milkshake",
        price: 130,
        description: "Congratulations, you have successfully made a top up of",
        date: "17 August 2022, 08:00 AM"
    },
    {
        id: 3,
        isIncome: false,
        type: "Caffee Meetings",
        price: 420,
        description: "Congratulations, you have successfully made a top up of",
        date: "17 August 2022, 08:00 AM"
    },
    {
        id: 4,
        isIncome: true,
        type: "Top Up",
        price: 1000,
        description: "Congratulations, you have successfully made a top up of",
        date: "12 August 2022, 07:00 AM"
    },
]

export const historyGroups = [
    {
        id: 0,
        title: "Recent activity",
        data: historyData.slice(0, 2)
    },
    {
        id: 1,
        title: "Last Week",
        data: historyData.slice(2)
    }
]