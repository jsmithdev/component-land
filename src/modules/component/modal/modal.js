import { api, LightningElement } from 'lwc';

export default class Modal extends LightningElement {

    @api title
    
    @api 
    get active(){ return this._active}
    set active(v){ this._active = v; console.log(v) }

    loading = false

    close(){
        this._active = false
    }
}