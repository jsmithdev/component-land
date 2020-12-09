/* eslint-disable @lwc/lwc/no-api-reassignments */
import { api, LightningElement } from 'lwc';

export default class LandHeader extends LightningElement {
    @api icon;

    @api
    get items() {
        console.dir(JSON.parse(JSON.stringify(this._items)));
        return this._items;
    }
    set items(object) {
        this._items = Object.keys(object).map(key => object[key]);
        if(!this._init_items){
            this._init_items = Array.from( this._items );
        }
        console.dir(JSON.parse(JSON.stringify({
            items: this._items,
            object,
        })));
    }
    
    setValue(event){
        this.value = event.target.value;
        console.log(this.value)
        this.dispatchEvent( new CustomEvent('search', {
            bubbles: true,
            composed: true,
            detail: { value: this.value }
        }))
    }
    hotkeys(event){

        this.value = event.target.value;
        
        if(event.code === 'Enter'){ this.search(); return; }
        if(event.code === 'Esc'){ this.value = ''; this.searchValue = ''; return; }

        this.dispatchEvent( new CustomEvent('search', {
            bubbles: true,
            composed: true,
            detail: { value: this.value }
        }))
    }
    search(){
        this.dispatchEvent( new CustomEvent('search', {
            bubbles: true,
            composed: true,
            detail: { value: this.value }
        }))
    }
    filter(event){

        const {
            platform,
            type,
        } = event.target.options[event.target.selectedIndex].dataset

        this.dispatchEvent( new CustomEvent('filter', {
            bubbles: true,
            composed: true,
            detail: { 
                platform,
                type
            }
        }))
    }
}
