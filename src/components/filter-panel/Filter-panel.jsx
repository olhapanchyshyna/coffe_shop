import { Component } from "react";

import "./filter-panel.scss"

class FilterPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
           term : ''
        }
    }

    onInputDate = (e) =>{
        this.setState(() => ({
            term : e.target.value
        }))
        this.props.onInputDate(e.target.value)
    }

    takeTabContent = (e) => {
        this.props.takeTabContent(e.target.textContent);

        // const items = document.querySelectorAll('.btn-panel__item');
        // items.forEach(item => {
        //     item.classList.remove('btn-panel__active')
        // });
        // e.currentTarget.classList.add('btn-panel__active');
    }

    render(){
        return(
            <section className="filter-panel">
                <div className="container">

                    <div className="search-panel">
                        <label htmlFor="search">Lookiing for</label>
                        <input type="text" id="search" name="search" placeholder="start typing here..." onChange={this.onInputDate} value={this.state.term}/>
                    </div>

                    <div className="btn-panel">
                        <div className="btn-panel__title">Or filter</div>
                        <div className="btn-panel__list">
                            <div className="btn-panel__item btn-panel__active" onClick={this.takeTabContent}>All</div>
                            <div className="btn-panel__item" onClick={this.takeTabContent}>Brazil</div>
                            <div className="btn-panel__item" onClick={this.takeTabContent}>Kenya</div>
                            <div className="btn-panel__item" onClick={this.takeTabContent}>Columbia</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default FilterPanel;