import React from "react";
import LogoImage from "../assets/upload-field.png";

export default function LogoStep({ form, setForm }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Logo</h3>

      <label className="w-40 h-40 border rounded-md mb-2 overflow-hidden flex items-center justify-center cursor-pointer hover:bg-gray-100">
        
        {/* Placeholder fills the whole box */}
        {!form.logo && (
          <img
            src={LogoImage}
            alt="Upload placeholder"
            className="w-full h-full object-contain opacity-70"
          />
        )}

        {/* Uploaded logo */}
        {form.logo && (
          <img
            src={form.logo}
            alt="Uploaded logo"
            className="w-full h-full object-contain"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setForm((prev) => ({
                ...prev,
                logo: URL.createObjectURL(file),
                logoName: file.name,
              }));
            }
          }}
          className="hidden"
        />
      </label>

      {form.logoName && (
        <p className="text-sm text-gray-700 mb-2">{form.logoName}</p>
      )}
    </div>
  );
}
