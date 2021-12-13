export const CONTAINER_PADDING = 20;

export const itemOptions = [
    {
        id: 1,
        sectionName: 'Choice of Size',
        isMultiSelect: false,
        data: [
            {
                id: 1,
                name: 'Regular',
                price: 0.0,
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
                id: 3,
                name: 'American Cheese',
                price: 0,
            },
            { id: 4, name: 'Swiss Cheese', price: 0.5 },
            { id: 5, name: 'Cheddar Cheese', price: 0.75 },
            { id: 6, name: 'Mozarella Cheese', price: 1 },
        ],
    },
    {
        id: 3,
        sectionName: 'Choice of Add ons',
        isMultiSelect: true,
        data: [
            { id: 7, name: 'Raw Onions', price: 0 },
            { id: 8, name: 'Fried Onions', price: 1.5 },
        ],
    },
];

export const ORDER_STATUS = {
    COMPLETED: 'completed',
    UPCOMING: 'upcoming',
};
