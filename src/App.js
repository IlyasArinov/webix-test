import React from 'react';
import ListView from "./Components/ListView";
import TreeView from "./Components/TreeView";
import TimeLineView from "./Components/TimeLineView";
import ChartView from "./Components/ChartView";

function App() {
  return (
    <div className="App">
      <ListView />
      <TreeView />
      <TimeLineView />
      <ChartView />
    </div>
  );
}

export default App;
