import markdownss from '../images/markdownss.png'
import twitchapiss from '../images/twitchapiss.png'
import pomoss from '../images/pomoclockss.png'
import tttss from '../images/tictactoess.png'
import simonss from '../images/simonss.PNG'
// import weatherss from '../images/weatherss.png'
import quotess from '../images/quotess.png'
import wikifinderss from '../images/wikifinderss.png'


const FEProjectData = {
  Simon: {
    title: 'Simon',
    info: 'Web version of the popular game Simon',
    learned: 'This website was built to mimic the classic memory game of Simon. The game has many functions and was used to finalize what I had learned throughout the Free Code Camp Front End Developer Certification. With this project I had to use intervals, randomly generated sequences and different modes/state for the game to be in as well as some use of sounds.',
    url: 'https://codepen.io/tbwilson89/pen/mRmrJx',
    image: simonss
  },
  Tictactoe: {
    title: 'Tictactoe',
    info: 'Web version of the impossible to win game Tic-Tac-Toe',
    learned: 'A simple version of Tic Tac Toe against an unbeatable (although you can tie!) AI.',
    url: 'https://codepen.io/tbwilson89/pen/dNXdwJ',
    image: tttss
  },
  Pomodoro: {
    title: 'Pomodoro',
    info: 'Simple Pomodoro clock used for efficient work timing',
    learned: 'A project used to learn intervals as well as bringing in a sound for the alarm. The app also allows for adjustment to the timings for both the work and break times.',
    url: 'https://codepen.io/tbwilson89/pen/xgxqYz',
    image: pomoss
    },
  TwitchAPI: {
    title: 'TwitchAPI',
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
    title: 'Markdown',
    info: 'Converts markdown language into the appropriate style',
    learned: 'A simple text box conversion from Markdown into the formatted text with live updates as the user made changes.',
    url: 'https://codepen.io/tbwilson89/pen/apGrwR',
    image: markdownss
  },
  RandomQuote: {
    title: 'RandomQuote',
    info: 'Random quote generator, can also be altered to show different types of quotes based on a drop down choice',
    learned: 'Using the JQuery getJSON function to pull search results from wikipedia API based on user input. This creates a display list of the results that can be clicked on to go to that particular wiki page.',
    url: 'https://codepen.io/tbwilson89/pen/bBmKOK',
    image: quotess
  },
  WikiFinder: {
    title: 'WikiFinder',
    info: 'Search for and list wiki results using their API',
    learned: '',
    url: 'https://codepen.io/tbwilson89/pen/ZBVXNm',
    image: wikifinderss
  }
}

const BEProjectData = {
  URLShortener: {
    title: 'URLShortener',
    info: 'A website that allows a user to input a HTTP website and get a (potentially) shorter address alternative. New websites are added to a database and repeat searches return what is saved in the database. When trying to use the "short" address the user is forwarded to the appropriate website.',
    learned: 'Having user input update a database and the database be used to pull data and redirect based on the address the user goes to.',
    url: '',
    image: simonss,
  },
  SecondProject: {
    title: 'URL Shortener',
    info: 'A website that allows a user to input a HTTP website and get a (potentially) shorter address alternative. New websites are added to a database and repeat searches return what is saved in the database. When trying to use the "short" address the user is forwarded to the appropriate website.',
    learned: 'Having user input update a database and the database be used to pull data and redirect based on the address the user goes to.',
    url: '',
    image: simonss,
  }
}

export {FEProjectData, BEProjectData}
