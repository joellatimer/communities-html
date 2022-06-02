<template>
<div class=list>
    <div>
        <span >
         {{member.firstName}} {{member.lastName}}
        </span>
    </div>


    <div class="icons">
        <span><fa class="edit" icon="edit" /> </span>
        <span><fa @click="openDelete" class="trash" icon="trash" /></span>
    </div>
</div>
<div class="deleteModal">
    <deleteModal @success="toggleModal"  @deleteItem="closeDelete" :modalActive="modalActive" :member="member">
            
        <div class="modal-content">
            <div class="top">
                    <h1>Delete</h1>
                <fa @click="toggleModal" class="x" icon="x"/>
            </div>
            
            <p>Are you sure you want to delete this member?</p> 
                    
        </div>
    </deleteModal>

</div>

    
    
</template>

<script>
    import { ref, } from "vue";
    import deleteModal from '../../modals/deleteModal'
    import getMembers from '../../composables/members/getMembers'
    export default {
       
        props:['member'],
        components:{deleteModal},
        setup(props, context){
           
             const modalActive = ref(false);

            const toggleModal = () => {modalActive.value = !modalActive.value}

            function openDelete(){
                toggleModal()
            }

            let { members, load} = getMembers()

            function closeDelete(){
                context.emit("deleteMember")
            }


        

        
                return { openDelete, closeDelete, toggleModal, modalActive, members, getMembers, load }
        }
    }
    
</script>

<style scoped>

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

}   

.edit {
    color:blue;
    margin-right:5x;
    cursor:pointer;
}
.edit:hover {
    color:rgb(124, 124, 233);
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
}    
    .x:hover {
        color:lightGrey;
}

</style>