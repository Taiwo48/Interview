import React from "react";

export default function DetailsStep({ form, handleChange, goToNextStep }) {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-xl font-semibold text-gray-900 mb-4">
          Details
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Company name*
        </label>
        <input
          type="text"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
          placeholder="Enter company name"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Industry</label>
        <select
          name="industry"
          value={form.industry}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Website</label>
        <input
          type="url"
          name="website"
          value={form.website}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Site name</label>
        <input
          type="text"
          name="siteName"
          value={form.siteName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Company size</label>
        <select
          name="companySize"
          value={form.companySize}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></select>
      </div>

      <div className="flex justify-end pt-6">
        <button
          type="button"
          onClick={goToNextStep}
          className="text-blue-600 font-bold text-lg hover:underline mr-2"
        >
          Next
        </button>
      </div>
    </form>
  );
}