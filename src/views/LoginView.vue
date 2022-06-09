<template>
    <nav>
        <h3>Communities</h3>
    </nav>
    <div class="container">
        <div></div>
        <form @submit.prevent="loginGroup">
            <div class="loginform">
                <div class="banner">Login to Communities</div>
                    <input type="text" placeholder="Group Name" class="form-control" v-model="groupName" />
                    <input type="password" placeholder="Password" class="form-control" v-model="password">
                    <button>Login</button>
            </div>
        </form>
     
        <div></div>  
    </div>

</template>

<script>
// @ is an alias to /src
import setAuthHeader from '../components/utilities/setAuthHeader'
import axios from 'axios'
export default {

    data(){
       
        
        return {
            groupName: "",
            password: ""
        }
    
    },
    methods:{
        
        loginGroup () {
           
            const credentials = {
                groupName: this.groupName,
                password: this.password
            }
            
            console.log("env", process.env.VUE_APP_URL)
        
            axios.post( process.env.VUE_APP_URL+"groups/login", credentials)
            .then((response) => {
                setAuthHeader(response.data.token)
                localStorage.setItem('token', response.data.token),
                localStorage.setItem('loggedInGroup', response.data.groupName),
                localStorage.setItem("groupId", response.data.id)
                localStorage.setItem('loggedIn', true)
                if (response.data.groupName === "Admin"){
                    this.$router.push("/admin")
                }else {
                    this.$router.push("/leaders")
                }
                
            })
            .catch((err) => console.log(err.response))
        },
        getPost(){
            axios
                .get("process.env.VUE_APP_URL+/groups")
                .then(response => console.log(response.data))
                .catch(err => console.log(err.response))
        }
    }
}  

</script>
  
  <style scoped>
  .container {
      display:flex;
      justify-content:space-between;
      border: 2px;
    
  }
  .loginform {
    display:grid;
    width:300px;
    margin:10px auto;
    background: white;
    text-align: left;
    padding: 20px;
    border:2px;
    border-radius:10px
  } 
  input {
      margin-bottom:20px;
      height:30px;
      font-size:1.1em
  }

  button {
      background-color:#5dcc5d;
      color:white;
      width:100px;
      height:40px;
      border-radius:5px;
      font-size:1.2em
  }      
  form {
    border:2px solid #bdbcbc;
    border-radius:5px;
    margin-top:20px;
  
  }
  .banner {
      margin-bottom: 20px;
      font-size:1.4em;
      
  }
  </style>



