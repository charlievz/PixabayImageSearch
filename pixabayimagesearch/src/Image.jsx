import React from "react";
import PropTypes from "prop-types";

class Image extends React.Component {
    render() {
        return (
            <div> 
                <img src={this.props.url} style={{ width: 400, height: 400 }} />
            </div>
        )
    }
}
export default Image;
Image.propTypes = {
    url: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
}