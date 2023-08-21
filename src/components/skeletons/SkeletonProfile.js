import React from 'react'
import SkeletonElements from './SkeletonElements'

const SkeletonProfile = () => {
    return (
    <div className='skeleton-wrapper'>
        <div className="skeleton-article1">
            <SkeletonElements type='main-profile-pic'/>
        </div>
            <SkeletonElements type='main-profile'/>
            <SkeletonElements type='title'/>
            <SkeletonElements type='text'/>
            <SkeletonElements type='text'/>
            <SkeletonElements type='text'/>
            <SkeletonElements type='text'/>
        <div className='social-skeleton'>
            <SkeletonElements type='title'/>
            <div>
            <SkeletonElements type='social-tags-skeleton'/>
            <SkeletonElements type='social-tags-skeleton'/>
            <SkeletonElements type='social-tags-skeleton'/>
            </div>
        </div>
    </div>
      )
}

export default SkeletonProfile
