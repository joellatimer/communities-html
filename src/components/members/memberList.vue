<template>
<div class="meeting-block"> 
 
    <div class="banner">
        <h3>{{Group}}</h3>
    </div>
    <div v-if="error">{{error}}</div>  
    <div class="members"> 
        <div v-for="member in members" :key="member.id">
            <singleMember @openDelete="toggleModal" :member="member" />
            
        </div>
       
    </div> 
       
    <div class="button">Add Member</div>

    <div class="deleteModal">
        <deleteModal :modalActive="modalActive">
             
            <div class="modal-content">
                <div class="top">
                     <h1>Delete</h1>
                    <fa @click="closeDelete" class="x" icon="x"/>
                </div>
               
                <p>Are you sure you want to delete this member?</p> 
                     
            </div>
        </deleteModal>
        
    </div>
    
 
</div> 
</template>

<script>
import deleteModal from "../../modals/deleteModal.vue";
import { ref } from "vue";
import getMembers from '../../composables/members/getMembers'
import singleMember from "./singleMember.vue"
export default {
    components: {singleMember, deleteModal},
    setup(){
        const Group = localStorage.loggedInGroup
       
        const { members, load, error} = getMembers()

        load()

        const modalActive = ref(false);

        const toggleModal = () => {modalActive.value = !modalActive.value}

        function closeDelete(){
            toggleModal()
        }

      
       return { members, Group, error, modalActive, toggleModal, closeDelete }
        
    }
}

</script> 

<style scoped>

.button {
    display:flex;
    background-color: #0ab80a;
    width:130px;
    height:50px;
    color:white;
    margin-top:30px;
    border-radius:10px;
    align-items:center;
    justify-content:center;
}

h3 {
    margin-top:20px;
    margin-left:30px;
    font-size:1.3em;
}

.banner {
    display:flex;
    background-color: #1966d2;
    color:white;
    height: 60px;
    align-items:center;
}

.deleteModal {
    background-color: rgba(0, 176, 234, 0.1);
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    
    
}
.modal-content {
    display: flex;
    flex-direction: column;
    
    
}
 
p {
    display:flex;
    flex-direction:row;
    margin-bottom: 16px;
    font-size: 18px;
    margin-left:20px;
}

h1 {
    font-size: 20px;
    margin-bottom:16px;
}
.trash {
    color: red;
    font-size:25px;
} 
.top {
    display:flex;
    justify-content: space-between;

}
.x {
    font-size:23px;
}    
    .x:hover {
        color:lightGrey;
}




</style>