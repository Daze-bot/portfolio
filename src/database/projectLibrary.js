import PhotoFinder from '../imgs/projectScreenshots/photo-finder.jpg';
import ShoppingCart from '../imgs/projectScreenshots/shopping-cart.png';
import Memory from '../imgs/projectScreenshots/memory.jpg';
import Blog from '../imgs/projectScreenshots/blog.png';
import Battleship from '../imgs/projectScreenshots/battleship.jpg';
import MembersOnly from '../imgs/projectScreenshots/members-only.png';
import Todo from '../imgs/projectScreenshots/to-do.jpg';
import Edgewood from '../imgs/projectScreenshots/edgewood.png';
import PhotoFinderRec from '../video/photo-finder-rec.gif';
import ShoppingRec from '../video/shopping-rec.gif';
import MemoryRec from '../video/memory-rec.gif';
import BattleshipRec from '../video/battleship-rec.gif';
import TodoRec from '../video/todo-rec.gif';
import BlogRec from '../video/blog-rec.gif';
import MembersOnlyRec from '../video/members-only-rec.gif';
import EdgewoodRec from '../video/edgewood-rec.gif';

const projectLibrary = [
  {
    name: "Daze's Blog",
    description: "MERN stack blog app, built with a custom back-end REST API server using Node, Express, and MongoDB and two different React front-ends, one for the author and one for the consumers.",
    screenshot: Blog,
    githubLink: "https://github.com/Daze-bot/blog-api",
    projectLink: "https://daze-blog-view.netlify.app/",
    video: BlogRec,
  },
  {
    name: 'Photo Finder',
    description: "Photo tagging app inspired by Where's Waldo. Live leaderboards with React for the front-end and Firebase used for back-end.",
    screenshot: PhotoFinder,
    githubLink: "https://github.com/Daze-bot/photo-tagging",
    projectLink: "https://daze-bot.github.io/photo-tagging/",
    video: PhotoFinderRec,
  },
  {
    name: 'Shopping Cart',
    description: "Fake online shop with full functionality. The store is centered around gaming and pc products. Created with React.",
    screenshot: ShoppingCart,
    githubLink: "https://github.com/Daze-bot/shopping-cart",
    projectLink: "https://daze-bot.github.io/shopping-cart/",
    video: ShoppingRec,
  },
  {
    name: "Members Only",
    description: "Online chat room built on the back-end using Node, Express, and MongoDB.  Users first have to become a member before they can access the chat.",
    screenshot: MembersOnly,
    githubLink: "https://github.com/Daze-bot/members-only",
    projectLink: "https://daze-members-only.fly.dev/",
    video: MembersOnlyRec,
  },
  {
    name: 'League of Memory',
    description: "A tile based memory game that increases in difficulty as you play.  League of Legends themed.  Built with React.",
    screenshot: Memory,
    githubLink: "https://github.com/Daze-bot/memory-card",
    projectLink: "https://daze-bot.github.io/memory-card/",
    video: MemoryRec,
  },
  {
    name: 'Edgewood Cafe',
    description: "Fully responsive app that was built for the owner of Edgewood Cafe.  This is the official restaurant website and was created in order to establish an online presence to better serve customers.",
    screenshot: Edgewood,
    githubLink: "https://github.com/Daze-bot/edgewood-cafe",
    projectLink: "https://edgewoodcafeyardley.com/",
    video: EdgewoodRec,
  },
  {
    name: 'To-do List',
    description: "A comprehensive to-do list to assist with daily/weekly/monthly tasks.  The user can create multiple projects to store different tasks, with a variety of sorting and viewing options.",
    screenshot: Todo,
    githubLink: "https://github.com/Daze-bot/todo-list",
    projectLink: "https://daze-bot.github.io/todo-list/",
    video: TodoRec,
  },
  {
    name: 'Battleship ',
    description: 'The classic game of Battleship developed using Test Driven Development.  Play against a competitive and difficult AI.',
    screenshot: Battleship,
    githubLink: "https://github.com/Daze-bot/battleship",
    projectLink: "https://daze-bot.github.io/battleship/",
    video: BattleshipRec,
  },
]

export default projectLibrary
