import React from 'react';
import { Checkbox, Input, Button, Avatar, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Search } = Input;

const Collaborate = () => {
  const handleRemoveClick = (username) => {
    Modal.confirm({
      title: 'Confirm Removal',
      content: `Are you sure you want to remove ${username} from this repository?`,
      onOk() {
        // Handle removal logic here
      },
    });
  };

  return (
    <div className="repository-access">
      <div className="repository-access-header">
        <div className="repository-access-actions">
          <Checkbox> Select all</Checkbox>
          <Search
            placeholder="Find a collaborator…"
            onSearch={(value) => console.log(value)} // Replace with your search logic
          />
        </div>
      </div>
      <div className="repository-access-list">
        {collaborators.map((collaborator) => (
          <div className="repository-access-item" key={collaborator.id}>
            <Checkbox />
            <Avatar src={collaborator.avatarUrl} alt={collaborator.username} />
            <div className="repository-access-info">
              <strong>{collaborator.username}</strong>
              <span>Collaborator</span>
            </div>
            <div className="repository-access-actions">
              <Button type="link" onClick={() => handleRemoveClick(collaborator.username)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborate;
