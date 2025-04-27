import { Fragment, type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useViewModel from './ViewModel';
import { toggleLanguage, getCurrentLanguage } from '../../utils/languageToggle';
import IconInfoTriangle from '@/components/Icon/IconInfoTriangle';
import IconMenuContacts from '@/components/Icon/Menu/IconMenuContacts';
import IconMenuMailbox from '@/components/Icon/Menu/IconMenuMailbox';
import IconAt from '@/components/Icon/IconAt';
import ContactModal from '@/components/ContactModal';

type CategoryItem = {
    id: number | string;
    name: string;
    icon: string;
};

type CategoriesSectionProps = {
    categories: CategoryItem[];
    selectedCategory: number | string | null;
    onCategoryChange: (categoryId: number | string | null) => void;
    searchTerm: string;
    onSearchChange: (term: string) => void;
};

const CategoriesSection: FC<CategoriesSectionProps> = ({ categories, selectedCategory, onCategoryChange, searchTerm, onSearchChange }) => {
    const { t } = useTranslation();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <div className="flex flex-col h-72 bg-gradient-to-b from-[#B347FD] to-[#6789EE] rounded-b-3xl">
            <div className="flex items-center justify-between h-20 px-6">
                <div className="flex items-center gap-2">
                    <IconAt className="text-white w-6 h-6" onClick={() => setIsContactModalOpen(true)} />
                </div>
                <div className="flex h-12">
                    <img src="/assets/images/icon/logo-white.png" alt={t('home.logo')} className="h-20 w-auto" />
                </div>
                <button onClick={toggleLanguage} className="bg-white text-[#6789EE] px-3 py-1 rounded-full font-bold text-sm shadow-md" title={t('home.switchLanguage')}>
                    {getCurrentLanguage() === 'th' ? 'EN' : 'TH'}
                </button>
            </div>

            {/* Contact Modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

            <div className="flex flex-col">
                <div className="px-6 font-bold text-white text-sm my-1">{t('home.categories')}</div>
                <div className="flex flex-row justify-between overflow-auto no-scrollbar w-full gap-0">
                    {categories.map((icon, index) => (
                        <div key={index} className="flex flex-col items-center py-2" style={{ minWidth: '80px' }} onClick={() => onCategoryChange(icon.id === selectedCategory ? null : icon.id)}>
                            <div
                                style={{ height: 47, width: 47 }}
                                className={
                                    icon.id === selectedCategory
                                        ? 'rounded-full bg-dark-light shadow flex items-center justify-center border-2 border-pink-300'
                                        : 'rounded-full bg-dark-light shadow flex items-center justify-center'
                                }
                            >
                                <img style={{ height: 30, width: 30 }} src={icon.icon} alt={icon.name}></img>
                            </div>
                            <div className={icon.id === selectedCategory ? 'text-[11px] text-white mt-1 truncate font-extrabold' : 'text-[11px] text-white mt-1 truncate font-semibold'}>
                                {icon.name}
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ width: '80%' }} className="relative self-center my-2">
                    <input
                        type="text"
                        placeholder={t('home.searchByName')}
                        className="w-full px-4 py-2 text-white placeholder-white bg-transparent border border-white rounded-full outline-none focus:ring-2 focus:ring-white"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full">
                        <img style={{ height: 20, width: 20 }} src="/assets/images/icon/search-icon.png" alt={t('home.searchIcon')}></img>
                    </button>
                </div>
            </div>
        </div>
    );
};

const HomeView: FC = () => {
    const { categories, navigateTo, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, filteredBooks } = useViewModel();
    const { t } = useTranslation();

    const handleCategoryChange = (categoryId: string | number | null) => {
        if (categoryId === 1) {
            setSelectedCategory(1);
        } else {
            setSelectedCategory(categoryId as any);
        }
    };

    return (
        <Fragment>
            <div className="h-screen flex flex-col lg:hidden">
                <CategoriesSection categories={categories} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                <div className="w-full h-full overflow-y-auto p-6 sm:p-10 bg-white pb-24">
                    {filteredBooks.length === 0 ? (
                        <p className="text-center w-full">{t('home.noBooks')}</p>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mx-auto max-w-5xl">
                            {filteredBooks.map((book) => (
                                <div key={book.id} className="flex flex-col items-center p-3 bg rounded-lg h-70" onClick={() => navigateTo(book.id)}>
                                    <img loading="lazy" src={`https://deerandbook.com/${book.cover_image}`} alt={book.book_category_name} className=" w-full h-40 object-contain mb-2" />
                                    <hr className="w-full border-[1.5px] border-gray-400 mt-0 mb-2" />
                                    <p className="text-center font-semibold line-clamp-2 h-10">{book.book_name}</p>
                                    <p className="text-center text-xs line-clamp-1 h-5 mt-1 text-[#9c60f5]">By : {book.book_author_name}</p>
                                    <hr className="w-full border-[1.5px] border-gray-400 mt-1 mb-0" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="lg:block hidden">
                <div className="flex flex-row h-screen mx-auto w-full">
                    <p className="text-crop-primary">ไม่สามารถแสดงผลได้</p>
                </div>
            </div>
        </Fragment>
    );
};

export default HomeView;
