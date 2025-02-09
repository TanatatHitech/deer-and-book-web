import React from 'react';
import IconSearch from '@/components/Icon/IconSearch';

interface SearchProps {
    placeholder?: string;
    onSearch?: (value: string) => void;
    onSearchClick?: () => void;
    onClear?: () => void;
    isHeader?: boolean;
}

const Search: React.FC<SearchProps> = ({ placeholder = 'ค้นหาแปลงที่ดิน...', onSearch, onSearchClick, onClear, isHeader = false }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (onSearch) {
            onSearch(value);
        }
        if (value === '' && onClear) {
            onClear();
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && onSearchClick) {
            onSearchClick();
        }
    };

    return (
        <div className="flex flex-row justify-between items-center relative">
            <IconSearch className="absolute left-2 w-6 h-6 text-crop-primary" />
            <input
                type="text"
                placeholder={placeholder}
                className={`w-full pl-10 h-12
                ${isHeader ? ' border-b-[0.5px]  border-gray-200' : 'border border-gray-200 rounded-xl'}`}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button className="absolute btn bg-crop-quaternary text-white rounded-full right-2 px-8 py-2" onClick={onSearchClick}>
                ค้นหา
            </button>
        </div>
    );
};

export default Search;
