import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Example extends React.Component {
  state = {
    startDate: null,
    minDate : function minDate() {
      const date = new Date();
      const mindate = date.getDate() - 12;
      return date.setDate(mindate);
    }
  };

  
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  maxDate = () => {
    const date = new Date();
    const maxdate = date.getDate() + 9;
    return date.setDate(maxdate);
  }



  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onSelect={this.handleSelect}
        onChange={this.handleChange}
        dateFormat="dd/MM/yyyy"
        filterDate= {date => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
        minDate={this.state.minDate()}
        maxDate={this.maxDate()}
      />
    );
  }
}

export default Example;