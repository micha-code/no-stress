import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  Viewer,
  Entity,
  BillboardCollection,
  Billboard,
  ImageryLayer,
} from 'resium';
import { Color, HorizontalOrigin, Ion, Math, VerticalOrigin } from 'cesium';
import { Cartesian3, createWorldTerrain } from 'cesium';
import { countries } from '../Data/countries.js';
import { ArcGisMapServerImageryProvider } from 'cesium';
import database from '../Database/Database.js';

const Globe = ({ country, selectedPoint, category, setSelectedPoint }) => {
  const [billboards, setBillboards] = useState(null);

  Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YzJhMjU1YS0zMDY5LTRkN2QtOTMzMS1lY2FkZWYwYTUwYzkiLCJpZCI6Mzc3NTksImlhdCI6MTYwNTU1MjQ0OX0.bT7I-PurpKWvzE-xack9rB9uFLdEVameSvWT6v159WQ';

  const terrainProvider = useMemo(() => createWorldTerrain(), []);

  const imageryProvider = useMemo(
    () =>
      new ArcGisMapServerImageryProvider({
        url:
          '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer',
      }),
    [],
  );

  const viewer = useRef(null);

  const flyToInclined = (longitude, latitude, distance, angle) => {
    const earthRotate = 6.5;
    const positionCam = Cartesian3.fromDegrees(
      longitude,
      latitude - earthRotate,
      distance * 1000,
    );
    viewer.current.cesiumElement.camera.flyTo({
      destination: positionCam,
      orientation: {
        heading: Math.toRadians(0),
        pitch: Math.toRadians(-angle),
        roll: Math.toRadians(0),
      },
    });
  };

  // change of country
  useEffect(() => {
    if (viewer.current) {
      viewer.current.cesiumElement.scene.screenSpaceCameraController.enableZoom = false;
      const currentCountry = countries.find((item) => {
        return country === item.country;
      });
      if (currentCountry) {
        flyToInclined(
          currentCountry.longitude,
          currentCountry.latitude,
          600.0,
          35.0,
        );
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
      flyToInclined(
        selectedPoint.longitude,
        selectedPoint.latitude,
        600.0,
        35.0,
      );
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
