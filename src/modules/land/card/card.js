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

    // todo add sandbox option
    /*
        'https://githubsfdeploy.herokuapp.com/app/githubdeploy' :
        'https://githubsfdeploy-sandbox.herokuapp.com/app/githubdeploy
    */
    get deploy(){
        return `https://githubsfdeploy.herokuapp.com/app/githubdeploy/${this.author}/${this.name} `
    }

    toggle_show() {
        this.show = this.show ? false : true
    }
}
