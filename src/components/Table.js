import { Table } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import constants from '../constant/routesConstant';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoadCaseTable = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const { ROUTES } = constants;
  const columns = [
    {
      title: 'Case ID',

      width: 300,
      dataIndex: 'caseid',
      key: 'caseid',
    },
    {
      title: 'Case Name',
      width: 200,
      dataIndex: 'casename',
      key: 'casename',
      sorter: (a, b) => a.casename.localeCompare(b.casename),
    },
    {
      title: 'Node Count',
      width: 200,
      dataIndex: 'nodecount',
      key: 'nodecount',
    },

    {
      title: 'Created Date',
      dataIndex: 'created_at',
      key: '3',
      width: 200,
    },
    {
      title: 'Last Updated',
      dataIndex: 'last_modified',
      key: '4',
      width: 200,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (row) => (
        <button onClick={() => navigate(`${ROUTES.newCase}/${row.caseid}`)}>
          <i className="fa-regular fa-eye"></i>
        </button>
      ),
    },
  ].map((el) => ({
    ...el,
    title: (titleProps) => {
      const sortedColumn = titleProps.sortColumns?.find(
        ({ column }) => column.key === el.key,
      );

      return (
        <div className=" w-full flex justify-between align-middle content-center self-center items-center">
          <div>{el.title}</div>
          <div>
            {el.sorter ? (
              sortedColumn?.order === 'ascend' ? (
                <i className="fa-solid fa-sort-up"></i>
              ) : !sortedColumn?.order ? (
                <i className="fa-solid fa-sort"></i>
              ) : (
                <i className="fa-solid fa-sort-down"></i>
              )
            ) : null}
          </div>
        </div>
      );
    },
  }));

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
    axios
      .get(`${backendURL}caselist.php`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setRows(res.data.map((el) => ({ ...el, key: el.caseid })));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [backendURL, token]);

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
  );
};
export default LoadCaseTable;
