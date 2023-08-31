import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <div class="bg-image hover-zoom">
        <i
          onClick={this.props.onClick}
          className={classes}
          aria-hidden="true"
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}

export default Like;
