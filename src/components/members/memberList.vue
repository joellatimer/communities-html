<template>
<div class="member-block"> 
 
    <div class="banner">
        <h3>{{Group}}</h3>
    </div>
    <div v-if="error">{{error}}</div>  
    <div class="members"> 
        <div v-for="member in members" :key="member.id">
            
            
            <singleMember   :member="member" />
        </div>
    </div> 
       
    <div class="button">Add Member</div>
</div> 
</template>

<script>
import getMembers from '../../composables/members/getMembers'
import singleMember from "./singleMember.vue"
export default {
    components: {singleMember},
    setup(){
        const Group = localStorage.loggedInGroup
       
        let { members, load, error} = getMembers()

        load()

     
  
      
        return {  members, Group, error}
        
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







</style>