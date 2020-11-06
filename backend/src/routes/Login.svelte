<script>
import {fbx} from "../store.js";
import { onMount } from 'svelte';
import { navigate } from "svelte-routing";

let email='';
let password='';
onMount(() => {
  fbx.auth();
});

let isAuth=true;
fbx.auth().onAuthStateChanged(function(user) {  
  if (user) {
    isAuth=true;
    navigate("/");
  } else {
    isAuth=false;
  }
});

$: console.log(isAuth);

</script>

{#if isAuth==false}

<div class="container">

    <div class="loginContainer">
        <form >
            <input type="text" placeholder="Email" bind:value={email}/>
            <input type="password" placeholder="Mot De Passe" bind:value={password}/>
            <button type ="button" 
            on:click={()=>{
                console.log(email,password);
        
                fbx.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                    var errorCode = error.code;
                    if (errorCode === 'auth/user-not-found') {
                    alert('Mot de passe ou email incorrect');
                    } else if ( errorCode ==="auth/wrong-password") {
                    alert('Mot de passe ou email incorrect');
                        }else{
                            alert('error');
                        }
                    })
                    }}>S'identifier</button>
        </form>
    </div>
</div>

{/if}

<style>
.container{
background-color: orange;
height:100%;


}

.loginContainer{
    width:auto;
    height:auto;
    background-color: white;
    border-radius:20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
}
.loginContainer form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.loginContainer input{
    width: 300px;
    height: 50px;
    
    border-radius: 15px;

}
.loginContainer button{
    border:none;
    color:white;
    font-weight: 500;
    background-color: orange;
    width:60%;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 0px;
}


</style>