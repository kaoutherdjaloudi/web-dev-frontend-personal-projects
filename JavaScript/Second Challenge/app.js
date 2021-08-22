// get input element
let filterInput = document.querySelector('#filter-input');
// eventlistner
filterInput.addEventListener('keyup', filterNames);
// function construction
function filterNames(){
   // get value of the input 
   let filtervalue = document.querySelector('#filter-input').value.toUpperCase();

   // get names ul 
   let ul = document.querySelector('#names');
   
   // get li
   let  li = ul.querySelectorAll('li.collection-item');

   // loop through collection item lis
   for (let i=0 ; i < li.length ; i++){
       let a = li[i].getElementsByTagName('a')[0];
       if( a.innerHTML.toUpperCase().indexOf(filtervalue) > -1){
           li[i].style.display = '';
       } else{
           li[i].style.display = 'none';
       }
   }


}