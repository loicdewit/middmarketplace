import React from "react";

// @Todo: Change to a timer with the interval?
// @Todo: put all the different fields in the state method to ensure you know that you are not updating when the component has been dismounted.

class TypeWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {txt: ""};
    this.word = "MarketPlace";
    this.txt = "";
    this.wait = 1000;
    this.isDeleting = false;
    this.count = 0;
    this.limit = 2;
  }

  componentDidMount() {
    this.__isMounted = true;
    this.timer = this.type();
  }

  componentWillUnmount() {
    this.__isMounted = false;
    clearTimeout(this.timer);
  }

  type = () => {
    if (this.count === this.limit) {
      return null;
    } else {
      if (this.isDeleting) {
        if (this.__isMounted) {
          this.setState({
            txt: this.word.substring(0, this.state.txt.length - 1)
          });
        }
      } else {
        if (this.__isMounted) {
          this.setState({
            txt: this.word.substring(0, this.state.txt.length + 1)
          });
        }
      }
      let typeSpeed = 200;
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
      if (!this.isDeleting && this.state.txt === this.word) {
        typeSpeed = this.wait;
        this.isDeleting = true;
        this.count++;
      } else if (this.isDeleting && this.state.txt === "") {
        this.isDeleting = false;
        typeSpeed = 500;
      }
      return setTimeout(() => this.type(), typeSpeed);
    }
  };

  render() {
    return (
      <h1 className="x-large">
        <span className="txtType">{`Midd${this.state.txt}`}</span>
      </h1>
    );
  }
}

export default TypeWriter;
