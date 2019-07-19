const loadFunction = () => {
  alert('LOADED');
  randomIcons();
  let ps=document.querySelectorAll('p.icon');
  let pars =Array.from(ps);
  
  console.log(pars);
  for(let par=0;par<pars.length; par++){
    pars[par].innerHTML=iconsArr[listDone[par]];
    pars[par].classList.add('invisible');
  }
} 


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


let x=false;console.log(listDone);
let y='make a guess!';



 function changeText(cc) {
  if(cc.className ==='notClicked icon invisible'){

    cc.classList.remove = 'invisible';
    cc.className ='clicked icon';

  }else{
    cc.innerHTML =y;
    cc.className ='notClicked icon invisible';
  }
}
randomIcons();


let sectionFunction=(aa)=>{
  aa.style.display='none';
}
