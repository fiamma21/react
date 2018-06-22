import React,{Component} from 'react'
import TodoList from './TodoList'
class CommentList extends Component{
    // static propTypes ={
    //     comments:PropTypes.object.isRequired
    // }
    render(){
        return(
            <div>
                {this.props.comments.map((comment,i) => <TodoList key={i} comment={comment}/>)}
            </div>
        )
    }
}
export default CommentList