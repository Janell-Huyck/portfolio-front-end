import React from 'react';
import './home.page.scss';
import { useViewport } from '../../contexts/viewportProvider';
import MobileHomePage from './mobileHomePage';
import DesktopHomePage from './desktopHomePage';


function Home() {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileHomePage /> : <DesktopHomePage />;
}

export default Home;
