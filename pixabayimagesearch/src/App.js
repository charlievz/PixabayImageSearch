import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  onSearch = async (query) => {
    const response = await axios.get('https://pixabay.com/api', { params: { key: encodeURIComponent('33327267-588fd4c3de8f4bc0f1d8227e9'), q: encodeURIComponent(query), per_page: 20 }});
    this.setState({ images: response.data.hits });
  }
  render() {
    return (
      <div> 
        <SearchBar onSearch={this.onSearch} />
        <ImageList images={this.state.images} />
      </div>  
    )
  }
}

export default App;
