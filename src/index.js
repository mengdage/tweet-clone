import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import './index.css';

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 10,
  timestamp: "2016-07-30 21:24:37"
};

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className='content'>
        <NameWithHandle author={tweet.author}/>
        <Time timestamp={tweet.timestamp}/>
        <Message message={tweet.message}/>

        <div className='buttons'>
          <ReplyButton />
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({hash}) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      className='avatar'
      src= {url}
      alt='avatar'
    />
  );
}

function Message({message}) {
  return (
    <div
      className='message'
    >
      {message}
    </div>
  );
}

function NameWithHandle({author}) {
  return (
    <span
      className='name-with-handle'
    >
      <span className='name'>{author.name}</span>
      <span className='handle'>{'@'+author.handle}</span>
    </span>
  );
}

const Time = ({timestamp}) => {
  const timestring = moment(timestamp).fromNow();
  return (<span className='time'>{timestring}</span>);
};


const ReplyButton = () => (
  <span className='reply-button'>
    <i className='fa fa-reply' />
  </span>
);

function RetweetCount({count}) {
  if (count > 0) {
    return (
      <span className='retweet-count'>{count}</span>
    );
  } else {
    return null;
  }
}

const RetweetButton =({count}) => (
  <span className='retweet-button'>
    <i className='fa fa-retweet'/>
    <RetweetCount count={count} />
  </span>
);

const LikeButton = ({count}) => (
  <span className='like-button'>
    <i className='fa fa-heart'/>
    {count > 0 && <span className='like-count'>{count}</span>}
  </span>
);

const MoreOptionsButton = () => (
  <span className='more-options-button'>
    <i className='fa fa-ellipsis-h' />
  </span>
);

ReactDOM.render(<Tweet tweet={testTweet}/>, document.getElementById('root'));
