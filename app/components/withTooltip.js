import React from "react";

function withTooltip(innerComponent) {
  return class WithTooltip extends React.Component {
    constructor(props) {
      this.state = {
        hovering: false
      };
      this.mouseOver = this.mouseOver.bind(this);
      this.mouseOut = this.mouseOut.bind(this);
    }

    mouseOver(evt) {
      this.setState({ hovering: true });
    }

    mouseOut(evt) {
      this.setState({ hovering: false });
    }

    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          {this.state.hovering && <div>tooltip</div>}
          <innerComponent {...props} />
        </div>
      );
    }
  };
}

export default withTooltip;
