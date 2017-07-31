import React, { Component } from 'react';
import LeftPanelHeader from './LeftPanelHeader.js'
import LeftPanelList from './LeftPanelList'

class LeftPanel extends Component{
	constructor(){
		super()
	}
	onStatusChange(i){
		if(this.props.onStatusChange){
			this.props.onStatusChange(i)
		}
	}
	onPriorityChange(i){
		if(this.props.onPriorityChange){
			this.props.onPriorityChange(i)
		}
	}
	render(){
		return(
			<div className="LeftPanel">
		    <LeftPanelHeader/>
		    <LeftPanelList state={this.props.state} onPriorityChange={this.onPriorityChange.bind(this)} onStatusChange={this.onStatusChange.bind(this)}/>
		    </div>
		    )
	}
}

export default LeftPanel