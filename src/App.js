import React, { Component } from "react";
import { list } from "./utils/emails";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial config with some default items checked
      emailPickList: list,
      // should contain just the emails address of the checked items only
      emailSendList: []
    };
  }

  handleChange = (e) => {
    //1. if person is checked, add to emails array, otherwise remove from emails
    //2. update sendlist ischecked for display;

    /* 
     // I was unable to get this syntax to work...do you know why?
    let emailPickList = this.state.emailPickList.map((el, index) => {
      // /console.log(index);
      console.log(el);
      return false;
    });
    */
    let emailPickList = [...this.state.emailPickList];
    let index = this.state.emailPickList.findIndex(
      (el) => el.name === e.target.name
    );
    emailPickList[index] = {
      ...emailPickList[index],
      isChecked: e.target.checked
    };
    this.setState({ emailPickList });
  };

  render() {
    return (
      <div>
        <h1>Check emails which should receive an update:</h1>
        {this.state.emailPickList.map(({ name, email, isChecked }, index) => {
          return (
            <span key={`some-${index}`}>
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={name}
                value={email}
                checked={isChecked}
                // defaultChecked={isChecked}
                onChange={this.handleChange}
              />
              <label>{name} </label>
            </span>
          );
        })}
        <div>
          <p>
            <b>Emails Checked:</b>
            <br />
          </p>
          <ol>
            Note: this should display a list of the checked emails address
          </ol>
        </div>
      </div>
    );
  }
}
export default App;
