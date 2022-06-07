<template>
<div class="navhead">
    <navHead />
</div>

<div class="leaders">
    <div class="members">
        <memberList />
    </div>
        
    <div class="meetings">
        <meetingList />
    </div>
    <div class="attends">
        <attendsList />
    </div>
</div>



</template>


<script>
import navHead from "../components/navigation/navHead.vue"
import memberList from "../components/members/memberList.vue"
import meetingList from '../components/meetings/meetingList.vue'
import attendsList from '../components/attends/attendsList.vue'



    export default {
        components: { memberList, meetingList, attendsList, navHead},
        data(){

            return {
               

            }
        },
       
    }   

</script>

<style>
.leaders {
    display:grid;
 
    grid-template-columns:1fr 1fr 1fr;
    margin:20px;
    column-gap:40px;
    justify-content: space-between;
}    



.meetings {
    background-color:green;
    color:white;
}
.attends {
    background-color:red;
    color:white;
}


 


</style>
