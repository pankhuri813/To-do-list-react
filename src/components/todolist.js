




import React, { Component } from 'react'

 class todolist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text:[],
         value:'',
      }
    }
    get (e){
        this.setState({
            value: e.target.value,
        })
    }

    abc(e){
      e.preventDefault();
        this.setState({
          value:'', 
            text:[...this.state.text,this.state.value],
            
        })
    }

    delete(index){
      const deleted=[...this.state.text,this.state.value];
      deleted.splice(index,1);
      this.setState({
        value:'',
        text:deleted,
      })
    }

    edit(index){
      const edit=[...this.state.text,this.state.value];
      let neww=prompt("type new task");
      if(neww){
      edit.splice(index,1,neww);
      this.setState({
        text:edit,
      })
    }
    }


  render() {
    return (
      <div>
        <h1>To Do List App</h1>
        <div>
            <input className='input' type='text' placeholder="Add your today's task" value={this.state.value} onChange={(e)=>this.get(e)}></input>
            <button onClick={(e)=>this.abc(e)} className='add'>Add</button>
            <div>
            <ul>
            {this.state.text.map((e,index) => {
              if(e){
                return(
                  <div className='flex'>
                    <div className='list'>
                      
                        <li className='set'>{e}</li>
                      
                    </div>
                    <button onClick={()=>this.edit(index)} className='edit'>edit</button>
                    <button onClick={()=>this.delete(index)} className='delete'>delete</button>
                  </div>
                )
              }
            })}
            </ul>
            </div>

        </div>
      </div>
    )
  }
}

export default todolist



