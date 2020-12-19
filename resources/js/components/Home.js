import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    componentDidMount() { //ki tet7al el component Home el method adhiya te5dm awel 7aja
        axios.get('/api/contacts') // axios ya3ml des http calls (get,post,delete,put,etc)
            .then(({ data }) => {
                this.setState({ // tbadel fil les variables eli 3mlthom fi state
                    contacts: data
                })
            }).catch(errors => { console.log(errors); })//ok
    }


    render() {
        return <div className="container" >
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">All Contacts</div>

                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.contacts !== null
                                        && this.state.contacts.map((contacts) => (
                                            <tr key={contacts.id}>
                                                <td>{contacts.name}</td>
                                                <td>{contacts.tel}</td>
                                                <td></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;

if (document.getElementById('app')) {
    ReactDOM.render(<Home />, document.getElementById('app'));
}
