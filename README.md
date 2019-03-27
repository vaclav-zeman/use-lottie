# use-lottie
Simple React hook for lottie-web

Usage:
```
import animationData from 'confetti.json';

const AnimatedBox = () => {
  const [instance, containerRef] = useLottie({ animationData, autoplay: false });

  return (
    <div 
      onClick={() => instance.play()} 
      ref={containerRef}
    >
       Hi there!
    </div>
  );
} 
```
