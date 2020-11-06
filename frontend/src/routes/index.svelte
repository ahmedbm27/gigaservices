<script context="module">
/*import { db, storage,fbx } from "../components/store.js"
import { onMount } from 'svelte'
*/
 
      
   /*  
  export async function preload(page, session) {
    let landing = {};
    return await db.collection("landing").doc("uOD2YitEzj5P4i2uV0wG").get().then(function(doc) {
        if (doc.exists) {
          landing = doc.data();
          return { landing };
          //console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

        

      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
      
  }


 <!-------------------------------------------------------LYCA---------------------------------------------------------->

<div class="row">
        
            <!----------normal--------> 
<div class="tableContainer">          
    <div class="Table">
                    <!--header-->
        <div class="headerGSMlyca headerGSM">LYCA</div>
        <div class="subHeaderGSMlyca subHeaderGSM">{landing.RechargeGSM.headers[0]}</div>
                    <!--table elements-->
      <div class="elements">
        {#each Object.values(landing.RechargeGSM.LYCA.type) as item,i }
        <div class="el">{item} : {landing.RechargeGSM.LYCA.normal[i]}</div>
        <div class="seperator"></div>
        {/each}
      </div>  

    </div>
  </div>

          <!----------privilège-------->
  <div class="tableContainer">    
    <div class="Table">
                    <!--header-->
        <div class="headerGSMlyca headerGSM">LYCA</div>
        <div class="subHeaderGSMlyca subHeaderGSM">{landing.RechargeGSM.headers[1]}</div>
                    <!--table elements-->
      <div class="elements">
        {#each Object.values(landing.RechargeGSM.LYCA.type) as item,i }
        <div class="el">{item} : {landing.RechargeGSM.LYCA.privilège[i]}</div>
        <div class="seperator"></div>
        {/each}
      </div>
    </div>
</div>   
                    <!----------grossiste 1-------->
 <div class="tableContainer">                
    <div class="Table">
                    <!--header-->
            <div class="headerGSMlyca headerGSM">LYCA</div>
            <div class="subHeaderGSMlyca subHeaderGSM">{landing.RechargeGSM.headers[2]}</div>
                    <!--table elements-->
          <div class="elements">
           {#each Object.values(landing.RechargeGSM.LYCA.type) as item,i }
        <div class="el">{item} : {landing.RechargeGSM.LYCA.grossiste1[i]}</div>
        <div class="seperator"></div>
        {/each}
          </div>
    </div>
</div>
                    <!----------grossiste 2-------->
<div class="tableContainer">                  
    <div class="Table">
                    <!--header-->
            <div class="headerGSMlyca headerGSM">LYCA</div>
            <div class="subHeaderGSMlyca subHeaderGSM">{landing.RechargeGSM.headers[3]}</div>
                    <!--table elements-->
          <div class="elements">
            {#each Object.values(landing.RechargeGSM.LYCA.type) as item,i }
        <div class="el">{item} : {landing.RechargeGSM.LYCA.grossiste2[i]}</div>
        <div class="seperator"></div>
        {/each}
          </div>
    </div>
</div>

*/
</script>

<script>
import { db, storage,fbx } from "../store.js"
import { onMount } from 'svelte'
export let landing={};

onMount( async () => {
  db.collection("landing").doc("5yZyUPBKiDuMRNjAYatI").onSnapshot(function(doc) {
        
          landing = doc.data();
      
      });
});





</script>

<style>


