import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
    }
    onSearchChange = e => {
        this.setState({searchTerm: e.target.value});
    }
    onSubmit = e => { 
        e.preventDefault();
        this.props.onSearch(this.state.searchTerm);
    };
    render() {
        return (
            <div style={{textAlign: 'center', padding: 20}}> 
                <form onSubmit={this.onSubmit}>
                    <label>Search:</label>
                    <input type="text" value={this.state.searchTerm} onChange={this.onSearchChange} style={{marginLeft: 10}}/>
                </form>
            </div> 
        )
    }

}
export default SearchBar;

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
}