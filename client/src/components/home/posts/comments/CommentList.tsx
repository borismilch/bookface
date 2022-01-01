import React from 'react'

import Comment from './Comment'

import { useQuery} from '@apollo/react-hooks'
import { GET_COMMENTS } from '../../../../graphql/queries'
import { IComment } from '../../../../models/models'

import { useState } from 'react'

const CommentList: React.FC<{postId: string, showAll?: boolean }> = ({postId, showAll}) => {

  const [isShown, setIsShown] = useState<boolean>(false)

  const {data: comments, loading} = useQuery<{getComments: IComment[]}>(GET_COMMENTS, { variables: { postId } })

  const toggleComments = () => {
    setIsShown(prev => !prev)
  }

  if (loading) { return ( <p>Loading...</p> ) }

  const filteredComments: IComment[] = isShown ? comments!.getComments : comments!.getComments.slice(0, 1)

  return (
    <div className='flex flex-col gap-2 p-3 px-4 md:px-6'>

     {
      (showAll ?  comments!.getComments :  filteredComments).map(comment => (
         <Comment key={comment._id} comment={comment} />
       ))
     }
     
    { !showAll && filteredComments.length > 0 && <p onClick={toggleComments} className='font-semibold flex text-gray-800 text-sm cursor-pointer hover:underline'>{ isShown ? 'Hide comments' :  'Show coments (' + (comments!.getComments.length - 1) + ')' }</p>}
    </div>
  )
}

export default CommentList
