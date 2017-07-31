import React, { Component } from 'react';
import LeftPanel from './LeftPanel.js'
import RightPanel from './RightPanel.js'

class Body extends Component{
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
			<div className="body">
			<LeftPanel state={this.props.state} onPriorityChange={this.onPriorityChange.bind(this)} onStatusChange={this.onStatusChange.bind(this)}/>
			<RightPanel state={this.props.state}/>
			</div>
			)
	}
}

export default Body