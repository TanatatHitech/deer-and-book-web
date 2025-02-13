import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ViewModel = () => {
    const { id } = useParams();

    const slackDeepLink =
        "exp+deer-and-book-pdf-reader:expo-development-client?url=http%3A%2F%2F192.168.1.128%3A8081";
    const fallbackUrl = "https://play.google.com/store/apps/details?id=com.Slack";

    const handleOpenSlackRoom = () => {
        const slackDeepLink =
            "exp+deer-and-book-pdf-reader:expo-development-client?url=http%3A%2F%2F192.168.1.128%3A8081";
        const fallbackUrl = "https://play.google.com/store/apps/details?id=com.Slack";

        const link = document.createElement("a");
        link.href = slackDeepLink;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();

        setTimeout(() => {
            window.location.href = fallbackUrl;
        }, 1000);
    }
    return {
        id,
        handleOpenSlackRoom,
    }

};

export default ViewModel;