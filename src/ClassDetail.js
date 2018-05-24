import React, { Component } from 'react';
import {Layout, Menu, Icon, Input, Tabs, Button, List, Divider, Avatar, Steps} from 'antd';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './ClassDetail.css'
const { Header, Content, Sider, } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const Step = Steps.Step;
const data1 = [
	'价格：   免费',
	'年级：   初一',
	'人数：    300',
	'时长：   2小时',
];
	
const data2 = [
	{
    	title: 'Teacher 1',
    	description: 'Label1',
	},
	{
	    title: 'Teacher 1',
	    description: 'Label1',
	},
];
	
class classDetail extends Component {
	handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  
  	callback(key) {
  console.log(key);
  }
  	render(){
  		return(
		  	<Layout>
				<Header>
					<div className="logo" />
				    <Menu
				        onClick={this.handleClick}
				        mode="horizontal"
				        style={{lineHeight:'64px'}}
				      	theme="dark">
				      	<Menu.Item key="index">
				          <Link to='/home'><Icon type="compass" />首页</Link>
				        </Menu.Item>
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
				        <div className="shopper"><Button type="primary" className="shopperContainer" shape="circle" >购物车</Button></div>
				        <div className="alarm"><Button  shape="circle" className="alarmContainer" type="primary"><Icon type="notification" style={{fontSize:26}} /></Button></div>
				    </Menu>
				</Header>
				<Content className="infoContent">
					<div className="classInfo">
						<h1>课程名称</h1>
						<img alt="pic loading error" src={require("./pic/123.png")} id="classPic" />
						<List
					      size="large"
					      dataSource={data1}
					      renderItem={item => (<List.Item>{item}</List.Item>)} id="classMes" />
					    <Button type="primary" size="large" id="study">开始学习</Button>
					</div>
					<div className="Introduction">
						<div className="classIntroduction">
							<h2>介绍</h2>
							<Divider />
						</div>
						<div className="teacher">
							<h2>授课教师</h2>
							<Divider />
							<List
							    itemLayout="horizontal"
							    dataSource={data2}
							    renderItem={item => (
							      <List.Item>
							        <List.Item.Meta
							          title={item.title}
							          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
							          description={item.description}
							          className="teacherList"
							        />
							      </List.Item>
							    )}
							/>
						</div>
						<div className="catalogue">
							<h2>目录</h2>
							<Divider />
							<Steps direction="vertical" size="large" current={0}>
							    <Step title="Introduction" description="This is a description." />
							    <Step title="第一章" description="This is a description." />
							    <Step title="第二章" description="This is a description." />
							    <Step title="第三章" description="This is a description." />
							</Steps>
						</div>
						<div className="teacherInfo">
							<h2>教师介绍</h2>
							<Divider />
						</div>
					</div>
				</Content>
			</Layout>
  		);
  	}
}

export default classDetail;