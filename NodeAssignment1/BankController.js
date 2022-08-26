const BankService = require('./BankService');

class BankController {
    static app;
  
    static initialize(app) {
        BankController.app = app;
    
        app.get('/banks', async (request, response) => {
            const banks = await BankService.getBanks();
            response.send(banks);
        });

        app.post('/banks', async (request, response) => {
            const { body } = request;
            const { name, address } = body;
            try {
                const bank = await BankService.createBank(name, address);
                response.send(bank);
            }catch(error) {
                response.status(Number("400")).send("Error with request");
            }
        });

        app.put('/banks/:id', async (request, response) => {
            const { body, params } = request;
            const { name, address } = body;
            const { id } = params;
            try {
                const bank = await BankService.updateBank(id, name, address);
                response.send(bank);
            }catch(error) {
                response.status(Number("400")).send("Error with request");
            }
        });

        app.delete('/banks/:id', async (request, response) => {
            const { params } = request;
            const { id } = params;
            try {
                const banks = await BankService.deleteBank(id);
                response.send(banks);
            }catch(error) {
                response.status(Number("400")).send("Error with request");
            }
        });
    }
}

module.exports = BankController;