.row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10px;
}

  .offres {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

  }
  .offree {
    background-color: white;
    border: 1px solid #e2ebf1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    width:25%;
  }


  .title {
    color: #f1c40f;
    text-align: center;
    font-size:30px;
    font-weight: 600;

  }
  .subtitle{
    text-align: center;
    margin-left: 50px;
    position: relative;
    top: -8px;
    font-weight: 600;
    font-size: 12px;
  }
  .minPrice{
    text-align:center;
    padding: 0 50px 0 0;
    position: relative;
    top: 15px;
  }
  .firstPart{
     font-size: 60px;
  }
  .secondPart{
    font-size: 35px;
    position: relative;
    top: -15px;
  }
  .subPrice{
    font-size: 17px;
    position: relative;
    top: -27px;
  }
  .line{
    border-top:1px solid #e2ebf1;
    width:80%;
    margin-left: 50%;
    transform: translateX(-50%);
    position: relative;
    top: -15px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .listElement{
    list-style-type:none;
    margin-bottom: 40px;
    line-height: 30px;
    height: 100%;
  }
  .logoPic{
    width:66px;
    height:47px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;

  }
  .DecouvrirBtn{
    border-style:none;
    background-color:black;
    color:white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height:50px;
    width:100%;

  }

.rechargegsmContainer {
	 margin: 30px;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
}

 .rechargegsmContainer .section1 hr {
	 width: 10%;
	 border: 1.5px solid #f4623a;
}
 .rechargegsmContainer .cards_operator_container {
	 display: flex;
	 flex-direction: row;
	 flex-wrap: wrap;
	 justify-content: space-between;
	 margin-bottom: 20px;
	 width: 100%;
}
 .rechargegsmContainer .cards_operator_container .card_container {
	 display: flex;
	 flex-direction: column;
	 width: 100%;
}
 .rechargegsmContainer .cards_operator_container .card_container h2 {
	 font-size: 25px;
	 font-weight: bold;
	 text-align: center;
}
 .rechargegsmContainer .cards_operator_container .card_container .card:hover {
	 box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.5);
	 cursor: pointer;
}
 .rechargegsmContainer .cards_operator_container .card_container .card:active {
	 box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.9);
}
 .rechargegsmContainer .cards_operator_container .card_container .card {
	 display: flex;
	 flex-direction: column;
	 justify-content: flex-start;
	 align-items: center;
	 border-radius: 10px;
	 width: 100%;
	 flex-grow: 1;
	 flex-shrink: 0;
	 flex-basis: auto;
	 box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
}
 .rechargegsmContainer .cards_operator_container .card_container .card .card_operator_name {
	 background-color: #b01111;
	 color: white;
	 width: 100%;
	 text-align: center;
	 padding: 10px;
	 border-radius: 10px 10px 0 0;
	 font-weight: bold;
	 font-size: 22px;
}
 .rechargegsmContainer .cards_operator_container .card_container .card .card_type_explanation {
	 text-align: center;
	 background-color: #e24343;
	 color: white;
	 padding: 10px;
	 font-size: 20px;
	 font-weight: bold;
	 width: 100%;
	 height: 100%;
}
 .rechargegsmContainer .cards_operator_container .card_container .card .card_types_prices {
	 width: 100%;
   text-align: center;
   margin-left:5px;
   margin-right:0px;
}
 .rechargegsmContainer .cards_operator_container .card_container .card .card_types_prices .type_row .before_hr {
   margin: 15px 0 15px 0;
   display: flex;
   flex-direction: row;
   justify-content: center;
}
 .rechargegsmContainer .cards_operator_container .card_container .card .card_types_prices .type_row .before_hr span {
	 font-size: 18px;
   font-weight: 500;
   margin-right:5px
}
 .rechargegsmContainer .cards_operator_container .card_container .card .card_types_prices .type_row hr {
	 margin-left: 50% !important;
	 transform: translateX(-50%);
	 width: 90%;
	 margin: 0px;
}
 @media only screen and (min-width: 800px) {
	 .card_container {
		 width: 49% !important;
	}
}
 @media only screen and (min-width: 1125px) {
	 .card_container {
		 width: 33% !important;
	}
}
 
  
  
@media only screen and (max-width: 1000px) {

  .offree {
    width:100%;
  }
  .offres{
    flex-direction:column;
  }
  .row {
    flex-direction: column;
  }

}


.bureautique_container {
	 margin: 30px;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
}


 .bureautique_container .section1 hr {
	 width: 10%;
	 border: 1.5px solid #f4623a;
}
 .bureautique_container .all_cards {
	 display: flex;
	 flex-direction: row;
	 flex-wrap: wrap;
	 justify-content: space-between;
	 margin-bottom: 20px;
	 width: 100%;
}
 .bureautique_container .all_cards .card_container {
	 display: flex;
	 flex-direction: column;
	 width: 100%;
}
 .bureautique_container .all_cards .card_container h2 {
	 font-size: 25px;
	 font-weight: bold;
	 text-align: center;
}
 .bureautique_container .all_cards .card_container .card:hover {
	 box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.5);
	 cursor: pointer;
}
 .bureautique_container .all_cards .card_container .card:active {
	 box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.9);
}
 .bureautique_container .all_cards .card_container .card {
	 display: flex;
	 flex-direction: column;
	 justify-content: flex-start;
	 align-items: center;
	 border-radius: 10px;
	 width: 100%;
	 box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
	 margin-bottom: 15px;
	 flex-grow: 1;
	 flex-shrink: 0;
	 flex-basis: auto;
}
 .bureautique_container .all_cards .card_container .card .card_type {
	 background-color: #f4623aba;
	 color: white;
	 width: 100%;
	 text-align: center;
	 padding: 10px;
	 border-radius: 10px 10px 0 0;
	 font-weight: bold;
	 font-size: 22px;
}
 .bureautique_container .all_cards .card_container .card .card_types_prices {
	 width: 100%;
	 text-align: center;
	 height: 100%;
}
 .bureautique_container .all_cards .card_container .card .card_types_prices .type_row .before_hr {
	 margin: 15px 0 15px 0;
}
 .bureautique_container .all_cards .card_container .card .card_types_prices .type_row .before_hr span {
	 font-size: 15px;
	 font-weight: 400;
}
 .bureautique_container .all_cards .card_container .card .card_types_prices .type_row hr {
	 margin-left: 50% !important;
	 transform: translateX(-50%);
	 width: 90%;
	 margin: 0px;
}
 @media only screen and (min-width: 800px) {
	 .card_container {
		 width: 49% !important;
	}
}
 @media only screen and (min-width: 1125px) {
	 .card_container {
		 width: 33% !important;
  }
 
}

