import { Component } from "react";

import FirstScreenOur from './first-screen/First-screen.jsx';
import AboutProduct from '../about-product/About-product.jsx';
import Footer from '../footer/Footer.jsx';
import Devider from "../devider/Devider.jsx";
import FilterPanel from "../filter-panel/Filter-panel.jsx";
import Product from "../products/Product.jsx";

import aboutOurBeans from '../../assets/images/about-product/about-our-beans.png';

class OurCoffe extends Component {
    constructor(props){
        super(props);
        this.state = {
            productInfo : {img : aboutOurBeans, 
                            alt: "about-our-beans", 
                            title: "About our beans", 
                            text: ['Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.', 'Afraid at highly months do things on at. Situation recommend objection do intention so questions.',
                                    'As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.']
                            },
            term : '',
            tabContent : 'All'
        }
    }

    onInputDate = (data) =>{
        this.setState(() => ({
            term : data
        }))
        
    }

    takeTabContent = (data) => {
        this.setState(() => ({
            tabContent : data
        }))
    }

    render(){
        return (
            <div id="our-coffe">
                <FirstScreenOur onChangePage={this.props.onChangePage} onChangeAboutIt={this.props.onChangeAboutIt}/>
        
                <AboutProduct {...this.state.productInfo}/>
                
                <Devider/>

                <FilterPanel onInputDate={this.onInputDate} takeTabContent={this.takeTabContent}/>

                <Product onChangeAboutIt={this.props.onChangeAboutIt} takeCardsContent={this.props.takeCardsContent} filterProduct={this.state.term} tabContent={this.state.tabContent}/>

                <Footer onChangePage={this.props.onChangePage} onChangeAboutIt={this.props.onChangeAboutIt}/>
       
            </div>
            
          );
    } 
}

export default OurCoffe;





