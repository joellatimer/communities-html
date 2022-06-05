
import { ref } from '@vue/reactivity'
import axios from 'axios'
const getMembers = () => {
    let members = ref([])
    const error = ref(null)
    const groupId = localStorage.groupId
  
    const load = async ()=> {
        try {
            let data = await axios('http://localhost:3000/groupMembers/' + groupId)
            
            if(!data.statusText){
                throw Error('no data available')
            }
            members.value = data.data.members
          
        } catch (err) {
            error.value = err.message
           
        }
    }
    return {
        members,
        error, 
        load
    }
}

export default getMembers