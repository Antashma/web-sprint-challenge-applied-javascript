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
const cardsContainer = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(
        (success) => {
        console.log('Cards.js Axios','Hooray! 🤩', success)
        const articleData = success.data.articles
        articleData.javascript.forEach((article, index) =>
            cardsContainer.appendChild(
                articleMaker(articleData.javascript[index])
                )
            );
        articleData.bootstrap.forEach((article, index) =>
            cardsContainer.appendChild(
                articleMaker(articleData.bootstrap[index])
                )
            );
        articleData.technology.forEach((article, index) =>
            cardsContainer.appendChild(
                articleMaker(articleData.technology[index])
                )
            );
        articleData.jquery.forEach((article, index) =>
            cardsContainer.appendChild(
                articleMaker(articleData.jquery[index])
                )
            );
        articleData.node.forEach((article, index) =>
            cardsContainer.appendChild(
                articleMaker(articleData.node[index])
                )
            );
        }
    )
    .catch(
        (error) =>
        console.log('Axios from Cards.js says: Aw, man... 😫', error)
    )


    function articleMaker(topic) {
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

        //add content
        headline.textContent = topic.headline
        authorSpan.textContent = topic.authorName
        img.src =  topic.authorPhoto

        //append children
        const cardChildren = [headline, authorDiv]
        const authorChildren = [imgContainer, authorSpan]
    
        cardChildren.forEach(child => card.appendChild(child))
        authorChildren.forEach(child => authorDiv.appendChild(child))
        imgContainer.appendChild(img)

        //add event listener
        card.addEventListener('click', ()=> console.log(topic.headline))

        //console.log(topic)
        return card
    }