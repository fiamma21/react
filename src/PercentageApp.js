import React,{Component} from 'react'
// import ReactDom from 'react-dom'

// class Input extends Component{
//     constructor(){
//         super()
//         this.state={
//             content:''
//         }
//     }
//     setChange(e){
//         if(this.props.onSet){
//             const v=e.target.value
//             console.log(v)
//             this.props.onSet(v)
//         }
//     }
//     render(){
//         return(
//             <input type='number' onChange={this.setChange.bind(this)}/>
//         )
//     }
// }
// class PercentageShower extends Component{
//     constructor(props){
//         super(props)
//         console.log(props)
//     }
//     render(){
//         let out=this.props.num
//         console.log(typeof this.props.num)
//         out=(out*100).toFixed(2)
//         console.log(typeof out)
//         return(
//             <div>{out}%</div>
//         )
//     }
//
// }
// class Container extends Component{
//     render(){
//         return(
//             <div>
//                 {
//                     this.props.children.map((el,key)=> {
//                             return (
//                                 <div style={{'border': '2px solid black'}}>{el}</div>
//                             )
//                         }
//                     )
//                 }
//
//                 }
//             </div>
//         )
//     }
// }
// class PercentageApp extends Component{
//     constructor(){
//         super()
//         this.state={
//             height:''
//         }
//     }
//     consoleMsg(){
//         console.log(this.p.clientHeight)
//     }
//
//     render(){
//         return (
//             <p style={{fontSize:56}} ref={p=>this.p=p} onClick={this.consoleMsg.bind(this)}>{this.props.content}</p>
//         )
//     }
// }
export default Container
// ReactDom.render(
//     <PercentageApp/>,
//     document.getElementById('root')
// )
