import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
class ImageList extends React.Component {
    render() {
        return ( 
            <div>
                {this.props.images.map(image => <Image key={image.id} url={image.largeImageURL} width={image.webformatWidth} height={image.webformatHeight} />)}
            </div>
        )
    }
}
export default ImageList;
ImageList.propTypes = {
    images: PropTypes.array,
}