import { ReviewPreview } from './ReviewPreview.jsx';


export function ReviewList({ reviews }) {
    if (!reviews || !reviews.length) return <p className="reviews-list"> There are no reviews to display</p>
    return (
    <div className="reviews-list">Reviews
    {/* <ReactFragment>
            storageService.loadFromStorage()
        </ReactFragment> */}
        {reviews.map(review => {
            return <ReviewPreview key={review.id} review={review} />
        })}
    </div>)

}

