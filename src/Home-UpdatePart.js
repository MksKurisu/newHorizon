import React, { Component } from 'react';
import { Card } from 'antd';
import './Home-UpdatePart.css';
const { Meta } = Card;
class UpdatePart extends Component{
	render(){
		return (
			<div>
				<div className="title">上新课程</div>
				<div className="cardUpdate">
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
			</div>
		);
	}
}

export default UpdatePart;