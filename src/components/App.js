import React, {Component, useState, useEffect} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            first_name : '',
            second_name: '',
            answer:''
        }
    }

    render() {
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <label>First Name</label>
               <input data-testid="input1" type='text' onChange={(e)=>{this.setState({first_name:e.target.value})}}></input>
               <label>Second Name</label>
               <input data-testid="input2" type='text' onChange={(e)=>{this.setState({second_name:e.target.value})}}></input>
               <button data-testid="calculate_relationship" onClick={()=>{
                   let data = document.getElementsByTagName('h3')[0]
                   let d1 = this.state.first_name
                   let d2 = this.state.second_name
                   if(d1 == '' || d2 == ''){
                       this.setState({answer:'Please Enter valid input'})
                   }
                   else{
                       console.log((d1+d2).length);
                       for(let i = 0;i<d1.length;i++){
                           if(d1.charAt(i)===" "){
                               d1 =  d1.substring(0,i)+d1.substring(i+1,d1.length)
                               i--
                           }
                       }
                       for(let i = 0;i<d2.length;i++){
                        if(d2.charAt(i)===" "){
                            d2 =  d2.substring(0,i)+d2.substring(i+1,d2.length)
                            i--
                        }
                        }
                        console.log((d1+d2).length);
                       for(let i = 0 ; i<d1.length;i++){
                           for(let j=0; j<d2.length;j++){
                               if(d1.charAt(i)===d2.charAt(j)){
                                   d1 = d1.substring(0,i)+d1.substring(i+1,d1.length)
                                   d2 = d2.substring(0,j)+d2.substring(j+1,d2.length)
                                   i--
                                   j--
                                   break;
                               }
                           }
                       }
                       let remain = (d1+d2).length
                       if(remain%6 === 0){
                           this.setState({answer:'Siblings'})
                       }
                       else if(remain%6 === 1){
                        this.setState({answer:'Friends'})
                       }
                       else if(remain%6 === 2){
                        this.setState({answer:'Love'})
                    }
                    else if(remain%6 === 3){
                        this.setState({answer:'Affection'})
                    }
                    else if(remain%6 === 4){
                        this.setState({answer:'Marriage'})
                    }
                    else if(remain%6 === 5){
                        this.setState({answer:'Enemy'})
                    }
                    
                   }
               }}>Calculate Relationship Future</button>
               <button data-testid="clear" onClick={()=>{
                   this.setState({first_name:'',second_name:''})
                   document.getElementsByTagName('input')[0].value = ''
                   document.getElementsByTagName('input')[1].value = ''
                   this.setState({answer:''})
               }}>Clear</button>
               <h3 data-testid="answer">{this.state.answer}</h3>
            </div>
        )
    }
}


export default App;
