import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import axios from 'axios';

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      page: 1,
      query: '',
    }
  }

  onSearch = async (query) => {
    const response = await axios.get('https://pixabay.com/api', { params: { key: encodeURIComponent('33327267-588fd4c3de8f4bc0f1d8227e9'), q: encodeURIComponent(query), per_page: 16 }});
    this.setState({ images: response.data.hits, query: query });
  }
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = async () => {
    const wrappedElement = document.getElementById('imageList');
    if (wrappedElement && this.state.images.length && this.isBottom(wrappedElement)) {
        const newImages = await this.pagedSearch();
        this.setState({ images: this.state.images.concat(newImages)});
    }
  };
  pagedSearch = async () => {
    const { query, page } = this.state;
    const response = await axios.get('https://pixabay.com/api', { params: { key: encodeURIComponent('33327267-588fd4c3de8f4bc0f1d8227e9'), q: encodeURIComponent(query), per_page: 16, page: page + 1 }});
    this.setState({  page: page + 1 });
    return response.data.hits;
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
