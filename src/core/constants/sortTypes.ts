export const sortTypes = [
    {
        value: 'BY_PRICE_ASCENDING',
        label: 'Sort by: Price - Low to High',
        onChange: (items, param) => items.sort((a, b) => a[param] - b[param])
    },
    {
        value: 'BY_PRICE_DESCENDING',
        label: 'Sort by: Price - High to Low',
        onChange: (items, param) => items.sort((a, b) => b[param] - a[param])
    }
]
