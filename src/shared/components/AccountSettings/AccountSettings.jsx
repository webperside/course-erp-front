import React, { useState, useEffect, useRef } from "react";
const AccountSettings = () => {
  const [fullName, setFullName] = useState(
    localStorage.getItem("fullName") || ""
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [category, setCategory] = useState(
    localStorage.getItem("category") || ""
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phoneNumber") || ""
  );
  const [occupations, setOccupations] = useState(
    localStorage.getItem("occupations") || ""
  );
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || null
  );
  const [isUploading, setIsUploading] = useState(false);
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const categoryOptions = [
    "Businessman",
    "Business Analyst",
    "Developer",
    "Tester",
  ];
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setShowCategoryOptions(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      fullName,
      email,
      category,
      username,
      phoneNumber,
      occupations,
      profileImage,
    });
  };
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!categoryRef.current.contains(e.target)) {
        setShowCategoryOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleImageUpload = () => {
    if (!isUploading) {
      const inputElement = document.getElementById("profileImageInput");
      inputElement.click();
    }
  };
  useEffect(() => {
    if (profileImage) {
      localStorage.setItem("profileImage", profileImage);
    } else {
      localStorage.removeItem("profileImage");
    }
  }, [profileImage]);

  useEffect(() => {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("category", category);
    localStorage.setItem("username", username);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("occupations", occupations);
  }, [fullName, email, category, username, phoneNumber, occupations]);
  const handleDeleteProfile = () => {
    setProfileImage(null);
  };
  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="container mx-auto p-8">
      <form onSubmit={handleSubmit} className="">
        <div className="flex gap-6 mb-2 col-span-2 text-center items-center">
          <div
            className="overflow-hidden cursor-pointer relative w-36 h-36 rounded-full mb-4 border border-blue-500 border-2"
            onClick={handleImageUpload}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover overflow-hidden"
              />
            ) : (
              <div className={"w-full h-full"}>
                {isUploading ? (
                  <div className="text-blue-500 animate-spin">Download...</div>
                ) : (
                  <div onClick={handleImageUpload}>
                    <img src="/images/avatar.png" alt="" />
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex space-x-4 h-8 align-center">
            <button
              className="bg-blue-500 text-white px-6 rounded text-sm"
              onClick={handleImageUpload}
            >
              Upload New Profile
            </button>
            {profileImage && (
              <button
                className="bg-white text-blue-500 px-6 rounded text-sm border-2 border-blue-500"
                onClick={handleDeleteProfile}
              >
                Delete
              </button>
            )}
          </div>
          <input
            type="file"
            id="profileImageInput"
            accept="image/*"
            className="hidden"
            onChange={handleImageInputChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="mb-2">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="form-input border border-gray-300 rounded-md p-2 mt-1 block w-96 h-10"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input border border-gray-300 rounded-md p-2 mt-1 block w-96 h-10"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-600"
            >
              Category
            </label>
            <div className="relative" ref={categoryRef}>
              <input
                type="text"
                id="category"
                className="form-input border border-gray-300 rounded-md p-2 mt-1 block w-96 h-10"
                placeholder="Category"
                value={category}
                onFocus={() => setShowCategoryOptions(true)}
                onChange={() => {}}
                autoComplete="off"
                style={{ cursor: "pointer" }}
              />
              {showCategoryOptions && (
                <div className="cursor-pointer absolute mt-1 bg-white border border-gray-300 rounded-md w-96">
                  {categoryOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => handleCategorySelect(option)}
                      className="cursor-pointer hover:bg-gray-200 p-2"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
              <svg
                className={`w-4 h-4 transition-transform transform mr-2 ${
                  showCategoryOptions ? "rotate-180" : "rotate-0"
                } cursor-pointer absolute top-3 right-4 text-gray-400`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-input border border-gray-300 rounded-md p-2 mt-1 block w-96 h-10"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="form-input border border-gray-300 rounded-md p-2 mt-1 block w-96 h-10"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="occupations"
              className="block text-sm font-medium text-gray-600"
            >
              Occupations
            </label>
            <input
              type="text"
              id="occupations"
              className="form-input border border-gray-300 rounded-md p-2 mt-1 block w-96 h-10"
              placeholder="Occupations"
              value={occupations}
              onChange={(e) => setOccupations(e.target.value)}
            />
          </div>
          <div className="col-span-2 mb-2 text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2 mr-2 w-32 h-9 text-sm"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountSettings;
