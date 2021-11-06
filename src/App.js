// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. Hello!
//         </p>
//         <h1>Brian Williams</h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import BookCard from './components/BookCard';

function App() {

  // const name = "Brian Williams Weeeee";
  // let counter = 0;
  // function hello() {
  //   console.log("hello World!", counter);
  //   counter += 1;
  // }

  return (
    <div className="main">
      <nav className="nav"></nav>
      <div className="showcase-container-wrapper">
        <div className="book-showcase">
          <div className="left-image">
            <img src="./assets/book-image.png" alt="" />
          </div>
          <div className="book-description-container">
            <h1>Book Title</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quos reiciendis nisi. Cumque vitae distinctio, facere, ea debitis laboriosam quibusdam laudantium sed cum esse iste, aspernatur reiciendis magnam rerum ducimus?</p>
          </div>
        </div>
        <div className="book-container">
          <BookCard 
          bookCardImage="./img/1984.jpg" 
          title="1984"/>

          <BookCard 
          bookCardImage="./img/alice-wonderland.jpg" 
          title="Alice in Wonderland"/>
          
          <BookCard 
          bookCardImage="./img/dune.jpg" 
          title="Dune"/>
          
          <BookCard 
          bookCardImage="./img/great-gatsby.gif" 
          title="The Great Gatsby"/>
          
          <BookCard 
          bookCardImage="./img/harry-potter.jpg" 
          title="Harry Potter"/>
          
          <BookCard 
          bookCardImage="./img/steven-king.png" 
          title="Needful Things"/>
          
          <BookCard 
          bookCardImage="./img/sun-tzu.jpg" 
          title="Art of War"/>
          
          <BookCard 
          bookCardImage="./img/the-alchemist.jpg" 
          title="The Alchemist"/>
          
        </div>
      </div>
    </div>
  );
}

export default App;