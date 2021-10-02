let maincontainer = document.querySelector(`.maincontainer`),
  btncontainer = document.querySelector(`.btncontainer`),
  btnsmall = document.querySelector(`.btnsmall`),
  btnbig = document.querySelector(`.btnbig`),
  smallmapmain = document.querySelector(`.smallmapmain`),
  toMain = document.querySelector(`.return`),
  refresh = document.querySelector(`.refresh`),
  smallmap = document.querySelector(`.smallmap`),
  bigmap = document.querySelector(`.bigmap`),
  axe = document.querySelector(`.axe`),
  Shovel = document.querySelector(`.Shovel`),
  pikaxe = document.querySelector(`.pikaxe`),
  selectedtool = "",
  treecounter = document.querySelector(`.tree`),
  leafcounter = document.querySelector(`.leaf`),
  rockcounter = document.querySelector(`.rock`),
  grasscounter = document.querySelector(`.grass`),
  dirtcounter = document.querySelector(`.dirt`),
  storage = document.querySelector(`.storage`),
  adStore=0;



  ////////// activating buttons/////////////
maincontainer.style.display = "block";
smallmapmain.style.display = "none";

btnsmall.addEventListener(`click`, () => {
  smallmapmain.style.display = "grid";
  maincontainer.style.display = "none";
  bigmap.style.display = "none";
  smallmap.style.display = "grid";
  initializeSmallMap();
  treecounter.value=0
  leafcounter.value=0
  rockcounter.value=0
  grasscounter.value=0
  dirtcounter.value=0
});

btnbig.addEventListener(`click`, () => {
  smallmapmain.style.display = "grid";
  bigmap.style.display = "grid";
  smallmap.style.display = "none";
  maincontainer.style.display = "none";
  initializeBigMap();
  treecounter.value=0
  leafcounter.value=0
  rockcounter.value=0
  grasscounter.value=0
  dirtcounter.value=0
});

  toMain.addEventListener(`click`, () => {
    maincontainer.style.display = "grid";
    smallmapmain.style.display = "none";
    treecounter.value=0
    leafcounter.value=0
    rockcounter.value=0
    grasscounter.value=0
    dirtcounter.value=0
  });


////////////position the elements////////////

function initializeSmallMap() {
const smallgameBoard=[
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,1,0,0],
  [0,0,1,0,0,0,1,1,0,0],
  [0,0,0,2,2,0,0,1,0,0],
  [0,0,2,2,2,0,0,0,0,4],
  [0,0,2,2,2,0,0,0,4,4],
  [0,0,0,3,0,0,0,0,4,4],
  [0,0,0,3,0,5,5,5,5,5],
  [5,5,5,5,5,6,6,6,6,6],
  [7,7,7,7,7,7,7,7,7,7]
]
generateSmallMape(smallgameBoard, smallmap);
}
function initializeBigMap() {
  const biggameBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 0, 4, 0, 0, 2, 2, 2, 0, 0, 0, 0, 4],
    [0, 0, 2, 2, 2, 0, 0, 0, 4, 4, 0, 0, 2, 2, 2, 0, 0, 0, 4, 4],
    [4, 0, 0, 3, 0, 0, 0, 0, 4, 4, 0, 0, 0, 3, 0, 0, 0, 4, 4, 4],
    [4, 4, 0, 3, 0, 5, 5, 5, 5, 5, 0, 0, 0, 3, 0, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6],
    [7, 7, 7, 6, 7, 7, 6, 7, 6, 7, 6, 7, 7, 7, 6, 7, 6, 6, 6, 7],
    [7, 6, 6, 6, 7, 6, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 7, 6, 7, 7],
    [7, 7, 7, 4, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7, 4, 7, 4, 7, 4, 7],
    [6, 6, 7, 6, 7, 6, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 6, 6, 7],
    [7, 7, 7, 6, 7, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 6, 6, 7]
  ]
  generateSmallMape(biggameBoard, bigmap);
}

function generateSmallMape(smallgameBoard, map) {

  for (let row = 0; row < smallgameBoard.length; row++) {
    for (let column = 0; column < smallgameBoard[row].length; column++) {
      generateElemets(smallgameBoard, map, row, column);

    }

  }
}

function generateElemets(smallgameBoard, map, row, column) {
  switch (smallgameBoard[row][column]) {
    case 0:
      createElement('empty', map, row, column);
      break;
    case 1:
      createElement('cloud', map, row, column);
      break;
    case 2:
      createElement('leaf', map, row, column);
      break;
    case 3:
      createElement('tree', map, row, column);
      break;
    case 4:
      createElement('rock', map, row, column);
      break;
    case 5:
      createElement('grass', map, row, column);
      break;
    case 6:
      createElement('dirt', map, row, column);
      break;
    case 7:
      createElement('lava', map, row, column);
      break;

    default:
      break;
  }
}

function createElement(type, map, row, column) {
  let element = document.createElement('div');
  element.classList.add(type);
  element.classList.add('hover');
  element.style.gridRowStart = row + 1;
  element.style.gridColumnStart = column + 1;
  element.addEventListener('click', clickHandle);
  map.append(element);
}

function clickHandle(e) {
  if (this.getAttribute(`class`).includes(`tree`) && selectedtool ===axe) {
    this.setAttribute(`class`, `empty`);
    treecounter.value++;      
  }
  if (this.getAttribute(`class`).includes(`leaf`)&& selectedtool ===axe) {
    this.setAttribute(`class`, `empty`);
    leafcounter.value++; 
  }

  if (this.getAttribute(`class`).includes(`rock`)&& selectedtool ===pikaxe){
    this.setAttribute(`class`, `empty`);
    rockcounter.value++; 
  }


  if (this.getAttribute(`class`).includes(`dirt`) && selectedtool ===Shovel){
    this.setAttribute(`class`, `empty`);
    dirtcounter.value++; 
  }
  if (this.getAttribute(`class`).includes(`grass`)&& selectedtool ===Shovel){
    this.setAttribute(`class`, `empty`);
    grasscounter.value++; 
  }
  if (this.getAttribute(`class`).includes(`empty`)){
    console.log(this.classList[0])
    if(adStore!==0){
      if(adStore.value>0){
        this.setAttribute("class",adStore.classList[1])
        adStore.value--;
      }
      console.log(adStore.value);
    }
  }
  
}

axe.addEventListener(`click`,axePick);
pikaxe.addEventListener(`click`,pikaxePick);
Shovel.addEventListener(`click`,shovelPick);

function axePick() {
  const weapons=document.querySelector(".weaponscontainer");
  [...weapons.children].map(val=>val.style.outline="none");
  selectedtool = axe;
  weapons.children[0].style.outline="3px solid white";
  adStore=0;
}

function pikaxePick() {
  const weapons=document.querySelector(".weaponscontainer");
  [...weapons.children].map(val=>val.style.outline="none");
  selectedtool = pikaxe;
  weapons.children[2].style.outline="3px solid white"
  adStore=0;
}

function shovelPick() {
  const weapons=document.querySelector(".weaponscontainer");
  [...weapons.children].map(val=>val.style.outline="none");
  selectedtool = Shovel;
  weapons.children[1].style.outline="3px solid white"
  adStore=0;
}

treecounter.addEventListener(`click`,chooseElement)

leafcounter.addEventListener(`click`,chooseElement)

rockcounter.addEventListener(`click`,chooseElement)

grasscounter.addEventListener(`click`,chooseElement)

dirtcounter.addEventListener(`click`,chooseElement)

function chooseElement(){
  
  adStore=this;
  selectedtool=0 
}

 refresh.addEventListener("click",()=>{
  smallmap.innerHTML=""
  initializeSmallMap();
  treecounter.value=0
  leafcounter.value=0
  rockcounter.value=0
  grasscounter.value=0
  dirtcounter.value=0
bigmap.innerHTML=""
initializeBigMap();
})
