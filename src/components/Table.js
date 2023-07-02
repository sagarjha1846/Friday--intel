import { Table } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import constants from '../constant/routesConstant';
import { useNavigate } from 'react-router-dom';
import { httpCall } from '../axios/httpService';
import { TiEyeOutline } from "react-icons/ti";

const LoadCaseTable = ({ search }) => {
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
      title: 'Title',
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
        <button className='view-icon' onClick={() => navigate(`${ROUTES.newCase}/${row.caseid}`)}>
          {/* <i className="fa-regular fa-eye"></i> */}
          <TiEyeOutline/>
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

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    httpCall(`caselist.php`, 'GET', {}, {})
      .then((res) => {
        setRows(res.map((el) => ({ ...el, key: el.caseid })));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  return (
    <Table
      bordered
      columns={columns}
      dataSource={
        search ? rows.filter((el) => el.casename.includes(search)) : rows
      }
      loading={isLoading}
      showSorterTooltip={false}
      pagination={tableParams.pagination}
      onChange={handleTableChange}
      rowKey={(record) => record.caseid}
    />
  );
};
export default LoadCaseTable;
