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

  handleClick : function(){
    var value = this.state.value;
    value = value === 'X' ? 'O' : 'X';
    this.setState({
      value: value
    });
  },

  render: function(){
    return (
      <button
        onClick={this.handleClick}
        style={boxStyle}>
        {this.state.value}
      </button>
    );
  }
});

React.render(<Box/>, document.body);



  // componentWillMount: function(){
  //   this.timer = setInterval(function(){
  //     var value = this.state.value;
  //     value = value === "X" ? "O": "X";
  //     this.setState({
  //       value: value
  //     });
  //   }.bind(this), 300);
  // },

  // componentWillUnmount: function(){
  //   clearInterval(this.timer);
  // },
