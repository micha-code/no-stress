import React, { useEffect, useRef } from 'react';
import { Viewer, Entity, BillboardCollection, Billboard } from 'resium';
import { Color, HorizontalOrigin, Ion, VerticalOrigin } from 'cesium';
import { Cartesian3, createWorldTerrain } from 'cesium';
import { countries } from '../Data/countries.js';
import { data } from '../Data/data.js';

const Globe = ({ country }) => {
  Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YzJhMjU1YS0zMDY5LTRkN2QtOTMzMS1lY2FkZWYwYTUwYzkiLCJpZCI6Mzc3NTksImlhdCI6MTYwNTU1MjQ0OX0.bT7I-PurpKWvzE-xack9rB9uFLdEVameSvWT6v159WQ';

  const terrainProvider = createWorldTerrain();

  const viewer = useRef(null);

  useEffect(() => {
    if (viewer.current) {
      viewer.current.cesiumElement.scene.screenSpaceCameraController.enableZoom = false;
      const currentCountry = countries.find((item) => {
        return country === item.country;
      });
      if (currentCountry) {
        const position = Cartesian3.fromDegrees(
          currentCountry.longitude,
          currentCountry.latitude,
          600000,
        );

        console.log(viewer.current);
        viewer.current.cesiumElement.camera.flyTo({ destination: position });
      }
    }
  }, [country, viewer]);

  useEffect(() => {
    const pageStep = 25;
    const cesiumEl = viewer.current && viewer.current.cesiumElement;
    const listener = function (event) {
      if (event.deltaY < 0) {
        window.scroll(0, window.pageYOffset - pageStep);
      } else {
        window.scroll(0, window.pageYOffset + pageStep);
      }
    };
    if (cesiumEl) {
      cesiumEl._element.addEventListener('wheel', listener);
    }
    return function cleanup() {
      if (cesiumEl) {
        cesiumEl._element.removeEventListener('wheel', listener);
      }
    };
  }, [viewer]);

  return (
    <Viewer
      id="map"
      ref={viewer}
      Scene
      backgroundColor={Color.CORNFLOWERBLUE}
      terrainProvider={terrainProvider}
    >
      <Entity>
        <BillboardCollection>
          {data.map((item) => (
            <Billboard
              position={Cartesian3.fromDegrees(
                item.longitude,
                item.latitude,
                100,
              )}
              image={`images/pin-${item.category}.svg`}
              scale={1.0}
              horizontalOrigin={HorizontalOrigin.CENTER}
              verticalOrigin={VerticalOrigin.BOTTOM}
            ></Billboard>
          ))}
        </BillboardCollection>
      </Entity>
    </Viewer>
  );
};

export default Globe;

/*
.filter((item) => item.country === country)
*/
