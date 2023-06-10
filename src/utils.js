function filterSalesByPrice(minPrice, maxPrice, sales) {
    if (maxPrice <= minPrice) {
        throw new Error('The maximum price must be greater than the minimum price');
    }

    const filteredSales = sales.filter(sale => sale.price >= minPrice && sale.price <= maxPrice);

    return filteredSales;
}

function filterSalesByDate(minDate, maxDate, sales) {
    if (maxDate <= minDate) {
        throw new Error('The maximum date must be greater than the minimum date');
    }

    const filteredSales = sales.filter(sale => sale.date >= minDate && sale.date <= maxDate);

    return filteredSales;
}

module.exports = { filterSalesByPrice, filterSalesByDate };