//variables
const tweetlist = document.getElementById('tweet-list');




//event listeners
eventListeners();
function eventListeners(){
//form submission
document.querySelector('#form').addEventListener('submit', newTweet);

//Remove tweet from the list
tweetlist.addEventListener('click',removeTweet);

//document
document.addEventListener('DOMContentLoaded',localStorageOnLoad);

}







//functions
function newTweet(e){
    e.preventDefault();

    //read the text area value
const tweet = document.getElementById('tweet').value;

// create the remove button
const removeBtn = document.createElement('a');
removeBtn.classList ='remove-tweet';
removeBtn.textContent='X'


//create an <li> element 
const li = document.createElement('li');
li.textContent = tweet;


//Add the remove button to each tweet
li.appendChild(removeBtn);

//add to the list
tweetlist.appendChild(li);

// add tweet to local storage
addTweetLocalStorage(tweet);

//print an alert
alert('Tweet Added');

this.reset();

}

//remove the tweet from the DOM
function removeTweet(e){
if(e.target.classList.contains('remove-tweet')){
    
    e.target.parentElement.remove();

}

//remove from local storage
 removeTweetLocalStorage( e.target.parentElement.textContent );


}

//adds the tweets to the local storage
function addTweetLocalStorage(tweet){

let tweets = getTweetFromStorage();

//add tweets into the array
tweets.push(tweet);

//convert tweet array into a string
localStorage.setItem('tweets', JSON.stringify(tweets));

}

function getTweetFromStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    // Get the values, if null is returned then we create an empty array
    if(localStorage.getItem('tweets')== null){
        tweets=[];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//prints local storage tweets on load
function localStorageOnLoad(){
    let tweets = getTweetFromStorage();

    //loop through storage and then bring the values
    tweets.forEach(function(tweet){
       
        // create the remove button
const removeBtn = document.createElement('a');
removeBtn.classList ='remove-tweet';
removeBtn.textContent='X'


//create an <li> element 
const li = document.createElement('li');
li.textContent = tweet;


//Add the remove button to each tweet
li.appendChild(removeBtn);

//add to the list
tweetlist.appendChild(li);
        
    });
}

//remove the tweet from local storage
function removeTweetLocalStorage(tweet){
    //get tweets from strorage 
   let tweets = getTweetFromStorage();

   //removes the X from the tweet

   const tweetDelete = tweet.substring(0, tweet.length -1);
  
   //loop through the tweet and remove the tweet that is equal
   tweets.forEach(function(tweetLS,index) {
        if(tweetDelete == tweetLS){
           
            tweets.splice(index, 1);

        }
   });
   //save the data
   localStorage.setItem('tweets', JSON.stringify(tweets));

}



