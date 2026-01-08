import { useState } from 'react';
// Import your images
import Dashboard from '../../assets/Dashboard.svg';
import Rectangle800 from '../../assets/Rectangle 800.svg';
import EmsApp from '../../assets/Ems-app.svg';
import EmsLogo from '../../assets/Ems-logo.svg';

function Slider() {
    const [isPaused, setIsPaused] = useState(false);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Your image paths
    const images = [
        Dashboard,
        Rectangle800,
        EmsApp,
        EmsLogo
    ];

    const handleImageClick = (index: number) => {
        setIsPaused(!isPaused);
        setSelectedImage(selectedImage === index ? null : index);
    };

    return (
        <div className="slider-section w-full py-16 overflow-hidden">
            <style>
                {`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    .slider-track {
                        animation: scroll 40s linear infinite;
                    }

                    .slider-track.paused {
                        animation-play-state: paused;
                    }

                    .slider-image {
                        transition: transform 0.3s ease;
                    }

                    .slider-image.selected {
                        transform: scale(1.1);
                    }
                `}
            </style>

            <div className="relative">
                <div 
                    className={`slider-track flex gap-6 ${isPaused ? 'paused' : ''}`}
                    style={{ width: 'fit-content' }}
                >
                    {/* First set of images */}
                    {images.map((src, index) => (
                        <img
                            key={`first-${index}`}
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className={`slider-image cursor-pointer shrink-0 rounded-xl ${
                                selectedImage === index ? 'selected' : ''
                            }`}
                            style={{ objectFit: 'cover' }}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                    
                    {/* Duplicate set for seamless loop */}
                    {images.map((src, index) => (
                        <img
                            key={`second-${index}`}
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className={`slider-image cursor-pointer shrink-0 rounded-xl ${
                                selectedImage === index ? 'selected' : ''
                            }`}
                            style={{ objectFit: 'cover' }}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider;