
function BookShowcase (props) {

    return (
        <div className="book-showcase">
          <div className="left-image">
            <img src={props.img} alt={props.title} />
          </div>
          <div className="book-description-container">
            <h1>{props.title}</h1>
            <br />
            <p>{props.description}</p>
          </div>
        </div>
    );
}

export default BookShowcase;