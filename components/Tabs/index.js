// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//<div class="tabs">
//<div class="topics">
//<span class="title">TRENDING TOPICS:</span>
//</div>
//</div>



function getGithubData(username){
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    
        .then(response => { // THE RESOLVED VALUE
            debugger;
            document.body.innerText=response.data.topics;
    
            
            // the happy path
            // this code runs if the promise resolves
        })
        .catch(error => {
            // debugger
            document.body.innerText = error;
            // the sad path
            // this code runs if the promise fails
        });
    }

    function topicsCard(data){
        const topicsContainer = document.createElement('div');
        topicsContainer.classList.add('tab');
        topicsContainer.textContent='topic here';

        return topicsContainer;
    }