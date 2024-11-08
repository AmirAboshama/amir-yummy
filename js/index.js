/// <reference types="./@types/jquery"/>

var allDatahome=[]
var allDatadetalhome=[]
var allDatacategories=[]
var allDatasimicategories=[]
var allDatadetalcategories=[]
 var allDataArea=[]
 var allDatasimiArea=[]
 var allDatadetalArea=[]
 var allDataIngredients=[]
 var allDatasimiIngredients=[]
 var allDatadetalIngredients=[]
 var allDatasearchbyname=[]
 var allDatadetalsearchbyname=[]
 var allDatasearchbylitter=[]
 var allDatadetalsearchbylitter=[]
let sidebar=document.querySelector("aside")
let searchsection=document.querySelector("#search")
let searchName=document.querySelector("#searchName")
let searchLitter=document.querySelector("#searchLitter")
let simidetailsearch=document.querySelector("#simidetailsearch")
let detailsearch=document.querySelector("#detailsearch")
let homesection=document.querySelector("#Home")
let homedetals=document.querySelector("#detalsHome")
let categorysection=document.querySelector("#category")
let categorysimidetailssection=document.querySelector("#simidetailscategory")
let categorydetailssection=document.querySelector("#detalscategory")
let areasection=document.querySelector("#area")
let simidetailsareasection=document.querySelector("#simidetailsarea")
let detalsareasection=document.querySelector("#detalsarea")
let Ingredientssection=document.querySelector("#Ingredients")
let simidetailsIngredientssection=document.querySelector("#simidetailsIngredients")
let detalsIngredientssection=document.querySelector("#detalsIngredients")
let conactUssection=document.querySelector("#conactUs")
let closebtn=document.querySelector("#closeicon")
let searchbtn=document.querySelector("#searchbtn")
let categorybtn=document.querySelector("#categorybtn")
let areabtn=document.querySelector("#areabtn")
let ingrediantsbtn=document.querySelector("#ingrediantsbtn")
let countentUsbtn=document.querySelector("#countentUsbtn")
var inputyourname=document.querySelector("#inputName")
var inputyouremail=document.querySelector("#inputEmail")
var inputyournumber=document.querySelector("#inputPhone")
var inputyourAge=document.querySelector("#inputAge")
var inputyourPass=document.querySelector("#inputpassword")
var inputyourrePass=document.querySelector("#inputrepassword")
var alert1=document.querySelector("#alert")
var xBtn=document.getElementById("closeicon")
var menueBtn=document.getElementById("menueicon")
 var input=$("#searchName")
 var input2=$("#searchLitter")
 var loding =document.getElementById("loading")


/* /////////////// start sidebar  ///////////////// */
$(function(){
  let widthboxcolor =$(".sidebar").outerWidth(true)

  $(".sidebar").animate({"left":-widthboxcolor},0) 
  $(".iconsidebar").animate({"left":0},0 )
})


$("closeicon").on("click",function(){
  let widthboxcolor =$(".sidebar").outerWidth(true)


  $(".sidebar").animate({"left":-widthboxcolor},1000)


  if($(".iconsidebar").css("left")== `0px`){
   
      $(".iconsidebar").animate({"left":widthboxcolor},1000)


  }else{
      $(".iconsidebar").animate({"left":0},1000)

  
  } 
  })

  $(".iconsidebar").on("click",function(){
    console.log("hello");

    let widthboxcolor =$(".sidebar").outerWidth(true)
    
    if($(".sidebar").css("left")== `0px`){
      xBtn.classList.add("hidden")
      menueBtn.classList.remove("hidden")

        $(".sidebar").animate({"left":-widthboxcolor},1000)
      
        
    }else{
        $(".sidebar").animate({"left":0},1000) 
        xBtn.classList.remove("hidden")
        menueBtn.classList.add("hidden")


    } 
    if($(".iconsidebar").css("left")== `0px`){
        $(".iconsidebar").animate({"left":widthboxcolor},1000)
    }else{
        $(".iconsidebar").animate({"left":0},1000)
    
    } 
    })

    function closesideAuto(){
      let widthboxcolor =$(".sidebar").outerWidth(true)
    
      if($(".sidebar").css("left")== `0px`){
          $(".sidebar").animate({"left":-widthboxcolor},1000)
      }else{
          $(".sidebar").animate({"left":0},1000)
      
      } 
      if($(".iconsidebar").css("left")== `0px`){
          $(".iconsidebar").animate({"left":widthboxcolor},1000)
      }else{
          $(".iconsidebar").animate({"left":0},1000)
      
      } 
    }
    /* /////////////// end sidebar  ///////////////// */
