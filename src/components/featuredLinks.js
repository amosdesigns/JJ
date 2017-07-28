/**
 * Created by Jerome on 6/26/17.
 */
const React = require('react');
const Links = require('./links');

class FeatureLinks extends React.Component {

  constructor (props) {
    super(props);

  }

  render () {
    return (
        <Links classname="extLogo" href={ this.props.href } title={ this.props.title}> <img src={ this.props.src }
            width={ this.props.width } height={ this.props.height } alt={this.props.alt}/> </Links>
    )
  }
}
module.exports = FeatureLinks;
