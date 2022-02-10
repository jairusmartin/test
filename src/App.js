import React, { Component } from "react";
import { notifications } from "./utils/notifications";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "User Name" };
  }

  handleChange = (e) => {
    console.log(e.target);
    //this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>title</h1>
        {notifications.map(({ showName, email, isChecked }, index) => {
          return (
            <span key={`some-${index}`}>
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name="notifications"
                value={email}
                checked={this.state.checkedItems.get(notifications.showName)}
                onChange={this.handleChange}
              />
              <label>{showName} </label>
            </span>
          );
        })}
      </div>
    );
  }
}
export default App;
