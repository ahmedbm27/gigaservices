<script>
import {db,fbx} from "../store.js";
import { onMount } from 'svelte';
import { navigate } from "svelte-routing";
import { link} from "svelte-routing";
import Navbar from "../components/nav.svelte";
export let landing={};

onMount( async () => {
    fbx.auth();
    db.collection("landing").doc("5yZyUPBKiDuMRNjAYatI").onSnapshot(function(doc) {
        
          landing = doc.data();
      
      });
});


let isAuth =false;
fbx.auth().onAuthStateChanged(function(user) {
    if (user) {
        isAuth=true;
    } else {
        isAuth=false;
        navigate("/login")
    }
});


let  giftcard=[
  {
  color:"122c44",
  type:"Type de carte",
  subType:
  [
    {
      title:"titre de sous type",
      elements:[
        {
          element:"titre d'une ligne",
          price :"40.000 Dt"
        }
      ]
    }
  ]
}

]

let addColumn= ()=>{

  giftcard[0].subType = [...giftcard[0].subType, 
  {
    title:"Nouveau titre de sous type",
  elements:[
    {
    element:"titre d'une ligne",
    price :"40.000 Dt"
    }
  ]
  }]

  }
let removeColumn = (index) =>{
  giftcard[0].subType.splice(index, 1);
  giftcard[0].subType=giftcard[0].subType
}
let addNewCardToWebsite = ()=>{
  landing.giftcards.push(giftcard[0]);
  db.collection("landing").doc("5yZyUPBKiDuMRNjAYatI").set(landing).then(function() {
    landing.giftcards =landing.giftcards;
    console.log('nice updated');
});
}
//add a new element in the subtype (column)
let addLine = (index) =>{
   giftcard[0].subType[index].elements = [...giftcard[0].subType[index].elements,{element:"Nouvelle ligne",price :"40.000 Dt"}];
}

//remove an element (line) from a subtype (column)
let removeLine = (i,j) => {
  giftcard[0].subType[i].elements.splice(j,1);
  giftcard[0].subType[i].elements=giftcard[0].subType[i].elements;
}
let removeCard = (index)=>{
  landing.giftcards.splice(index, 1);
  
  db.collection("landing").doc("5yZyUPBKiDuMRNjAYatI").set(landing).then(function() {
    landing.giftcards =landing.giftcards;
    console.log('nice');
});
}

</script>

