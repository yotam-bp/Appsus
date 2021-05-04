import { utilService } from '../../../services/util.service.js'


export class ReviewAdd extends React.Component {
    state = {
        review: {
            id: utilService.makeId(),
            fullName: 'Books Reader',
            rate: null,
            readAt: new Date(),
            txt: null
        }

    }


    onAddReview = (ev) => {
        ev.preventDefault()
        this.props.addReview(this.state.review)
        this.setState({
            review: {
                id: utilService.makeId(),
                fullName: 'Books Reader',
                rate: null,
                readAt: new Date(),
                txt: null
            }
        })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            review: {
                ...prevState.review,
                [field]: value
            }
        }))
    }

    render() {
        return (
            <section className="review-container">
                <h3>Add your review!</h3>
                <form onSubmit={this.onAddReview}>
                    <label htmlFor="fullName">Full name</label>
                    <input type="text" name="fullName" onChange={this.handleChange} />
                    <label htmlFor="rate">Rate</label>
                    <select name="rate" onChange={this.handleChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <label htmlFor="readAt">Read at</label>
                    <input type="date" name="readAt" onChange={this.handleChange} />
                    <textarea name="txt" onChange={this.handleChange}></textarea>
                    <button>Submit review</button>
                </form >
            </section >
        )
    }
}