/* /////////////// start click  ///////////////// */

    
    $("#searchbtn").on("click",()=>{
      searchsection.classList.remove("hidden")
      homesection.classList.add("hidden")
      homedetals.classList.add("hidden")
      categorysection.classList.add("hidden")
      categorysimidetailssection.classList.add("hidden")
      categorydetailssection.classList.add("hidden")
      areasection.classList.add("hidden")
      simidetailsareasection.classList.add("hidden")
      detalsareasection.classList.add("hidden")
      Ingredientssection.classList.add("hidden")
      simidetailsIngredientssection.classList.add("hidden")
      detalsIngredientssection.classList.add("hidden")
      conactUssection.classList.add("hidden")

      closesideAuto()
      xBtn.classList.add("hidden")
      menueBtn.classList.remove("hidden")

    })
 
    $("#categorybtn").on("click",()=>{
      searchsection.classList.add("hidden")
      simidetailsearch.classList.add("hidden")
      detailsearch.classList.add("hidden")
      searchsection.classList.add("hidden")
      homesection.classList.add("hidden")
      homedetals.classList.add("hidden")
      categorysection.classList.remove("hidden")
      categorysimidetailssection.classList.add("hidden")
      categorydetailssection.classList.add("hidden")
      areasection.classList.add("hidden")
      simidetailsareasection.classList.add("hidden")
      detalsareasection.classList.add("hidden")
      Ingredientssection.classList.add("hidden")
      simidetailsIngredientssection.classList.add("hidden")
      detalsIngredientssection.classList.add("hidden")
      conactUssection.classList.add("hidden")

      closesideAuto()
      xBtn.classList.add("hidden")
      menueBtn.classList.remove("hidden")
    })
    $("#areabtn").on("click",()=>{
      searchsection.classList.add("hidden")
      simidetailsearch.classList.add("hidden")
      detailsearch.classList.add("hidden")
      homesection.classList.add("hidden")
      homedetals.classList.add("hidden")
      categorysection.classList.add("hidden")
      categorysimidetailssection.classList.add("hidden")
      categorydetailssection.classList.add("hidden")
      areasection.classList.remove("hidden")
      simidetailsareasection.classList.add("hidden")
      detalsareasection.classList.add("hidden")
      Ingredientssection.classList.add("hidden")
      simidetailsIngredientssection.classList.add("hidden")
      detalsIngredientssection.classList.add("hidden")
      conactUssection.classList.add("hidden")

      closesideAuto()
      xBtn.classList.add("hidden")
      menueBtn.classList.remove("hidden")
    })
    $("#ingrediantsbtn").on("click",()=>{
      searchsection.classList.add("hidden")
      simidetailsearch.classList.add("hidden")
      detailsearch.classList.add("hidden")
      homesection.classList.add("hidden")
      homedetals.classList.add("hidden")
      categorysection.classList.add("hidden")
      categorysimidetailssection.classList.add("hidden")
      categorydetailssection.classList.add("hidden")
      areasection.classList.add("hidden")
      simidetailsareasection.classList.add("hidden")
      detalsareasection.classList.add("hidden")
      Ingredientssection.classList.remove("hidden")
      simidetailsIngredientssection.classList.add("hidden")
      detalsIngredientssection.classList.add("hidden")
      conactUssection.classList.add("hidden")
      closesideAuto()
      xBtn.classList.add("hidden")
      menueBtn.classList.remove("hidden")
    })
    $("#countentUsbtn").on("click",()=>{
      searchsection.classList.add("hidden")
      simidetailsearch.classList.add("hidden")
      detailsearch.classList.add("hidden")
      homesection.classList.add("hidden")
      homedetals.classList.add("hidden")
      categorysection.classList.add("hidden")
      categorysimidetailssection.classList.add("hidden")
      categorydetailssection.classList.add("hidden")
      areasection.classList.add("hidden")
      simidetailsareasection.classList.add("hidden")
      detalsareasection.classList.add("hidden")
      Ingredientssection.classList.add("hidden")
      simidetailsIngredientssection.classList.add("hidden")
      detalsIngredientssection.classList.add("hidden")
      conactUssection.classList.remove("hidden")
      closesideAuto()
      xBtn.classList.add("hidden")
      menueBtn.classList.remove("hidden")
    })
/* /////////////// end click  ///////////////// */

    


/* /////////////// start search  ///////////////// */


/* /////////////// start first part search  ///////////////// */

