
import React from 'react'

import Comment from './Comment';

const CommentList = ({comments}) => {
  return  (comments.map((comment, index) => (
            <div key={index} className=''>
            <Comment data={comment}/>
            <div className='pl-5'>
            <CommentList comments={comment.replies}/>
            </div>
            </div>
            )  ))
}

export default CommentList;