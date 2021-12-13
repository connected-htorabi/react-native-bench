export const CONTAINER_PADDING = 20;

export const localRestaurants = [
    {
        id: 1,
        name: 'Starbucks (Yonge & Finch)',
        image_url:
            'https://d1ralsognjng37.cloudfront.net/d03651d4-988d-4cf9-b101-29e49b50ea08.jpeg',

        price: '$0.99',
        reviews: 1000,
        rating: 4.9,
    },
    {
        id: 2,
        name: 'Beachside Bar',
        image_url:
            'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',

        price: '$3.20',
        reviews: 1244,
        rating: 4.5,
    },
    {
        id: 3,
        name: 'Benihana',
        image_url:
            'https://ichef.bbci.co.uk/news/976/cpsprodpb/11ADE/production/_110541427_chinesefood.jpg',

        price: '$10.50',
        reviews: 1244,
        rating: 3.7,
    },
    {
        id: 4,
        name: "India's Grill",
        image_url:
            'https://d1ralsognjng37.cloudfront.net/f41159d2-cdfd-48dc-86d5-af4088d30774.jpeg',

        price: '$2.00',
        reviews: 700,
        rating: 4.9,
    },
];

export const restaurantItems = [
    {
        id: 1,
        name: 'Double-Smoked Bacon, Cheddar & Egg Sandwich',
        price: 6.25,
        calories: 500,
        description:
            'Bacon smoked for six hours over hickory wood chips, stacked with something',
        image_url:
            'https://globalassets.starbucks.com/assets/a37c3ec673fa42f98f3b123a7d7ebbfe.jpg?impolicy=1by1_tight_288',

        tags: ['Popular'],
    },
    {
        id: 2,
        name: 'Everything Croissant & Roasted Ham Sandwich',
        price: 6.25,
        calories: 500,
        description:
            'Bacon smoked for six hours over hickory wood chips, stacked with something',
        image_url:
            'https://d1ralsognjng37.cloudfront.net/d03651d4-988d-4cf9-b101-29e49b50ea08.jpeg',

        tags: [],
    },
    {
        id: 3,
        name: 'Mango Dragonfruit Lemonade',
        price: 6.25,
        calories: 500,
        description:
            'Bacon smoked for six hours over hickory wood chips, stacked with something',
        image_url:
            'https://d1ralsognjng37.cloudfront.net/d03651d4-988d-4cf9-b101-29e49b50ea08.jpeg',

        tags: [],
    },
];

export const itemOptions = [
    {
        id: 1,
        sectionName: 'Choice of Size',
        isMultiSelect: false,
        data: [
            {
                id: 1,
                name: 'Regular',
                price: 0,
            },
            {
                id: 2,
                name: 'Deluxe',
                price: 2.5,
            },
        ],
    },
    {
        id: 2,
        sectionName: 'Choice of Cheese',
        isMultiSelect: true,
        data: [
            {
                id: 1,
                name: 'American Cheese',
                price: 0,
            },
            { id: 2, name: 'Swiss Cheese', price: 0.5 },
            { id: 3, name: 'Cheddar Cheese', price: 0.75 },
            { id: 4, name: 'Mozarella Cheese', price: 1 },
        ],
    },
    {
        id: 3,
        sectionName: 'Choice of Add ons',
        isMultiSelect: true,
        data: [
            { id: 1, name: 'Raw Onions', price: 0 },
            { id: 2, name: 'Fried Onions', price: 1.5 },
        ],
    },
];

export const orders = [
    {
        id: 1,
        name: 'Starbucks (Yonge & Finch)',
        image_url:
            'https://d1ralsognjng37.cloudfront.net/d03651d4-988d-4cf9-b101-29e49b50ea08.jpeg',
        price: '$5.99',
        items: ['Pizza', 'Coffee'],
        date: '29 Mar 2017, 22:41',
    },
    {
        id: 2,
        name: 'Beachside Bar',
        image_url:
            'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
        price: '$13.20',
        items: ['Pizza', 'Coffee'],
        date: '29 Mar 2017, 22:41',
    },
    {
        id: 3,
        name: 'Benihana',
        image_url:
            'https://ichef.bbci.co.uk/news/976/cpsprodpb/11ADE/production/_110541427_chinesefood.jpg',
        price: '$10.50',
        items: ['Pizza', 'Coffee'],
        date: '29 Mar 2017, 22:41',
    },
    {
        id: 4,
        name: "India's Grill",
        image_url:
            'https://d1ralsognjng37.cloudfront.net/f41159d2-cdfd-48dc-86d5-af4088d30774.jpeg',
        price: '$22.00',
        items: ['Pizza', 'Coffee'],
        date: '29 Mar 2017, 22:41',
    },
];

export const upcomingOrders = [
    {
        id: 1,
        name: "India's Grill",
        image_url:
            'https://d1ralsognjng37.cloudfront.net/f41159d2-cdfd-48dc-86d5-af4088d30774.jpeg',
        price: '$22.00',
        items: ['Wrap', 'Coffee'],
        date: '2 Dec 2021, 22:41',
    },
];

export const ORDER_STATUS = {
    COMPLETED: 'completed',
    UPCOMING: 'upcoming',
};
