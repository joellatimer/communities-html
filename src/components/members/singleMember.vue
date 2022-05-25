<template>
<div class=list>
    <div class="members">
        <span >
         {{member.firstName}} {{member.lastName}}
        </span>
       
    </div>
    <div class="icons">
        <span><fa class="edit" icon="edit" /> </span>
        <span><fa @click="openDelete" class="trash" icon="trash" /></span>
    </div>

    <deleteModal />
</div>

    
</template>

<script>
    import deleteModal from '../../modals/deleteModal.vue'
    
    export default {
        components:{deleteModal},   
        props:['member'],
        
        setup(props, context){
            function openDelete(){
                context.emit("openDelete")
            }
            
                return { openDelete }
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
}

.trash:hover {
        color:rgb(223, 120, 137);
    
}

.icons {
    
    align-items:center;
  
}

</style>