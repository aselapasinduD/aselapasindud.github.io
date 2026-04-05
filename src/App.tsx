import { useLayoutEffect, useState } from 'react';
import Home from './slides/home';
import Contact from './slides/contact';
import AboutMe from './slides/aboutMe';

function App() {
  const [viewportSize, setViewPortSize] = useState<number[]>([]);
  const [isResizeViewport, setIsResizeViwport] = useState<boolean>(false);
  
  const onResizeViewport = () => {
    isResizeViewport ? setIsResizeViwport(false) : setIsResizeViwport(true);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", onResizeViewport);

    const viewportWidth = window.innerWidth - 100;
    const viewportHeight = window.innerHeight;
    const getviewPortSize = [viewportWidth, viewportHeight];

    if (viewportSize[0] !== getviewPortSize[0]) setViewPortSize(getviewPortSize);

    return () => {
      window.removeEventListener("resize", onResizeViewport);
    }
  },[viewportSize, isResizeViewport, onResizeViewport]);

  return (
    <div className="App flex justify-center">
      <Home ViewportSize={viewportSize}/>
      <Contact ViewportSize={viewportSize} />
      <AboutMe ViewportSize={viewportSize}/>
    </div>
  );
}

export default App;
