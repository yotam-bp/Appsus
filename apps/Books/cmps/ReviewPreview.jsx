const { Link } = ReactRouterDOM


export function ReviewPreview({ review }) {
    return (
        <ul className="book-review">
        <li>Name: {review.fullName}</li>
        <li>Rate: {review.rate}</li>
        <div>Read at: {review.readAt}</div>
        <li>Review: {review.txt}</li>
        </ul>
    )
}





