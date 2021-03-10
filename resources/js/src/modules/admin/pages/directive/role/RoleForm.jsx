import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import Modal from "antd/es/modal/Modal";
import {Button} from "antd";


class RoleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }


    render() {
        const {t} = this.props;
        return (
            <div>
                <Modal title="Basic Modal" visible={this.state.showModal} onOk={() => () => this.setState({showModal: false})} onCancel={() => this.setState({showModal: false})}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}


export default withTranslation()(connect()(RoleForm));
