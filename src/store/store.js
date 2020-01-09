import {
    observable,
    action,
    runInAction,
    computed,
    toJS,
} from 'mobx';

class Store {

    @observable labels = {
        title: 'Simulá tu crédito',
        amount: 'Monto total',
        term: 'Plazo',
        resume: 'Cuota fija por mes',
        currency: '$',
        buttons: {
            confirm: 'Obtené tu crédito',
            details: 'Ver detalle de cuotas'
        }
    }

    @observable minAmount = 5000;

    @observable stepAmount = 5000;

    @observable maxAmount = 50000;

    @observable minTerm = 3;

    @observable maxTerm = 24;

    @observable creditAmount = 15000;
    @observable creditTerm = 12;


    @action
    setAmount = amount => {
        this.creditAmount = amount;
    }

    @computed
    get getAmount() {
        return Number.parseFloat(this.creditAmount).toFixed(2);
    }

    @action
    setTermn = term => {
        this.creditTerm = term;
    }

    @computed
    get getCreditTerm() {
        return this.creditTerm;
    }


    @computed
    get getResumeFinalAmountMonthly() {

        return Number.parseFloat(this.creditAmount / this.creditTerm).toFixed(2);
    }


}

export default Store