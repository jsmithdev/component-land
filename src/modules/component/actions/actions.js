/* eslint-disable @lwc/lwc/no-api-reassignments */
import { api, LightningElement } from 'lwc';

export default class Actions extends LightningElement {

    @api name = '';
    @api author = '';

    action = ''
    
    get action_label(){

        if(this.action){
            const {label} = this.actions.find(action => action.value === this.action)
            return label.substring(0, label.indexOf(' '))
        }
        
        const {label} = this.actions[0]
        return label.substring(0, label.indexOf(' '))
    }

    get actions(){
        return [
            {
                label: 'Deploy to Sandbox',
                value: 'deploy_sandbox',
            },
            {
                label: 'Deploy to Production',
                value: 'deploy_production',
            },
            {
                label: 'Open Project',
                value: 'open_repo',
            },
        ]
    }

    get urls(){
        return {
            deploy_production: `https://githubsfdeploy.herokuapp.com/app/githubdeploy/${this.author}/${this.name} `,
            deploy_sandbox: `https://githubsfdeploy-sandbox.herokuapp.com/app/githubdeploy/${this.author}/${this.name} `,
            open_repo: `https://github.com/${this.author}/${this.name} `,
        }
    }

    handleSelect(event){

        const {value} = event.target

        this.action = value        
    }

    runAction(){

        if(!this.action){
            const {value} = this.actions[0]
            this.action = value
        }
        
        const url = this.urls[this.action]

        window.open(url, '_blank')
    }
}