async function searchbyname(namesearch) {

  let api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${namesearch}`,{method: 'GET'})
  let datasearchbyname=await api.json()
  allDatasearchbyname=datasearchbyname
  console.log(allDatasearchbyname);
  displaysearchbyname()
    document.querySelectorAll('.coverCardsearch').forEach((card)=>{
    card.addEventListener("click",()=>{
      searchLitter.classList.add("hidden")
      searchName.classList.add("hidden")
      simidetailsearch.classList.add("hidden")
      detailsearch.classList.remove("hidden")
      getDetailssearchbyname(card.dataset.id)
    })
  })  

} 
 
function displaysearchbyname(){
  let datasearch=allDatasearchbyname
  // console.log(dataHomedis);
  
  let cartonasearch=``
  for (let i = 0; i < datasearch.meals.length; i++) {
   
    cartonasearch+=
   `
     <div data-id="${datasearch.meals[i].idMeal}" class=" coverCardsearch w-[25%] p-3 rounded-md container">
            <div class="layerCard relative group/parent overflow-hidden">
              <img
                class="imgCard w-full relative rounded-md"
                src="${datasearch.meals[i].strMealThumb}"
                alt=""
              />
              <div
                class="layer absolute transition-all duration-[.5S] group-hover/parent:top-[0] top-[150%] left-0 right-0 bottom-0 bg-[rgba(240,240,240,0.7)] text-center flex justify-center items-center"
              >
                <div class="contentCard">
                  <h3 class="text-[40px]">${datasearch.meals[i].strMeal}</h3>
                
                </div>
              </div>
            </div>
          </div>
  
  `     
  document.getElementById("simidetailsearch").innerHTML=cartonasearch
  
  
  }
  }
 
  async function getDetailssearchbyname(id) {

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,{method: 'GET'})
    let dataDetailsearchbyname=await api.json()
    allDatadetalsearchbyname=dataDetailsearchbyname
    console.log(allDatadetalsearchbyname);
    displayDetailsearchbyname()
  }

  function displayDetailsearchbyname(){
    let dataDetailsserch=allDatadetalsearchbyname
    // console.log(dataHomedis);
    
    let cartonaDetailsearchbyname=``
    
    
       cartonaDetailsearchbyname+=
  `
      <div class="partition1 w-[30%] rounded-md ">
           <img
             src="${dataDetailsserch.meals[0].strMealThumb}"
             class="w-[100%]"
             alt=""
           />
           <h4 class="text-white pt-3 text-[50px]">${dataDetailsserch.meals[0].strMeal}</h4>
         </div>
         <div class="partition1 text-white w-[70%] mb-5 p-4">
           <h3 class="text-[70px]">Instructions</h3>
           <p class=" mb-5 pb-4">
           ${dataDetailsserch.meals[0].strInstructions}
           </p>

           <div class="cat 
           ">
             <h5 class="text-[30px] tracking-[2px]">
               Area:<span>${dataDetailsserch.meals[0].strArea}</span>
             </h5>
             <h5 class="text-[30px] tracking-[2px]">
               Category :<span>${dataDetailsserch.meals[0].strCategory}</span>
             </h5>
             <h5 class="text-[30px] tracking-[2px]">Recipes :<span></span></h5>
             <br />
             <div class="recibes p-3 flex-wrap justify-evenly pt-2">
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient1}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient2}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient3}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient4}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient5}
               </span>

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient6}
               </span>
               <br />
               <br />
               <br />

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient7}
               </span>

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient8}
               </span>

               <br />
               <h6 class="text-[30px] pt-1">tags:</h6>
               <div class="bt flex pt-2">
                   <a href="${dataDetailsserch.meals[0].strSource}" class=" bg-green-500 rounded-xl p-5 m-2"> source</a>
                   <a href="${dataDetailsserch.meals[0].strYoutube}" class=" bg-red-600 rounded-xl p-5 m-2"> youtube</a>
               </div>
             </div>
           </div>
         </div> 
  
  `
    
    document.getElementById("detailsearch").innerHTML=cartonaDetailsearchbyname
  
    
    }
    /* /////////////// end first part search  ///////////////// */
/* /////////////// start second part search  ///////////////// */

async function searchbylitter(namesearch1) {

  let api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${namesearch1}`,{method: 'GET'})
  let datasearchbylitter=await api.json()
  allDatasearchbylitter=datasearchbylitter
  console.log(allDatasearchbylitter);
  displaysearchbylitter()
    document.querySelectorAll('.coverCardsearch').forEach((card)=>{
    card.addEventListener("click",()=>{
      searchLitter.classList.add("hidden")
      searchName.classList.add("hidden")
      simidetailsearch.classList.add("hidden")
      detailsearch.classList.remove("hidden")
      getDetailssearchbylitter(card.dataset.id)
    })
  })  

} 
 
