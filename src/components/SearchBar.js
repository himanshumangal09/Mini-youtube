import React from 'react';


class SearchBar extends React.Component {
    state ={ term:''};
 onFormSubmit = (event) => {
 event.preventDefault();
this.props.onFormSubmit(this.state.term);
 //AIzaSyDoG7GZbx0kzhKMFhkxAwS90ODQEjBf0eI
 };
    render(){
        return (<div className="search-bar ui segment ">
        <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
                <label >Search bar</label>
                <input type="text" value={this.state.term} 
                onChange={e =>{this.setState({term:e.target.value})}} />
            </div>
        </form>    
               </div>) ;
            }
}

export default SearchBar ;



