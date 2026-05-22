"use client";
import { useState } from "react";
import ImageUploader from "@/components/ImageUploader";
import CropModal from "@/components/CropModal";
import PlatformPreviews from "@/components/PlatformPreviews";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [showCrop, setShowCrop] = useState(false);

  const handleImageSelect = (imgSrc: string) => {
    setImage(imgSrc);
    setShowCrop(true);
  };

  const handleCropDone = (cropped: string) => {
    setCroppedImage(cropped);
    setShowCrop(false);
  };

  const handleReset = () => {
    setImage(null);
    setCroppedImage(null);
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">
            <span className="text-indigo-600">DP</span> Visualizer
          </h1>
          {croppedImage && (
            <button
              onClick={handleReset}
              className="text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              Upload New
            </button>
          )}
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {!croppedImage ? (
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                See how your DP looks everywhere
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Upload a photo and preview it as your profile picture on WhatsApp, Instagram, Facebook, X & LinkedIn.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                🔒 Your image never leaves your device. 100% private.
              </p>
            </div>
            <ImageUploader onImageSelect={handleImageSelect} />
          </div>
        ) : (
          <PlatformPreviews image={croppedImage} onChangeCrop={() => setShowCrop(true)} />
        )}
      </div>

      {/* Crop Modal */}
      {showCrop && image && (
        <CropModal
          image={image}
          onDone={handleCropDone}
          onCancel={() => {
            setShowCrop(false);
            if (!croppedImage) setImage(null);
          }}
        />
      )}
    </main>
  );
}
