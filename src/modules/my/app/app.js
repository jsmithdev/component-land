import { track, LightningElement } from 'lwc';

export default class App extends LightningElement {

    @track projects

    async connectedCallback(){
        //const url = await (await fetch('/components')).text()
        //const projects = await( await fetch( url ) ).json()
        /* 
        todo use search params as init filtering
        const params = (new URL(document.location)).searchParams;
        const type = params.get('type'); 
        const cmp = params.get('cmp'); 
        console.dir(type)
        console.dir(cmp)
         */
            
        const url = this.getUrl('jsmithdev','component-land-data','main','lwc-data.json')
        const projects = await (await fetch( url )).json()

        //console.log('projects=>')
        //console.log(projects)

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

        if(!this._init_projects){
            this._init_projects = Array.from(this.projects)
        }
    }

    handleSearch(event) {
        
        const {value} = event.detail

        if(value === ''){ 
            this.projects = this._init_projects 
            return
        }

        const input = value.toLowerCase()

        this.projects = this._init_projects.filter(item => {
            return item.author.toLowerCase().includes(input)
            || item.description.toLowerCase().includes(input)
            || item.name.toLowerCase().includes(input)
            || item.title.toLowerCase().includes(input)
            || item.keywords.toLowerCase().includes(input)
        })
    }
    handleFilter(event) {
        
        const { 
            platform,
            type
        } = event.detail

        this.current = {
            platform,
            type,
        }

        if(type === 'all'){ 
            this.projects = this._init_projects 
            return
        }
        this.projects = this._init_projects.filter(item => {
            return item.type.toLowerCase() === type
            && item.platform.toLowerCase() === platform
        })
    }

    getUrl = (user,repo,branch,filename) => 
        `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${filename}`

}
