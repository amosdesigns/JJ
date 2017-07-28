/**
 * Created by Jerome on 6/26/17.
 */
const React = require('react');

class Links extends React.Component {
  render () {
    return <a classname={ this.props.classname } href={ this.props.href } title={ this.props.title } target='_blank'>
      { this.props.children }
    </a>
  }
}
module.exports =  Links;
