const BankRepository = require('./BankRepository');

class BankService{
    constructor(app){
        this.app = app;
    }

    static async getBanks(){
        return BankRepository.getBanks();
    }

    static async createBank(name, address){
        if(name && address){
            return BankRepository.createBank(name, address);
        }else{
            throw Error("Invalid request body");
        }   
    }

    static async updateBank(id, name, address){
        if(id && name && address){
            return BankRepository.updateBank(id, name, address);
        }else{
            throw Error("Invalid request body or parameters");
        }
    }

    static async deleteBank(id){
        if(id){
            return BankRepository.deleteBank(id);
        }else{
            throw Error("Invalid request body or parameters");
        }
    }
}
module.exports = BankService;