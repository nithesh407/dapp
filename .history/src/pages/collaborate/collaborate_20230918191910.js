import React from 'react';
import { Row, Col, Image, Button, Tag } from 'antd';

const Collaborate = () => {
  return (
    <Row gutter={16} className="d-sm-flex flex-items-center">
      <Col>
        <Image
          width={60}
          height={60}
          className="d-block mr-3"
          alt="GitHub for Teams"
          src="https://github.githubassets.com/images/modules/organizations/github_for_teams.png"
        />
      </Col>
      <Col flex={1} className="d-flex flex-items-center flex-justify-between">
        <div>
          <h4 className="color-fg-default lh-condensed">
            Get team access controls and discussions for your contributors in an organization.
          </h4>
          <div>
            <p className="color-fg-muted mt-1 mb-0">
              <Tag color="orange" className="text-uppercase">New</Tag>
              Private repos and unlimited members are free.
            </p>
          </div>
        </div>
        <div>
          <Button
            
            type="primary"
            data-ga-click="Repository, click create org, location:collaborators;text:Create an organization"
          >
            Create an organization
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Collaborate;
