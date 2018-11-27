import  React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Offset.css';

class Offset extends Component {

    onChangeValue = (e) => {
        this.props.onChangeValue(e.target.value);
    }

    render() {
        return (
            <div className="Offset">
                <h1>Offset</h1>
                <select onChange={this.onChangeValue}>
                    {this.props.options.map((v, i) => {
                        return <option value={v} key={i}>{v}</option>
                    })}
                </select>
            </div>
        )
    }
}

Offset.propTypes = {
    options: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Offset;