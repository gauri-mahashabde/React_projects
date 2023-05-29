import React from 'react'
import './App.css'
import Coursecard from './CourseCard/Coursecard'
import Coursedetails from './CourseDetails/Coursedetails'
import Featuredcourses from './FeaturedCourses/Featuredcourses'
import Recentlyadded from './RecentlyAddedCourses/Recentlyadded'
import Toprated from './TopRatedCourses/Toprated'

export default function Home() {
  return (
    <div className='App'>
    <Coursecard/>
    <Coursedetails/>
    <Featuredcourses/>
    <Recentlyadded/>
    <Toprated/>
    
    </div>
  )
}
