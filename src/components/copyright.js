/**
 * Created by Jerome on 6/26/17.
 */
const React = require('react');

class Copyright extends React.Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()};
  }

  render () {
    return <span>&copy; { this.state.date.getFullYear() } { this.props.name } </span>
  }

}

module.exports = Copyright;
