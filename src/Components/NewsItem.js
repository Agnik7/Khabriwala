import React, { Component } from 'react'
import './NewsItem.css';
export class NewsItem extends Component {
      
  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "20rem" , height: "28rem"}}>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <div className="story"><a href={newsUrl} target="_blank" rel='noreferrer' className='btn btn-sm'><strong>Read More&rarr;</strong></a></div>
                
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem