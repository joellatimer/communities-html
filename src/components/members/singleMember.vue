<template>
<div class=list>
    <div>
        <span >
         {{member.firstName}} {{member.lastName}}
        </span>
    </div>


    <div class="icons">
        <span><fa @click="openEdit" class="edit" icon="edit" /> </span>
        <span><fa @click="openDelete" class="trash" icon="trash" /></span>
    </div>
</div>
<div class="deleteModal">
    <deleteModal @success="toggleModal"  @deleteItem="closeDelete" :modalActive="modalActive" :member="member">
            
        <div class="modal-content">
            <div class="top">
                    <h3>Delete</h3>
                <fa @click="toggleModal" class="x" icon="x"/>
            </div>
            
            <p>Are you sure you want to delete this member?</p> 
                    
        </div>
    </deleteModal>

</div>

<!-- **********Edit Modal Section ******************************* -->

<transition name="modal-animation">
    <div v-show="modalEditActive" class="modal">
        <transition name="modal-animation-inner">
            <div v-show="modalEditActive" class="modal-inner">
                <div class="modalContent">
                    <div class="top">
                        <h3>Edit Member</h3>
                        <fa @click="toggleEditModal" class="x" icon="x"/>
                    </div>
                    
                </div>
                <div class="info">
                    <form @submit.prevent="handleSubmit">
                        <input type="text" placeholder="firstName" class=:form-control v-model="firstName">
                        <input type="text" placeholder="lastName" class=:form-control v-model="lastName">
                        <input type="text" placeholder="dateJoined" class=:form-control v-model="dateJoined">
                        <button class="btnEdit btnEditPlus">Edit Member</button>
                    </form>  
                </div>
            </div>    
        </transition>
    </div>
</transition>

    
    
</template>

<script>
    import { ref, } from "vue";
    import deleteModal from '../../modals/deleteModal'
    import getMembers from '../../composables/members/getMembers'
    export default {
       
        props:['member'],
        components:{deleteModal},
        setup(props, context){

            const firstName = ref('')
            const lastName = ref('')
            const dateJoined = ref('')
           
             const modalActive = ref(false);

            const toggleModal = () => {modalActive.value = !modalActive.value}

            function openDelete(){
                toggleModal()
            }

            let { members, load} = getMembers()

            function closeDelete(){
                context.emit("deleteMember")
            }

            // **************EditModal Section *************************

            const modalEditActive = ref(false)

            const toggleEditModal = () => {modalEditActive.value = !modalEditActive.value}

            function openEdit(){
                toggleEditModal()
            }

        

        
                return { 
                    openDelete, 
                    closeDelete, 
                    toggleModal, 
                    modalActive, 
                    members, 
                    getMembers, 
                    load,
                    toggleEditModal,
                    modalEditActive,
                    openEdit, 
                    firstName, 
                    lastName ,
                    dateJoined
                }
        }
    }
    
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
/* .modal-content {
     display: flex;
     flex-direction:column;
    justify-content:space-between;
}  */
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

.btnEdit {
    display:flex;
    width:120px;
    height:50px;
    background-color: green;
    color:white;
    margin-bottom:15px;
    border-radius:10px;
    justify-content:center;
    align-items:center;
    font-size:15px;
}
.btnEditPlus {
    margin-left: 30px;
}

.list {
    display:flex;
    justify-content: space-between;
    align-items:center;
    height:40px;
    border:solid 1px lightgrey;
}   
span {
    margin-left:20px;

}    

.top {
    display:flex;
    justify-content: space-between;
   
    margin-bottom:15px; 
    background-color:rgb(60, 60, 245);
    color:white;
    padding:15px;
} 
h3 {
    margin-left:10px;
}
.edit {
    color:blue;
    margin-right:5x;
    cursor:pointer;
}
.edit:hover {
    color:lightgrey;
}

.trash {
    color:red;
    margin-right:10px;
    cursor:pointer;
    font-size:18px;
}

.trash:hover {
        color:rgb(223, 120, 137);
    
}

.icons {
    display:flex;
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

input {

    height:30px;
    width:275px;
    margin:8px 20px;
    font-size:17px;
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

.x {
    font-size:23px;
    margin-right:16px;
    color:black;
}   
    .x:hover {
        color:lightGrey;
}

</style>