var React = require('react');

var boxStyle = {
  height: '100px',
  width: '100px'
};

var Box = React.createClass({
  handleClick: function(){
    this.props.handleClick(this.props.index);
  },
  render: function(){
    return (
      <button
        onClick={this.handleClick}
        style={boxStyle}>
        {this.props.value}
      </button>
    );
  }
});

var Row = React.createClass({
  getInitialState: function(){
    return {
      boxValues: ['-', '-', '-'],
      clicks: 0
    }
  },
  handleClick: function(index){
    var boxValues = this.state.boxValues;
    var clicks = this.state.clicks;
    boxValues[index] = clicks % 2 ? 'X' : 'O';
    this.setState({
      clicks: clicks + 1,
      boxValues: boxValues
    });
  },
  render: function(){
    var cBoxes = this.state.boxValues.map(function(value, index){
      return (
        <Box
          handleClick={this.handleClick}
          value={value}
          key={index}
          index={index}
        />
      );
    }.bind(this));
    return (
      <div>
        {cBoxes}
      </div>
    );
  }
})

React.render(<Row/>, document.body);
