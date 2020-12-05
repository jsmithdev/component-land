import { api, track, LightningElement } from 'lwc';

export default class Modal extends LightningElement {

    @api header
    @api trigger
    @api value
    /**
     * @description {String} small | medium | large
     */
    @api variant
    
    @track loading
    @track active
    @track data = []


    is = 'modal'


    async show(){

        this.active = true
        
    }
    
    get modalClassList(){

        if(this.variant === 'large'){
            return 'slds-modal slds-fade-in-open slds-modal_large'
        }
        else if(this.variant === 'small')      {
            return 'slds-modal slds-fade-in-open slds-modal_small'
        }

        return 'slds-modal slds-fade-in-open slds-modal_medium'
    }

    close(){
        this.active = false
    }
}