import React, {Component} from "react";
import {Table} from 'antd';
import reqwest from 'reqwest';

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
    constructor() {
        super();
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
        this.fetch({pagination});
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
        reqwest({
            url: 'http://127.0.0.1:8000/api/v1/roles',
            method: 'get',
            type: 'json',
            data: getRandomuserParams(params),
        }).then(res => {
            this.setState({
                loading: false,
                data: res.data,
                pagination: {
                    current: res.pagination.current_page,
                    total: res.pagination.total,
                },
            });
            console.log(this.state)
        });
    };
    render() {
        const {data, pagination, loading} = this.state;
        return (
            <Table
                columns={columns}
                rowKey={record => record.id}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                scroll={{ y: 480 }}
                onChange={this.handleTableChange}
            />
        );
    }
}

export default Role
