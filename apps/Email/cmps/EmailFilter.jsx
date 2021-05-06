export class EmailFilter extends React.Component {
 
    state = {
        filterBy: {
            text: '',

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
        const {text} = this.state.filterBy;
        return (
            <section>
                <form className="email-filter" onSubmit={this.onFilter}>
                    <label htmlFor="text">search</label>
                    <input type="text" name="text" value={text} onChange={this.handleChange}/>
                </form>
            </section>
        )
    }
}