function displaysearchbylitter(){
  let datasearch=allDatasearchbylitter
  // console.log(dataHomedis);
  
  let cartonasearch=``
  for (let i = 0; i < datasearch.meals.length; i++) {
   
    cartonasearch+=
   `
     <div data-id="${datasearch.meals[i].idMeal}" class=" coverCardsearch w-[25%] p-3 rounded-md container">
            <div class="layerCard relative group/parent overflow-hidden">
              <img
                class="imgCard w-full relative rounded-md"
                src="${datasearch.meals[i].strMealThumb}"
                alt=""
              />
              <div
                class="layer absolute transition-all duration-[.5S] group-hover/parent:top-[0] top-[150%] left-0 right-0 bottom-0 bg-[rgba(240,240,240,0.7)] text-center flex justify-center items-center"
              >
                <div class="contentCard">
                  <h3 class="text-[40px]">${datasearch.meals[i].strMeal}</h3>
                
                </div>
              </div>
            </div>
          </div>
  
  `     
  document.getElementById("simidetailsearch").innerHTML=cartonasearch
  
  
  }
  }
 
  async function getDetailssearchbylitter(id) {

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,{method: 'GET'})
    let dataDetailsearchbylitter=await api.json()
    allDatadetalsearchbylitter=dataDetailsearchbylitter
    console.log(allDatadetalsearchbylitter);
    displayDetailsearchbylitter()
  }

  function displayDetailsearchbylitter(){
    let dataDetailsserch=allDatadetalsearchbylitter
    // console.log(dataHomedis);
    
    let cartonaDetailsearchbylitter=``
    
    
       cartonaDetailsearchbylitter+=
  `
      <div class="partition1 w-[30%] rounded-md ">
           <img
             src="${dataDetailsserch.meals[0].strMealThumb}"
             class="w-[100%]"
             alt=""
           />
           <h4 class="text-white pt-3 text-[50px]">${dataDetailsserch.meals[0].strMeal}</h4>
         </div>
         <div class="partition1 text-white w-[70%] mb-5 p-4">
           <h3 class="text-[70px]">Instructions</h3>
           <p class=" mb-5 pb-4">
           ${dataDetailsserch.meals[0].strInstructions}
           </p>

           <div class="cat 
           ">
             <h5 class="text-[30px] tracking-[2px]">
               Area:<span>${dataDetailsserch.meals[0].strArea}</span>
             </h5>
             <h5 class="text-[30px] tracking-[2px]">
               Category :<span>${dataDetailsserch.meals[0].strCategory}</span>
             </h5>
             <h5 class="text-[30px] tracking-[2px]">Recipes :<span></span></h5>
             <br />
             <div class="recibes p-3 flex-wrap justify-evenly pt-2">
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient1}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient2}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient3}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient4}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient5}
               </span>

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient6}
               </span>
               <br />
               <br />
               <br />

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient7}
               </span>

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetailsserch.meals[0].strIngredient8}
               </span>

               <br />
               <h6 class="text-[30px] pt-1">tags:</h6>
               <div class="bt flex pt-2">
                   <a href="${dataDetailsserch.meals[0].strSource}" class=" bg-green-500 rounded-xl p-5 m-2"> source</a>
                   <a href="${dataDetailsserch.meals[0].strYoutube}" class=" bg-red-600 rounded-xl p-5 m-2"> youtube</a>
               </div>
             </div>
           </div>
         </div> 
  
  `
    
    document.getElementById("detailsearch").innerHTML=cartonaDetailsearchbylitter
  
    
    }

/* /////////////// end second part search  ///////////////// */
/* /////////////// end search  ///////////////// */

/* /////////////// start home  ///////////////// */

getHome()
xBtn.classList.add("hidden")
menueBtn.classList.remove("hidden")
loding.classList.remove("hidden")

async function getHome() {

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`,{method: 'GET'})
    let dataHome=await api.json()
    allDatahome=dataHome
    console.log(allDatahome.meals);
    loding.classList.add("hidden")
    displayHome()

    document.querySelectorAll('.coverCard').forEach((card)=>{
      card.addEventListener("click",()=>{
        homesection.classList.add("hidden")
homedetals.classList.remove("hidden")
getDetailshome(card.dataset.id)
      })
    })
}

function displayHome(){
let dataHomedis=allDatahome
// console.log(dataHomedis);

let cartonaHome=``
for (let i = 0; i < dataHomedis.meals.length; i++) {
 
    

   cartonaHome+=
 `
  <div data-id="${dataHomedis.meals[i].idMeal}" class="coverCard w-[25%] p-3 rounded-md container">
            <div class="layerCard relative group/parent overflow-hidden">
              <img
                class="imgCard w-full relative rounded-md"
                src="${dataHomedis.meals[i].strMealThumb}"
                alt=""
              />
              <div
                class="layer absolute transition-all duration-[.5S] group-hover/parent:top-[0] position: absolute; top-[120%] left-0 right-0 bottom-0 bg-[rgba(169,169,169,0.7)] text-center flex items-center"
              >
                <h3 class="text-[40px]">${dataHomedis.meals[i].strArea}</h3>
              </div>
            </div>
          </div>

`   
// console.log(cartonaHome);

document.getElementById("Home").innerHTML=cartonaHome


}
}


async function getDetailshome(id) {
  loding.classList.remove("hidden")

  let api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,{method: 'GET'})
  let dataDetailhome=await api.json()
  allDatadetalhome=dataDetailhome
  loding.classList.add("hidden")

  // console.log(allDatadetalhome);
  displayDetailhome()
}

function displayDetailhome(){
  let dataDetails=allDatadetalhome
  // console.log(dataHomedis);
  
  let cartonaDetailhome=``
  
  
     cartonaDetailhome+=
   `
      <div class="partition1 w-[30%] rounded-md ">
          <img
            src="${dataDetails.meals[0].strMealThumb}"
            class="w-[100%]"
            alt=""
          />
          <h4 class="text-white pt-3 text-[50px]">${dataDetails.meals[0].strMeal}</h4>
        </div>
        <div class="partition1 text-white w-[70%] p-4">
          <h3 class="text-[70px]">Instructions</h3>
          <p class="mb-5 pb-4">
          ${dataDetails.meals[0].strInstructions}
          </p>

          <div class="cat pt-3">
            <h5 class="text-[30px] tracking-[2px]">
              Area:<span>${dataDetails.meals[0].strArea}</span>
            </h5>
            <h5 class="text-[30px] tracking-[2px]">
              Category :<span>${dataDetails.meals[0].strCategory}</span>
            </h5>
            <h5 class="text-[30px] tracking-[2px]">Recipes :<span></span></h5>
            <br />
            <div class="recibes p-3 flex-wrap justify-evenly pt-2">
              <span class="bg-slate-400 p-3 rounded-xl m-2">
              ${dataDetails.meals[0].strIngredient1}
              </span>
              <span class="bg-slate-400 p-3 rounded-xl m-2">
                ${dataDetails.meals[0].strIngredient2}
              </span>
              <span class="bg-slate-400 p-3 rounded-xl m-2">
                ${dataDetails.meals[0].strIngredient3}
              </span>
              <span class="bg-slate-400 p-3 rounded-xl m-2">
                ${dataDetails.meals[0].strIngredient4}
              </span>
              <span class="bg-slate-400 p-3 rounded-xl m-2">
                ${dataDetails.meals[0].strIngredient5}
              </span>

              <span class="bg-slate-400 p-3 rounded-xl m-2">
                ${dataDetails.meals[0].strIngredient6}
              </span>
              <br />
              <br />
              <br />

              <span class="bg-slate-400 p-3 rounded-xl m-2">
${dataDetails.meals[0].strIngredient7}                </span>

              <span class="bg-slate-400 p-3 rounded-xl m-2">
${dataDetails.meals[0].strIngredient8}                </span>

              <br />
              <h6 class="text-[30px] pt-1">tags:</h6>
              <div class="bt flex pt-2">
                 <a href="${dataDetails.meals[0].strSource}" class= "bg-green-500 rounded-xl p-5 m-2"> source</a>
                  <a href="${dataDetails.meals[0].strYoutube}" class=" bg-red-600 rounded-xl p-5 m-2"> youtube</a>

              </div>
            </div>
          </div>
        </div>
    
  
  `   
  
  document.getElementById("detalsHome").innerHTML=cartonaDetailhome

  
  }
/* /////////////// end home  ///////////////// */
/* /////////////// start category   ///////////////// */
getcategories ()
async function getcategories() {
  loding.classList.remove("hidden")

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`,{method: 'GET'})
    let datacategories=await api.json()
    allDatacategories=datacategories
    console.log(allDatacategories);
    loding.classList.add("hidden")

    displaycategories()
      document.querySelectorAll('.coverCardcat').forEach((card)=>{
      card.addEventListener("click",()=>{
        categorysection.classList.add("hidden")
categorysimidetailssection.classList.remove("hidden")
getsimicategories(card.dataset.meal)
      })
    }) 

}


