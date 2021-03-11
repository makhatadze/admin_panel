import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import Modal from "antd/es/modal/Modal";
import {Button} from "antd";
import * as PropTypes from "prop-types";
import {addRole, setModalShow} from "../../../../../actions/role/roleActions";
import TextFieldGroup from "../../../components/TextFieldGroup";
import {toast} from "react-toastify";


class RoleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            errors: {},
            loading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.closeRoleForm = this.closeRoleForm.bind(this);


    }
    componentWillReceiveProps(nextProps) {
        // if (nextProps.errors) {
        //     this.setState({errors: nextProps.errors});
        // }
    }

    async onSubmit(e) {
        e.preventDefault();
        const roleData = {
            name: this.state.name
        };
        this.setState({errors: {},loading: true})
        await this.props.addRole(roleData)
            .then((res) => {
                this.setState({loading: false})
                this.props.setModalShow(false)
                this.closeRoleForm()
                toast.success(res)
            })
            .catch((err) => {
                this.setState({errors: this.props.errors,loading:false});
                toast.error(this.props.t(err))
            })
    }

    closeRoleForm() {
        this.setState({name: '',errors: {}})
        this.props.setModalShow(false)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        const {t} = this.props;
        const { showModal } =this.props.roles
        return (
            <div>
                <Modal footer={null} title={t('Create Role')} visible={showModal} onOk={() => console.log('ok')} maskClosable={false} onCancel={this.closeRoleForm}>
                    <form onSubmit={this.onSubmit}>
                        <TextFieldGroup
                            placeholder={t('Enter Name')}
                            name="name"
                            type="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            errors={this.state.errors.name}
                            required="required"
                        />
                        <Button type="primary" htmlType="submit" loading={this.state.loading} className="btn btn-success">{t('save')}</Button>
                    </form>
                </Modal>
            </div>
        )
    }
}

RoleForm.propTypes = {
    setModalShow: PropTypes.func.isRequired,
    addRole: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    roles: state.roles,
    errors: state.errors
})

export default withTranslation()(connect(mapStateToProps,{setModalShow,addRole})(RoleForm));
