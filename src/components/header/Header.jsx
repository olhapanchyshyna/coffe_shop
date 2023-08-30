import { Component } from "react";

import './header.scss';
import coffeeBeansWh from '../../assets/images/coffee-beans/coffee-beans-wh.svg'

class Header extends Component {

    constructor(props){
        super(props);
    }

    onChangePage = (e) =>{
        e.preventDefault();
        this.props.onChangePage(e.currentTarget.getAttribute('href'));
        this.props.onChangeAboutIt(false);
        
        e.target.classList.add("header__item_active");
        console.log(e.target);
    } 

    render(){
        return(
            <header className="header">
            <nav>
                <ul className="header__list">
                    <li className="header__item">
                        <a href="#main" className="header__item_link first" onClick={this.onChangePage}>
                            <img src={coffeeBeansWh} alt="coffe icon"/>Coffee house
                        </a>
                    </li>

                    <li className="header__item">
                        <a href="#our-coffe" className="header__item_link" onClick={this.onChangePage}>Our coffee
                        </a>
                    </li>

                    <li className="header__item">
                        <a href="#pleasure" className="header__item_link" onClick={this.onChangePage}>For your pleasure
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        )
       
    } 
  
}

export default Header;