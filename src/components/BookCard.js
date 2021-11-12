
function BookCard(props) {

    return (
        <div onClick={props.clicked} className="book-card">
            <img className="book-card-image" src={props.bookCardImage} alt={props.title} />
        </div>
    );
}


export default BookCard;