import PhotoFinder from '../imgs/projectScreenshots/photo-finder.jpg';
import ShoppingCart from '../imgs/projectScreenshots/shopping-cart.png';
import Memory from '../imgs/projectScreenshots/memory.jpg';
import Library from '../imgs/projectScreenshots/library.jpg';
import Battleship from '../imgs/projectScreenshots/battleship.jpg';
import Todo from '../imgs/projectScreenshots/to-do.jpg';
import PhotoFinderRec from '../video/photo-finder-rec.gif';
import ShoppingRec from '../video/shopping-rec.gif';
import MemoryRec from '../video/memory-rec.gif';
import LibraryRec from '../video/library-rec.gif';
import BattleshipRec from '../video/battleship-rec.gif';
import TodoRec from '../video/todo-rec.gif';

const projectLibrary = [
  {
    name: 'Photo Finder',
    description: "Photo tagging app inspired by Where's Waldo. Live leaderboards with Firebase used for backend.",
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
    name: 'League of Memory',
    description: "A tile based memory game that increases in difficulty as you play.  League of Legends themed.",
    screenshot: Memory,
    githubLink: "https://github.com/Daze-bot/memory-card",
    projectLink: "https://daze-bot.github.io/memory-card/",
    video: MemoryRec,
  },
  {
    name: 'Virtual Library',
    description: "Online library for storing books that have been read, as well as books the user would like to read. The library links to an online book store for buying books.",
    screenshot: Library,
    githubLink: "https://github.com/Daze-bot/book-library",
    projectLink: "https://daze-bot.github.io/book-library/",
    video: LibraryRec,
  },
  {
    name: 'Battleship ',
    description: 'A classic game of Battleship developed using Test Driven Development.  Play against a competitive and difficult AI.',
    screenshot: Battleship,
    githubLink: "https://github.com/Daze-bot/battleship",
    projectLink: "https://daze-bot.github.io/battleship/",
    video: BattleshipRec,
  },
  {
    name: 'To-do List',
    description: "A comprehensive to-do list to assist with daily/weekly/monthly tasks.  The user can create multiple projects to store different tasks, with a variety of sorting and viewing options.",
    screenshot: Todo,
    githubLink: "https://github.com/Daze-bot/todo-list",
    projectLink: "https://daze-bot.github.io/todo-list/",
    video: TodoRec,
  },
]

export default projectLibrary
