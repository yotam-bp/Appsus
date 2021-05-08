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
        const { title, publishedDate, pageCount, language } = this.state.filterBy
        return (
            <form className="book-filter" onSubmit={this.onFilter}>
                <label htmlFor="byTitle">title</label>
                <input type="text" id="byTitle" name="title" value={title} onChange={this.handleChange} />
{/* 
                <label htmlFor="publishedDate">Published Date</label>
                <input type="number" id="publishedDate" name="publishedDate" value={publishedDate} onChange={this.handleChange} />

                <label htmlFor="pageCount">Page Count</label>
                <input type="number" id="pageCount" name="pageCount" value={pageCount} onChange={this.handleChange} />

                <label htmlFor="language">Language</label>
                <input type="text" id="language" name="language" value={language} onChange={this.handleChange} /> */}
                <button className="filter-btn">Filter</button>
            </form>
        )
    }
}