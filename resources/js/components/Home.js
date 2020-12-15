import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    coponentDidMount() {
        axios.get('/api/contacts').then(response => {
            this.setState({
                contacts: response.data
            })
        }).catch(err => console.log(err));
    }

    render() {
        return
        (<div className="container" >
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">All Contacts</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Home;

if (document.getElementById('app')) {
    ReactDOM.render(<Home />, document.getElementById('app'));
}
