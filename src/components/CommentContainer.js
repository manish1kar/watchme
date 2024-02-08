import React from 'react'
import CommentList from './CommentList';

const commentData = [
    {
        name : "Manish Wankar",
        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies : [
        ]
    },
    {
        name : "Manish Wankar",
        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies : [
            {
                name : "Manish Wankar",
                text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                replies : [
                    {
                        name : "Manish Wankar",
                        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                        replies : [
                            {
                                name : "Manish Wankar",
                                text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                                replies : [
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name : "Manish Wankar",
        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies : [

        ]
    },
    {
        name : "Manish Wankar",
        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies : [

        ]
    },
    {
        name : "Manish Wankar",
        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies : [
            {
                name : "Manish Wankar",
                text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                replies : [

                ]
            },
        ]
    },
    {
        name : "Manish Wankar",
        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies : [
            {
                name : "Manish Wankar",
                text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                replies : [
                    {
                        name : "Manish Wankar",
                        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                        replies : [

                        ]
                    },
                ]
            },
        ]
    },
    {
        name : "Manish Wankar",
        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies : [

        ]
    },
    {
        name : "Manish Wankar",
        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies : [

        ]
    },
];

const CommentContainer = () => {
  return (
    <div
    className='py-2 pl-2 my-5'>
        <div className=''>
            <h1 className='font-bold  text-xl px-2'>Comments : </h1>
            <CommentList comments={commentData}/>
        </div>
    </div>
  )
}

export default CommentContainer;