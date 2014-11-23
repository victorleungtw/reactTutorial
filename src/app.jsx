var React = require('react');

var boxStyle = {
  height: '100px',
  width: '100px'
};

var Box = React.createClass({
  getInitialState: function(){
    return {
      value: 'X'
    }
  },

  componentWillMount: function(){
    this.timer = setInterval(function(){
      var value = this.state.value;
      value = value === "X" ? "O": "X";
      this.setState({
        value: value
      });
    }.bind(this), 300);
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
  },

  render: function(){
    return (
      <button style={boxStyle}>
        {this.state.value}
      </button>
    );
  }
});

React.render(<Box/>, document.body);
