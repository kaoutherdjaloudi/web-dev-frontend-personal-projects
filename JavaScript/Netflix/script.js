const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab Content Item
function selectItem(e) {
    // add border to current tab
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    // grab content item from the dom
    const TabContentItem = document.querySelector(`#${this.id}-content`);
    //add show case
    TabContentItem.classList.add('show');
}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
} 

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'))
} 

// Listen For Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem));
