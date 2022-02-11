import React, { Component } from "react";
import { notifications } from "./utils/notifications";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
      notifications: []
    };
  }

  handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    const item = e.target.name;
    const isChecked = e.target.checked;
    console.log(this.state);

    this.setState((s) => ({
      checkedItems: s.checkedItems.set(item, isChecked)
    }));
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
                name={showName}
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
