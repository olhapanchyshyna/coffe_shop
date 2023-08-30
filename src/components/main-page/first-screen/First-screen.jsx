import { Component } from "react";
import Header from '../../header/Header'

import '../../../assets/scss/first-screen.scss';
import titleIconWh from '../../../assets/images/title-icon/title-icon-wh.svg';
import backgroundImg from '../../../assets/images/bg/first-screen-bg.png';

class FirstScreen extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <section className="first-screen" style={{background: `url(${backgroundImg})`}}>
                <Header onChangePage={this.props.onChangePage} onChangeAboutIt={this.props.onChangeAboutIt}/>
                <section className="main">
                    <div className="container">
                        <h1 className="main__title">Everything You Love About Coffee <br/> <img src={titleIconWh} alt="main title icon white"/></h1>
                        <div className="main__subtitle">We makes every day full of energy and taste <br/> <span>Want to try our beans? </span></div>
                        <a href="#" className="main__btn">More</a>
                    </div>
                </section>
                
            </section>
        )
       
    } 
  
}

export default FirstScreen;