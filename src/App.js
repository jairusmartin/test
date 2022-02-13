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

    console.log(this.state.emailPickList);
  }

  handleChange = (e) => {
    //1. if person is checked, add to emails array, otherwise remove from emails
    //2. update sendlist ischecked for display;

    let emailPickList = this.state.emailPickList.map((el, index) =>
      el.name === e.target.name ? { ...el, isChecked: e.target.checked } : el
    );

    this.setState({ emailPickList }, () =>
      console.log(this.state.emailPickList)
    );
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
            {this.state.emailPickList
              .filter((el) => el.isChecked)
              .map((el, index) => (
                <li key={el.name}>{el.email}</li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default App;
