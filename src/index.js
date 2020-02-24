import React from "react";
import ReactDOM from "react-dom";
import { Howl } from "howler";
import "./styles.css";
let arrows = ["←", "↑", "→", "↓"];
let dirs = ["left", "up", "right", "down"];

var sound = new Howl({
  src: ["pop.m4a"],
  volume: 0.2
});
// let tree = {};

let idCounter = 1;
function nodePrototype() {
  this.id = idCounter;
  this.children = [];
  this.direction = -1;
  idCounter++;
}
let root = new nodePrototype();

root.children.push(new nodePrototype());

class BLOCK extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 0,
      t: ""
    };
    window.setTimeout(() => {
      if (props.root) {
        this.setState({ c: 0 });
      } else {
      }
    }, 100);
  }
  gotClicked = e => {
    let { d, parentHandler } = this.props;
    if (parentHandler) {
      console.log("parent");
      parentHandler(e);
      return;
    }
    console.log("own");

    let { c } = this.state;
    this.setState({ clicked: "true" });
    let direction = this.eventToDir(e);
    this.setState(({ c }) => {
      let node = this.props.node;
      console.log(node.children.length);
      if (node.children.length < 2) {
        setTimeout(sound.play, 100);

        let newVessel = new nodePrototype();
        node.children.push(newVessel);
        node.direction = direction;
        newVessel.direction = direction;
        let newLeaf = new nodePrototype();
        newVessel.children.push(newLeaf);

        if (node.children.length < 2) {
          let newnewNode = new nodePrototype();
          newLeaf.id = node.id;
          newVessel.children.push(newnewNode);
          newVessel.direction = direction;
        }

        // newNode.children[0].direction = direction;
        return { c: c + 1 };
      } else {
        // console.log()
        // node.children = [];
      }
    });

    sound.play();
    e.stopPropagation();
  };
  eventToDir = e => {
    let target = e.target;
    let { left, top, width, height } = target.getBoundingClientRect();
    let normx = (e.clientX - left) / width - 0.5;
    let normy = (e.clientY - top) / height - 0.5;
    let angle = Math.atan2(normy, normx);
    let normAngle = (angle + Math.PI) / (Math.PI * 2);
    let index = (Math.round(normAngle * 4) + 4) % 4;
    return index;
  };
  mouseMove = e => {
    let index = this.eventToDir(e);
    this.setState({ t: arrows[index] });
  };
  render() {
    let { node, d, parentHandler } = this.props;
    let { c, t } = this.state;
    d = d || 0;

    // if (d > 30) {
    //   return "🌝";
    // }
    let isVessel = node.children.length > 0;
    return (
      <div
        onClick={this.gotClicked}
        onMouseMove={this.mouseMove}
        className={`block ${dirs[node.direction]} ${
          isVessel ? "vessel" : "leaf"
        }`}
        style={{ backgroundColor: `hsla(${(node.id * 255) / 5},30%,80%,1.0)` }}
      >
        {/* {isVessel ? "" : node.id} */}
        {/* {d === 0 && c === 0 && "click here to initialize 🅜🅘🅣🅞🅢🅘🅢 "} */}
        {node.children.map(child => {
          return (
            <BLOCK
              node={child}
              d={d + 1}
              parentHandler={node.children.length < 2 && this.gotClicked}
            />
          );
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<BLOCK node={root} />, rootElement);
