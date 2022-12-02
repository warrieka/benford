import React, { Component } from 'react';
import {AiOutlineCloudUpload} from 'react-icons/ai'

import Grafiek from '../Grafiek/Grafiek';
import papa from 'papaparse';

import { Layout, Button, Upload, Typography } from 'antd';
import './App.css';
const { Header, Content, Footer } = Layout;
const {Title} = Typography

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }

  newFile = (_ ,files) => {
    let csv = files[0]  // await file.text();
    papa.parse(csv, { header: true, dynamicTyping: true, complete: this.parsed });
    return false;
  }
 
  parsed = csv => {
    this.setState({data: csv.data})
  }

  render() {
    return (
      <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div>
        <Title>Benford's Law</Title>
        <Upload accept='.csv' name={'file'} maxCount={1} beforeUpload={this.newFile}>
          <Button icon={<AiOutlineCloudUpload />} >&nbsp;Click to Upload</Button>
        </Upload>
        </div>

        <div className="site-layout-content">
           <Grafiek data={this.state.data} ></Grafiek>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Door Kay Warrie</Footer>
    </Layout>
    )
  }
}
export default App;
