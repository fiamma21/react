import React,{Component} from 'react'
import CommentList from './CommetList'
import CommentInput from './CommentInput'

class CommentApp extends Component {
    constructor(){
        super()
        this.state={
            comments:[]
        }
    }
    componentWillMount(){
        this._loadComments()
    }
    _loadComments(){
        let comments=localStorage.getItem('comments')
        if(comments){
            comments=JSON.parse(comments)
            this.setState({comments})
        }
    }
    _saveComments(v){
        localStorage.setItem('comments',JSON.stringify(v))
    }
    handleSubmit(v){
        if (!v) return
        if (!v.username) return alert('请输入用户名');
        if (!v.content) return alert('请输入评论内容');
        const comments = this.state.comments
        comments.push(v)
        this.setState({//更新页面,勿忘
            comments
        })
        this._saveComments(comments)
    }
    render(){
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmit.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp