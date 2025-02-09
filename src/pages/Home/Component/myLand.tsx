import { FC } from 'react';
import IconRedPin from '@/components/Icon/Crop/IconRedPin';
import IconCompass from '@/components/Icon/Crop/IconCompass';

interface MyLandProps {
    fieldName: string;
    cropName?: string;
    location: string;
    latitude: number;
    longitude: number;
}

const MyLand: FC<MyLandProps> = ({ fieldName, cropName, location, latitude, longitude }) => {
    return (
        <div className="border p-5 rounded-lg transition-all">
            <div className="flex flex-row justify-between items-center mb-2">
                <div className="flex">
                    <div className="text-crop-primary font-bold text-lg">{fieldName}</div>
                </div>
                {cropName && (
                    <div className="flex flex-row items-center gap-3 bg-yellow-100 rounded-l-full p-1 border-[0.5px] border-yellow-200">
                        <img src="/assets/crop/icon/corn.png" className="w-5 h-5" />
                        <span className="text-black">{cropName}</span>
                    </div>
                )}
            </div>
            <hr />
            <div className="flex flex-row gap-2 mt-2 mb-3 items-center">
                <IconRedPin className="w-6 h-6 " />
                <span className="text-black">{location}</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <IconCompass className="w-6 h-6" />
                <span className="text-gray-500">
                    {latitude?.toFixed(5)}, {longitude?.toFixed(5)}
                </span>
            </div>
        </div>
    );
};

export default MyLand;