async function getsimicategories(meal) {
  loding.classList.remove("hidden")

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`,{method: 'GET'})
    let datasimicategories=await api.json()
    allDatasimicategories=datasimicategories
    console.log(allDatasimicategories);
    loding.classList.add("hidden")

    displaysimicategories()
    document.querySelectorAll('.coverCardcat').forEach((card)=>{
      card.addEventListener("click",()=>{
        categorysimidetailssection.classList.add("hidden")
categorydetailssection.classList.remove("hidden")
getDetailscategories(card.dataset.id)
      })
    }) 

}


async function getDetailscategories(id) {
  loding.classList.remove("hidden")

  let api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,{method: 'GET'})
  let dataDetailcategories=await api.json()
  allDatadetalcategories=dataDetailcategories
  loding.classList.add("hidden")

  // console.log(allDatadetalhome);
  displayDetailcategories()
}

function displaycategories(){
  let datacategories=allDatacategories
  // console.log(dataHomedis);
  
  let cartonacategories=``
  for (let i = 0; i < datacategories.categories.length; i++) {
   
     cartonacategories+=
   `
     <div data-meal="${datacategories.categories[i].strCategory}" class=" coverCardcat w-[25%] p-3 rounded-md container">
            <div class="layerCard relative group/parent overflow-hidden">
              <img
                class="imgCard w-full relative rounded-md"
                src="${datacategories.categories[i].strCategoryThumb}"
                alt=""
              />
              <div
                class="layer absolute transition-all duration-[.5S] group-hover/parent:top-[0] top-[150%] left-0 right-0 bottom-0 bg-[rgba(240,240,240,0.7)] text-center flex justify-center items-center"
              >
                <div class="contentCard">
                  <h3 class="text-[40px]">${datacategories.categories[i].strCategory}</h3>
                  <p class="text-[10px]">
                  ${datacategories.categories[i].strCategoryDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
  
  `     
  document.getElementById("category").innerHTML=cartonacategories
  
  
  }
  }
function displaysimicategories(){
  let datasimicategories=allDatasimicategories
  // console.log(dataHomedis);
  
  let cartonasimicategories=``
  for (let i = 0; i < datasimicategories.meals.length; i++) {
   
     cartonasimicategories+=
   `
     <div data-id="${datasimicategories.meals[i].idMeal}" class=" coverCardcat w-[25%] p-3 rounded-md container">
            <div class="layerCard relative group/parent overflow-hidden">
              <img
                class="imgCard w-full relative rounded-md"
                src="${datasimicategories.meals[i].strMealThumb}"
                alt=""
              />
              <div
                class="layer absolute transition-all duration-[.5S] group-hover/parent:top-[0] top-[150%] left-0 right-0 bottom-0 bg-[rgba(240,240,240,0.7)] text-center flex justify-center items-center"
              >
                <div class="contentCard">
                  <h3 class="text-[40px]">${datasimicategories.meals[i].strMeal}</h3>
                
                </div>
              </div>
            </div>
          </div>
  
  `     
  document.getElementById("simidetailscategory").innerHTML=cartonasimicategories
  
  
  }
  }

  function displayDetailcategories(){
    let dataDetails=allDatadetalcategories
    // console.log(dataHomedis);
    
    let cartonaDetailcategories=``
    
    
       cartonaDetailcategories+=
  `
      <div class="partition1 w-[30%] rounded-md ">
           <img
             src="${dataDetails.meals[0].strMealThumb}"
             class="w-[100%]"
             alt=""
           />
           <h4 class="text-white pt-3 text-[50px]">${dataDetails.meals[0].strMeal}</h4>
         </div>
         <div class="partition1 text-white w-[70%] mb-5 p-4">
           <h3 class="text-[70px]">Instructions</h3>
           <p class=" mb-5 pb-4">
           ${dataDetails.meals[0].strInstructions}
           </p>

           <div class="cat 
           ">
             <h5 class="text-[30px] tracking-[2px]">
               Area:<span>${dataDetails.meals[0].strArea}</span>
             </h5>
             <h5 class="text-[30px] tracking-[2px]">
               Category :<span>${dataDetails.meals[0].strCategory}</span>
             </h5>
             <h5 class="text-[30px] tracking-[2px]">Recipes :<span></span></h5>
             <br />
             <div class="recibes p-3 flex-wrap justify-evenly pt-2">
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient1}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient2}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient3}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient4}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient5}
               </span>

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient6}
               </span>
               <br />
               <br />
               <br />

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient7}
               </span>

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient8}
               </span>

               <br />
               <h6 class="text-[30px] pt-1">tags:</h6>
               <div class="bt flex pt-2">
                   <a href="${dataDetails.meals[0].strSource}" class=" bg-green-500 rounded-xl p-5 m-2"> source</a>
                   <a href="${dataDetails.meals[0].strYoutube}" class=" bg-red-600 rounded-xl p-5 m-2"> youtube</a>
               </div>
             </div>
           </div>
         </div> 
  
  `
    
    document.getElementById("detalscategory").innerHTML=cartonaDetailcategories
  
    
    }
    /* /////////////// end category   ///////////////// */




/* /////////////// start area  ///////////////// */
getArea()
async function getArea() {
  loding.classList.remove("hidden")

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`,{method: 'GET'})
    let dataArea=await api.json()
    allDataArea=dataArea
    loding.classList.add("hidden")

    console.log(allDataArea);
    displayArea()
       document.querySelectorAll('.coverCardArea').forEach((card)=>{
      card.addEventListener("click",()=>{
        areasection.classList.add("hidden")
        simidetailsareasection.classList.remove("hidden")
getsimiArea(card.dataset.area)
      })
    })  

}


