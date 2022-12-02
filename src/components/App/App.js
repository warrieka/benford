import React, { Component } from 'react';
import {MathJax} from "better-react-mathjax";
import {AiOutlineCloudUpload, AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'

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
      <Header  style={{ padding: '10px' }} >
        {/* <div className="logo" /> */}
        <Button icon={<AiFillGithub/>} title={'View code on github'} target='_blanc'  type='type'
        className={'gh'}  href='https://github.com/warrieka/benford' ></Button>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div>
        <Title>Benford's Law</Title>
        <div>
          Benford's law describes frequency distribution of the initial digit of numbers in data sets.<br/>
          In a natural series of digits, the starting digit is more likely to be a lower digit.<br/>
          So 1 is more common than 2, 2 is more common than 3, etc. More&nbsp;info:&nbsp;
          <a target='_blanc' href="https://en.wikipedia.org/wiki/Benford%27s_law">wikipedia</a>.<br/><br/>
          This formula as determined in 1938 by Frank Albert Benford describes this distribution: 
          <MathJax inline dynamic>
          {`$$P(d) = log_{10} (1 + \\frac{1}{d})$$`}
          </MathJax>
          Use the tool below to test your csv-dataset. Alle fields with a number in first row will be tested. 
        </div>
        <Upload 
          accept='.csv' name={'file'} maxCount={1} 
          onRemove={() => this.setState({data: []})}
          beforeUpload={this.newFile}>
          <Button className={'btn'} icon={<AiOutlineCloudUpload />} >&nbsp;Click to Upload</Button>
        </Upload>
        </div>
        <div className="site-layout-content">
           <Grafiek data={this.state.data} ></Grafiek>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>By Kay Warrie<br/>
      <Button title='Linkedin'  icon={<AiFillLinkedin color='darkblue'/>}
        href='https://www.linkedin.com/in/kay-warrie-7143467/' target='_blanc' >
      </Button>
      <Button title='Github' icon={<AiFillGithub/>}
        href='https://github.com/warrieka/' target='_blanc' >
      </Button>
      <Button  title='Email' icon={<AiOutlineMail/>} href='mailto:kaywarrie@gmail.com' >
      </Button>
      </Footer>
    </Layout>
    )
  }
}
export default App;
