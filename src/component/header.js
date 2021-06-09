import React from 'react';
import Form from './Formanimal'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beasts: ''
        };
    }

    render() {
        return (
            <div>
                <h1>SARA Gallary</h1>
                <br />
                <Form
                    filterImg={this.props.filterImg}
                    horns={this.props.horns}
                    newState={this.props.newState}
                />
            </div>);
    }
}
export default Header;