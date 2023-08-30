import { Component } from "react";

import FirstScreenPleasure from './first-screen/First-screen.jsx';
import AboutProduct from '../about-product/About-product.jsx';
import Devider from "../devider/Devider.jsx";
import Product from "../products/Product.jsx";
import Footer from '../footer/Footer.jsx';


import aboutOurBeans from '../../assets/images/about-product/about-our-goods.png';

class PleasurePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            productInfo : {img : aboutOurBeans, 
                            alt: "about-pleasure", 
                            title: "About our goods", 
                            text: ['Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.', 'Afraid at highly months do things on at. Situation recommend objection do intention so questions.',
                                    'As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.']
                            }
        }
        
    }
    render(){
        
        return (
            <div id="pleasure">
                <FirstScreenPleasure onChangePage={this.props.onChangePage} onChangeAboutIt={this.props.onChangeAboutIt}/>
        
                <AboutProduct {...this.state.productInfo}/>
                
                <Devider/>

                <Product onChangeAboutIt={this.props.onChangeAboutIt} takeCardsContent={this.props.takeCardsContent}/>

                <Footer onChangePage={this.props.onChangePage} onChangeAboutIt={this.props.onChangeAboutIt}/>
       
            </div>
            
          );
    } 
}

export default PleasurePage;





