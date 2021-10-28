// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import axios from 'axios';
// import rose from '../src/assets/rose.jpg'
// import sunflower from '../src/assets/sunflower.jpg'
export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      MyPostData:[]
    }
    var that=this;
    const options={
      method:'GET',
      url:'http://localhost:3004/posts'
    }
    axios.request(options).then(function(response){
      console.log(response);
      that.setState({MyPostData:response.data})

    }).catch(function(error){
      console.error(error)
    });
  }
  render(){
    return(
        <div className="contanier px-5">
        <h1>My api call</h1>
        {this.state.MyPostData.map(function(dataObj,index){
          return ( <div className="card main-card">
          <img src={dataObj.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{dataObj.title}</h5>
            <p className="card-text">{dataObj.author}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        );
      }
      )
      }
        {/* <p>
          {JSON.stringify(this.state.MyPostData)}
        </p> */}
      </div>
    );
  }
}
