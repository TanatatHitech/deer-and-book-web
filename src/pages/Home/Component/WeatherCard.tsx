import React from 'react';

interface WeatherCardProps {
    temperature: number;
    date: string;
    weather: string;
    humidity?: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, weather, humidity, date }) => {
    const getWeatherImage = (weather: string) => {
        switch (weather.toLowerCase()) {
            case 'sun':
                return '/assets/crop/weather/sun.png';
            case 'cloudy':
                return '/assets/crop/weather/cloudy.png';
            // Add more cases as needed
            default:
                return '/assets/crop/weather/sun.png';
        }
    };

    return (
        <div className="bg-white flex flex-col items-center justify-center p-4 rounded-xl text-center">
            <h2 className="font-bold mb-2 text-sm">{date}</h2>
            <div className="h-12 w-auto items-center flex">
                <img src={getWeatherImage(weather)} alt="weather" className="mb-2" />
            </div>
            <p className="text-sm">
                {temperature}°C/<span className="text-gray-300">{humidity}%</span>
            </p>
        </div>
    );
};

export default WeatherCard;
