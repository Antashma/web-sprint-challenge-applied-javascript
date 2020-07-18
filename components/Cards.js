// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(
        (success) => {
        console.log('Hooray! 🤩', success)
        articleMaker();
        }
    )
    .catch(
        (error) =>
        console.log('Aw, man... 😫', error)
    )

    function articleMaker(data) {
        //create elements
        const card = document.createElement('div')
        const headline = document.createElement('div')
        const authorDiv = document.createElement('div')
        const imgContainer = document.createElement('div')
        const img = document.createElement('img')
        const authorSpan = document.createElement('span')

        //add classes
        card.classList.add('card')
        headline.classList.add('headline')
        authorDiv.classList.add('author')
        imgContainer.classList.add('img-container')

        
        
        


        console.log('you called the article maker sucessfully!')
        return
    }