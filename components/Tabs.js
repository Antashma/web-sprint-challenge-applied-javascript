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
        topicArr.forEach((topic) => {
            topicsDiv.appendChild(document.createElement('div'))
        })

        //style to all children but remove from span
        Array.from(topicsDiv.children).forEach(child => child.classList.add('tab'))
        Array.from(topicsDiv.children)[0].classList.toggle('tab')

        document.querySelectorAll('div .tab').forEach((tab, index) => {
            tab.innerHTML = topicArr[index]
        })
        
        //console for testing
        //console.log(topicsDiv)  
    })
    .catch(
        (error) => {
            console.log('Oops! 😮', error)
        })