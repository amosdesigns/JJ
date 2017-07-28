const React = require('react');
const Links = require('./links');

class Nav extends React.Component {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
);
  return (
<ul>{listItems}</ul>
);
}


module.exports =  Nav;
