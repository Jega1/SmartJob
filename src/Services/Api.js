import axios from 'axios'


export default class Api  {

        constructor() {
                this.url = 'http://localhost:3005/users/'
        }


        registerCandidat(cd) {
                 return axios.post(this.url +"registerCandidat",  cd)
        }


}