async function getsimiArea(meal) {
  loding.classList.remove("hidden")

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${meal}`,{method: 'GET'})
    let datasimiArea=await api.json()
    allDatasimiArea=datasimiArea
    console.log(allDatasimiArea);
    loding.classList.add("hidden")

    displaysimiArea()
   document.querySelectorAll('.coverCardArea').forEach((card)=>{
      card.addEventListener("click",()=>{
        simidetailsareasection.classList.add("hidden")
        detalsareasection.classList.remove("hidden")
        getDetailsArea(card.dataset.id)
      })
    })  

}


async function getDetailsArea(id) {
  loding.classList.remove("hidden")

  let api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,{method: 'GET'})
  let dataDetailArea=await api.json()
  allDatadetalArea=dataDetailArea
  loding.classList.add("hidden")

  // console.log(allDatadetalhome);
  displayDetailArea()
}

function displayArea(){
  let dataArea=allDataArea
  // console.log(dataHomedis);
  
  let cartonaArea=``
  for (let i = 0; i < dataArea.meals.length; i++) {
   
     cartonaArea+=
   `
       <div data-area="${dataArea.meals[i].strArea}" class="coverCardArea w-[25%] p-3 rounded-md container  text-center">
            <div
              class="layerCard text-white text-[120px] relative flex justify-center items-center overflow-hidden"
            >
            <i class="fa-solid fa-house-laptop  "></i>            </div>
            <h3 class="text-white text-[60px] ">${dataArea.meals[i].strArea}</h3>
          </div>
  
  `     
  document.getElementById("area").innerHTML=cartonaArea
  
  
  }
  }
function displaysimiArea(){
  let datasimiArea=allDatasimiArea
  // console.log(dataHomedis);
  
  let cartonasimiArea=``
  for (let i = 0; i < datasimiArea.meals.length; i++) {
   
     cartonasimiArea+=
   `
     <div data-id="${datasimiArea.meals[i].idMeal}" class=" coverCardArea w-[25%] p-3 rounded-md container">
            <div class="layerCard relative group/parent overflow-hidden">
              <img
                class="imgCard w-full relative rounded-md"
                src="${datasimiArea.meals[i].strMealThumb}"
                alt=""
              />
              <div
                class="layer absolute transition-all duration-[.5S] group-hover/parent:top-[0] top-[150%] left-0 right-0 bottom-0 bg-[rgba(240,240,240,0.7)] text-center flex justify-center items-center"
              >
                <div class="contentCard">
                  <h3 class="text-[40px]">${datasimiArea.meals[i].strMeal}</h3>
                
                </div>
              </div>
            </div>
          </div>
  
  `     
  document.getElementById("simidetailsarea").innerHTML=cartonasimiArea
  
  
  }
  }

  function displayDetailArea(){
    let dataDetails=allDatadetalArea
    // console.log(dataHomedis);
    
    let cartonaDetailArea=``
    
    
       cartonaDetailArea+=
  `
      <div class="partition1 w-[30%] rounded-md ">
           <img
             src="${dataDetails.meals[0].strMealThumb}"
             class="w-[100%]"
             alt=""
           />
           <h4 class="text-white pt-3 text-[50px]">${dataDetails.meals[0].strMeal}</h4>
         </div>
         <div class="partition1 text-white w-[70%] mb-5 p-4">
           <h3 class="text-[70px]">Instructions</h3>
           <p class=" mb-5 pb-4">
           ${dataDetails.meals[0].strInstructions}
           </p>

           <div class="cat 
           ">
             <h5 class="text-[30px] tracking-[2px]">
               Area:<span>${dataDetails.meals[0].strArea}</span>
             </h5>
             <h5 class="text-[30px] tracking-[2px]">
               Category :<span>${dataDetails.meals[0].strCategory}</span>
             </h5>
             <h5 class="text-[30px] tracking-[2px]">Recipes :<span></span></h5>
             <br />
             <div class="recibes p-3 flex-wrap justify-evenly pt-2">
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient1}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient2}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient3}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient4}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient5}
               </span>

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient6}
               </span>
               <br />
               <br />
               <br />

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient7}
               </span>

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient8}
               </span>

               <br />
               <h6 class="text-[30px] pt-1">tags:</h6>
               <div class="bt flex pt-2">
                   <a href="${dataDetails.meals[0].strSource}" class=" bg-green-500 rounded-xl p-5 m-2"> source</a>
                   <a href="${dataDetails.meals[0].strYoutube}" class=" bg-red-600 rounded-xl p-5 m-2"> youtube</a>
               </div>
             </div>
           </div>
         </div> 
  
  `
    
    document.getElementById("detalsarea").innerHTML=cartonaDetailArea
  
    
    }

    /* /////////////// end area  ///////////////// */
/* /////////////// start Ingredients  ///////////////// */
getIngredients()
async function getIngredients() {

  loding.classList.remove("hidden")

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`,{method: 'GET'})
    let dataIngredients=await api.json()
    allDataIngredients=dataIngredients
    console.log(allDataIngredients);
    loding.classList.add("hidden")

    displayIngredients()
      document.querySelectorAll('.coverCardIngredients').forEach((card)=>{
      card.addEventListener("click",()=>{
        Ingredientssection.classList.add("hidden")
        simidetailsIngredientssection.classList.remove("hidden")
getsimiIngredients(card.dataset.meal)
      })
    })   

}


