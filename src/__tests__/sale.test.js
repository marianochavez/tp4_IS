const Sale = require("../sale")
const { filterSalesByPrice, filterSalesByDate } = require("../utils")

describe('sale tests', () => {
    // Verificar que la venta tenga asignado un método de pago.
    it('should have an payment method', () => {
        const sale = new Sale(1, "123 Fake Street", "paypal");

        expect(sale.payMethod).toEqual("paypal");
    })

    // Comprobar que la venta tenga asignada una dirección de envío.
    it('should have a ship address', () => {
        const sale = new Sale(1, "123 Fake Street", "paypal");

        expect(sale.shipAddress).toEqual("123 Fake Street");
    })

    //Comprobar que la prioridad asignada corresponda al rango establecido anteriormente.
    it('should assign priority within the specified range', () => {
        const sale = new Sale(1, "123 Fake Street", "paypal");

        sale.assignPriority(3);

        expect(sale.priority).toBeGreaterThanOrEqual(1);
        expect(sale.priority).toBeLessThanOrEqual(5);
    })

    // Validar que el ID de la venta sea único.
    it('should validate unique sale ID', () => {
        const existingIDs = []

        const sale1 = new Sale(1, "123 Fake Street", "paypal");
        expect(sale1.isValidSaleID(existingIDs)).toBeTruthy();
        existingIDs.push(1);

        const sale2 = new Sale(2, "456 Main Street", "credit card");
        expect(sale2.isValidSaleID(existingIDs)).toBeTruthy();
        existingIDs.push(2);


        const sale3 = new Sale(3, "789 Elm Street", "cash");
        expect(sale3.isValidSaleID(existingIDs)).toBeTruthy();
    })

    // Verificar el estado existente de la venta.
    it('should verify the existing state of the sale', () => {
        const sale = new Sale(1, "123 Fake Street", "paypal");

        expect(sale.state).toBeDefined();
    })

    // Filtrar listado de ventas: Al buscar ventas por rango de fechas se debe validar que la fecha hasta sea mayor que la fecha desde
    it('should throw an error if the from date is greater than the to date', () => {
        const fromDate = new Date('2023-01-31');
        const toDate = new Date('2023-01-30');

        const sale = new Sale(1, "123 Fake Street", "paypal");

        expect(() => {
            filterSalesByDate(fromDate, toDate, [sale])
        }).toThrow("The maximum date must be greater than the minimum date");
    });

    // Validar que al buscar ventas por rango de precios, el precio máximo sea mayor que el mínimo.
    it('should throw an error if the from price is greater than the to price', () => {
        const fromPrice = 100;
        const toPrice = 95;

        const sale = new Sale(1, "123 Fake Street", "paypal",);

        expect(() => {
            filterSalesByPrice(fromPrice, toPrice, [sale])
        }).toThrow("The maximum price must be greater than the minimum price");
    });

})