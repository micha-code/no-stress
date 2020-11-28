import React, { useState, useRef, useEffect } from 'react';
import {
  Viewer,
  Entity,
  PointGraphics,
  EntityDescription,
  BillboardCollection,
  Billboard,
} from 'resium';
import { Color, HorizontalOrigin, Ion, VerticalOrigin } from 'cesium';
import { Cartesian3, createWorldTerrain } from 'cesium';

function Home() {
  Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YzJhMjU1YS0zMDY5LTRkN2QtOTMzMS1lY2FkZWYwYTUwYzkiLCJpZCI6Mzc3NTksImlhdCI6MTYwNTU1MjQ0OX0.bT7I-PurpKWvzE-xack9rB9uFLdEVameSvWT6v159WQ';

  const terrainProvider = createWorldTerrain();
  const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);

  const viewer = useRef(null);
  return (
    <Viewer
      ref={viewer}
      Scene
      backgroundColor={Color.CORNFLOWERBLUE}
      terrainProvider={terrainProvider}
    >
      <Entity position={position} name="Tokyo">
        <BillboardCollection>
          <Billboard
            position={position}
            image="/images/pin-restaurant.svg"
            scale={1.0}
            horizontalOrigin={HorizontalOrigin.CENTER}
            verticalOrigin={VerticalOrigin.BOTTOM}
          ></Billboard>
        </BillboardCollection>
      </Entity>
    </Viewer>
  );
}
export default Home;

// import React from 'react';
// import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
// import { Cartesian3, createWorldTerrain } from 'cesium';

// <Viewer ref={viewer} Scene backgroundColor={Color.CORNFLOWERBLUE} />

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

/* <Entity position={position} name="Tokyo">
          <PointGraphics pixelSize={10} />
          <EntityDescription>
            <h1>Hello, world.</h1>
            <p>JSX is available here!</p>
         </EntityDescription>
         </Entity> 

rotation={0.0}
sizeInMeters={false}       
         
         */

// export default App;
