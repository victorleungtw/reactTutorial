var React = require('react');

var boxStyle = {
  height: '100px',
  width: '100px'
};

var Box = React.createClass({
  render: function(){
    return (
      <button
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
  render: function(){
    var cBoxes = this.state.boxValues.map(function(value, index){
      return (
        <Box value={value} key={index} index={index}/>
      );
    });
    return (
      <div>
        {cBoxes}
      </div>
    );
  }
})

React.render(<Row/>, document.body);
