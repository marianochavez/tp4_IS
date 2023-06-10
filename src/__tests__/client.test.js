const Client = require('../client');


describe('client tests', () => {

  // Validar que el cliente posea un email.
  it('should have an email', () => {
    const client = new Client(2, 'Jane Doe', 'jane@test.com');

    expect(client.email).toEqual('jane@test.com');
  })

  // Comprobar que el email del cliente sea único.
  it('should have a unique email', () => {
    const existingEmails = ['martin@example.com', 'janedoe@example.com'];
    
    const client = new Client(1, 'John Doe', 'johndoe@example.com');

    const result = client.checkUniqueEmail(existingEmails);

    expect(result).toBeTruthy();
  })

  // Verificar que el email del cliente tenga un formato válido.
  it('should have a valid email format', () => {
    const client = new Client(1, 'John Doe', 'johndoe@example.com');

    const result = client.isValidEmail();

    expect(result).toBeTruthy();
  })

})