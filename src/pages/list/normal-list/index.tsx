import React, { Component } from 'react';
import { FormComponentProps } from 'antd/es/form';
import { Dispatch } from 'redux';
import { Table, Divider, Tag, Card } from 'antd';
import { StateType } from './model';
import { connect } from 'dva';

interface TableFormDateType {
  key: string;
  workId?: string;
  name?: string;
  department?: string;
  isNew?: boolean;
  editable?: boolean;
}

interface NormalListProps extends FormComponentProps {
  dispatch: Dispatch<any>;
  listData: StateType;
}

interface NormalListState {}

// @connect(({ normalList }: { normalList: StateType }) => ({

//   listData: normalList,
// }))
@connect(({ normalList }: { normalList: StateType }) => {
  return {
    listData: normalList,
  };
})
class NormalList extends Component<NormalListProps, NormalListState> {
  columns = [
    {
      title: 'Key',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
  ];
  columns1 = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) => (
        <span>
          {tags.map((tag: string) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: TableFormDateType) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];
  data1 = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'normalList/fetch',
    });
  }
  render() {
    console.log('this.props --', this.props);
    const {
      listData: { data },
    } = this.props;
    console.log(data.list);
    const { list } = data;

    return (
      <div>
        <Card>
          <Table columns={this.columns} dataSource={list} />
        </Card>
      </div>
    );
  }
}

export default NormalList;
