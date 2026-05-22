import React, { useRef, useState } from "react";

function App() {
  const totalItems = 1000;
  const itemHeight = 50;
  const visibleItemsCount = 10;

  const scrollRef = useRef(null);

  const [startIndex, setStartIndex] = useState(0);

  // Create items
  const items = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index}`
  );

  // Handle scroll
  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;

    const newStartIndex = Math.floor(scrollTop / itemHeight);

    setStartIndex(newStartIndex);
  };

  // Visible items
  const visibleItems = items.slice(
    startIndex,
    startIndex + visibleItemsCount
  );

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      style={{
        height: "500px",
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: `${totalItems * itemHeight}px`,
          position: "relative",
        }}
      >
        {visibleItems.map((item, index) => {
          const actualIndex = startIndex + index;

          return (
            <p
              key={actualIndex}
              style={{
                height: `${itemHeight}px`,
                margin: 0,
                position: "absolute",
                top: `${actualIndex * itemHeight}px`,
                width: "100%",
              }}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;