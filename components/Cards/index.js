// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    
        .then(response => { // THE RESOLVED VALUE
            // debugger;
            // document.body.innerText=response.data.articles;

            //This iterates over the topics object
            Object.values(response.data.articles).forEach(item =>{
                //debugger;
                item.forEach(article =>{
                    //article.headline;
                    //debugger
                    topicsBiggerContainer.appendChild(makeCard(article));
                })
                
            })
            })
                
        .catch(error => {
            // debugger;
            document.body.innerText = error;
            // the sad path
            // this code runs if the promise fails
            
        })
    const topicsBiggerContainer = document.querySelector('.cards-container');

function makeCard(data) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const headlineCard = document.createElement("div");
  headlineCard.classList.add("headline");
  headlineCard.textContent = `${data.headline}`;

  const authordivCard = document.createElement("div");
  authordivCard.classList.add("author");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  const imageCard = document.createElement("img");
  imageCard.textContent = `${data.authorPhoto}`;
  imageCard.src = data.authorPhoto;

  const authorsNameCard = document.createElement("span");
  authorsNameCard.textContent = `By ${data.authorName}`;

  divCard.appendChild(headlineCard);
  divCard.appendChild(authordivCard);

  authordivCard.appendChild(imageContainer);
  authordivCard.appendChild(authorsNameCard);
  imageContainer.appendChild(imageCard);
  

  return divCard;
}
