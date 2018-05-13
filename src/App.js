import React, { Component } from 'react';
import {Layout, Menu, Icon, Input, Carousel, Tabs} from 'antd';
import './App.css';
const { Header, Content, Footer, Sider, } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

class App extends Component {
	state = {
    current: 'null',
  }
	
	handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  
  	callback(key) {
  console.log(key);
  }
  
  render() {
    return (
    	<Layout>
    		<Header className="headerContainer">
    			<div className="logo" />
		      <Menu
		        onClick={this.handleClick}
		        selectedKeys={[this.state.current]}
		        mode="horizontal"
		        style={{lineHeight:'64px'}}
		      	theme="dark">
		        <Menu.Item key="question">
		          <Icon type="smile-o" />问答
		        </Menu.Item>
		        <Menu.Item key="judge">
		          <Icon type="edit" />评测
		        </Menu.Item>
		        <Menu.Item key="downloading">
		          <Icon type="download" />下载中心
		        </Menu.Item>
		        <Menu.Item key="aboutUs">
		          <Icon type="search" />关于我们
		        </Menu.Item>
		        <Search placeholder="input search text" enterButton className="searcher"/>
		      </Menu>
		    </Header>
		    <Layout>
		        <Sider 
		        width={200} 
		        style={{ background: '#fff' }}>
			        <Menu onClick={this.handleClick} style={{ width: 200 }} mode="vertical" className="verticalContainer">
					    <SubMenu key="sub1" title={<span><Icon type="mail" className="verticalContain" /><span>Navigation One</span></span>}>
					      	<Menu.Item key="1">Option 1</Menu.Item>
					        <Menu.Item key="2">Option 2</Menu.Item>
					        <Menu.Item key="3">Option 3</Menu.Item>
					    </SubMenu>
					    <SubMenu key="sub2" title={<span><Icon type="appstore" className="verticalContain" /><span>Navigation Two</span></span>}>
					      <Menu.Item key="4">Option 4</Menu.Item>
					      <Menu.Item key="5">Option 5</Menu.Item>
					      <Menu.Item key="6">Option 6</Menu.Item>
					    </SubMenu>
					    <SubMenu key="sub4" title={<span><Icon type="setting" className="verticalContain" /><span>Navigation Three</span></span>}>
					      <Menu.Item key="7">Option 7</Menu.Item>
					      <Menu.Item key="8">Option 8</Menu.Item>
					      <Menu.Item key="9">Option 9</Menu.Item>
					    </SubMenu>
					</Menu>
		        </Sider>
		        <Content>
		        	<Carousel autoplay effect="fade">
						<div><h3>1</h3></div>
					    <div><h3>2</h3></div>
					    <div><h3>3</h3></div>
					    <div><h3>4</h3></div>
					</Carousel>
		        </Content>
		        <Sider
		        width={210}
		        style={{ background: '#fff' }}>
		        	<Tabs defaultActiveKey="eduAct" onChange={this.callback}>
					    <TabPane tab="教育动态" key="eduAct">
					        <p>Content of Tab Pane 1</p>
					    </TabPane>
					    <TabPane tab="校区动态" key="schAct">
					        <p>Content of Tab Pane 2</p>
					    </TabPane>
					</Tabs>
				</Sider>
	      	</Layout>
      </Layout>
    );
  }
}

export default App;
