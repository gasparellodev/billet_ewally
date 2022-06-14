import Billet from "../Domain/Entity/Billet";
import DateValidate from "../Domain/Entity/DateValidate";

export default class BilletController {
    responseData = {};
    errorMessage = '';
    constructor (readonly value: string) {
        if (!this.validate(this.value)) throw new Error(this.errorMessage);
    }

    public getResponseData() {
        return this.responseData;
    }

    private validate(value: string) {
        const billet = new Billet(value);
        const dateValidate = new DateValidate(value);  
        billet.getValue();
        const getAmount = billet.getAmount();
        const amount = parseFloat(`${getAmount.slice(0, -2)}.${getAmount.slice(-2)}`).toLocaleString('en-US', { minimumFractionDigits: 2});
        const expirationDate = dateValidate.getExpireDate().toLocaleString('sv-SE', { year: "numeric", month: "2-digit", day: "numeric"});
        const barcode = billet.getBarCode();
        this.responseData = { barcode, amount, expirationDate }
        if (dateValidate.isExpired()) {
            this.errorMessage = 'Expired due date!';
            return false;                
        }
        return true;
    }
}