import { React, Component } from "react";

class AboutClass extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, address } = this.props;
    return (
      <div>
        <h1> Name: {name} </h1>
        <h3> {address} </h3>
      </div>
    );
  }
}
export default AboutClass;
