var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', Additem);
// delete event 
itemList.addEventListener('click', removeitem);
//filter event
filter.addEventListener('keyup', filteritems);

// add item
function Additem(e){
    e.preventDefault();

    // get input value
    var newItem = document.querySelector('#item').value;
    
    // creat new li elment 
    var li = document.createElement('li');
    // add class to li
    li.className = 'list-group-item';
    // add textnode with input value
    li.appendChild(document.createTextNode(newItem));

    // creat the delet botton element
    var deleteBtn = document.createElement('button');
    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text Node 
    deleteBtn.appendChild(document.createTextNode('X'));
    // append the button to the li  
    li.appendChild(deleteBtn);
    // append li to list
    itemList.appendChild(li);
}

// remove item
 function removeitem(e){
     if (e.target.classList.contains('delete')){
         if(confirm('Are you sure ?')){
             var li = e.target.parentElement;
             itemList.removeChild(li);
         };
     }

 }

 // filter Items
 function filteritems(e){
     // convert text to lower
     var text = e.target.value.toLowerCase();
    // get ils
     var items = itemList.getElementsByTagName('li');
     // convert to array
     Array.from(items).forEach(function(item){
         var itemName = item.firstChild.textContent;
        
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
        });
 
    }