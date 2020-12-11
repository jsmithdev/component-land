import { api, track, LightningElement } from 'lwc';

export default class Modal extends LightningElement {

    @api title
    @api trigger
    @api value
    @api variant
    
    @track loading
    @track active
    @track data = []

    @api 
    set open(boolean) {
        this.active = boolean
    }

    is = 'modal'

    
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


    codes = {
        close: ['Escape']
    }

    set ['body-align'](value){
        setTimeout(
            () => this.dom.body.classList.add(value),
            0
        )
    }
    set ['body-color'](value){
        setTimeout(
            () => this.dom.card.style.color = value,
            0
        )
    }
    set ['body-background'](value){
        setTimeout(
            () => this.dom.card.style.background = value,
            0
        )
    }
    set ['body-border'](value){
        setTimeout(
            () => this.dom.card.style.border = `1pt solid ${value}`,
            0
        )
    }
    set ['footer-separator'](value){
        setTimeout(
            () => this.dom.footer.style.borderTop = `1pt solid ${value}`,
            0
        )
    }
    set ['close-icon-color'](value){
        setTimeout(
            // eslint-disable-next-line no-return-assign
            () => this.shadowRoot.querySelector('svg.close')
                .style.fill = value === 'dark'
                    ? rgb(1, 22, 39)
                    : value === 'light'
                        ? '#EEE'
                        : value,
            0
        )
    }
    /**
     * replace class from element
     * @param {Element} el element
     * @param {String} old to remove
     * @param {String} value to add
     */
    replaceClass(el, old, value){
        el.classList.remove(old)
        el.classList.add(value)
    }

    
}