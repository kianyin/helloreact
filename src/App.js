import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'


class App extends Component {
  constructor(){
    super();
    //data对象用于存贮问题，filter对象用来存贮过滤器的状态
    this.state={data:[{category:"",status:"新建",title:"问题1新建",priority:"高"},{category:"",status:"处理中",title:"问题2处理中",priority:"高"},{category:"",status:"处理中",title:"问题3处理中",priority:"高"},{category:"",status:"已忽略",title:"问题4已忽略",priority:"高"},{category:"",status:"新建",title:"问题6新建",priority:"中"},{category:"",status:"新建",title:"问题7新建",priority:"中"},{category:"",status:"已忽略",title:"问题8已忽略",priority:"低"}],filter:{category:"",status:{新建:false,处理中:false,已解决:false,已忽略:false,待反馈:false,已关闭:false,重新打开:false},priority:"",founder:"",assign:"",timeFound:"",timeLastUpdate:"",timeFinish:""}}
  }
  //newStatus={新建: false, 处理中: false, 已解决: false, 已忽略: false, 待反馈: false…}
  onStatusChange(newStatus){
    let temp={...this.state.filter,status:{...newStatus}}
    this.setState({filter:temp})
  }
  onPriorityChange(newPriority){
    let temp={...this.state.filter,priority:{...newPriority}}
    this.setState({filter:temp})

  }
  render() {
    console.log(this.state.filter.priority)
    return (
      <div className="App">
      <Header/>
      <Body state={this.state} onPriorityChange={this.onPriorityChange.bind(this)} onStatusChange={this.onStatusChange.bind(this)}/>
      <Footer/>
      </div>
      );
    }
  }

  export default App;
