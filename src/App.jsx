import { Component } from "react";
import MainPage from "./components/main-page/Main-page";
import OurCoffePage from "./components/our-coffe-page/Our-coffe-page";
import PleasurePage from "./components/pleasure-page/Pleasure-page";
import AbotItPage from "./components/about-it-page/About-it-page";

class App extends Component {
    constructor(){
        super();
        this.state = {
            page: "main",
            aboutIt : false,
            aboutItContent : {country: '', price: ''}
        }
    }

    onChangePage = (data) => {
        const page = data.slice(1)
        this.setState(() => ({
            page : page
        }))    
    } 

    onChangeAboutIt = (data) =>{
        this.setState(() => ({
            aboutIt : data
        }))
    }

    takeCardsContent = (country, price) => {
        this.setState(() => ({
            aboutItContent: {country: country, price: price}
        }))
    }


    render(){
        const {country, price} = this.state.aboutItContent;
        return (
            <div className="App">

               {this.state.page === "main" && 
                <MainPage 
                    onChangePage={this.onChangePage} 
                    onChangeAboutIt={this.onChangeAboutIt}
                />}

               {this.state.page === "our-coffe" && !this.state.aboutIt && 
                <OurCoffePage 
                    onChangePage={this.onChangePage} 
                    onChangeAboutIt={this.onChangeAboutIt} 
                    takeCardsContent={this.takeCardsContent}
                />}

               {this.state.aboutIt && 
                <AbotItPage 
                    onChangePage={this.onChangePage} 
                    onChangeAboutIt={this.onChangeAboutIt} 
                    infoForAboutItPage={{country, price}}
                /> }

               {this.state.page === "pleasure" && !this.state.aboutIt && 
                <PleasurePage 
                    onChangePage={this.onChangePage} 
                    onChangeAboutIt={this.onChangeAboutIt} 
                    takeCardsContent={this.takeCardsContent}
                /> }

            </div>
          );
    }
  
}

export default App;
