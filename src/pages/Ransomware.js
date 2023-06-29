import * as React from 'react';
import { Table } from 'antd';
import { useState } from 'react';

const columns = [
  { dataIndex: 'id', title: 'Ransomware Gang', flex: 1 },
  {
    dataIndex: 'lastName',
    title: 'Claimed Victim',
    flex: 1,
  },
  {
    dataIndex: 'age',
    title: 'Creation Time',
    flex: 1,
  },
  {
    dataIndex: 'firstName',
    title: 'Last Update',
    flex: 1,
  },
];

export default function Ransomware({ ransomeData }) {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
  };

  return (
    <div className="p-10">
      <Table
        bordered
        columns={columns}
        dataSource={ransomeData}
        showSorterTooltip={false}
        pagination={tableParams.pagination}
        onChange={handleTableChange}
        rowKey={(record) => record.caseid}
        scroll={{
          x: 1300,
        }}
      />
    </div>
  );
}
