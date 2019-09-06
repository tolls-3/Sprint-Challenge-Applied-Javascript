// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('header');
    
        const spanDate = document.createElement('span');
        spanDate.classList.add('date');
        spanDate.textContent='SMARCH 28, 2019';
    
        const headerOne = document.createElement('h1');
        headerOne.textContent='Lambda Times';
    
        const spanTemp = document.createElement('span');
        spanTemp.textContent='98°';
    
        headerDiv.appendChild(spanDate);
        headerDiv.appendChild(headerOne);
        headerDiv.appendChild(spanTemp);
    
        
    
        return headerDiv; 
    
}
const headerContainer=document.querySelector('.header-container');
    headerContainer.appendChild(Header());