async function getsimiIngredients(meal) {
  loding.classList.remove("hidden")

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`,{method: 'GET'})
    let datasimiIngredients=await api.json()
    allDatasimiIngredients=datasimiIngredients
    console.log(allDatasimiIngredients);
    loding.classList.add("hidden")

    displaysimiIngredients()
    document.querySelectorAll('.coverCardIngredients').forEach((card)=>{
      card.addEventListener("click",()=>{
        simidetailsIngredientssection.classList.add("hidden")
        detalsIngredientssection.classList.remove("hidden")
        getDetailsIngredients(card.dataset.id)
      })
    })   

}


async function getDetailsIngredients(id) {
  loding.classList.remove("hidden")

  let api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,{method: 'GET'})
  let dataDetailIngredients=await api.json()
  allDatadetalIngredients=dataDetailIngredients
  loding.classList.add("hidden")

  console.log(allDatadetalIngredients);
  displayDetailIngredients()
}

function displayIngredients(){
  let dataIngredients=allDataIngredients
  // console.log(dataHomedis);
  
  let cartonaIngredients=``
  for (let i = 0; i < dataIngredients.meals.length; i++) {
   
     cartonaIngredients+=
   `
     <div data-meal="${ dataIngredients.meals[i].strIngredient}" class="coverCardIngredients w-[25%] p-3 rounded-md container">
            <div class="contentCardIngredients text-white p-6 text-center text-[80px]">
              <i class="fa-solid fa-drumstick-bite"></i>
              <h3 class="text-[20px]">${ dataIngredients.meals[i].strIngredient}</h3>
              <p class="text-[12px] line-clamp-3 ">
              ${ dataIngredients.meals[i].strDescription}
              </p>
            </div>
          </div>
  
  `     
  document.getElementById("Ingredients").innerHTML=cartonaIngredients
  
  
  }
  }
function displaysimiIngredients(){
  let datasimiIngredients=allDatasimiIngredients
  console.log(datasimiIngredients.meals);
  
  let cartonasimiIngredients=``
  for (let i = 0; i < datasimiIngredients.meals.length; i++) {
   
     cartonasimiIngredients+=
   `
     <div data-id="${datasimiIngredients.meals[i].idMeal}" class=" coverCardIngredients w-[25%] p-3 rounded-md container">
            <div class="layerCard relative group/parent overflow-hidden">
              <img
                class="imgCard w-full relative rounded-md"
                src="${datasimiIngredients.meals[i].strMealThumb}"
                alt=""
              />
              <div
                class="layer absolute transition-all duration-[.5S] group-hover/parent:top-[0] top-[150%] left-0 right-0 bottom-0 bg-[rgba(240,240,240,0.7)] text-center flex justify-center items-center"
              >
                <div class="contentCard">
                  <h3 class="text-[40px]">${datasimiIngredients.meals[i].strMeal}</h3>
                
                </div>
              </div>
            </div>
          </div>
  
  `     
  document.getElementById("simidetailsIngredients").innerHTML=cartonasimiIngredients
  
  
  }
  }

  function displayDetailIngredients(){
    let dataDetails=allDatadetalIngredients
    console.log(dataDetails);
    
    let cartonaDetailIngredients=``
    
    
       cartonaDetailIngredients+=
  `
      <div class="partition1 w-[30%] rounded-md ">
           <img
             src="${dataDetails.meals[0].strMealThumb}"
             class="w-[100%]"
             alt=""
           />
           <h4 class="text-white pt-3 text-[50px]">${dataDetails.meals[0].strMeal}</h4>
         </div>
         <div class="partition1 text-white w-[70%] mb-5 p-4">
           <h3 class="text-[70px]">Instructions</h3>
           <p class=" mb-5 pb-4">
           ${dataDetails.meals[0].strInstructions}
           </p>

           <div class="cat 
           ">
             <h5 class="text-[30px] tracking-[2px]">
               Area:<span>${dataDetails.meals[0].strArea}</span>
             </h5>
             <h5 class="text-[30px] tracking-[2px]">
               Category :<span>${dataDetails.meals[0].strCategory}</span>
             </h5>
             <h5 class="text-[30px] tracking-[2px]">Recipes :<span></span></h5>
             <br />
             <div class="recibes p-3 flex-wrap justify-evenly pt-2">
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient1}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient2}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient3}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient4}
               </span>
               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient5}
               </span>

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient6}
               </span>
               <br />
               <br />
               <br />

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient7}
               </span>

               <span class="bg-slate-400 p-3 rounded-xl m-2">
                  ${dataDetails.meals[0].strIngredient8}
               </span>

               <br />
               <h6 class="text-[30px] pt-1">tags:</h6>
               <div class="bt flex pt-2">
                   <a href="${dataDetails.meals[0].strSource}" class=" bg-green-500 rounded-xl p-5 m-2"> source</a>
                   <a href="${dataDetails.meals[0].strYoutube}" class=" bg-red-600 rounded-xl p-5 m-2"> youtube</a>
               </div>
             </div>
           </div>
         </div> 
  
  `
    
    document.getElementById("detalsIngredients").innerHTML=cartonaDetailIngredients
  
    
    }

    /* /////////////// end Ingredients  ///////////////// */
    /* /////////////// start conactUs  ///////////////// */

function inputName(){
  var regex=/[A-Za-z]{4,20}/
  var mystring=inputyourname.value

  if(regex.test(mystring)){
alert1.classList.remove("hidden")   
return true

  }else{
    alert1.classList.add("hidden")   
    return false

  }
 
}
function inputEmail(){
  var regex=/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{3,}/
  var mystring=inputyouremail.value

  if(regex.test(mystring)){
alert1.classList.remove("hidden")   
return true

  }else{
    alert1.classList.add("hidden")   
    return false

  }
 
}

function inputnumber(){
  var regex=/^(002)?01[0125][0-9]{8}$/
  var mystring=inputyournumber.value

  if(regex.test(mystring)){
alert1.classList.remove("hidden")   
return true

  }else{
    alert1.classList.add("hidden")   
    return false

  }
 
}
function inputage(){
  var regex=/^([1-7][0-9]|80)$/
  var mystring=inputyourAge.value

  if(regex.test(mystring)){
alert1.classList.remove("hidden")   
return true

  }else{
    alert1.classList.add("hidden")   
    return false

  }
 
}
function inputpass(){
  var regex=/[A-Za-z1-9]{4,20}/
  var mystring=inputyourPass.value

  if(regex.test(mystring)){
alert1.classList.remove("hidden")   
return true

  }else{
    alert1.classList.add("hidden")   
    return false

  }
 
}
function inputrepass()
{
  var regex=/[A-Za-z1-9]{4,20}/
  var mystring=inputyourrePass.value

  if(regex.test(mystring)){
alert1.classList.remove("hidden")   
return true
  }else{
    alert1.classList.add("hidden")   
return false
  }
 
}

console.log(

);
var btncontent1=document.getElementById("btncontentus1")
var btncontent2=document.getElementById("btncontentus2")
if(inputName() && inputEmail()&&inputnumber()&&inputage()&&inputpass()&&inputrepass()){
console.log("hello");


}




    /* /////////////// start conactUs  ///////////////// */
