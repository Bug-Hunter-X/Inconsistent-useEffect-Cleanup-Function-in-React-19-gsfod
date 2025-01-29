```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false; // Ensure cleanup only runs if component is still mounted
      console.log('Cleanup function ran');
    };
  }, []);

  useEffect(() => {
    if(isMountedRef.current){
      console.log('Effect ran with count:', count);
    }
  }, [count]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```