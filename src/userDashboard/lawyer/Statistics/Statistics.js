import { FieldTimeOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Modal,Card, Col, Row, Statistic,Table,Tag } from 'antd';
import React,{useState} from 'react';
const Statistics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: 'Case Number',
      dataIndex: 'caseNumber',
      sorter: (a, b) => a.caseNumber.localeCompare(b.caseNumber),
    },
    {
      title: 'Case Name',
      dataIndex: 'caseName',
      sorter: (a, b) => a.caseName.localeCompare(b.caseName),
    },
    {
      title: 'Clients',
      dataIndex: 'clients',
      filters: [
        {
          text: 'Client A',
          value: 'Client A',
        },
        {
          text: 'Client B',
          value: 'Client B',
        },
        {
          text: 'Client C',
          value: 'Client C  ',
        },
      ],
      onFilter: (value, record) => record.clients.indexOf(value) !== -1,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => {
        let color = 'blue';
        if (status === 'Recent Hearings') {
          color = 'green';
        } else if (status === 'Upcoming Hearings') {
          color = 'red';
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  const data = [
    {
      key: '1',
      caseNumber: '001',
      caseName: 'Case A',
      clients: 'Client A',
      status: 'Recent Hearings',
    },
    {
      key: '2',
      caseNumber: '002',
      caseName: 'Case B',
      clients: 'Client B',
      status: 'Upcoming Hearings',
    },
    {
      key: '3',
      caseNumber: '003',
      caseName: 'Case A',
      clients: 'Client A',
      status: 'Upcoming Hearings',
    },
    {
      key: '4',
      caseNumber: '004',
      caseName: 'Case C',
      clients: 'Client C',
      status: 'Recent Hearings',
    },
    {
      key: '5',
      caseNumber: '005',
      caseName: 'Case D',
      clients: 'Client D',
      status: 'Recent Hearings',
    },
    {
      key: '6',
      caseNumber: '006',
      caseName: 'Case E',
      clients: 'Client E',
      status: 'Recent Hearings',
    },
    {
      key: '7',
      caseNumber: '007',
      caseName: 'Case C',
      clients: 'Client C',
      status: 'Upcoming Hearings',
    },
    // Add more data entries for your cases
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return(
  <Row gutter={16}>
    <Col span={8}>
      <Card  hoverable style={{width:'400px'}} onClick={showModal}>
        <Statistic
          title="Active"
          value={11.28}
          precision={0}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="cases"
        />
      </Card>
       <Modal title="Active Cases" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <Table columns={columns} dataSource={data} onChange={onChange} pagination={{pageSize:5,showSizeChanger:false}}/>
      </Modal>
    </Col>
    <Col span={8}>
      <Card  hoverable style={{width:'400px'}} onClick={showModal}>
        <Statistic
          title="Completed"
          value={9.3}
          precision={0}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<FieldTimeOutlined />}
          suffix="cases"
        />
      </Card>
      <Modal title="Active Cases" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <Table columns={columns} dataSource={data} onChange={onChange} pagination={{pageSize:5,showSizeChanger:false}}/>
      </Modal>
    </Col>
  </Row>
  );
};
export default Statistics;


