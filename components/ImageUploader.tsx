"use client";
import { useCallback } from "react";

interface Props {
  onImageSelect: (src: string) => void;
}

export default function ImageUploader({ onImageSelect }: Props) {
  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          onImageSelect(reader.result);
        }
      };
      reader.readAsDataURL(file);
    },
    [onImageSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-indigo-400 transition-colors cursor-pointer bg-white"
      onClick={() => document.getElementById("file-input")?.click()}
    >
      <div className="text-5xl mb-4">📷</div>
      <p className="text-gray-700 font-medium mb-1">Drop your photo here</p>
      <p className="text-gray-400 text-sm mb-4">or tap to browse</p>
      <span className="inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold">
        Choose Photo
      </span>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
    </div>
  );
}
