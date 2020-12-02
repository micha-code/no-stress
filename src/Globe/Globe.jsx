import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  Viewer,
  Entity,
  BillboardCollection,
  Billboard,
  ImageryLayer,
} from 'resium';
import { Color, HorizontalOrigin, Ion, VerticalOrigin } from 'cesium';
import { Cartesian3, createWorldTerrain } from 'cesium';
import { countries } from '../Data/countries.js';
import { ArcGisMapServerImageryProvider } from 'cesium';
import database from '../Database/Database.js';

const Globe = ({ country, selectedPoint, category, setSelectedPoint }) => {
  const [billboards, setBillboards] = useState(null);

  Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YzJhMjU1YS0zMDY5LTRkN2QtOTMzMS1lY2FkZWYwYTUwYzkiLCJpZCI6Mzc3NTksImlhdCI6MTYwNTU1MjQ0OX0.bT7I-PurpKWvzE-xack9rB9uFLdEVameSvWT6v159WQ';

  const terrainProvider = useMemo(() => createWorldTerrain(), []);

  const imageryProvider = new ArcGisMapServerImageryProvider({
    url:
      '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer',
  });

  const viewer = useRef(null);

  // change of country
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

  // hack na scrolling
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

  // change selected point
  useEffect(() => {
    if (selectedPoint) {
      viewer.current.cesiumElement.camera.flyTo({
        destination: Cartesian3.fromDegrees(
          selectedPoint.longitude,
          selectedPoint.latitude,
          150000,
        ),
      });
    }
  }, [viewer, selectedPoint]);

  // create and filter billboard
  useEffect(() => {
    database
      .collection('Places')
      .where('country', '==', country)
      .get()
      .then((querySnapshot) => {
        const places = [];
        querySnapshot.forEach((doc) => {
          places.push(doc.data());
        });
        const billboardList = places
          .filter((item) => {
            if (!country) {
              return true;
            }
            return item.country === country;
          })
          .filter((item) => {
            if (!category) {
              return true;
            }
            return item.category === category;
          })
          .map((item) => (
            <Billboard
              key={item.id}
              position={Cartesian3.fromDegrees(
                item.longitude,
                item.latitude,
                100,
              )}
              image={`images/pin-${item.category}.svg`}
              scale={0.5}
              horizontalOrigin={HorizontalOrigin.CENTER}
              verticalOrigin={VerticalOrigin.BOTTOM}
              onClick={() => {
                setSelectedPoint(item);
              }}
            ></Billboard>
          ));
        setBillboards(billboardList);
      });
  }, [country, category, setSelectedPoint]);

  return (
    <Viewer
      id="map"
      ref={viewer}
      Scene
      backgroundColor={Color.PINK}
      terrainProvider={terrainProvider}
      timeline={false}
      fullscreenButton={false}
      baseLayerPicker={false}
      homeButton={true}
      creditContainer={null}
      geocoder={false}
      animation={false}
      selectionIndicator={false}
      vrButton={false}
      infoBox={false}
    >
      <ImageryLayer imageryProvider={imageryProvider} />
      <Entity>
        <BillboardCollection>{billboards}</BillboardCollection>
      </Entity>
    </Viewer>
  );
};

export default Globe;

/*
.filter((item) => item.country === country)
*/
