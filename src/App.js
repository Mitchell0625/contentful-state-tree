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
    this.fetchImages();
    this.setState({ images: this.props.data.list });
    console.log(this.state.images);
  }

  fetchImages() {
    this.props.data.getImages();
  }

  render() {
    // const info = this.props.data.list.map((e, i) => {
    //   return <Container key={i} name={e.title} single={e.url} />;
    // });
    return (
      <div className="app-div">
        <h1>Alphabetta</h1>
        {/* <div>{info}</div> */}
      </div>
    );
  }
}
export default observer(App);
