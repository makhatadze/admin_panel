import React, {Component} from 'react';
import translate from "../../shared/i18n/translate";



class Admin extends Component {
    render() {
        return (
            <>
                <h1>{translate('Admin Dashboard')}</h1>
            </>
        )
    }
}

export default Admin;
