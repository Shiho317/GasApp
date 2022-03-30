import React from 'react';
import Guide from './Guide/Guide';
import HeroHead from './HeroHead/HeroHead';
import Panel from './Panel/Panel';

const Hero = () => {
  return (
    <React.Fragment>
      <HeroHead/>
      <Panel/>
      <Guide/>
    </React.Fragment>
  )
}

export default Hero