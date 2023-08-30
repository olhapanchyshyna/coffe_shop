import { Component } from "react";
import Header from '../../header/Header'

import '../../../assets/scss/first-screen.scss';
import backgroundImg from '../../../assets/images/bg/first-screen-pleasure.png';

class FirstScreenPleasure extends Component {

    render(){
        return(
            <section className="first-screen" style={{background: `url(${backgroundImg})`, height: 260}}>
                <Header onChangePage={this.props.onChangePage} onChangeAboutIt={this.props.onChangeAboutIt}/>
                <section className="main">
                    <div className="container" style={{paddingTop: 0}}>
                        <h1 className="main__title">For your pleasure</h1>
                    </div>
                </section>
                
            </section>
        )
       
    } 
  
}

export default FirstScreenPleasure;