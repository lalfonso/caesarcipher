import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Right.css';


class Right extends Component {

    onChangeValue = (e) => {
        this.props.onChangeValue(e.target.value)
    } 

    render() {
        return (
            <div className="Right">
                <h1>Rigth</h1>
                <input 
                    type="text" 
                    name="" 
                    id="rigth" 
                    value={this.props.value} 
                    onChange={this.onChangeValue}
                    placeholder="text to be decrypted"/>
            </div>
        )
    }
}

Right.propTypes = {
    value: PropTypes.string.isRequired
}

export default Right;