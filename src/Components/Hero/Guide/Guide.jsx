import React from 'react';
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Guide.style.css';

const Guide = () => {
  return (
    <div className='guide-wrapper' id='guide'>
      <div className='guide-title'>
        <h1>3 Steps Using Guide</h1>
      </div>
      <VerticalTimeline lineColor='var(--darkblue-color)' className='time-line'>
        <VerticalTimelineElement
        className='time-line-el'
        contentStyle={{ background: 'var(--lightblue-color)', color: 'white' }}
        contentArrowStyle={{ borderRight: '7px solid var(--lightblue-color)' }}
        iconStyle={{ background: 'var(--darkblue-color)', color: 'var(--darkblue-color)' }}>
          <img className='step-img' src='https://cdn.dribbble.com/users/458522/screenshots/14324329/media/aede197c4afe820c2e5d93b9f7a8fef3.png?compress=1&resize=1200x900&vertical=top' alt='step1' />
          <p>Search gas station near from your location by using location service or search bar.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='time-line-el'
        contentStyle={{ background: 'var(--lightblue-color)', color: 'white' }}
        contentArrowStyle={{ borderRight: '7px solid var(--lightblue-color)' }}
        iconStyle={{ background: 'var(--darkblue-color)', color: 'var(--darkblue-color)' }}>
          <img className='step-img' src='https://cdn.dribbble.com/users/458522/screenshots/14324329/media/aede197c4afe820c2e5d93b9f7a8fef3.png?compress=1&resize=1200x900&vertical=top' alt='step1' />
          <p>You can sort gas station by low prices to high prices.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='time-line-el'
        contentStyle={{ background: 'var(--lightblue-color)', color: 'white' }}
        contentArrowStyle={{ borderRight: '7px solid var(--lightblue-color)' }}
        iconStyle={{ background: 'var(--darkblue-color)', color: 'var(--darkblue-color)' }}>
          <img className='step-img' src='https://cdn.dribbble.com/users/458522/screenshots/14324329/media/aede197c4afe820c2e5d93b9f7a8fef3.png?compress=1&resize=1200x900&vertical=top' alt='step1' />
          <p>Click gas station that you want to go, and use google map to get there.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <Link to='/search'>
        <button>Start Now</button>
      </Link>
    </div>
  )
}

export default Guide