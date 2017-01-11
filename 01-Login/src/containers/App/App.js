import {StyleRoot} from 'radium';
import React, { PropTypes } from 'react';
import { Router } from 'react-router';


class App extends React.Component {
        static contextTypes = {
                router: PropTypes.object
        }

        static propTypes = {
                history: PropTypes.object.isRequired,
                routes: PropTypes.element.isRequired
        };

        get content() {
                return (
                        <Router
                                routes={this.props.routes}
                                history={this.props.history} />
                )
        }

        render () {
                return (
                        <StyleRoot>
                                <div style={{ height: '100%' }}>
                                        {this.content}
                                </div>
                        </StyleRoot>
                )
        }
}

export default App;
