<template>
      <nav>
          <h3>Communities</h3>
          <fa class="signout" icon="sign-out" @click="handleLogout">Logout</fa>
       
    </nav>
</template>

<script>
export default {
     methods: {
              handleLogout() {
                localStorage.setItem('loggedIn', null),
                localStorage.setItem("loggedInGroup", null),
                localStorage.setItem("token", null),

              
                this.$router.replace('/')
            }
        }

}
</script>

<style scoped>
.signout {
    margin-right:10x;
    cursor: pointer;
 
    color:white;
    font-size:1.2\5 em;
    margin:15px;
   
    
}



</style>