import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoListLoader from './components/video-list-loader';
import YTSearch from 'youtube-api-search';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      videos:[],
      isLoading:true,
      selectedVideo:null
    };
    this.apiKey='AIzaSyATCL_Q_jAXSPDhRd46O3tRIz_IDkX-sOE';
    this.onVideoSelect=this.onVideoSelect.bind(this);
    this.searchOnTerm=this.searchOnTerm.bind(this);
  }

  componentDidMount(){
    YTSearch({key:this.apiKey, term:'all'},(videos)=>{
      this.setState({
        videos,
        isLoading:false,
        selectedVideo:videos[0]
      });
    },(error)=>{
      console.log(error);
    });
  }

  searchOnTerm(term){
    YTSearch({key:this.apiKey, term:term},(videos)=>{
      this.setState({
        videos,
        isLoading:false,
        selectedVideo:videos[0]
      });
    },(error)=>{
      console.log(error);
    });
  }
  onVideoSelect(event,video){
    this.setState({
      selectedVideo:video
    });
  }

  render() {
    return (
      <div className="container-fluid">
         <SearchBar searchOnTerm={this.searchOnTerm}/>
         <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          {this.state.isLoading?<VideoListLoader/>:
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
          }
         </div>   
      </div>
    );
  }
 
}

export default App;
