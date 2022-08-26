let banks = [
    {
        name: "Bank of America",
        bankId: "1",
        address: "12345 Bank Street"
    }
];

let currId = 2;

class BankRepository{
    static async getBanks() {
        return banks;
    }

    static async createBank(name, address) {
        let newBank = {
            name: name,
            bankId: currId.toString(),
            address: address
        }
        banks.push(newBank);
        currId++;
        return newBank;
    }

    static async updateBank(id, name, address){
        let updatedBanks = banks.filter(bank => bank.bankId == id);
        if(updatedBanks.length == 0){
            throw Error("Invalid id");
        }else{
            updatedBanks[0].name = name;
            updatedBanks[0].address = address;
            return updatedBanks[0];
        }
    }

    static async deleteBank(id){
        banks = banks.filter(bank => bank.bankId != id);
        return banks;
    }
}
module.exports = BankRepository;