/**
 * Created by Jerome on 6/26/17.
 */
const React = require('react');
const Links = require('./links');

class Logo extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
        <Links classname="logo" href={ this.props.href } title={ this.props.title} >
            <img src={ this.props.src } width={ this.props.width } height={ this.props.height } alt={this.props.alt}/>
        </Links>
        )
  }

}
module.exports =  Logo
//<img src="https://media.sailthru.com/5cj/1k1/6/k/59493e8978575.jpg" width="222" height="30" alt="logo-leftfield-222x30"/>
