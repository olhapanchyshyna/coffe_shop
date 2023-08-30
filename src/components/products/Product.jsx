import { Component } from "react";

import "./product.scss"

import best3 from '../../assets/images/best/best-3.png';


class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataItem : [
                {img: best3, alt: 'AROMISTICO Coffee', title: 'AROMISTICO Coffee 2 kg', country: 'Brazil', price: '6.99$'},
                {img: best3, alt: 'AROMISTICO Coffee', title: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '8.99$'},
                {img: best3, alt: 'AROMISTICO Coffee', title: 'AROMISTICO Coffee 4 kg', country: 'Columbia', price: '9.99$'},
                {img: best3, alt: 'AROMISTICO Coffee', title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
                {img: best3, alt: 'AROMISTICO Coffee', title: 'AROMISTICO Coffee 8 kg', country: 'Columbia', price: '9.99$'},
                {img: best3, alt: 'AROMISTICO Coffee', title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
            ]
        }

    }

    onChangeAboutIt = (e) =>{
        e.preventDefault();
        this.props.onChangeAboutIt(true);
        const country = e.currentTarget.querySelector('.product__item__country').textContent;
        const price = e.currentTarget.querySelector('.product__item__price').textContent;
        this.props.takeCardsContent(country, price);

    }

    filterProductByInput = () => {
        if(this.props.filterProduct && this.props.filterProduct.length < 1){
            return this.state.dataItem
        }
        return this.state.dataItem.filter(item =>{
            return item.title.indexOf(this.props.filterProduct) > -1
        })
    }

    filterProductByTab = (items,data) => {
       switch(data){
        case "Brazil" :
            return items.filter(item => item.country === 'Brazil');
        case "Kenya" :
            return items.filter(item => item.country === 'Kenya');
        case "Columbia" :
            return items.filter(item => item.country === 'Columbia');
        default:
            return items
       }
    }


    render(){
        
        const res = this.filterProductByTab(this.filterProductByInput(), this.props.tabContent);
        let data = '';
        if(res.length >= 1){
            data = res.map(({img, alt, title, country, price}, i) =>{
                return (
                    <div className="product__item" onClick={this.onChangeAboutIt} key={i}>
                        <img src={img} alt={alt}/>
                        <div className="product__item__title">{title}</div>
                        <div className="product__item__country">{country}</div>
                        <div className="product__item__price">{price}</div>
                    </div>
                )
            })
        }else{
            data = this.state.dataItem.map(({img, alt, title, country, price}, i) =>{
                return (
                    <div className="product__item" onClick={this.onChangeAboutIt} key={i}>
                        <img src={img} alt={alt}/>
                        <div className="product__item__title">{title}</div>
                        <div className="product__item__country">{country}</div>
                        <div className="product__item__price">{price}</div>
                    </div>
                )
            })
        }
        

        return(
            <section className="product cards">
                <div className="container">
                    <div className="product__list">
                       {data}
                    </div>
                </div>
            </section>
        )
    }
}
export default Product;