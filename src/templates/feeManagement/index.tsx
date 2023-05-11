import React from "react";
import Layout from "custom/layout";
import ContentWrapper from "custom/wrappers/contentWrapper";
import { Tabs } from "antd";
import Clients from "./clients";
import CreateClients from "./createClients";

const { TabPane } = Tabs;

const FeeManagement = () => {
  return (
    <Layout>
      <ContentWrapper title="">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Create New Client" key="1">
            <CreateClients />
          </TabPane>
          <TabPane tab="Existing Clients" key="2">
            <Clients />
          </TabPane>
        </Tabs>
      </ContentWrapper>
    </Layout>
  );
};
export default FeeManagement;
