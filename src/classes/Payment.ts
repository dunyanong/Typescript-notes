import { HasFormatter } from '../Interface/HasFormatter'

export class Payment implements HasFormatter{
    constructor(
        readonly receipient: string,
        private details: string,
        public amount: number
    ) {}
    
    format() {
        return `${this.receipient} owes ${this.amount} for ${this.details}`;
    }
}
