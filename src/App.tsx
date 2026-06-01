import { useLayoutEffect, useState, useCallback } from 'react';
import Home from './slides/home';
import Contact from './slides/contact';
import AboutMe from './slides/aboutMe';

function App() {
  const [viewportSize, setViewPortSize] = useState<number[]>([]);

  const updateViewportSize = useCallback(() => {
    const viewportWidth = window.innerWidth - 100;
    const viewportHeight = window.innerHeight;
    setViewPortSize([viewportWidth, viewportHeight]);
  }, []);

  useLayoutEffect(() => {
    updateViewportSize();
    window.addEventListener("resize", updateViewportSize);
    return () => {
      window.removeEventListener("resize", updateViewportSize);
    };
  }, [updateViewportSize]);

  return (
    <div className="App flex justify-center">
      <Home ViewportSize={viewportSize}/>
      <Contact ViewportSize={viewportSize} />
      <AboutMe ViewportSize={viewportSize}/>
    </div>
  );
}

export default App;