export interface BusProps {
    id: number;
    name: string;
    image: string;
    number: number;
    ligne: string;
    departureTime: string;
    outboundRoute: string;
    returnRoute: string;
    stops: { lat: number; lng: number; name: string }[];
}


export const BusData = [
    {
        id: 1,
        name: "Bus de la vallée",
        image: "/assets/images/bus/10.png",
        number: 452,
        ligne: "Karpala",
        departureTime: "6h : 00",
        outboundRoute: "KARPALA - PLACE DE LA NATION",
        returnRoute: "PLACE DE LA NATION - KARPALA",
        stops: [
            { lat: 12.317015326496406, lng: -1.459578746085982, name: "TGI Ouaga 2"},
            { lat: 12.342922, lng: -1.526493, name: "Arrêt 1"},
            { lat: 12.333666, lng: -1.502054, name: "Arrêt 2"},
            { lat: 12.325362, lng: -1.482484, name: "Arrêt 3"},
            { lat: 12.370216725746165, lng: -1.5295478824460456, name: "Place Heros" },
        ]
    },
    {
        id: 2,
        name: "Bus ouaga 2000",
        image: "/assets/images/bus/10.png",
        number: 234,
        ligne: "Ouaga 2000",
        departureTime: "8h : 00",
        outboundRoute: "Ouaga 2000 - PLACE DE LA NATION",
        returnRoute: "PLACE DE LA NATION - Ouaga 2000",
        stops: [
            { lat: 12.312342058654043, lng: -1.5026991267013297, name: "Monument" },
            { lat: 12.354955, lng: -1.526975, name: "Arrêt 1" },
            { lat: 12.333125, lng: -1.525383, name: "Arrêt 2" },
            { lat: 12.370216725746165, lng: -1.5295478824460456, name: "Place Heros" },
        ]
    },
    {
        id: 3,
        name: "Bus de la place de la nation",
        image: "/assets/images/bus/10.png",
        number: 810,
        ligne: "PLACE DE LA NATION",
        departureTime: "17h : 00",
        outboundRoute: "PLACE DE LA NATION - Pissy",
        returnRoute: "Pissy - PLACE DE LA NATION",
        stops: [
            { lat: 12.333795324464363, lng: -1.5846561614277845, name: "Pissy" },
            { lat: 12.346019, lng: -1.565235, name: "Arrêt SONABY" },
            { lat: 12.365051, lng: -1.534164, name: "Arrêt FESPACO" },
            { lat: 12.370216725746165, lng: -1.5295478824460456, name: "Place Heros" },
        ]
    },
    // Add more routes here
];


export const SliderData = [
    {
        id: 1,
        backgroundImage: '/assets/images/bus/2.png',
        tagline: 'Bienvenu sur Le Projet de Mobilité Urbaine du Grand Ouaga(PMUGO)',
        title: 'Nous offrons un',
        titleSpan: 'Transport confortable',
        description: 'Vivez une expérience des plus moderne et agréable de transport en commun offerte dans nos bus.'
    },
    {
        id: 2,
        backgroundImage: '/assets/images/bus/8.png',
        tagline: 'Bienvenu sur Le Projet de Mobilité Urbaine du Grand Ouaga(PMUGO)',
        title: 'Nous offrons un',
        titleSpan: 'Transport confortable',
        description: 'Vivez une expérience des plus moderne et agréable de transport en commun offerte dans nos bus.'
    },
    {
        id: 3,
        backgroundImage: '/assets/images/bus/5.png',
        tagline: 'Bienvenu sur Le Projet de Mobilité Urbaine du Grand Ouaga(PMUGO)',
        title: 'Nous offrons un',
        titleSpan: 'Transport confortable',
        description: 'Vivez une expérience des plus moderne et agréable de transport en commun offerte dans nos bus.'
    },
    {
        id: 4,
        backgroundImage: '/assets/images/bus/9.png',
        tagline: 'Bienvenu sur Le Projet de Mobilité Urbaine du Grand Ouaga(PMUGO)',
        title: 'Nous offrons un',
        titleSpan: 'Transport confortable',
        description: 'Vivez une expérience des plus moderne et agréable de transport en commun offerte dans nos bus.'
    },
    {
        id: 5,
        backgroundImage: '/assets/images/bus/3.png',
        tagline: 'Bienvenu sur Le Projet de Mobilité Urbaine du Grand Ouaga(PMUGO)',
        title: 'Nous offrons un',
        titleSpan: 'Transport confortable',
        description: 'Vivez une expérience des plus moderne et agréable de transport en commun offerte dans nos bus.'
    }
];
