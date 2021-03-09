import React, {Component} from "react";
import {Table} from 'antd';
import * as PropTypes from "prop-types";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {getRoles} from "../../../../../actions/role/roleActions";

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

const getRandomuserParams = params => ({
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
});

class Role extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {
                current: 1,
                pageSize: 15,
            },
            loading: false,
        };

        this.handleTableChange = this.handleTableChange.bind(this)
    }

    componentDidMount() {
        const {pagination} = this.state;
        // this.fetch({pagination});
        this.props.getRoles();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.roles.payload) {
            let roles = nextProps.roles;
            this.setState({data: roles.payload.data})
            this.setState({loading: roles.loading})
            let pagination = {
                current: roles.payload.pagination.current_page,
                pageSize: roles.payload.pagination.total_pages,
                total: roles.payload.pagination.total,
                current_page: roles.payload.pagination.current_page,
                per_page: roles.payload.pagination.per_page,
            }
            this.setState({pagination: pagination});
        }
    }

    handleTableChange(pagination, filters, sorter) {
        this.fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };

    fetch(params = {}) {

        this.setState({loading: true});
        this.props.getRoles();
    };

    render() {
        const {roles} = this.props.roles;
        const {data, pagination, loading} = this.state;
        return (
            <Table
                columns={columns}
                rowKey={record => record.id}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                scroll={{y: 480}}
                onChange={this.handleTableChange}
            />
        );
    }
}

Role.propTypes = {
    getRoles: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    roles: state.roles
})

export default withTranslation()(connect(mapStateToProps, {getRoles})(Role));
