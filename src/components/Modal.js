import { Button, Form, Input, Modal } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import constants from '../constant/routesConstant';
import { v4 as uuidv4 } from 'uuid';
import { message } from 'antd/es';
import { httpCall } from '../axios/httpService';

const ModalView = ({ setOpenModal, openModal, form, setCaseName }) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    setOpenModal(false);
  };

  const saveNode = async (value, id) => {
    const data = {
      caseid: id,
      casename: value,
    };
    const result = await httpCall('newcase.php', 'POST', data, {});
    return result;
  };

  const onFinish = (values) => {
    if (values) {
      const id = uuidv4();
      saveNode(values.nodeName, id)
        .then((res) => {
          setCaseName(values.nodeName);
          message.success(res);
          navigate(`${constants.ROUTES.newCase}/${id}`, {
            state: { values },
          });
        })
        .catch((err) => {
          message.success(err);
        });
    }
  };

  return (
    <Modal
      closable={false}
      title=<div className="text-[#2b2b2b] w-full flex justify-between ">
        <div className="w-[100%] ">Save Node</div>
        <button onClick={handleCancel} className="border-none hover:bg-none model-newcase-cancel">
          X
        </button>
      </div>
      open={openModal}
      footer={
        <div className=" w-full flex justify-between items-center align-middle self-center content-center">
          <Form.Item className="w-[180px] font-[600] text-[12px] text-[#000000] h-[39px] rounded-[14px] border-[1px] border-[#00000]">
            <Button
              onClick={handleCancel}
              className="w-[180px] btn-squared font-[600] text-[12px] text-[#000000] h-[39px] rounded-[14px] border-[1px] border-[#00000]"
            >
              Cancel
            </Button>
          </Form.Item>

          <Form.Item className="w-[180px] h-[39px] font-[600] text-[12px] text-[#ffffff] rounded-[14px] border-[1px] border-[#ffffff] bg-[#1c1c1cb3]">
            <Button
              type="primary"
              name="submit"
              value="submit"
              htmlType="submit"
              className="w-[180px] btn-squared h-[39px] font-[600] text-[12px] text-[#ffffff] rounded-[14px] border-[1px] border-[#ffffff] bg-[#1c1c1cb3]"
              onClick={form.submit}
            >
              Save
            </Button>
          </Form.Item>
        </div>
      }
    >
      <Form
        layout="vertical"
        form={form}
        name="basic"
        initialValues={{ remember: false }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="nodeName"
          rules={[
            {
              required: true,
              message: 'Node Name is required',
            },
            {
              min: 5,
              message: 'Node Name should be atleast 5 letters minimum',
            },
          ]}
        >
          <Input
            className=" p-6 rounded-[8px] justify-center align-middle self-center content-center items-center"
            placeholder="Enter Node Name"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalView;
