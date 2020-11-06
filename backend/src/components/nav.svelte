
<script type="module">

import { onMount } from 'svelte';
import {fbx} from '../store.js';


/* When the user scrolls down, navbar -> background white */
let isScroll =false;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  currentScrollPos < 200 ? isScroll=false :  isScroll=true;
}
let isActive =false;


</script>

<svelte:head>
 
 <link href="css/creative.min.css" rel="stylesheet">
<link rel='stylesheet' href='global.css'>

</svelte:head>

<nav class="navbarContainer" class:isScroll class:isActive id="navbar">
<!-- add a isScroll as class if isScroll == true -->
<a  href="#"  class="brandLogo" class:isScroll>
<img class="logoImg"src="./img/logo.png" alt="logo">
GIGA SERVICES
</a>

<div class="menuItemsContainer" class:isActive>
  <ul class="menuItems" class:isActive>
    <li class="navItem"><a class="navItemLink" class:isScroll  href="#">Les cartes Cadeaux</a></li>
    <li class="navItem"><a class="navItemLink" class:isScroll  
    on:click='{()=>{fbx.auth().signOut().then(function() {}).catch(function(error) {})}}'
    href="#adsl">Se Déconnecter</a></li>
  </ul>
</div>
<button type="button" class="mobileMenuButton" on:click={()=>isActive=!isActive}>
<i class="fas fa-bars"></i>
</button>

</nav>

<style>

.navbarContainer{
  display: grid;
  grid-template-columns: 0.5fr [col-start] 2fr [col-start]4fr [col-start]0.5fr [col-start];
  grid-template-rows: 0.5fr [row-start] 2fr [row-start] 0.5fr [row-start];
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 100px;
  text-decoration: none;
  justify-items: center;
  align-items: center;
  z-index: 2000000;
}
.brandLogo{
  
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-column-start: col-start 1;
  grid-row-start: row-start 1;
  width: fit-content;
  color:rgba(255,255,255,.7);
  text-decoration: none;
  font-size: 25px;
  font-weight: 500;
}
.brandLogo:hover,.navItemLink:hover{
  color:white !important;
}
.brandLogo:link{
  color:rgba(255,255,255,.7);
}
.brandLogo:visited{
  color:rgba(255,255,255,.7);
}
.brandLogo:active{
  color:rgba(255,255,255,.7);
}
.logoImg{
  width: 50px;
  height: 60px;
  margin-right: 10px; 
}
#navbar.isScroll{
  animation: scrollAnim 0.3s ease-out;
  background-color: white;
  position: fixed;
  height:102px;
}
.isScroll{
  color:black !important;
}
.isScroll:hover{
  color:#f4623a !important;
}


.menuItemsContainer{
  grid-column-start: col-start 2;
  grid-row-start: row-start 1;
}
.menuItems{
display: flex;
flex-direction: row;
list-style-type:none;
margin-bottom: 0px !important;
}
.navItem{
    margin-right: 20px;
}
.navItemLink{
  color:rgba(255,255,255,.7);
  text-decoration: none;
  font-weight: 700;
  
}
.mobileMenuButton{
  display: none;
  grid-row-start: row-start 1;
  
}

@keyframes scrollAnim {
  
 0% {
   background-color:transparent;
   position: fixed;
   height:0px
       
  }
  
  100% {
    background-color:white;
    position: fixed;
    height:102px;
  }
}

@keyframes NotscrollAnim {
  0% {
   height: 102px
  }
  100% {
    height: 0px;
    background-color: transparent;
  }
}
@media only screen and (max-width: 1106px) {
  .mobileMenuButton{
  grid-column-start: col-start 3;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 40px;
  margin: 0px !important;
  border-radius: 3px;
  border: 1px solid black;
  outline: inherit;
}
.fas.fa-bars{
font-size: 25px !important;
color:black; 
font-weight: 600;
}
.menuItemsContainer{
  grid-column-start: col-start 1;
  grid-row-start: row-start 3;
  opacity: 0;
  height: 0px; 
}
.navbarContainer {
background-color: white;
}
.brandLogo{
color:black !important;
}
.menuItems{
    flex-direction: column;
    margin-top: 15px;
}
.menuItems li{
  margin-bottom: 15px;
}
.menuItems .navItemLink{
  color:black;
}
.menuItems .navItemLink:hover{
  color:#f4623a !important;
}

.navbarContainer{
height: initial;
}

.menuItemsContainer.isActive{
 
  animation: fallDown 0.3s ease;
  opacity: 1;
  height: 100%; 
  
}

@keyframes fallDown {
  
 0% {
   opacity: 0;
   height:0%;
  }
  25% {
   opacity: 0.25;
   height:25%;
  }
  
  100% {
    height: 100%;
    opacity: 1;
  }
}

}

</style>
