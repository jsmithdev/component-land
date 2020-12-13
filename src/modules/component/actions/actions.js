/* eslint-disable no-restricted-globals */
/* eslint-disable @lwc/lwc/no-api-reassignments */
import { api, LightningElement } from 'lwc';


export default class Actions extends LightningElement {

    @api name = '';
    @api author = '';

    action = ''
    port = location.hostname === 'localhost' ? `:${location.port}` : ''
    host = `${location.protocol}//${location.hostname}${this.port}`
    
    get action_label(){

        const record = this.action
            ? this.actions.find(action => action.value === this.action)
            : this.actions[0]
        
        const {label,button} = record
        const value = button || label
        const end = value.indexOf(' ') === -1 ? value.length : value.indexOf(' ')
        return value.substring(0, end)
    }

    get actions(){
        return [
            {
                label: 'Share',
                button: 'Copy',
                value: 'share',
            },
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
            share: `${this.host}?share=${encodeURIComponent(`${this.author}/${this.name}`)}`,
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
        console.log(this.action)
        if(this.action === 'share'){
            const url = this.urls[this.action]
            return copyTextToClipboard(url)
        }
        const url = this.urls[this.action]
        return window.open(url, '_blank')
    }
}


function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
      fallbackCopyTextToClipboard(text)
    });
  }