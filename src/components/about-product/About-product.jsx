import { Component } from "react";

import './about-product.scss';

import titleIconB from '../../assets/images/title-icon/title-icon-b.svg';

class AboutProduct extends Component {
    constructor(props){
        super(props);

    }
    render(){
        const {img, alt, title, text} = this.props;
        const newxText = text.map((item,i) => {
            return <p key={i}>{item}</p>
        })

        return(
            <section className="about-product">
                <div className="container">
                    <div className="about-product__img">
                        <img src={img} alt={alt}/>
                    </div>
                    <div className="about-product__descr">
                        <h2 className="about-product__title title">{title}<br/><img src={titleIconB} alt="main title icon black"/></h2>
                        <div className="about__description about-product__text">
                           {newxText}
                        </div>
                    </div>
                </div>
            </section>
        )
       
    } 
  
}

export default AboutProduct;