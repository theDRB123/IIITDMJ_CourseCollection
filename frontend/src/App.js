
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/home")
      .then((res) => res.text())
      .then((data) => setData(data))
  }, [])

  return (
    <div>
        {data}
    </div>
  );
}

export default App;
