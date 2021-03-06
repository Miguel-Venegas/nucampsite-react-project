import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from './HeaderComponent';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null,

        };
    }

    onCampsiteSelect(campsite) {
        this.setState({ selectedCampsite: campsite });
    }

    render() {
        return (
            <div>
                <Header />
                <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
            </div>
        );
    }
}

export default Main;
