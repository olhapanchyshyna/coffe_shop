import { Component } from "react";

import './footer.scss';
import coffeeBeansB from '../../assets/images/coffee-beans/coffee-beans-b.svg'
import titleIconB from '../../assets/images/title-icon/title-icon-b.svg'

class Footer extends Component {
    constructor(props){
        super(props);
    }

    onChangePage = (e) =>{
        e.preventDefault();
        this.props.onChangePage(e.currentTarget.getAttribute('href'));
        this.props.onChangeAboutIt(false);
    } 

    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#main" className="footer__item_link first" onClick={this.onChangePage}><img src={coffeeBeansB} alt="coffe icon"/> Coffee house</a></li>
                        <li className="footer__item"><a href="#our-coffe" className="footer__item_link" onClick={this.onChangePage}>Our coffee</a></li>
                        <li className="footer__item"><a href="#pleasure" className="footer__item_link" onClick={this.onChangePage}>For your pleasure</a></li>
                    </ul>
                    <img src={titleIconB} alt="main title icon black"/>
                </div>
            </footer>
        )
       
    } 
  
}

export default Footer;