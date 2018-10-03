import React from 'react';
import { connect } from 'react-redux';
import NewsSlider from '../NewsSlider/NewsSlider'
import './NewsPage.css'

class NewsPage extends React.PureComponent {

  componentDidMount() {
      this.props.setActiveIndex(1);
    }

  render() {
    return (
      <div className="All-content-container">
        <div id="news-container-bg01">
          <div id="content-news01">
            <NewsSlider
            />
          </div>
        </div>
        <p className="App-intro">
              This is the News page.
        </p>
      </div>
    )
  }
}

const mapDispatchToProps= (dispatch)=> {
  return {

    setActiveIndex: (index) => {
      dispatch({
        type: 'CHANGE_ACTIVE_INDEX',
        index: index,
      });
    },
  }
}

const NewsPageContainer= connect(null, mapDispatchToProps)(NewsPage);

export default NewsPageContainer
