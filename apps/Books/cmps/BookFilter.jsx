export class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            // publishedDate: '',
            // pageCount: '',
            // language: ''
        }
    }
    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }
    render() {
        const { title } = this.state.filterBy
        return (
            <form className="book-filter flex" onSubmit={this.onFilter}>
                <label htmlFor="byTitle" className="filter">Filter by title :</label>
                <input type="text" id="byTitle" name="title" value={title} onChange={this.handleChange} />
            </form>
        )
    }
}