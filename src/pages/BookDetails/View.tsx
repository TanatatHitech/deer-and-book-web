import { Fragment, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import useViewModel from './ViewModel';
import { useNavigate } from 'react-router-dom';
import RatingModal from '../../components/RatingModal';
import { toggleLanguage, getCurrentLanguage } from '../../utils/languageToggle';
import IconAt from '@/components/Icon/IconAt';
import ContactModal from '@/components/ContactModal';
import { useState } from 'react';

const BookDetailsView: FC = () => {
    const { t } = useTranslation();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const {
        id,
        bookDetails,
        handleOpenPDF,
        handleOpenVideo,
        // Rating modal
        showRatingModal,
        openRatingModal,
        closeRatingModal,
        reviewData,
        handleRatingChange,
        handleCommentChange,
        handleSubmitReview,
        isSubmitting,
        submitError,
        submitSuccess,
    } = useViewModel();
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/home');
    };
    const navigateToShare = (slug: string) => {
        window.open(`https://deerandbook.com/book/${slug}`, '_blank');
    };

    const LoadingAnimation: FC = () => <div className="text-white text-lg font-semibold animate-pulse">Loading...</div>;

    if (!bookDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#B347FD] to-[#6789EE]">
                <LoadingAnimation />
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    return (
        <Fragment>
            <div className="min-h-screen flex flex-col lg:hidden bg-gradient-to-b from-[#B347FD] to-[#6789EE] items-center justify-center overflow-scroll">
                {/* Header */}
                <div className="w-full p-5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img
                            style={{ height: 20, width: 20 }}
                            className="cursor-pointer"
                            src="/assets/images/icon/close-button-icon.png"
                            alt={t('bookDetail.closeButton')}
                            onClick={() => navigateToHome()}
                        ></img>
                    </div>
                    <h2 className="text-white font-semibold text-lg">{t('bookDetail.title', 'Book Detail')}</h2>
                    <div className="flex items-center gap-3">
                        <img
                            style={{ height: 20, width: 20 }}
                            className="cursor-pointer"
                            src="/assets/images/icon/share-icon.png"
                            alt={t('bookDetail.shareButton')}
                            onClick={() => navigateToShare(bookDetails.slug)}
                        ></img>
                    </div>
                </div>
                {/* Modal Container */}
                <div className="bg-white w-auto mx-4 max-w-md rounded-2xl mb-5">
                    {/* Content */}
                    <div className="flex justify-end pt-2 pr-2">
                        <button onClick={toggleLanguage} className="bg-white text-[#6789EE]  px-2 py-1 rounded-full font-bold text-xs shadow-md" title={t('home.switchLanguage')}>
                            {getCurrentLanguage() === 'th' ? 'EN' : 'TH'}
                        </button>
                    </div>
                    <div className="p-6">
                        {/* Book Image */}
                        <div className="flex justify-center">
                            <img src={`https://deerandbook.com/${bookDetails.cover_image}`} alt={t('bookDetail.coverAlt')} className="w-40 h-56 object-cover rounded-lg" />
                        </div>
                        {/* Rating */}
                        <div className="flex flex-col justify-center items-center mt-3 gap-2">
                            {/* Current Rating Display */}
                            <div className="flex items-center">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <svg key={index} className={`w-5 h-5 ${index <= Math.round(bookDetails.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="ml-2 text-sm font-medium text-gray-600">{bookDetails.rating > 0 ? bookDetails.rating.toFixed(1) : '0.0'}</span>
                            </div>
                            {/* Divider
                            <div className="h-5 border-l border-gray-300"></div> */}
                            {/* Rate Book Button */}
                            <div
                                className="flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-[#B347FD] to-[#7B77F2] font-semibold cursor-pointer rounded-full px-2 py-1 w-32"
                                onClick={openRatingModal}
                            >
                                <svg className={`w-5 h-5 text-white`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span>{t('bookDetail.rateBook')}</span>
                            </div>
                        </div>
                        {/* Title and Author */}
                        <h3 className="text-center text-lg font-bold mt-4 bg-gradient-to-l from-[#7B77F2] to-[#B446FF] bg-clip-text text-transparent">{bookDetails.book_name}</h3>
                        <p className="text-center font-semi-bold text-[#B1B1B1]">
                            {t('bookDetail.authorBy')} {bookDetails.author_name}
                        </p>
                        {/* Buttons */}
                        <div className="flex justify-between items-center mt-2 mb-4">
                            {/* Watch Video */}
                            {bookDetails.full_video_path && (
                                <button
                                    className="flex items-center space-x-2 text-white font-semibold bg-gradient-to-r from-[#B347FD] to-[#7B77F2] border  rounded-full px-4 py-2 shadow-none"
                                    onClick={() => handleOpenVideo()}
                                >
                                    <img style={{ height: 20, width: 20 }} className="cursor-pointer" src="/assets/images/icon/play-button-icon.png" alt={t('bookDetail.playButton')}></img>
                                    <span>{t('bookDetail.watchVideo')}</span>
                                </button>
                            )}
                            {/* Read Button */}
                            <button
                                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-[#B347FD] to-[#7B77F2] text-white font-bold rounded-full shadow-lg"
                                onClick={() => handleOpenPDF()}
                            >
                                <img style={{ height: 20, width: 20 }} className="cursor-pointer" src="/assets/images/icon/read.png" alt={t('bookDetail.playButton')}></img>
                                <span>{t('bookDetail.read')}</span>
                            </button>
                        </div>
                        {/* Book Overview */}
                        <h4 className="text-black font-bold mt-4">{t('bookDetail.overview')}</h4> {/* Category Tag */}
                        <div className="flex justify-start mt-2">
                            <span
                                className="px-4 py-1 text-xs font-semibold text-[#864CFC] bg-[#E5D4FD] rounded-md"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(123, 119, 242, 0.3) 0%, rgba(126, 116, 242, 0.3) 48.99%, rgba(181, 69, 255, 0.3) 100%)',
                                }}
                            >
                                # {bookDetails.book_category_name}
                            </span>
                        </div>
                        <p className="text-[#979797] text-sm mt-2 font-semibold">{bookDetails.description || t('bookDetail.noDescription')}</p>
                        {/* Book Info */}
                        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                            <div>
                                <p className="font-semibold bg-gradient-to-l from-[#AB4EFD] to-[#7B77F2] bg-clip-text text-transparent">{t('bookDetail.publisher')}</p>
                                <p className="text-[#979797] font-medium">{bookDetails.author_name || t('bookDetail.noAuthor')}</p>
                            </div>
                            {bookDetails.model_name && (
                                <div>
                                    <p className="font-semibold bg-gradient-to-l from-[#AB4EFD] to-[#7B77F2] bg-clip-text text-transparent">{t('bookDetail.modelName')}</p>
                                    <p className="text-[#979797] font-medium">{bookDetails.model_name || t('bookDetail.noModel')}</p>
                                </div>
                            )}
                            <div>
                                <p className="font-semibold bg-gradient-to-l from-[#AB4EFD] to-[#7B77F2] bg-clip-text text-transparent">{t('bookDetail.page')}</p>
                                <p className="text-[#979797] font-medium">{bookDetails.pages || t('bookDetail.noPage')}</p>
                            </div>
                            <div>
                                <p className="font-semibold bg-gradient-to-l from-[#AB4EFD] to-[#7B77F2] bg-clip-text text-transparent">{t('bookDetail.update')}</p>
                                <p className="text-[#979797] font-medium">{formatDate(bookDetails.update_date) || t('bookDetail.noInfo')}</p>
                            </div>
                            <div>
                                <p className="font-semibold bg-gradient-to-l from-[#AB4EFD] to-[#7B77F2] bg-clip-text text-transparent">{t('bookDetail.releaseDate')}</p>
                                <p className="text-[#979797] font-medium">{formatDate(bookDetails.release_date) || t('bookDetail.noInfo')}</p>
                            </div>
                            <div>
                                <p className="font-semibold bg-gradient-to-l from-[#AB4EFD] to-[#7B77F2] bg-clip-text text-transparent">{t('bookDetail.fileSize')}</p>
                                <p className="text-[#979797] font-medium">{bookDetails.file_size || t('bookDetail.noInfo')} MB.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

            {/* Rating Modal */}
            <RatingModal
                showRatingModal={showRatingModal}
                closeRatingModal={closeRatingModal}
                reviewData={reviewData}
                handleRatingChange={handleRatingChange}
                handleCommentChange={handleCommentChange}
                handleSubmitReview={handleSubmitReview}
                isSubmitting={isSubmitting}
                submitError={submitError}
                submitSuccess={submitSuccess}
            />
        </Fragment>
    );
};

export default BookDetailsView;
