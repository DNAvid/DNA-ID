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

//<script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>
//<script>
//          // Initialize Firebase
//             var config = {
//       apiKey: "AIzaSyDcVtH8AkSWUrEwjeQEWX2GtyaaX3uzpH8",
//           authDomain: "dnavid-c48b6.firebaseapp.com",
//               databaseURL: "https://dnavid-c48b6.firebaseio.com",
//                   storageBucket: "dnavid-c48b6.appspot.com",
//                     };
//                       firebase.initializeApp(config);
//                       </script>
//
