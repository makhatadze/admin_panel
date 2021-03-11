import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import Modal from "antd/es/modal/Modal";
import {Button} from "antd";
import * as PropTypes from "prop-types";
import {addRole, setModalShow, updateRole} from "../../../../../actions/role/roleActions";
import TextFieldGroup from "../../../components/TextFieldGroup";
import {toast} from "react-toastify";


class RoleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            function: 'create',
            modalRole: {},
            name: '',
            errors: {},
            loading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.closeRoleForm = this.closeRoleForm.bind(this);


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.roles.modalRole !== this.props.roles.modalRole) {
            const modalRole = this.props.roles.modalRole;
            if (Object.keys(modalRole).length !== 0) {
                this.setState({
                    function: 'update',
                    modalRole: modalRole,
                    name: modalRole.name
                })
            }
        }
    }

    async onSubmit(e) {
        e.preventDefault();
        const roleData = {
            id: this.state.modalRole.id,
            name: this.state.name
        };
        this.setState({errors: {}, loading: true})
        if (this.state.function === 'create') {
            await this.props.addRole(roleData)
                .then((res) => {
                    this.setState({loading: false})
                    this.closeRoleForm()
                    toast.success(res)
                })
                .catch((err) => {
                    this.setState({errors: this.props.errors, loading: false});
                    toast.error(this.props.t(err))
                })
        } else if (this.state.function === 'update') {
            await this.props.updateRole(roleData)
                .then((res) => {
                    this.setState({loading: false})
                    this.closeRoleForm()
                    toast.success(res)
                })
                .catch((err) => {
                    this.setState({errors: this.props.errors, loading: false});
                    toast.error(this.props.t(err))
                })
        }

    }

    closeRoleForm() {
        this.setState({function: 'create', name: '', errors: {}})
        this.props.setModalShow({
            showModal: false,
            modalRole: {}
        })
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        const {t} = this.props;
        const {showModal} = this.props.roles
        return (
            <div>
                <Modal footer={null} title={this.state.function === 'create' ? t('Create Role') : t('Update Role')}
                       visible={showModal} onOk={() => console.log('ok')}
                       maskClosable={false} onCancel={this.closeRoleForm}>
                    <form onSubmit={this.onSubmit}>
                        <TextFieldGroup
                            placeholder={t('Enter Name')}
                            name="name"
                            type="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            errors={this.state.errors.name}
                        />
                        <Button type="primary" htmlType="submit" loading={this.state.loading}
                                className="ant-btn ant-btn-success mb-4">{t(`${this.state.function}`)}</Button>
                    </form>
                </Modal>
            </div>
        )
    }
}

RoleForm.propTypes = {
    setModalShow: PropTypes.func.isRequired,
    addRole: PropTypes.func.isRequired,
    updateRole: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    roles: state.roles,
    errors: state.errors
})

export default withTranslation()(connect(mapStateToProps, {setModalShow, addRole, updateRole})(RoleForm));
