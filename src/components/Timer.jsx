import React, { Component } from 'react'


class Timer extends Component {
   
    state={
        date: new Date()
      };

      CallMe()
      {
        setInterval(()=>
        {
            this.setState({date: new Date()});
      },1000);
      }
  render() {
    return (
          <div className='d-flex'>
             <h5 className='mx-4'>
             <i className='bx bx-time'></i>{this.state.date.toLocaleTimeString()}
             {this.CallMe()}
             </h5>
             <h5>
             <i className='bx bx-calendar'></i>{this.state.date.getDate()+'/'+(this.state.date.getMonth()+1)+'/'+this.state.date.getFullYear()}
             </h5>
           
         </div>
    )
  }
}

export default Timer
