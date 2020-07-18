// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topicsDiv = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(
        (success) => {
        console.log('Yay! 😃', success)
        const topicArr = success.data.topics;

        //create the divs and add to DOM
        topicArr.forEach(
            topic => 
            topicsDiv.appendChild(document.createElement('div'))
        )
        
        //add class and text to new divs
        document.querySelectorAll('.topics div').forEach(
            (div, index) => {
                div.classList.add('tab')
                div.innerHTML = topicArr[index]
            })
        
        //console.log(topicsDiv)  
    })
    .catch(
        (error) => {
            console.log('Oops! 😮', error)
        })