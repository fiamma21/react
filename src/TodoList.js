import React,{Component} from 'react'
class TodoList extends Component{
    static propTypes = {
        // comment: propTypes.object.isRequired
    }

    constructor (props) {
        super(props)
        this.state = { timeString: '' }
        console.log(props)
    }

    componentWillMount () {
        this._updateTimeString()
    }

    _updateTimeString () {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.time) / 1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    render(){
        return(
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span style={{float:'right'}}>{this.state.timeString}</span>
            </div>
        )
    }
}
export default TodoList