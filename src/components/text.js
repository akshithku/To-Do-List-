/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-const-assign */


import React, { Component } from 'react'

export default  class text extends Component {
    constructor(props){
        super(props);
        this.state={
            TodoTask: [],
            value: " "
        }
    }
    onChange(e){
        this.setState({value: e.target.value});
        }
        AddItem(e){
            this.setState({
                value: " ",
                TodoTask:[...this.state.TodoTask,this.state.value]
            })
        }
        deleteItem(index){
            const deleteTask=[...this.state.TodoTask,this.state.value];
            deleteTask.splice(index,1);
            this.setState({
                value:"",
                TodoTask:deleteTask
            })
        }
        editItem(index){
            const updateTask=[...this.state.TodoTask,this.state.value]
           let UpdatedTask= prompt("Enter the Task here");
            updateTask.splice(index,1,UpdatedTask);
            this.setState({
                TodoTask:updateTask,
            })
        }
  render() {
    return (
        <div >
        <div >
            <h1>To Do List</h1>
            <input type="text" className="input-text" placeholder='Todays task ' onChange={(e)=>this.onChange(e)} value={this.state.value}/>
            <button id='btn' onClick={(e)=>this.AddItem(e)}>AddItem</button>
            </div>
            <ul>
                {this.state.TodoTask.map((e,index)=>{
                    if(e!=" "){
                        return(
                            <div className='container'>
                                <div className='text-input'>
                                <li className='list' onClick={()=>this.editItem(index)}>{e}</li>
                                </div>
                            <div>
                                <button className='delete-btn' onClick={()=>this.editItem(index)}>Edit</button>
                                <button className='delete-btn' onClick={()=>this.deleteItem(index)}>Delete</button>
                            </div>
                            </div>
                        )
                    }
                })}
            </ul>
            </div>
    )
  }
}

