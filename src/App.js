import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Container from './components/Container';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
    this.fetchImages = this.fetchImages.bind(this);
  }
  componentDidMount() {
    if (this.state.images.length < 1) {
      this.props.data
        .getImages()
        .then(() => {
          this.setState({ images: this.props.data.list });
        })
        .catch(err => console.log(err));
    }
  }

  fetchImages() {
    this.props.data.getImages();
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
        <div>{info}</div>
      </div>
    );
  }
}
export default observer(App);
