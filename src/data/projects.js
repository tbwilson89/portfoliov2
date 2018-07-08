import markdownss from '../images/markdownss.png'
import twitchapiss from '../images/twitchapiss.png'
import pomoss from '../images/pomoclockss.png'
import tttss from '../images/tictactoess.png'
import simonss from '../images/simonss.PNG'
// import weatherss from '../images/weatherss.png'
import quotess from '../images/quotess.png'
import wikifinderss from '../images/wikifinderss.png'

import todolist from '../images/todolistss.PNG'
import urlshorten from '../images/urlshortenss.PNG'
import timestamp from '../images/timestampss.PNG'
import userdata from '../images/userdatass.PNG'



const FEProjectData = {
  Simon: {
    name: 'Simon',
    title: 'Simon',
    info: 'Web version of the popular game Simon',
    learned: 'This website was built to mimic the classic memory game of Simon. The game has many functions and was used to finalize what I had learned throughout the Free Code Camp Front End Developer Certification. With this project I had to use intervals, randomly generated sequences and different modes/state for the game to be in as well as some use of sounds.',
    url: 'https://codepen.io/tbwilson89/pen/mRmrJx',
    image: simonss
  },
  Tictactoe: {
    name: 'Tictactoe',
    title: 'Tic-Tac-Toe',
    info: 'Web version of the impossible to win game Tic-Tac-Toe',
    learned: 'A simple version of Tic Tac Toe against an unbeatable (although you can tie!) AI.',
    url: 'https://codepen.io/tbwilson89/pen/dNXdwJ',
    image: tttss
  },
  Pomodoro: {
    name: 'Pomodoro',
    title: "Pomodoro Clock",
    info: 'Simple Pomodoro clock used for efficient work timing',
    learned: 'A project used to learn intervals as well as bringing in a sound for the alarm. The app also allows for adjustment to the timings for both the work and break times.',
    url: 'https://codepen.io/tbwilson89/pen/xgxqYz',
    image: pomoss
    },
  TwitchAPI: {
    name: 'TwitchAPI',
    title: 'Twitch API App',
    info: 'Website which shows a list of Twitch streamers and whether they are online or offline as well as some other information. Can also add additional streamers to the list!',
    learned: 'This allowed me to learn how to pull information from outside sources using an API from a different website. On page load a list of streamer names from the livestreaming website Twitch would be used to pull their current data, which included things such as their profile picture and whether they are currently live or not. Based on the data pulled, a few sections were created to display a sorted list of these streamers by whether they are live, offline or do not exist. There is also an option to add a name to the list of streamers, which would then refresh the list to show that users current status.',
    url: 'https://codepen.io/tbwilson89/pen/xRmBEx',
    image: twitchapiss
  },
  // Weather: {
  //   title: 'Weather',
  //   info: 'Check the current weather wherever you are, based on the location of the person who opens the page',
  //   learned: 'This app was the first time I used the information that could be pulled on a request to figure out information about the user who is accessing the page. The information from this was used to determine the users location and then an API used that information to pull local weather.',
  //   url: 'https://codepen.io/tbwilson89/pen/YpRGjM',
  //   image: weatherss
  // },
  Markdown: {
    name: 'Markdown',
    title: 'Markdown Converter',
    info: 'Converts markdown language into the appropriate style',
    learned: 'A simple text box conversion from Markdown into the formatted text with live updates as the user made changes.',
    url: 'https://codepen.io/tbwilson89/pen/apGrwR',
    image: markdownss
  },
  RandomQuote: {
    name: 'RandomQuote',
    title: 'Random Quote Generator',
    info: 'Random quote generator, can also be altered to show different types of quotes based on a drop down choice',
    learned: 'Using the JQuery getJSON function to pull search results from wikipedia API based on user input. This creates a display list of the results that can be clicked on to go to that particular wiki page.',
    url: 'https://codepen.io/tbwilson89/pen/bBmKOK',
    image: quotess
  },
  WikiFinder: {
    name: 'WikiFinder',
    title: 'Wiki Finder',
    info: 'Search for and list wiki results using their API',
    learned: '',
    url: 'https://codepen.io/tbwilson89/pen/ZBVXNm',
    image: wikifinderss
  }
}

const BEProjectData = {
  todolist: {
    name: 'todolist',
    title: 'Todo List',
    info: 'Add, mark complete or remove "todos" from a persistent database list.',
    learned: 'An application that has an input field for entering in a "todo" that can be submitted and added to the list as well as the database. When the page loads it pulls the data from the database to create the list of todos, users can add, mark complete (by a strike through the text) or remove any item in the list, which will the update the database accordingly.',
    url: 'https://tbw-checklist-app.herokuapp.com/',
    image: todolist,
  },
  URLShortener: {
    name: 'URLShortener',
    title: 'URL Shortener',
    info: 'Through user input of an HTTP website, return a new (potentially) shorter URL to be used for redirection to the requested website.',
    learned: 'By having users input a website, a query is used to search if the website is already in the database or not. If the website is already in the database, it responds with a "shorter" URL that when visited will redirect the user to the appropriate webpage. Alternatively, if the website does not exist within the database it will then be added and have a new short URL created with the database entry and then have that returned for the user to access for the redirect to their webpage of choice.',
    url: 'https://tbw-urlshortener.herokuapp.com/',
    image: urlshorten,
  },
  timestamp: {
    name: 'timestamp',
    title: 'Date and Unix Converter',
    info: 'JSON display of a conversion of a date or UNIX time input by the user.',
    learned: '',
    url: 'https://tbw-unixconverter.herokuapp.com/',
    image: timestamp,
  },
  showip: {
    name: 'showip',
    title: 'Display User Data',
    info: 'Simple display of the IP address, operating system and and language of the user accessing the website.',
    learned: 'Through this small application I learned how to access the data from users who are sending requests to the server and have it display for them to see on the page.',
    url: 'https://tbw-showipos.herokuapp.com/',
    image: userdata,
  }
}

export {FEProjectData, BEProjectData}
