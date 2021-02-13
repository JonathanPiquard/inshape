'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BlankPage extends Component {
    render() {
        return (
            <Page title="blankPage">

            </Page>
        );
    }
}

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)(BlankPage);
