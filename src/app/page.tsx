import React from 'react'
import Home from '@/app/pages/Home/page'
import Performance from '@/app/pages/Performance/page'
import Future from '@/app/pages/Future/page'
import FeaturesBento from '@/app/pages/FeaturesBento/Pege'
import Discover from '@/app/pages/Discover/page'

function page() {
  return (
    <>
    <Home/>
    <Future/>
    <Performance/>
    <FeaturesBento/>
    <Discover/>
    </>
  )
}

export default page