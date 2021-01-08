class Nav {
 constructor(){
  this.nav= document.querySelector('.nav');
  this.container= document.querySelector('.container');
  this.nav.innerHTML = null;
  this.allSections = document.querySelectorAll('.section');
  const windowScrollHeight= window.innerHeight;
  this.allSections.forEach(section=>{
  const sectionData=  section.getAttribute('data-name');
  section.id= sectionData;
    const listItem= document.createElement('li');
    listItem.classList.add('nav-item');
     const Anchor=`
<a  class="nav_anchor">
               <h2>${sectionData}</h2>
                </a>
            `;
      listItem.innerHTML=Anchor;
    this.nav.append(listItem);
    let topOfSection =section.getBoundingClientRect().top;
    let heightOfSection =section.getBoundingClientRect().height;
   window.addEventListener('scroll',()=>{
       const pageScroll = document.documentElement.scrollTop;
       if(pageScroll>=topOfSection&&pageScroll<section.offsetTop+heightOfSection){
           const allH2= document.querySelectorAll('.listItem h2');

           allH2.forEach(h2=>{
               h2.classList.remove('active');
           })
           listItem.querySelector('h2').classList.add('active');
       }else{
           listItem.querySelector('h2').classList.remove('active');
       }
   })
    listItem.addEventListener('click',()=>{
     window.scrollTo({top:topOfSection,left:0 ,behavior:"smooth"})
    })
   })
    this.sticky =  this.container.offsetTop;
     window.addEventListener('scroll',()=>{
      if(window.pageYOffset>this.sticky){
       this.container.classList.add('sticky');

      }else{
        this.container.classList.remove('sticky');
       }





     })



 }


}
new Nav();
