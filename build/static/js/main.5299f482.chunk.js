(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(11)},11:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(4),i=n(8),c=n(5),a=n(9),l=n(0),d=n.n(l),s=n(6),h=n.n(s),u=n(7),p=(n(16),["\u2190","\u2191","\u2192","\u2193"]),v=["left","up","right","down"],f=new u.Howl({src:["pop.m4a"],volume:.2}),g=1;function w(){this.id=g,this.children=[],this.direction=-1,g++}var m=new w;m.children.push(new w);var k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).gotClicked=function(e){var t=n.props,o=(t.d,t.parentHandler);if(o)return console.log("parent"),void o(e);console.log("own");n.state.c;n.setState({clicked:"true"});var r=n.eventToDir(e);n.setState(function(e){var t=e.c,o=n.props.node;if(console.log(o.children.length),o.children.length<2){setTimeout(f.play,100);var i=new w;o.children.push(i),o.direction=r,i.direction=r;var c=new w;if(i.children.push(c),o.children.length<2){var a=new w;c.id=o.id,i.children.push(a),i.direction=r}return{c:t+1}}}),f.play(),e.stopPropagation()},n.eventToDir=function(e){var t=e.target.getBoundingClientRect(),n=t.left,o=t.top,r=t.width,i=t.height,c=(e.clientX-n)/r-.5,a=(e.clientY-o)/i-.5,l=(Math.atan2(a,c)+Math.PI)/(2*Math.PI);return(Math.round(4*l)+4)%4},n.mouseMove=function(e){var t=n.eventToDir(e);n.setState({t:p[t]})},n.state={c:0,t:""},window.setTimeout(function(){e.root&&n.setState({c:0})},100),n}return Object(a.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,n=this.props,o=n.node,r=n.d,i=(n.parentHandler,this.state);i.c,i.t;r=r||0;var c=o.children.length>0;return d.a.createElement("div",{onClick:this.gotClicked,onMouseMove:this.mouseMove,className:"block ".concat(v[o.direction]," ").concat(c?"vessel":"leaf"),style:{backgroundColor:"hsla(".concat(255*o.id/5,",30%,80%,1.0)")}},o.children.map(function(n){return d.a.createElement(t,{node:n,d:r+1,parentHandler:o.children.length<2&&e.gotClicked})}))}}]),t}(d.a.Component),b=document.getElementById("root");h.a.render(d.a.createElement(k,{node:m}),b)},16:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.5299f482.chunk.js.map