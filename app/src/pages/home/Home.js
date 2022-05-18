import React from "react";
import "./Home.css";
import { Layout, Menu } from "antd";

const { Header, Footer, Content, Sider } = Layout;

function Home() {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Home;
