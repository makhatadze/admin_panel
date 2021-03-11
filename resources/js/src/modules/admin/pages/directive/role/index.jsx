import React, {Component} from "react";
import {Button, Table} from 'antd';
import * as PropTypes from "prop-types";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {getRoles, setModalShow, setRolesSearchParams} from "../../../../../actions/role/roleActions";
import {roleSearchParam} from "./roleQuery";


class Role extends Component {
    constructor(props) {
        super(props);
        this.handleTableChange = this.handleTableChange.bind(this)
        this.showRoleForm = this.showRoleForm.bind(this)
        this.editRole = this.editRole.bind(this)

        this.columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                sorter: true,
                width: '60%',
            },
            {
                title: 'Action',
                dataIndex: '',
                key: 'x',
                width: '40%',
                render: (e) => <a className="ant-dropdown-link" onClick={() => this.editRole(e)}>Edit</a>
            },
        ];
    }

    componentDidMount() {
        let {searchData} = this.props.roles
        this.props.getRoles(roleSearchParam(searchData));
    }

    componentWillReceiveProps(nextProps) {

    }

    handleTableChange(pagination, filters, sorter) {
        let searchParams = {
            loading: true,
            keyword: '',
            ...pagination
        }
        this.props.setRolesSearchParams(searchParams)
        this.props.getRoles(roleSearchParam(searchParams))
    };

    showRoleForm(value) {
        this.props.setModalShow({
            showModal: value,
            modalRole: {}
        })
    }

    editRole(role) {
        this.props.setModalShow({
            showModal: true,
            modalRole: role
        })
    }

    render() {
        const {data, searchData,showModal} = this.props.roles;
        const {t} = this.props;
        return (
            <>
                <Button className="mb-4" type="primary" onClick={ () => this.showRoleForm(!showModal)}>
                    {t('Create Role')}
                </Button>
                <Table
                    columns={this.columns}
                    rowKey={record => record.id}
                    dataSource={data}
                    pagination={searchData}
                    loading={searchData.loading}
                    scroll={{y: 480}}
                    onChange={this.handleTableChange}
                />
            </>

        );
    }
}

Role.propTypes = {
    getRoles: PropTypes.func.isRequired,
    setRolesSearchParams: PropTypes.func.isRequired,
    setModalShow: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    roles: state.roles
})

export default withTranslation()(connect(mapStateToProps, {getRoles, setRolesSearchParams,setModalShow})(Role));
