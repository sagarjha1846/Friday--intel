import * as React from 'react';
import { Table } from 'antd';
import { useState } from 'react';
import constants from '../constant/routesConstant';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { httpCall } from '../axios/httpService';

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

export default function Ransomware({ search, setSearch }) {
  const [rows, setRows] = useState([]);

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const { token } = useSelector((state) => state.auth);
  const { backendURL } = constants;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    httpCall(`ransomesearch.php?group=${search}`, 'GET', {}, {})
      .then((res) => {
        setRows(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [backendURL, token, search]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setRows([]);
    }
  };

  return (
    <div className="p-10">
      <Table
        bordered
        columns={columns}
        dataSource={rows}
        loading={isLoading}
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
