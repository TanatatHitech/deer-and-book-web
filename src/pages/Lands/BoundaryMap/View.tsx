import { type FC, Fragment } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon, latLng } from 'leaflet';
import { Polygon } from 'react-leaflet';

import useViewModel from './ViewModel';

const LandBoundaryMapView: FC = () => {
    const { data } = useViewModel();

    return (
        <Fragment>
            <div className="pb-10 lg:pb-0">
                <MapContainer
                    center={{
                        lat: data.latitude ?? 0,
                        lng: data.longitude ?? 0,
                    }}
                    zoom={13}
                    scrollWheelZoom={true}
                    dragging
                    className="relative"
                >
                    <TileLayer attribution="@Copyright 2024 DOAE" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {/* <Marker
                        draggable={false}
                        position={{
                            lat: data.latitude ?? 0,
                            lng: data.longitude ?? 0,
                        }}
                        icon={
                            new Icon({
                                iconUrl: '/assets/crop/icon/red-location-marker.svg',
                                iconSize: [40, 40],
                            })
                        }
                    /> */}
                    <Polygon pathOptions={{ color: 'red' }} positions={data.boundary} />
                </MapContainer>
            </div>
        </Fragment>
    );
};

export default LandBoundaryMapView;
