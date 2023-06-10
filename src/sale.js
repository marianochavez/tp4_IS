class Sale {
    constructor(id, shipAddress, payMethod) {
        this.id = id;
        this.shipAddress = shipAddress;
        this.payMethod = payMethod;
        this.priority = null;
        this.total = null;
        this.state = 'pending';

    }

    assignPriority(priority) {
        if (priority >= 1 && priority <= 5) {
            this.priority = priority;
        }
    }

    isValidSaleID(existingIDs) {
        return !existingIDs.includes(this.id);
    }

    updateState(newState) {
        const allowedStates = ['pending', 'in progress', 'completed', 'cancelled'];
        if (allowedStates.includes(newState)) {
            this.state = newState;
        } else {
            throw new Error('Invalid state');
        }
    }

}

module.exports = Sale;