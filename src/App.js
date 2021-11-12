import './App.css';
import Nav from './components/Nav';
import BookCard from './components/BookCard';
import BookShowcase from './components/BookShowcaseWindow';
import { useState } from 'react';

function App() {

  const  [state, setState] = useState({ cover: "./img/book.svg", title: 'Select a book!', desc: '' });
  const [expanded, setExpanded] = useState(false);


 

  return (
    <div className="main">

      {/* <nav className='nav'></nav> */}
      <Nav 
        className={expanded ? "nav-expanded" : "nav"}
        onClick={() => setExpanded(!expanded)}
      />

      <div className="showcase-container-wrapper">

        <BookShowcase
          img = {state.cover}
          title = {state.title}
          description = {state.desc}

        />

        <div className="book-container">

          <BookCard 
          bookCardImage="./img/1984.jpg"
          title = "1984"
          clicked = {
            () => setState({
              cover: "./img/1984.jpg",
              title: "1984",
              desc: "this is 1984's description"
          })}
          
          />

          <BookCard 
          bookCardImage="./img/alice-wonderland.jpg"
          title = "Alice in Wonderland" 
          clicked = {
            () => setState({
              cover: "./img/alice-wonderland.jpg" ,
              title: "Alice in Wonderland",
              desc: "this is Alice's description"
          })}
          />
          
          <BookCard 
          bookCardImage="./img/dune.jpg" 
          title="Dune"
          clicked = {
            () => setState({
              cover: "./img/dune.jpg",
              title: "Dune",
              desc: "this is Dune's description"
          })}
          />
          
          <BookCard 
          bookCardImage="./img/great-gatsby.gif" 
          title="The Great Gatsby"
          clicked = {
            () => setState({
              cover: "./img/great-gatsby.gif",
              title: "The Great Gatsby",
              desc: "this is Gatsby's description"
          })}
          />
          
          <BookCard 
          bookCardImage="./img/harry-potter.jpg" 
          title="Harry Potter"
          clicked = {
            () => setState({
              cover: "./img/harry-potter.jpg",
              title: "Harry Potter",
              desc: "this is Harry's description"
          })}
          />
          
          <BookCard 
          bookCardImage="./img/steven-king.png" 
          title="Needful Things"
          clicked = {
            () => setState({
              cover: "./img/steven-king.png",
              title: "Needful Things",
              desc: "this is steven king's description"
          })}
          />
          
          <BookCard 
          bookCardImage="./img/sun-tzu.jpg" 
          title="Art of War"
          clicked = {
            () => setState({
              cover: "./img/sun-tzu.jpg",
              title: "Art of War",
              desc: "this is sun tzu's description"
          })}
          />
          
          <BookCard 
          bookCardImage="./img/the-alchemist.jpg" 
          title="The Alchemist"
          clicked = {
            () => setState({
              cover: "./img/the-alchemist.jpg",
              title: "The Alchemist",
              desc: "this is Alchemist's description"
          })}
          />
          
        </div>
      </div>
    </div>
  );
}

export default App;