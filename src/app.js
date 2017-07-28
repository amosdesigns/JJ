const React = require('react');
const ReactDOM = require('react-dom');
const Copyright = require('./components/copyright');
const Logo = require('./components/logo');
const Links = require('./components/links');
// const Nav = require('./components/nav');
const FeaturedLinks = require('./components/featuredLinks');

// create are global footer in React
class App extends React.Component {

  render () {
    return (<footer classname='mainFooter'>
      <Logo classname="logo" href="./here.html" title="this title"
          src="https://media.sailthru.com/5cj/1k1/6/k/59493e8978575.jpg" width="222" height="30"
          alt="logo-leftfield-222x30"/>
          <Copyright name="nbcnews"/>


          <ul>
        <li>
          <FeaturedLinks href="./here.html" title="this title"
            src="https://media.sailthru.com/5cj/1k1/6/7/59381576227a9.jpg" width="222" height="30"
            alt="logo-leftfield"/></li>
        <li><FeaturedLinks href="./here.html" title="this title"
          src="https://media.sailthru.com/5cj/1k1/6/7/59381591c7249.jpg" width="222" height="30" alt="logo-leftfield"/>
      </li>
      <li><FeaturedLinks href="./here.html" title="this title"
          src="https://media.sailthru.com/5cj/1k1/6/7/593815a78a443.jpg" width="222" height="30" alt="logo-leftfield"/>
      </li>
      </ul>
      </footer>
      ) } } module.exports = App;
