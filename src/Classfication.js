import React, { Component } from 'react';
import {Layout, Menu, Icon, Input, Carousel, Button, List, Row, Col, Checkbox, Card} from 'antd';
import { Link } from 'react-router-dom';
import './Classfication.css'
import './HomePage.css'
const { Header, Content, Sider, } = Layout;
const Search = Input.Search;
const ButtonGroup = Button.Group;
const Item = Menu.Item;
const { Meta } = Card;
class Classfication extends Component {
	
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
		    <Content className="listContent">
		    	<div className="classList">
		    		<div className="listHeader">
		    			<h2 id="title">课程列表</h2>
		    			<div className="buttonGroup">
		    				<ButtonGroup>
		    					<Button>查看公开课</Button>
		    					<Button>查看精选课程</Button>
		    				</ButtonGroup>
		        		</div>
		    		</div>
		    		<div className="list">全部分类</div>
		    		<div className="list" id="list1">
		    			<Row gutter={4}>
		    				<Col span={2}>分类:</Col>
		    				<Col span={2}>春季班</Col>
		    				<Col span={2}>秋季班</Col>
		    				<Col span={2}>直播课程</Col>
		    				<Col span={2}>视频课程</Col>
		    			</Row>
		    		</div>
		    		<div className="list">
		    			<Row gutter={4}>
		    				<Col span={2} offset={2}>初一</Col>
		    				<Col span={2}>初二</Col>
		    				<Col span={2}>初三</Col>
		    			</Row>
		    		</div>
		    	</div>
		    	<div className="choose">
		    		<Button size={'large'} className="button">最新</Button>
		    		<Button size={'large'} className="button">最热</Button>
		    		<Button size={'large'} className="button">推荐</Button>
		    		<Checkbox className="checkBox">直播课程</Checkbox>
		    		<Checkbox className="checkBox">免费课程</Checkbox>
		    	</div>
		    	<div className="classCard">
		    		<div className="cardContent">
						<Card
						    hoverable
						    style={{ width: 250 }}
						    cover={<img alt="example" src={require("./pic/123.png")} />}>
						    <Meta
						      title="爱莲说"
						      description="经典诗词串讲"/>
						    <Meta
						      description="基础诗词	七年级		免费"/>
						</Card>
					</div>
					<div className="cardContent">
						<Card
						    hoverable
						    style={{ width: 250 }}
						    cover={<img alt="example" src={require("./pic/123.png")} />}>
						    <Meta
						      title="爱莲说"
						      description="经典诗词串讲"/>
						    <Meta
						      description="基础诗词	七年级		免费"/>
						</Card>
					</div>
					<div className="cardContent">
						<Card
						    hoverable
						    style={{ width: 250 }}
						    cover={<img alt="example" src={require("./pic/123.png")} />}>
						    <Meta
						      title="爱莲说"
						      description="经典诗词串讲"/>
						    <Meta
						      description="基础诗词	七年级		免费"/>
						</Card>
					</div>
					<div className="cardContent">
						<Card
						    hoverable
						    style={{ width: 250 }}
						    cover={<img alt="example" src={require("./pic/123.png")} />}>
						    <Meta
						      title="爱莲说"
						      description="经典诗词串讲"/>
						    <Meta
						      description="基础诗词	七年级		免费"/>
						</Card>
					</div>
		    	</div>
		    </Content>
		</Layout>
	);
  }
};

export default Classfication;