import { api, LightningElement } from 'lwc'

const DEFAULT_IMG = './resources/android-icon-192x192.png'
const DEFAULT_DESC = 'No description present'

export default class LwcCard extends LightningElement {

    @api item;
    @api show;

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
        this.show = this.show ? false : true
    }
}
