import React, { useRef, useState } from "react";

function App() {
  const totalItems = 1000;
  const itemHeight = 50;
  const containerHeight = 500;

  const scrollRef = useRef(null);

  const [scrollTop, setScrollTop] = useState(0);

  // Total visible items
  const visibleCount = Math.ceil(containerHeight / itemHeight);

  // Start and End indexes
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = startIndex + visibleCount + 2;

  // Large list
  const items = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`
  );

  // Scroll handler
  const handleScroll = () => {
    setScrollTop(scrollRef.current.scrollTop);
  };

  // Visible items only
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      style={{
        height: "500px",
        overflowY: "auto",
        border: "2px solid black",
        position: "relative",
      }}
    >
      {/* Total height */}
      <div
        style={{
          height: `${totalItems * itemHeight}px`,
          position: "relative",
        }}
      >
        {visibleItems.map((item, index) => {
          const actualIndex = startIndex + index;

          return (
            <div
              key={actualIndex}
              style={{
                height: `${itemHeight}px`,
                position: "absolute",
                top: `${actualIndex * itemHeight}px`,
                left: 0,
                right: 0,
                borderBottom: "1px solid gray",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
                background: "white",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;