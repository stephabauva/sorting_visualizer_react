var __html = require('../sortingAlgorithms/toBeDisplayed/BubbleSortJS.html');
var template = { __html: __html };

React.module.exports = React.createClass({
  render: function() {
    return(
      <div dangerouslySetInnerHTML={template} />
    );
  }
});
