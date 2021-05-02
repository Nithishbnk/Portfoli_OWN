import React, {Component} from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap';
class TopSection extends Component {

  // state = { theme: null }
  //
  // chooseTheme = (theme, evt) => {
  //   evt.preventDefault();
  //   if (theme.toLowerCase() === 'reset') { theme = null }
  //   this.setState({ theme });
  // }

  render() {

    return (
      <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
</div>
    );

  }

}

export default TopSection;
