import { track, LightningElement } from 'lwc';

export default class LandApp extends LightningElement {

    @track projects

    showImage = false

    previewImage(event){

        const {url} = event.detail

        console.log(url)

        this.imageUrl = url

        this.showImage = true

        //this.template.querySelector('component-modal').show()
        
        console.log('pi:',this.showImage)
    }

    async connectedCallback(){
        
        const url = this.getUrl('jsmithdev','component-land-data','main','lwc-data.json')
        const json = await (await fetch( url )).json()

        const projects = json.map(p => {

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
            this._init_projects = Array.from(projects)
        }
        
        const params = (new URL(document.location)).searchParams;
        const share = params.get('share')
        
        if(!share){
            this.projects = projects
        } else {
            const data = decodeURIComponent(share)
            const author = data.substring(0, data.indexOf('/'))
            const repo = data.substring(data.indexOf('/')+1, data.length)
            
            this.showSingle(author, repo)
        }
    }

    handleSearch(event) {
        const {value} = event.detail
        this.search(value)
    }
    search(value) {

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
    showSingle(author, repo) {

        const record = this._init_projects.find(item => 
            item.name === repo && item.author === author)

        this.projects = [ record ]
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

    getUrl(user,repo,branch,filename){
        return `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${filename}`
    }

    scroll(event){
        //console.log('scroll')
        event.target.scrollIntoView({
            behavior: 'smooth' 
        })
    }
}
