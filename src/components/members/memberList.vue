<template>
<div class="member-block"> 
 
    <div class="banner">
        <h4>{{Group}}</h4>
    </div>
    <div v-if="error">{{error}}</div>  
    <div class="members"> 
        <div v-for="member in members" :key="member.id">
            
            
            <singleMember   :member="member" />
        </div>
    </div> 
       
    <div class="btnAdd" @click="toggleModal">Add Member</div>
</div> 
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner">
                    <div class="modalContent">
                        <div class="top">
                            <h3>Add A New Member</h3>
                            <fa @click="toggleModal" class="x" icon="x"/>
                        </div>
                        
                    </div>
                    <div class="info">
                         <form @submit.prevent="handleSubmit">
                            <input type="text" placeholder="firstName" class=:form-control v-model="firstName">
                            <input type="text" placeholder="lastName" class=:form-control v-model="lastName">
                            <input type="text" placeholder="dateJoined" class=:form-control v-model="dateJoined">
                            <button class="btnAdd btnPlus">Add Member</button>
                        </form>  
                    </div>
                </div>    
            </transition>
        </div>
  </transition>
    
</template>



<script>
    import {ref} from '@vue/reactivity'
    import getMembers from '../../composables/members/getMembers'
    import singleMember from './singleMember'
    import axios from 'axios'
    export default {

        components: {singleMember},
        setup(){

            const firstName = ref('')
            const lastName = ref('')
            const dateJoined = ref('')
            let fullName = ref('')
            let groupId = localStorage.groupId
            const Group = localStorage.loggedInGroup

            const modalActive = ref(false);

            const toggleModal = () => {modalActive.value = !modalActive.value}


            const {members, error, load} = getMembers()
            load()
            groupId = parseFloat(groupId)
           
            fullName = firstName.value
            console.log("fullname", fullName)
            function handleSubmit() {
                axios.post('http://localhost:3000/members',{
                    firstName:firstName.value, 
                    lastName:lastName.value, 
                    dateJoined:dateJoined.value, 
                    groupId:groupId
                })
        
                
                // .catch((err => console.error(err)))
            }

            

         
        
            return { 
            toggleModal, 
            error, 
            getMembers, 
            members, 
            modalActive, 
            firstName, 
            lastName, 
            fullName, 
            groupId, 
            handleSubmit,
            dateJoined,
            Group
            }
        }    
    }
</script> 

<style scoped>



.banner {
    display:flex;
    background-color: #1966d2;
    color:white;
    height: 60px;
    align-items:center;
    justify-content:center;
    align-items:center;
}

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

.info {
    display:flex;
    justify-content:center;
    

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
    display:flex;
    flex-direction: column;
    position: rel;
    max-width: 400px;
    width: 80%;
    height:280px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
  
}

i {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
}

/* &hover */
.modal-content {
     display: flex;
     flex-direction:column;
    justify-content:space-between;

    

} 


.btnAdd {
    display:flex;
    width:120px;
    height:50px;
    background-color: green;
    color:white;
    margin-top:15px;
    border-radius:10px;
    justify-content:center;
    align-items:center;
    
    
    
}

.top {
    display:flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom:15px;



}  

h3 {
    margin-left:10px;
}
.modal-content {
     display: flex;
     flex-direction:column;

    

} 
.btnPlus {
    margin-left: 30px;
}

input {

    height:30px;
    width:275px;
    margin:8px 30px;
    font-size:17px;
}


.x {
    font-size:23px;
    margin-right:16px;
    color:black;
}    
    .x:hover {
        color:lightGrey;
        
}




</style>