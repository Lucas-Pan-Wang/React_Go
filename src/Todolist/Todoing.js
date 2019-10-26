import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        let that = this;
        // unfinished 正在进行
        let unfinished = this.props.to_do.map((item,idx)=>{
            if(!item.state){
                return(
                    <li key={idx}>
                        <input type="checkbox" checked={item.state} onChange={()=>{that.props.changeTodo(idx)}}/>
                        {item.title}——————————————————<button onClick={()=>{that.props.delTodo(idx)}}>删除</button>
                    </li>);
            }
            return null;
        });

        // finished 已经完成事项的清单
        let finished = this.props.to_do.map((item,idx)=>{
            if(item.state){
                return(
                    <li key={idx}>
                        <input type="checkbox" checked={item.state} onChange={()=>{that.props.changeTodo(idx)}}/>
                        {item.title}——————————————————<button onClick={()=>{that.props.delTodo(idx)}}>删除</button>
                    </li>);
            }
            return null;
        });
    
        return(
            <div>
                <div>
                    <h1>正在进行</h1>
                    <p>亲亲，您还有{this.props.count_num}件任务没完成，加油鸭！</p>
                    <ul className="list">{unfinished}</ul>
                </div>
                <div>
                    <h1>已经完成</h1>
                    <p>亲亲，已经完成{this.props.finish}件任务了，继续加油鸭!</p>
                    <ul className="list">{finished}</ul>
                </div>
            </div>
        )
    }
}