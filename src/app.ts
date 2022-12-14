import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './Interface/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list templates instance:
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values:[string, string, number] = [tofrom.value, details.value, amount.valueAsNumber];
    let doc: HasFormatter;

    if (type.value == 'invoice'){
        doc = new Invoice (...values);        
    }
    else {
        doc = new Payment(...values);
    }
    
    list.render(doc, type.value, 'end');

});

// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);
