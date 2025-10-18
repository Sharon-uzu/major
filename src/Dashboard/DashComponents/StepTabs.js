import React, { useState, useRef } from 'react';
import { IoMdPricetag } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { IoPieChart } from "react-icons/io5";

const tabs = [
  { number: '1/5', title: 'General Information' },
  { number: '2/5', title: 'Pricing Details' },
  { number: '3/5', title: 'Product Image' },
  { number: '4/5', title: 'Stock Status' },
  { number: '5/5', title: 'Summary' },
];

const StepTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0); // numeric index (0–4)
  const activeStep = tabs[activeIndex].number;

  // Step data
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stockStatus, setStockStatus] = useState('');
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  // Image Handling
  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDelete = (index) => {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  // Navigation
  const goNext = () => {
    if (activeIndex < tabs.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const renderContent = () => {
    switch (activeStep) {
      case '1/5':
        return (
          <div className='steps-content'>
            <IoMdPricetag className='step-i' />
            <h3>Add product details</h3>
            <p>Boost sales with detailed product information</p>
            <form className='step-form'>
              <div className='f-c'>
                <h5>Product name</h5>
                <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
              </div>
              <div className='f-c'>
                <h5>Category</h5>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Select category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home</option>
                </select>
              </div>
              <div className='f-c'>
                <h5>Description</h5>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <button type="button" onClick={goNext}>Continue</button>
            </form>
          </div>
        );

      case '2/5':
        return (
          <div className='steps-content'>
            <div className='prev' onClick={goBack}>
              <IoIosArrowBack />
              <span>Back</span>
            </div>
            <IoMdPricetag className='step-i' />
            <h3>Add product price</h3>
            <p>Define strategic pricing for market success</p>
            <form className='step-form'>
              <div className='f-c'>
                <h5>Product pricing</h5>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <button type="button" onClick={goNext}>Continue</button>
            </form>
          </div>
        );

      case '3/5':
        return (
          <div className='steps-content'>
            <div className='prev' onClick={goBack}>
              <IoIosArrowBack />
              <span>Back</span>
            </div>
            <LuImagePlus className='step-i' />
            <h3>Add product images</h3>
            <p>Showcase products with quality visuals</p>
            <form className='step-form'>
              <div className="image-uploader">
                <div className="upload-box" onClick={handleClick}>
                  <p>Click or drag & drop to upload images</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFilesChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                  />
                </div>

                {images.length > 0 && (
                  <div className="preview-grid">
                    {images.map((img, index) => (
                      <div key={index} className="preview-item">
                        <img src={img.url} alt={`Preview ${index}`} />
                        <button className="delete-btn" onClick={() => handleDelete(index)}>×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button type="button" onClick={goNext}>Continue</button>
            </form>
          </div>
        );

      case '4/5':
        return (
          <div className='steps-content'>
            <div className='prev' onClick={goBack}>
              <IoIosArrowBack />
              <span>Back</span>
            </div>
            <IoPieChart className='step-i' />
            <h3>Add stock status</h3>
            <p>Highlight stock status with dynamic indicators</p>
            <form className='step-form'>
              <div className='f-c'>
                <h5>Set Custom Stock Status</h5>
                <input type="text" value={stockStatus} onChange={(e) => setStockStatus(e.target.value)} />
              </div>
              <button type="button" onClick={goNext}>Continue</button>
            </form>
          </div>
        );

      case '5/5':
        return (
          <div className='steps-content'>
            <div className='prev' onClick={goBack}>
              <IoIosArrowBack />
              <span>Back</span>
            </div>
            <IoPieChart className='step-i' />
            <h3>Summary</h3>
            <p>Quick overview of product details and inventory</p>
            <div className="summary-box">
              <h4>Product Name:</h4>
              <p>{productName || 'Not provided'}</p>

              <h4>Category:</h4>
              <p>{category || 'Not selected'}</p>

              <h4>Description:</h4>
              <p>{description || 'No description'}</p>

              <h4>Price:</h4>
              <p>{price || 'Not entered'}</p>

              <h4>Stock Status:</h4>
              <p>{stockStatus || 'Not set'}</p>

              <h4>Images:</h4>
              {images.length > 0 ? (
                <div className="preview-grid">
                  {images.map((img, index) => (
                    <div key={index} className="preview-item">
                      <img src={img.url} alt={`Uploaded ${index}`} />
                    </div>
                  ))}
                </div>
              ) : (
                <p>No images uploaded</p>
              )}

              <button>Complete</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="step-tabs">
      <div className="step-tabs-container">
        {tabs.map((tab, index) => (
          <div
            key={tab.number}
            className={`step-tab ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="tab-number">{tab.number}</div>
            <div className="tab-title">{tab.title}</div>
          </div>
        ))}
      </div>
      <div className="step-tab-content">{renderContent()}</div>
    </div>
  );
};

export default StepTabs;
