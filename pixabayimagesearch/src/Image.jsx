import React from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

class Image extends React.Component {
    render() {
        return (
            <div> 
                <Popup 
                    modal
                    trigger={
                        <button style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}>
                            <img src={this.props.url} style={{ width: 300, height: 300 }} />
                        </button>
                    }>
                    <div>
                        <img src={this.props.url} style={{ width: this.props.width, height: this.props.height, display: 'block', margin: 'auto'}} />
                        <p>User: {this.props.user}</p>
                        <p>Tags: {this.props.tags}</p>
                    </div>
                </Popup>
            </div>
        )
    }
}
export default Image;
Image.propTypes = {
    url: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    user: PropTypes.string,
    tags: PropTypes.tags,
}