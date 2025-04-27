import { FC, useEffect } from 'react';
import Swal from 'sweetalert2';

interface StarRatingProps {
    rating: number;
    onRatingChange: (rating: number) => void;
    interactive?: boolean;
}

const StarRating: FC<StarRatingProps> = ({ rating, onRatingChange, interactive = false }) => {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} ${interactive ? 'cursor-pointer' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    onClick={() => interactive && onRatingChange(star)}
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

interface ReviewData {
    rating: number;
    comment: string;
}

interface RatingModalProps {
    showRatingModal: boolean;
    closeRatingModal: () => void;
    reviewData: ReviewData;
    handleRatingChange: (rating: number) => void;
    handleCommentChange: (comment: string) => void;
    handleSubmitReview: () => void;
    isSubmitting: boolean;
    submitError: string | null;
    submitSuccess: boolean;
}

const RatingModal: FC<RatingModalProps> = ({
    showRatingModal,
    closeRatingModal,
    reviewData,
    handleRatingChange,
    handleCommentChange,
    handleSubmitReview,
    isSubmitting,
    submitError,
    submitSuccess,
}) => {
    useEffect(() => {
        if (submitSuccess) {
            Swal.fire({
                title: '<span class="">Congratulations!</span>',
                html: '<p class="text-green-600">You got 5 points by reviewing this book.<br/>Please check your profile.</p>',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#B347FD',
            }).then(() => {
                closeRatingModal();
            });
        }
    }, [submitSuccess, closeRatingModal]);

    if (!showRatingModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-80 max-w-md mx-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold bg-gradient-to-l from-[#7B77F2] to-[#B446FF] bg-clip-text text-transparent">Rate this book</h3>
                    <button className="text-gray-500 hover:text-gray-700" onClick={closeRatingModal}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div className="mb-4">
                    <p className="text-gray-600 mb-2">Your rating</p>
                    <div className="flex justify-center mb-2">
                        <StarRating rating={reviewData.rating} onRatingChange={handleRatingChange} interactive={true} />
                    </div>
                    {submitError && reviewData.rating === 0 && <p className="text-red-500 text-xs text-center">{submitError}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Your comment (optional)</label>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        rows={4}
                        value={reviewData.comment}
                        onChange={(e) => handleCommentChange(e.target.value)}
                        placeholder="Share your thoughts about this book..."
                    ></textarea>
                </div>

                <button className="w-full py-2 bg-gradient-to-r from-[#B347FD] to-[#7B77F2] text-white font-bold rounded-lg disabled:opacity-50" onClick={handleSubmitReview} disabled={isSubmitting}>
                    {isSubmitting ? <span className="animate-pulse">Submitting...</span> : submitSuccess ? <span>Review Submitted!</span> : <span>Submit Review</span>}
                </button>

                {submitError && reviewData.rating > 0 && (
                    <div className={`text-center mt-3 p-2 rounded-md ${submitError === 'You have already reviewed this book.' ? 'bg-amber-50 border border-amber-200' : 'text-red-500 text-xs'}`}>
                        <p className={submitError === 'You have already reviewed this book.' ? 'text-amber-600 font-medium' : 'text-red-500 text-xs'}>{submitError}</p>
                    </div>
                )}

                {submitSuccess && <p className="text-green-500 text-xs text-center mt-2">Thank you for your review!</p>}
            </div>
        </div>
    );
};

export default RatingModal;
