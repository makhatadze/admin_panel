import React, {Component} from "react";
import {Button, Table} from 'antd';
import * as PropTypes from "prop-types";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {getRoles, setModalShow, setRolesSearchParams} from "../../../../../actions/role/roleActions";
import {roleSearchParam} from "./roleQuery";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        width: '20%',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
            {text: 'Male', value: 'male'},
            {text: 'Female', value: 'female'},
        ],
        width: '20%',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];

class Role extends Component {
    constructor(props) {
        super(props);
        this.handleTableChange = this.handleTableChange.bind(this)
        this.showRoleForm = this.showRoleForm.bind(this)
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
        this.props.setModalShow(value)
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
                    columns={columns}
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
