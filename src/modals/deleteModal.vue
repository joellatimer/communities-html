<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
         
          <!-- Modal Content -->
          <slot />
         
          <button @click="deleteMember" class="btnDel">Delete</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import { ref } from '@vue/reactivity'
export default {
  props: ["modalActive", "member"],
  setup(props, {emit}) {
    
    function close() {
      emit("closeDelete")
    }

    const deleteMember = async () => {
      try {
        const id = props.member.id
         await axios.delete('http://localhost:3000/members/' + id) 
         emit("success")
         emit("deleteItem")
      } catch (error) {
          console.log(error)
      }
       
    }
      

    
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


   
    return { close, deleteMember, getMembers };
  },
};
</script>

<style scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(85, 84, 84, 0.8);
}

.modal-inner {
    position: relative;
    max-width: 400px;
    width: 80%;
    height:225px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    padding: 16px 16px;
}

i {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
}

/* &hover */



button {
    height:50px;
    width:100px;
    margin:20px;
    padding: 20px 30px;
    border: none;
    font-size: 16px;
    background-color: crimson;
    color: #fff;
    cursor: pointer;
    border-radius:10px;
}

  

</style>