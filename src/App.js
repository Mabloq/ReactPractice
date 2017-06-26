import _ from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './imports/ui/search_bar';
import VideoList from './imports/ui/video_list';
import VideoDetail from './imports/ui/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBIwk1-_iIf-tew3aowIm4onyS0xslxvsw';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
    console.log(window);
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
      </div>

    );
  }
}
