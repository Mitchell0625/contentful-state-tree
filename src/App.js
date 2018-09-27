import React, { Component } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import Container from './components/Container/Container';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }
  componentDidMount() {
    axios
      .get('/api/entries')
      .then(resp => console.log(resp.data))
      .catch(err => console.log(err));
    if (this.state.images.length < 1) {
      this.props.data
        .getImages()
        .then(() => {
          this.setState({ images: this.props.data.list });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    console.log(this.state.images);
    const info = this.props.data.list.map((e, i) => {
      return (
        <Container
          key={i}
          name={e.title}
          photo={e.file.url.replace(/\/\/\//, '')}
        />
      );
    });
    return (
      <div className="app-div">
        <h1>Alphabetta</h1>
        <div className="app-info">{info}</div>
      </div>
    );
  }
}
export default observer(App);
