import { Component } from "react";

import FirstScreen from './first-screen/First-screen.jsx';
import AboutIt from "./about-it/About-it.jsx";
import Footer from '../footer/Footer.jsx';


import aboutOurBeans from '../../assets/images/about-product/about-it.png';

class AbotItPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            productInfo : {img : aboutOurBeans, 
                            alt: "about-it", 
                            title: "About it", 
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            }
        }
        
    }
    render(){
        return (
            <div id="aboutIt">
                <FirstScreen onChangePage={this.props.onChangePage} onChangeAboutIt={this.props.onChangeAboutIt}/>

                <AboutIt {...this.state.productInfo} {...this.props.infoForAboutItPage}/>
                
                <Footer onChangePage={this.props.onChangePage} onChangeAboutIt={this.props.onChangeAboutIt}/>
       
            </div>
            
          );
    } 
}

export default AbotItPage;





