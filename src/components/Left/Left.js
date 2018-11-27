import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Left.css'

class Left extends Component {

    onChangeValue = (e) => {
        this.props.onChangeValue(e.target.value)
    } 

    render() {
        return (
            <div className="Left">
                <h1>Left</h1>
                <input 
                    type="text" 
                    name="" 
                    id="left" 
                    value={this.props.value} 
                    onChange={this.onChangeValue}
                    placeholder="text to be encrypted"/>
            </div>
        )
    }
}

Left.propTypes = {
    value: PropTypes.string.isRequired
}

export default Left;