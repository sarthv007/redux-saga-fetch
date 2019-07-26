import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
width: '50%',
margin: '0 auto',
color: 'olive'
}
let NewsItem = ({ article }) => (
article ?
<article style={articleStyle} >
  <div>
    <h1>{article.title}</h1>
    <p>{article.body}</p>

  </div>
</article> :
null
);
const mapStateToProps = (state) => ({
article: state.news,
})
NewsItem = connect(mapStateToProps,null)(NewsItem)
export default NewsItem;