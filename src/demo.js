import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Computer extends Component {
    constructor(){
        super()
        this.state={
            status:'false',
            text:'开机',
            log:'显示器关了'
        }
    }
    handleClick(){
        this.setState({
            status:!this.state.status
        })
        if(this.state.status){
            this.setState({
                text:'关机',
            })
        }else{
            this.setState({
                text:'开机',
            })
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick.bind(this)}>{this.state.text}</button>
                <HelloWorld showContent={this.state.content}
                        status={this.state.status}>
                </HelloWorld>
            </div>
        )

    }
}
const HelloWorld = (props) => {
    const status = props.status
    return(
        <div>
            {/*<div>{showContent}</div>*/}
            <div>{status?'显示器打开了':'显示器关了'}</div>
        </div>
    )
}
class Screen extends Component {
    constructor(props){
        super(props)

        console.log(this.props)
    }
    render(){
        // const showContent = this.props.showContent
        const status = this.props.status
        return(
            <div>
                {/*<div>{showContent}</div>*/}
                <div>{status?'显示器打开了':'显示器关了'}</div>
            </div>

        )
    }
}
const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class Index extends Component {
    render() {
        //渲染列表就是循环数组推入jsx对象,最后return这个jsx对象
        const {user} = this.props;
        console.log(this.props)
        return (
            <div>
                <div>name:{user.username}</div>
                <div>age:{user.age}</div>
                <div>sex:{user.gender}</div>
            </div>
        )
    }
}
class List extends Component {
    render(){
        return(
            <div>
                {users.map((user,i)=> <Index key={i} user={user}/> )}
            </div>
        )
    }
}

class Dog extends Component {
    constructor () {
        super ();
        this.state = {
            isRun:false,
            isBark:false
        }
    }
    getSecond(min,max){
        return Math.floor(Math.random()*(max-min))+min
    }
    bark(){
        this.setState({
           isBark:true
        });
        setTimeout(()=>
            this.setState({
                isBark:false
            }),this.getSecond(2000,5000)
        );
        alert('汪汪汪')
    }
    run(){
        this.setState({
            isRun:true
        });
        setTimeout(()=>
            this.setState({
                isRun:false
            }),this.getSecond(2000,5000)
        );
        alert('再见')
    }
    handleclick(){
        this.bark();
        this.run()
    }
    render () {
        return (
            <div onClick={this.handleclick.bind(this)}>
                <h1>狗狗{this.state.isRun?'在跑':'停了'},{this.state.isBark?'在叫':'不叫了'}</h1>
            </div>
        )
    }
}
class Room extends Component {
    render(){
        return (
          <div>
             {/*<Man/>*/}
             <Dog/>
          </div>
         )
    }
}
class Bathroom extends Component {
    fun(word){
        console.log(word)
    }
    render (){
        return(
            <div onClick={this.fun.bind(this,"这是厕所")}>
                厕所
            </div>
        )
    }
}
class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            isLike:true
        }
        console.log(this.props)
    }
    handleClick(){
        this.setState({
            isLike:!this.state.isLike
        })
    }
    render(){
        return(
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isLike?this.props.like:this.props.unlike}
            </button>
        )
    }
}
class House extends Component {
    constructor(){
        super();
        this.state={
            like:'已赞',
            unlike:'赞'
        }
    }
    handleClick(){
        this.setState({
            like:'已赞哈哈',
            unlike:'赞吧'
        })
    }
    render () {
        return (
            <div>
                <Button
                    like={this.state.like}
                    unlike={this.state.unlike}
                />
            </div>
        )
    }
}
ReactDOM.render(
    <List/>,
    document.getElementById('root')
)
