import React from "react";
import Layout from "custom/layout";
import ContentWrapper from "custom/wrappers/contentWrapper";
import Users from "./users";
import { Tabs } from "antd";
import CreateUser from "./createUser";

const { TabPane } = Tabs;

const onChange = (key: string) => {
  console.log(key);
};

const UserManagement = () => {
  return (
    <Layout>
      <ContentWrapper title="">
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Create New User" key="1">
              <CreateUser />
          </TabPane>
          <TabPane tab="Existing Users" key="2">
            <Users />
          </TabPane>
        </Tabs>
      </ContentWrapper>
    </Layout>
  );
};

export default UserManagement;
