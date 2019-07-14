import React, { useState } from "react";

const styles = {
  container: {
    position: "relative",
    display: "flex"
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 20%, 0.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px"
  }
};

function Tooltip({ text, children, hovering }) {
  return (
    <React.Fragment>
      {hovering && <div style={styles.tooltip}>{text}</div>}
      {children}
    </React.Fragment>
  );
}

function useHover() {
  const [hovering, setHovering] = useState(false);

  const mouseOut = () => {
    setHovering(false);
  };

  const mouseOver = () => {
    setHovering(true);
  };

  return {
    hovering,
    mouseOut,
    mouseOver
  };
}

function withHover(InnerComponent, propName = "hovering") {
  return function(props) {
    const { hovering, mouseOut, mouseOver } = useHover();

    const newProps = {
      [propName]: hovering,
      ...props
    };
    return (
      <div
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={styles.container}
      >
        <InnerComponent {...newProps} />
      </div>
    );
  };
}

export default withHover(Tooltip, "hovering");
