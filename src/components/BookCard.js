function BookCard(props) {

    function test() {
        console.log(props.title)
    }

    return (
        <div onClick={test} className="book-card">
            <img className="book-card-image" src={props.bookCardImage} alt="book" />
        </div>
    );
}

export default BookCard;