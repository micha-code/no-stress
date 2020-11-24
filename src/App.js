import React, { useState, useRef, useEffect } from 'react';
import { Viewer, Entity } from 'resium';

function App() {
  const viewer = useRef(null);
  return <Viewer ref={viewer} />;
}
export default App;

// import React from 'react';
// import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
// import { Cartesian3, createWorldTerrain } from 'cesium';

// const terrainProvider = createWorldTerrain();
// const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);

// const App = () => (
//   <Viewer full terrainProvider={terrainProvider}>
//     <Entity position={position} name="Tokyo">
//       <PointGraphics pixelSize={10} />
//       <EntityDescription>
//         <h1>Hello, world.</h1>
//         <p>JSX is available here!</p>
//       </EntityDescription>
//     </Entity>
//   </Viewer>
// );

// export default App;
