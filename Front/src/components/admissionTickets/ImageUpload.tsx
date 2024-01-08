import React, { useState, ChangeEvent } from 'react';

const ImageUploadComponent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedImage) {
      // Implement the logic to upload the image
      console.log('Uploading image:', selectedImage);
      // Reset the selected image after uploading
      setSelectedImage(null);
    } else {
      alert('Please select an image to upload.');
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {selectedImage && (
        <div>
          <p>Filename: {selectedImage.name}</p>
          <p>File type: {selectedImage.type}</p>
          <p>Size: {selectedImage.size} bytes</p>
          <img src={URL.createObjectURL(selectedImage)} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUploadComponent;
