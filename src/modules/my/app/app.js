import { track, LightningElement } from 'lwc';
import { navigationItems } from './navigation';

export default class App extends LightningElement {

    @track navigationItems = navigationItems
    @track projects

    async connectedCallback(){
        //const url = await (await fetch('/components')).text()
        //const projects = await( await fetch( url ) ).json()
            
        const url = this.getUrl('jsmithdev','component-land-data','main','lwc-data.json')
        const projects = await (await fetch( url )).json()

        console.log('projects=>')
        console.log(projects)
        this.projects = projects.map(p => {

            return Object.assign(p, {
                get git(){
                    return `https://github.com/${p.author}/${p.name}.git`
                },
                get url(){
                    return `https://github.com/${p.author}/${p.name}/tree/master/`
                },
                get markdown(){
                    return `https://raw.githubusercontent.com/${p.author}/${p.name}/master/README.md`
                }
            })
        })
    }

    getUrl = (user,repo,branch,filename) => 
        `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${filename}`

}
