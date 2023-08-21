import React from 'react'
import SkeletonElements from './SkeletonElements'

const SkeletonArticle = () => {
  return (
    <div className='skeleton-wrapper'>
      <div className="skeleton-article1">
        <SkeletonElements type='avatar' />
        <SkeletonElements type='title' />
        </div>
        <SkeletonElements type='thumbnail'/>
        <SkeletonElements type='title'/>
        <SkeletonElements type='text'/>
        <SkeletonElements type='text'/>
        <SkeletonElements type='text'/>
        <SkeletonElements type='text'/>
    </div>
  )
}

export default SkeletonArticle
