import React,{Component} from 'react'
class CommentInput extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            content:''
        }
    }
    _loadName(){
        const username=localStorage.getItem('username')
        if(username){
            this.setState({username})
        }
    }
    componentWillMount(){
        this._loadName()
    }
    componentDidMount(){//组件挂载结束自动聚焦
        this.textarea.focus()
    }
    handleName(e){
        this.setState({
            username:e.target.value
        })
    }
    _saveName(v){
        localStorage.setItem('username',v)
    }
    handleNameBlur(e){
       this._saveName(e.target.value)
    }
    handleContent(e){
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                username:this.state.username,
                content:this.state.content,
                time:+new Date() //转化数字
            })
        }
        this.setState({content:''})
    }
    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                                onBlur={this.handleNameBlur.bind(this)}
                                onChange={this.handleName.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => {this.textarea=textarea}}
                                  value={this.state.content}
                                  onChange={this.handleContent.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}
export default CommentInput