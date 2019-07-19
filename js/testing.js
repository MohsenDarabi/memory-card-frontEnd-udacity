/*let iconsArr=['<i class="far fa-thumbs-up fa-5x"></i>',
  '<i class="fab fa-angellist fa-5x"></i>',
  '<i class="fas fa-bullhorn fa-5x"></i>',
  '<i class="fas fa-anchor fa-5x"></i>',
  '<i class="far fa-bell-slash fa-5x"></i>',
  '<i class="fas fa-binoculars fa-5x"></i>',
  '<i class="fas fa-chess fa-5x"></i>',
  '<i class="fas fa-bomb fa-5x"></i>'
];
let iconsArrLength= iconsArr.length;
let j=Math.floor(Math.random()*iconsArr.length);
let randomNums=[];
console.log(j);
let copy;
let spliceing=(j)=>{
     copy=iconsArr.splice(j,1);
     return copy;
}


let randomMacher=iconsArrLength=>{
  for(iconsArrLength; iconsArrLength>0 ; iconsArrLength--){
    j=Math.floor(Math.random()*iconsArrLength);
    let spliced=iconsArr.splice(j,1);
    return spliced;
    
  }
  

};
randomMacher(iconsArrLength);
*/
let iconsArr=['<i class="far fa-thumbs-up fa-5x"></i>',
  '<i class="fab fa-angellist fa-5x"></i>',
  '<i class="fas fa-bullhorn fa-5x"></i>',
  '<i class="fas fa-anchor fa-5x"></i>',
  '<i class="far fa-bell-slash fa-5x"></i>',
  '<i class="fas fa-binoculars fa-5x"></i>',
  '<i class="fas fa-chess fa-5x"></i>',
  '<i class="fas fa-bomb fa-5x"></i>',
  '<i class="far fa-thumbs-up fa-5x"></i>',
  '<i class="fab fa-angellist fa-5x"></i>',
  '<i class="fas fa-bullhorn fa-5x"></i>',
  '<i class="fas fa-anchor fa-5x"></i>',
  '<i class="far fa-bell-slash fa-5x"></i>',
  '<i class="fas fa-binoculars fa-5x"></i>',
  '<i class="fas fa-chess fa-5x"></i>',
  '<i class="fas fa-bomb fa-5x"></i>'
  
];
let listDone = [];        
let inProcess = true;

    let randomIcons=()=>{
      while(inProcess){
        let randomArr = Math.floor(Math.random() * iconsArr.length);
    
        let isDone = false;
        for (let j = 0; j < listDone.length; j++) {
            if (listDone[j] === randomArr)
                isDone = true;
        }
        if (!isDone) {
            console.log(iconsArr[randomArr]);//Display if not Done.
            listDone.push(randomArr);
        }
    
        if (iconsArr.length == listDone.length)
            inProcess = false;
    
    }
    } 
    randomIcons();
console.log(listDone);