
import { ref } from '@vue/reactivity'
import axios from 'axios'
const getMembers = () => {
    let members = ref([])
    const error = ref(null)
    let groupId = localStorage.groupId

    const load = async ()=> {
        try {
            let data = await axios('http://localhost:3000/groupMembers/' + groupId)
            
            if(!data.statusText){
                throw Error('no data available')
            }
           
            members.value = data.data.members
            console.log("members.value", members.value)
            
           
        } catch (err) {
            error.value = err.message
            console.log(err.message)
        }
    }
    return {
        members,
        error, 
        load
    }
}

export default getMembers