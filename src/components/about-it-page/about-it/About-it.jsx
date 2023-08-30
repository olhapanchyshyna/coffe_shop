import { Component } from "react";

import '../../about-product/about-product.scss';

import titleIconB from '../../../assets/images/title-icon/title-icon-b.svg';

class AboutIt extends Component {
    constructor(props){
        super(props);

    }
    render(){
        const {img, alt, title, text, country, price} = this.props;

        return(
            <section className="about-product">
                <div className="container" style={{maxWidth: 800}}>
                    <div className="about-product__img">
                        <img src={img} alt={alt}/>
                    </div>
                    <div className="about-product__descr">
                        <h2 className="about-product__title title">{title}<br/><img src={titleIconB} alt="main title icon black"/></h2>
                        <div className="about__description about-product__text" style={{textAlign: 'start'}}>
                            <b style={{display: 'inline-block', marginTop: 20}}>Country:</b> {country} <br/><br/>
                            <b>Description</b>: {text} <br/><br/>
                            <b>Price</b>:  {price}
                        </div>
                    </div>
                </div>
            </section>
        )
       
    } 
  
}

export default AboutIt;