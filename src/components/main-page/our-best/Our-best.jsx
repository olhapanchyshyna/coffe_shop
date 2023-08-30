import { Component } from "react";

import './our-best.scss';

import best1 from '../../../assets/images/best/best-1.png';
import best2 from '../../../assets/images/best/best-2.png';
import best3 from '../../../assets/images/best/best-3.png';


class OurBest extends Component {
    constructor(){
        super();
        this.productItem = [
            {img : best1, alt: "Solimo Coffee", title: "Solimo Coffee Beans 2 kg", price: "10.73$"},
            {img : best2, alt: "Presto Coffee", title: "Presto Coffee Beans 1 kg", price: "10.73$"},
            {img : best3, alt: "AROMISTICO Coffee", title: "AROMISTICO Coffee 1 kg", price: "6.99$"}
        ]
    }

    render(){
        const product = this.productItem.map(({img, alt, title, price}) =>{
            return (
                <div className="product__item" key={title}>
                    <img src={img} alt={alt}/>
                    <div className="product__item__title">{title}</div>
                    <div className="product__item__price">{price}</div>
                </div>
            )
        })

        return(
            <section className="best">
                <div className="container">
                    <h2 className="best__title title">Our best</h2>
                    <div className="product__list">
                        {product}
                    </div>
                </div>
            </section>
        )
       
    } 
  
}

export default OurBest;