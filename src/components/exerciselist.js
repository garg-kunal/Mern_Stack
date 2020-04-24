import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            exercises:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
        .then(res=>{
            this.setState({
                exercises:res.data
            })
           
            
        })

    }
    delete(id){
        axios.delete('http://localhost:5000/exercises/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        exercises: this.state.exercises.filter(el => el._id !== id)
      })
       alert("Exercise Deleted");

    }
    

    render(){
        return(
            <div className="container">
                     <div className="card">
                            <div className="row">
                             <div className="col-md-3 text-center"><b>Username</b></div>
                             <div className="col-md-3 text-center"><b>Description</b></div>
                             <div className="col-md-3 text-center"><b>Duration</b></div>
                             <div className="col-md-3 text-center"><b>Date</b></div>
                             
                             </div>
                             </div>
                  
                     {
                         this.state.exercises.map((currentexercis,key)=>
                         <div className="card">
                            <div className="row" >
                             <div className="col-md-3 text-center" key={Math.random()}>{currentexercis.username}</div>
                             <div className="col-md-3 text-center" key={Math.random()}>{currentexercis.description}</div>
                             <div className="col-md-3 text-center" key={Math.random()}>{currentexercis.duration}</div>
                             <div className="col-md-3 text-center " key={Math.random()}>{currentexercis.date.substring(0,10)}</div>
                             
                             </div>
                             <div className="card-footer">
                                 <button className="btn btn-danger" onClick={()=>{this.delete(currentexercis._id)}}>Delete</button>
                                 <Link to={"/edit/"+currentexercis._id}>edit</Link>
                                 </div>
                             </div>
                           
                         )
                     }
                
             
            </div>
        )
    }
}