<style>
.masthead{
    background: linear-gradient(to bottom,rgba(92,77,66,.8) 0,rgba(92,77,66,.8) 100%),url(../img/bg-masthead.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
}

.giftCardsContainer{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
  }
  .giftCardsContainer .type{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    color: white;
    font-size: 25px;
    font-weight: 600;
    border-radius:20px 20px 0 0;
    margin-bottom:15px;
  }
.giftCardsContainer .subTypeContainer{
  display: flex;
  flex-direction: row;
  width: 100%;

 }
.giftCardsContainer .subTypeContainer .subType{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width:100%;
    color: white;
    font-weight: 600;
    box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
    margin:0 7.5px 10px 7.5px;
    border-radius:20px;
 }
.giftCardsContainer .subTypeContainer .subType .Title{
  height:50px;
  display: flex;
  align-items: center;
}
 .giftCardsContainer .subTypeContainer .subType .SubTypeline{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: white;
    color: black;
    border-radius:0 0 20px 20px;
 }
 .giftCardsContainer .subTypeContainer .subType .SubTypeline .Elements{
  display: flex;
  flex-direction: row;

 }
 .giftCardsContainer .subTypeContainer .subType .SubTypeline .Elements .Element{
   margin-right:15px
 }
 .giftCardsContainer .subTypeContainer .subType .SubTypeline hr{
   width:80%;
   margin:0px;
 }
 @media only screen and (max-width: 1125px) {
	.giftCardsContainer .subTypeContainer{
  flex-direction: column;
 }
 }

.addbtn{
border:none;
color:white;
background-color: #00a8f1;
border-radius: 15px;
}
 .removebtn{
border:none;
color:white;
background-color: #e24343;
border-radius: 15px;
}
.removeline,.removecolumn{
margin-left: 10px;
margin-bottom: 0px;
}
.addline{
margin-top: 0.5em;
}

</style>

{#if isAuth}
<Navbar/>
<header class="masthead">
  <div class="container h-100">
    <div
      class="row h-100 align-items-center justify-content-center text-center">
      <div class="col-lg-10 align-self-end">
        <h1 class="text-uppercase text-white font-weight-bold">
          Les cartes Cadeaux (Gift Cards)
        </h1>
        <hr class="divider my-4" />
      </div>
      <div class="col-lg-8 align-self-baseline">
        <!-- <p class="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>-->
        <a class="btn btn-primary btn-xl js-scroll-trigger link" href="#about">
          En Savoir Plus
        </a>
      </div>
    </div>
  </div>
</header>


<!--------------------------------------------------Gift Cards---------------------------------------->
{#if Object.keys(landing).length != 0}
<section class="page-section" id="giftcards">
  <div class="container">
    <h2 class="text-center mt-0">Ajouter une carte cadeau</h2>
    <hr class="divider my-4" />

    <div class="giftCardsContainer">

    <div class="CodeCouleur">
    <h4>code du couleur example : #ffffff</h4>
    <input type="text" placeholder="code du couleur" contenteditable="true" bind:value={giftcard[0].color}>
    </div>
    <!--Type example XBOX Fortnite ....-->
      <div class="type" style="background-color:#{giftcard[0].color}" contenteditable="true"  bind:innerHTML={giftcard[0].type}>{giftcard[0].type}</div>
      <!-- will add a new  column-->
      <button type="button" class="addcolumn addbtn" on:click={addColumn}>Ajouter une colonne</button>
      <div class="subTypeContainer">
        {#each giftcard[0].subType as subType,i}
        <div class="subType" style="background-color:#{giftcard[0].color}" >
        <div class="Title" >
          <span contenteditable="true" bind:innerHTML={subType.title}>{subType.title}</span>
          <!-- will delete the concerned column-->
          <span><button type="button" class="removecolumn removebtn"on:click={()=>{removeColumn(i)}}>X</button></span>
        </div>
          <div class="SubTypeline" >    
            {#each subType.elements as element,j}
            <div class="Elements" style="border-radius:0 0 20px 20px">
              <span class="Element" contenteditable="true" bind:innerHTML={element.element} >{element.element}</span>
              <!-- will add a new  line in the concernd column-->
              <div class="price" contenteditable="true" bind:innerHTML={element.price} >{element.price}</div>
              <button type="button" class="removeline removebtn"on:click={()=>{removeLine(i,j)}}>X</button>
            </div>
            <hr>
            {/each}
            <button type="button" class="addline addbtn" on:click={()=>{addLine(i)}}>Ajouter une ligne</button>
          
          </div>
         
        </div>
        
        {/each} 
      </div>
      
    <button type="button" class="addcard addbtn" on:click={addNewCardToWebsite}>Ajouter cette carte au site</button>
    </div>


    <!--les Cartes Cadeaux Disponibles dans le Site-->
</section>
<section class="page-section" id="giftcards">
  <div class="container">
    <h2 class="text-center mt-0">les Cartes Cadeaux Disponibles dans le Site</h2>
    <hr class="divider my-4" />

    <div class="giftCardsContainer">
    {#each Object.values(landing.giftcards) as type,index}
    <!--Type example XBOX Fortnite ....-->
      <button type="button" class="removebtn" on:click={()=>removeCard(index)}>suprimer cette carte</button>
      <div class="type" style="background-color:#{type.color}">{type.type}</div>
      <div class="subTypeContainer">
        {#each type.subType as subType}
        <div class="subType" style="background-color:#{type.color}">
        <div class="Title">{subType.title}</div>
        
          <div class="SubTypeline" >    
            {#each subType.elements as element}
            <div class="Elements" style="border-radius:0 0 20px 20px">
              <span class="Element" >{element.element}</span>
              <div class="price">{element.price}</div>
              
            </div>
            <hr>
            {/each}
          </div>
          
        </div>
        {/each}
      </div>
      <hr>
    {/each}
    </div>




    </div>
</section>
{/if}
{/if}

<!-------------------------------------------------------------------------------------------->




