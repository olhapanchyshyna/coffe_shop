import { Component } from 'react';

import FirstScreen from './first-screen/First-screen.jsx';
import AboutUs from './about-us/About-us.jsx';
import OurBest from './our-best/Our-best.jsx';
import Footer from '../footer/Footer.jsx';



class MainPage extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div id="main">
                <FirstScreen onChangePage={this.props.onChangePage} onChangeAboutIt={this.props.onChangeAboutIt}/>
        
                <AboutUs/>
        
                <OurBest/>
                
                <Footer onChangePage={this.props.onChangePage} onChangeAboutIt={this.props.onChangeAboutIt}/>
            </div>
          );
    }
  
}

export default MainPage;
