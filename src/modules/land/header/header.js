import { api, LightningElement } from 'lwc';

export default class App extends LightningElement {
    @api icon;

    @api
    get items() {
        console.dir(JSON.parse(JSON.stringify(this._items)));
        return this._items;
    }
    set items(object) {
        this._items = Object.keys(object).map(key => object[key]);
        console.dir(JSON.parse(JSON.stringify(this._items)));
    }

    connectedCallback() {
        //console.dir(this.title)
    }
    /* 
    const result = await fetch('/contact')
    console.log(result)
    */
}
