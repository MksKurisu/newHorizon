import React, { Component } from 'react';
import { Card } from 'antd';
import './Home-RecommendPart.css';
const { Meta } = Card;
class RecommendPart extends Component{
	render(){
		return (
			<div>
				<div className="title">精品推荐</div>
				<div className="cardRecommend">
					<div className="cardContent">
						<Card
						    hoverable
						    style={{ width: 250 }}
						    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
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
						    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
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
						    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
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
						    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
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

export default RecommendPart;