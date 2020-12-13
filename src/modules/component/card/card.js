import { api, LightningElement } from 'lwc'

const DEFAULT_IMG = './resources/android-icon-192x192.png'
const DEFAULT_DESC = 'No description present'

export default class LwcCard extends LightningElement {

    isActive = false

    @api item;

    get show(){return this.isActive}
    set show(value){ this.isActive = value ? true : false} 

    get author(){
        return this.item && this.item.author ? this.item.author : ''
    }

    get name(){
        return this.item && this.item.name ? this.item.name : ''
    }

    get image(){
        return this.item && this.item.image ? this.item.image : DEFAULT_IMG
    }

    get description(){
        return this.item && this.item.description ? this.item.description : DEFAULT_DESC
    }

    get markdown(){
        return this.item && this.item.markdown ? this.item.markdown : ''
    }

    get url(){
        return this.item && this.item.url ? this.item.url : ''
    }

    toggle_show() {
        this.isActive = !this.isActive
        if(!this.isActive){
            this.template.querySelector('.card').scrollIntoView()
        }
    }

    previewImage(event){
        const url = event.target.src
        this.dispatchEvent(new CustomEvent('preview', {
            detail: { url }
        }))
    }
}
