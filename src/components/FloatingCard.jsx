import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const messages = [
    "floating.message1",
    "floating.message2",
    "floating.message3",
    "floating.message4",
    "floating.message5",
];

const DISMISS_DURATION = 10 * 60 * 1000; // 10 minutes

const FloatingCard = () => {
    const { t } = useTranslation();

    const [messageIndex, setMessageIndex] = useState(() => {
        return Number(localStorage.getItem("floatingMessageIndex") || 0);
    });

    const [visible, setVisible] = useState(() => {
        const hiddenUntil = Number(
            localStorage.getItem("floatingHiddenUntil") || 0
        );

        return Date.now() >= hiddenUntil;
    });

    // Check if card should be hidden on page load
    useEffect(() => {
        const hiddenUntil = Number(
            localStorage.getItem("floatingHiddenUntil") || 0
        );

        const remainingTime = hiddenUntil - Date.now();

        if (remainingTime <= 0) {
            localStorage.removeItem("floatingHiddenUntil");
            return;
        }

        const timer = setTimeout(() => {
            setVisible(true);
            localStorage.removeItem("floatingHiddenUntil");
        }, remainingTime);

        return () => clearTimeout(timer);
    }, []);

    const dismissCard = () => {
        const nextIndex = (messageIndex + 1) % messages.length;

        localStorage.setItem(
            "floatingMessageIndex",
            nextIndex
        );

        setMessageIndex(nextIndex);

        const hiddenUntil = Date.now() + DISMISS_DURATION;

        localStorage.setItem(
            "floatingHiddenUntil",
            hiddenUntil.toString()
        );

        setVisible(false);

        setTimeout(() => {
            localStorage.removeItem("floatingHiddenUntil");
            setVisible(true);
        }, DISMISS_DURATION);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 right-4 w-75 md:w-96 rounded-xl overflow-hidden shadow-xl z-30">
            <div className="relative">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-87.5 object-cover"
                >
                    <source src="/bible-video.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Close button */}
                <button
                    onClick={dismissCard}
                    className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center
        "
                >
                    ✕
                </button>

                {/* Message */}
                <div className="absolute inset-0 flex items-center justify-center px-6">
                    <p className="text-center text-white text-xl font-bold drop-shadow-lg">
                        {t(messages[messageIndex])}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FloatingCard;