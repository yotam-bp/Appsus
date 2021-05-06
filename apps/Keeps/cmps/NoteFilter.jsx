export class NoteFilter extends React.Component {

    state = {
      filterBy: {
        type: '',
      }
    }
  
   
  
    handleChange = (ev) => {
      const field = ev.target.name
      const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
      console.log(field, value);
      this.setState(({ filterBy }) => ({
        filterBy: { ...filterBy, [field]: value }
      }), () => {
        this.props.onSetFilter(this.state.filterBy)
        console.log(this.state.filterBy);
      })
    }
  
    onFilter = (ev) => {
      ev.preventDefault()
      this.props.onSetFilter(this.state.filterBy)
    }
  
    render() {
    //   const { type } = this.state.filterBy
      return (

        <select name="type" value={this.state.filterBy.type}
                onChange={this.handleChange} placeholder="Filter By"> 
                <option value="">All</option>
                <option value="NoteTodos">Todos</option>
                <option value="NoteText">Text</option>
                <option value="NoteImg">Image</option>
                <option value="NoteVideo">Video</option>
            
            </select>
  
        // <form className="car-filter" onSubmit={this.onFilter}>
        //   <label htmlFor="byVendor">By vendor</label>
        //   <input type="text" id="byVendor" ref={this.inputRef} name="vendor" value={vendor} onChange={this.handleChange} />
  
        //   <label htmlFor="minSpeed">Min speed</label>
        //   <input type="number" id="minSpeed" name="minSpeed" value={minSpeed} onChange={this.handleChange} />
  
        //   <label htmlFor="maxSpeed">Max speed</label>
        //   <input type="number" id="maxSpeed" name="maxSpeed" value={maxSpeed} onChange={this.handleChange} />
        //   <button>Filter</button>
        // </form>
      )
    }
  }