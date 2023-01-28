import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  
constructor(){
super();
console.log("This is a constructor")
this.state = {
    articles:[],
    loading:false,
    totalResults:0,
    page:1
};
}
 async  updateNews(){ 
  this.setState({loading:true});
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=12`;  
  let data =  await  fetch(url);
  //console.log(data.json());
  let parsedData =  await  data.json();
  this.setState({articles: parsedData.articles,
     loading:false,
    totalResults: parsedData.totalResults,
    hasMore:true
    });
 }
 async  componentDidMount(){
    this.updateNews();
}
fetchMoreData = async() => {
  if (this.state.articles.length >= this.state.totalResults) {
    this.setState({ hasMore: false });
    return;
  }
    
      this.setState({page: this.state.page+1});
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=12`;
      let data =  await  fetch(url);
      //console.log(data.json());
      let parsedData =  await  data.json();
      this.setState({articles: this.state.articles.concat(parsedData.articles),
         loading:false,
        totalResults: parsedData.totalResults
        });
    
  
};
  render() {
    console.log(this.state.totalResults);
    let urlPic = "https://plus.unsplash.com/premium_photo-1663054265630-baeae23397cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    if(this.props.category === "general")
      urlPic = "https://plus.unsplash.com/premium_photo-1663054265630-baeae23397cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    else if(this.props.category === "health")
      urlPic = "https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80";
    else if(this.props.category === "business")
      urlPic="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80";
    else if(this.props.category === "entertainment")
      urlPic="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
    else if(this.props.category === "science")
      urlPic="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    else if(this.props.category === "technology")
      urlPic="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";
    else if(this.props.category === "sports")
      urlPic="https://media.istockphoto.com/id/1141191007/vector/sports-set-of-athletes-of-various-sports-disciplines-isolated-vector-silhouettes-run-soccer.jpg?s=612x612&w=is&k=20&c=TIoGA3Js6v5tYEEbayOWONj_7V20RC3OS08VhR5-o6A=";
    return (
      <div className='container my-3'>
        <h2 className='Headline'>Top Headlines</h2>
        {this.state.loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              
            </p>
          }
        >
          <div className="container">
        <div className="row">
            {this.state.articles.map((element)=>{
              return <><div className="col-md-4 p-3" key={element.url}>
              <NewsItem  title = {element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imgUrl = {element.urlToImage?element.urlToImage:urlPic} newsUrl = {element.url}/>
          </div></>
            })}
            
        </div>
        </div>
        </InfiniteScroll>
        {/* <NewsItem title = "My Title" description = "Described"/>
        <NewsItem title = "My Title" description = "Described"/> */}
      </div>
    )
  }
}

export default News