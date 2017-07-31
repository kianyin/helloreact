import React, { Component } from 'react';
import RightPanelHeader from './RightPanelHeader';
import RightPanelList from './RightPanelList'
import RightPanelPage from './RightPanelPage'

class RightPanel extends Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div className="RightPanel">
			<RightPanelHeader state={this.props.state}/>
			<RightPanelList state={this.props.state}/>
			<RightPanelPage state={this.props.state}/>
			</div>
			)
	}
}

export default RightPanel