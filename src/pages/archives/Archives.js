import React, {Component} from "react";
import "./styles.css";
import Dropdown from "../../components/dropdowns/Dropdown";
import * as Constants from "../../config/Constants";

export default class Archives extends Component{
  constructor() {
    super();
    this.state = {
      sortDropDownValue: "Newest",
      yearDropDownValue: "All",
      sortedRecord: Constants.Archives_Data
    };
  }
  
  changeSortValue(state) {
   
    let archives = [];
    if(state === "Oldest"){     
      console.log('oldnnnest', state);
        archives = Constants.Archives_Data.sort(function(yearA, yearB){ 
          return yearA.year-yearB.year  

      })
    }
    else if(state === "Newest"){     
      archives = Constants.Archives_Data.sort(function(yearA, yearB){          
        return yearB.year-yearA.year        
    })    
  }
  this.setState({ sortDropDownValue: state, sortedRecord: archives});
  }
  changeYearValue(text) {
    this.setState({ yearDropDownValue: text });
  }
  render() {
    return (
      <>
         <div className="header">
        <h1>Archives</h1>
      </div>
        <div className="dropdown-container" >
        <div>
        <label>YEAR</label><Dropdown dropDownValue={this.state.yearDropDownValue} dropDownContent={Constants.yearDropDown} 
          changeValue={(value)=>this.changeYearValue(value)} />
        </div>
        <div>
        <label>SORT</label><Dropdown dropDownValue={this.state.sortDropDownValue} dropDownContent={Constants.sortDropDown} 
          changeValue={(value)=>this.changeSortValue(value)} />
        </div>
        </div>
        
        <div class="archives-container">
        {this.state.sortedRecord.map(data => (   

          <div class="archives-item">           
            <img src={data.img} alt="item" />
           <p>{data.year} Volume:{data.volume}</p>
          </div>
        ))}
      </div>
      
      </>
    );
  }
  
}
  