class Client {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    checkUniqueEmail(existingEmails) {
        const isUnique = !existingEmails.includes(this.email);
        return isUnique;
    }

    isValidEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(this.email);
        return isValid;
    }
}

module.exports = Client;