.promocote{
  display:flex;
  flex-direction: row;
  justify-content:  center;
}

.titlePromocote{
  text-align: center;
  background-color:#202020;
  padding: 15px;
  border-radius: 15px 15px 0 0;
  color: white;
  font-size: 23px;
  font-weight: 600;
}
.promocote_container{
  display:flex;
  flex-direction:column;
  text-align:center;
  width:100%;
  margin: 0 5px 0 5px;
  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
  border-radius:15px;
  margin-bottom:15px;
}
.promocote_container:hover{
  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.5);
	cursor: pointer;
}
.promocote_card{
  border-radius : 0 0 20px;
  display:flex;
  flex-direction: column;
}
.promocote_type{
  background-color:#CB1517;
  font-size: 20px;
  color: white;
  font-weight: 600;
  padding: 12px;
}
 @media only screen and (max-width: 1125px) {
	 .promocote{
    flex-wrap: wrap;
  }
  }
 .link{
   color :black;
 }
 header .masthead{
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
</style>


<!-- Masthead -->
{#if Object.keys(landing).length != 0}
<header class="masthead">
  <div class="container h-100">
    <div
      class="row h-100 align-items-center justify-content-center text-center">
      <div class="col-lg-10 align-self-end">
        <h1 class="text-uppercase text-white font-weight-bold">
          Vente en gros recharge électronique GSM.
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

<!-- About Section -->
<section class="page-section bg-primary" id="about">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <h2 class="text-white mt-0">Nous avons ce qu'il vous faut!</h2>
        <hr class="divider light my-4" />
        <p class="text-white-50 mb-4">
          Vous trouvez toujours les meilleurs offres Chez GIGA SERVICES
        </p>
        <a class="btn btn-light btn-xl js-scroll-trigger link" href="#rechargegsm">
          Commencer!
        </a>
      </div>
    </div>
  </div>
</section>



<!-- Prix d'achat recharge GSM Section -->
{#if Object.keys(landing).length != 0}
<section class="page-section" id="rechargegsm">
  <div class="container">
    <h2 class="text-center mt-0">Recharge GSM à Kélibia</h2>
    <h3 class="text-center mt-0">*Livraison dans le gouvernorat de Nabeul</h3>
    <h2 class="text-center mt-0">Tél : 72 208 540 / 98 534 614 / 22 867 363</h2>
    <hr class="divider my-4" />

<div class="rechargegsmContainer">
  <!--this will contain list of cards of a single operator example OOREDOO-->
  {#each Object.values(landing.RechargeGSM.operators) as operator}
  <div class="cards_operator_container" >
  <!--this is a single card type of signle operator example 'En Gros Avec Livraison' -->
  {#each operator["cards"] as card}
      <div class="card_container" >
          <h2>{card.name}</h2>

          <!--it contains the table of card-->
          <div class="card">
              <!--this will contain operator name ie OOREDOO-->
              <div class="card_operator_name" 
              style="background-color:{operator.operatorName=='OOREDOO' ? '#b01111':
              operator.operatorName=='ORANGE'? '#cd3700' 
              : '#0076bf'}">
              {operator.operatorName}
              </div>

              <!--this will contain explanation of the type ie 'En Gros Avec Livraison' info -->
              <div class="card_type_explanation"
              style="background-color:{operator.operatorName=='OOREDOO' ? '#e24343':
              operator.operatorName=='ORANGE'? '#ff6914' 
              : '#00a8f1'}">
              {card.explanation}
              </div>

              <!--this will contain types of gsm and their prices ie 'ticket 1dt'-->
              <div class="card_types_prices">
                {#each card["types"] as type}
                  <div class="type_row" >
                      <div class="before_hr">
                        <span class="type">{type.name}</span>
                        <span class="separator"> : </span>
                        <span class="price">{type.price}<span>dt</span></span>
                      </div>
                      <hr>
                  </div>
                  {/each}
              </div>
              
          </div>
      </div>
      {/each}
  </div>
  {/each}
</div>

  </section>
<!------------------------------------------------------------------------------------------>

<!-- Bureautique Section -->
<section class="page-section" id="bureautique">
 <div class="container">
    <h2 class="text-center mt-0">Bureautique</h2>
    <hr class="divider my-4" />

<div class="bureautique_container">
{#each Object.values(landing.Bureautique.cards) as type}
<div class="all_cards" >

            <!--this is a single card type ie 'Tarif photocopie' -->
            {#each type["types"] as card}
            <div class="card_container">
                <h2>{card.title}</h2>

                <!--it contains the table of card-->
                <div class="card" >
                    <!--this will contain card type ie 'Noir et Blanc - Texte'-->
                    <div class="card_type">{card.subtitle}</div>
                    <!--this will contain types of gsm and their prices ie 'ticket 1dt'-->
                    <div class="card_types_prices">
                        {#each card["main"] as row}
                        <div class="type_row" >
                            <div class="before_hr">
                                <span class="type">{row.title}</span>
                                <span class="separator"> : </span>
                                <span class="price">{row.price}</span>
                            </div>
                            <hr>
                        </div>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
    {/each}
</div>

</section>

<!-------------------------------------------------------------------------------------------->

<!--------------------------------------------------Paris Sportif------------------------------------------------>
 <!-------------------------------------------------------PromoCote---------------------------------------------------------->
 {#if 1==0}
<section class="page-section" id="parissportif">
  <div class="container">
    <h2 class="text-center mt-0">Paris Sportifs</h2>
    <hr class="divider my-4" />
<div class="promocote">
  <!--this is a single card type ie 'En Details' -->
  {#each Object.values(landing.parisSportif.promocote) as type}
  <div class="promocote_container">
  <div class="titlePromocote">Promocote</div>
      <!--it contains the table of card-->
      <div class="promocote_card" >
          <!--this will contain card type ie 'Noir et Blanc - Texte'-->
          <div class="promocote_type">{type.type}</div>
          <!--this will contain types of gsm and their prices ie 'ticket 1dt'-->
          <div class="promocote_types_prices">
              {#each type["items"] as item}
              <div class="type_row" >
                  <div class="before_hr">
                      <span class="type">{item.title}</span>
                      <span class="separator"> : </span>
                      <span class="price">{item.price}</span>
                  </div>
                  <hr>
              </div>
              {/each}
          </div>
      </div>
  </div>
  {/each}
</div>
</section>
{/if}
{/if}

<!--------------------------------------------------Gift Cards---------------------------------------->

<section class="page-section" id="giftcards">
  <div class="container">
    <h2 class="text-center mt-0">les Cartes Cadeaux - Gift Cards</h2>
    <hr class="divider my-4" />

    <div class="giftCardsContainer">
    {#each Object.values(landing.giftcards) as type}
    <!--Type example XBOX Fortnite ....-->
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
    {/each}
    </div>




    </div>
</section>


<!-------------------------------------------------------------------------------------------->

<!-------------------------------------------------Abonnement ADSL---------------------------------------->

<section class="page-section adsl" id="adsl">
  <div class="container">

    <h2 class="text-center mt-0">Abonnement ADSL</h2>
    <hr class="divider my-4" />
    <h1>Avec GlobalNet, vivez l'internet chez vous sans limite</h1>

 <!--Offre1-->
    <div class="offres">
      <div class="offree">
        <img class="logoPic"src="img/forca.png" alt="forca!" />
        <h3 class="title">ADSL</h3>
        <h6 class="subtitle">Classique</h6>
        <h6 class="minPrice">à partir de</h6>
        <h1 class="price">
          <span class="allPrice"><span class="firstPart">10</span><span class="secondPart">DT500</span></span>
          <span class="subPrice">/mois</span>
        </h1>
        <div class="line" />
        <ul class="listElement">
          <li>
            <i class="fas fa-check" />
            Double guichet
          </li>
          <li>
            <i class="fas fa-check" />
            Frais abonnement téléphoniques inclus
          </li>
          <li>
            <i class="fas fa-check" />
            L’offre la moins chère du marché
          </li>
          <li>
            <i class="fas fa-check" />
            Jusqu’à 20Mo
          </li>
        </ul>
      <div >
        <button class="DecouvrirBtn">
          Découvrir
          <i class="fas fa-arrow-right" />
        </button></div>
        
     </div>
      <!--Offre2-->
     
      <div class="offree">
        <img class="logoPic"src="img/uno_adsl.png" alt="uno!" />
        <h3 class="title">ADSL/VDSL</h3>
        <h6 class="subtitle">+Ligne téléphonique</h6>
        <h6 class="minPrice">à partir de</h6>
        <h1 class="price">
          <span class="allPrice"><span class="firstPart">27</span><span class="secondPart">DT900</span></span>
          <span class="subPrice">/mois</span>
        </h1>
        <div class="line" />
        <ul class="listElement">
          <li>
            <i class="fas fa-check" />
             Un Seul vis-à-vis
          </li>
          <li>
            <i class="fas fa-check" />
 Une seule facture
          </li>
          <li>
            <i class="fas fa-check" />
 Frais abonnement téléphoniques inclus
          </li>
          <li>
            <i class="fas fa-check" />
 Des services gratuits
          </li>
          <li>
            <i class="fas fa-check" />
 Jusqu’à 100Mo
          </li>
        </ul>

        <div >
        <button class="DecouvrirBtn">
          Découvrir
          <i class="fas fa-arrow-right" />
        </button></div>
   </div>
     <!--Ofrre3-->
  
      <div class="offree">
        <img class="logoPic"src="img/first.png" alt="first!" />
        <h3 class="title">ADSL</h3>
        <h6 class="subtitle">+Services inclus</h6>
        <h6 class="minPrice">à partir de</h6>
        <h1 class="price">
          <span class="allPrice"><span class="firstPart">23</span><span class="secondPart">DT000</span></span>
          <span class="subPrice">/mois</span>
        </h1>
        <div class="line" />
        <ul class="listElement">
          <li>
            <i class="fas fa-check" />
            Double guichet
          </li>
          <li>
            <i class="fas fa-check" />
            Frais abonnement téléphoniques inclus
          </li>
          <li>
            <i class="fas fa-check" />
 Des services gratuits
          </li>
          <li>
            <i class="fas fa-check" />
            Jusqu’à 20Mo
          </li>
        </ul>

        <div >
        <button class="DecouvrirBtn">
          Découvrir
          <i class="fas fa-arrow-right" />
        </button></div>
 </div>
      <!--Offre4-->
    
      <div class="offree">
        <img class="logoPic"src="img/prepaye.png" alt="prepaye!" />
        <h3 class="title">ADSL</h3>
        <h6 class="subtitle">Sans engagement annuel</h6>
        <h6 class="minPrice">à partir de</h6>
        <h1 class="price">
          <span class="allPrice"><span class="firstPart">79</span><span class="secondPart">DT800</span></span>
          <span class="subPrice">/trim</span>
        </h1>
        <div class="line" />
        <ul class="listElement">
          <li>
            <i class="fas fa-check" />
 Abonnement trimestriel
          </li>
          <li>
            <i class="fas fa-check" />
 Un Seul vis-à-vis
          </li>
          <li>
            <i class="fas fa-check" />
 Une seule facture
          </li>
          <li>
            <i class="fas fa-check" />
 Frais abonnement téléphonique inclus
          </li>
           <li>
            <i class="fas fa-check" />
 Jusqu’à 12Mo
          </li>
        </ul>

        <div >
        <button class="DecouvrirBtn">
          Découvrir
          <i class="fas fa-arrow-right" />
        </button></div>
      </div>
    </div>

  </div>
</section>

<!-- Contact Section -->
<section class="page-section" id="contact">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <h2 class="mt-0">Contactez nous!</h2>
        <hr class="divider my-4" />
        <p class="text-muted mb-5">
          vous aimez nos services? Appelez-nous ou envoyez-nous un
           email et nous reviendrons vers vous dès que possible!
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
        <i class="fas fa-phone fa-3x mb-3 text-muted" />
        <div>+216 98 534 614</div>
      </div>
      <div class="col-lg-4 mr-auto text-center">
        <i class="fas fa-envelope fa-3x mb-3 text-muted" />
        <!-- Make sure to change the email address in anchor text AND the link below! -->
        <a class="d-block" href="mailto:contact@yourwebsite.com">
          gegaservices@gnet.tn
        </a>
      </div>
    </div>
  </div>
</section>
{/if}
