import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import IconMenuContacts from './Icon/Menu/IconMenuContacts';
import IconMenuMailbox from './Icon/Menu/IconMenuMailbox';
import IconInfoTriangle from './Icon/IconInfoTriangle';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-80 max-w-md mx-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold bg-gradient-to-l from-[#7B77F2] to-[#B446FF] bg-clip-text text-transparent">{t('contact.title')}</h3>
                    <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full">
                            <img src="/assets//images/social/facebook.png" alt="Facebook" className="" />
                        </div>
                        <div>
                            <div className="text-sm text-gray-500">{t('contact.facebook')}</div>
                            <a href="https://www.facebook.com/deerandbookofficial" className="font-medium">
                                Deer and Book
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full">
                            <img src="/assets//images/social/line.png" alt="Facebook" className="" />
                        </div>
                        <div>
                            <div className="text-sm text-gray-500">{t('contact.line')}</div>
                            <a href="https://lin.ee/SxV9RHp" className="font-medium">
                                @xjc1676i
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full">
                            <img src="/assets//images/social/tel.png" alt="Facebook" className="" />
                        </div>
                        <div>
                            <div className="text-sm text-gray-500">{t('contact.tel')}</div>
                            <a href="tel:0652949492" className="font-medium">
                                065 294 9492
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
