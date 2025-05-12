import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBookStore } from '@/store/bookStore';

const ViewModel = () => {
    const { id } = useParams();
    const { getBookById, submitReview } = useBookStore();
    const [bookDetails, setBookDetails] = useState<any>(null);

    // Rating modal state
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [reviewData, setReviewData] = useState({
        bookId: '',
        comment: '',
        rating: 0,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        if (id) {
            getBookById(id).then((response) => {
                if (response.success) {
                    setBookDetails(response.data);
                    setReviewData((prev) => ({ ...prev, bookId: id }));
                }
            });
        }
    }, [id, getBookById]);

    const AppDeepLink = 'exp+deer-and-book-pdf-reader:expo-development-client?url=https%3A%2F%2Finjwrqs-liltanatat-8081.exp.direct';
    const fallbackUrl = '';

    const handleOpenPDF = () => {
        const link = document.createElement('a');
        link.href = `${AppDeepLink}&slug=${bookDetails.file_path}`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        console.log('link', link);
        // setTimeout(() => {
        //     window.open(fallbackUrl, '_blank');
        // }, 5000);
    };

    const handleOpenVideo = () => {
        const link = document.createElement('a');
        link.href = `${AppDeepLink}&video=${bookDetails.full_video_path}`;
        // link.href = `${AppDeepLink}&video=https://1drv.ms/v/c/0f29360961a2f400/UQQA9KJhCTYpIIAPzQMAAAAAAPvdGXStfBdjzT4`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        console.log('link', link);
        // setTimeout(() => {
        //     window.open(fallbackUrl, '_blank');
        // }, 5000);
    };

    // Rating modal handlers
    const openRatingModal = () => {
        setShowRatingModal(true);
    };

    const closeRatingModal = () => {
        setShowRatingModal(false);
        // Reset form
        setReviewData({
            bookId: id || '',
            comment: '',
            rating: 0,
        });
        setSubmitSuccess(false);
        setSubmitError(null);
    };

    const handleRatingChange = (newRating: number) => {
        setReviewData((prev) => ({ ...prev, rating: newRating }));
    };

    const handleCommentChange = (comment: string) => {
        setReviewData((prev) => ({ ...prev, comment }));
    };

    const handleSubmitReview = async () => {
        if (reviewData.rating === 0) {
            setSubmitError('Please select a rating');
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await submitReview(reviewData);
            if (response.success) {
                setSubmitSuccess(true);
                // Refresh book details to get updated rating
                if (id) {
                    getBookById(id).then((response) => {
                        if (response.success) {
                            setBookDetails(response.data);
                        }
                    });
                }
                // Close modal after success
                setTimeout(() => {
                    closeRatingModal();
                }, 2000);
            } else {
                // Check for specific error message from API
                if (response.data?.error === 'You have already reviewed this book.') {
                    setSubmitError('You have already reviewed this book.');
                } else {
                    setSubmitError('Failed to submit review');
                }
            }
        } catch (error: any) {
            // Handle error from catch block
            if (error?.response?.data?.error === 'You have already reviewed this book.') {
                setSubmitError('You have already reviewed this book.');
            } else {
                setSubmitError('An error occurred while submitting your review');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
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
    };
};

export default ViewModel;
