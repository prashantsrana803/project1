import React from "react";

const NewsletterSM = () => {
  return (
    <div className="md:block sm:block lg:hidden px-6 sm:px-11 bg-[#f6deb2] mb-10 sm:my-28 py-10 sm:py-20">
      <div>
        <div className="flex  justify-center font-extrabold text-3xl leading-9 text-[#252525]">Start a free trial</div>
        <div className="mt-2 text-center font-normal leading-6 text-[#4a4a4a]">Start your NEETprep journey now...</div>
      </div>

      {/* Form */}

      <div className="flex flex-wrap flex-row mt-8 mx-8 justify-center">
        <form>
            <div>
                <input
                    type="text"
                    required
                    name="name"
                    placeholder="Enter Full Name"
                    className="w-full border-1 rounded-xl border-[#C5C5C5] py-4 "
                ></input>
            </div>
            <div >
                <input
                    type="tel"
                    required
                    name="tel"
                    placeholder="Enter Mobile No."
                    className="w-full border-1 rounded-xl border-[#C5C5C5] py-4 mt-6"
                ></input>
            </div>
            <div className="">
                <select className="w-full border-1 rounded-xl text-black border-[#C5C5C5] py-4 mt-6" required>
                    <option value="">Select Your Class</option>
                    <option value="Dropper">Class 12 (Passout)</option>
                    <option value="12th">Class 12</option>
                    <option value="11th">Class 11</option>
                </select>
            </div>
            <hr className="w-full border-black mt-8 sm:mt-12" />
              <div >
                <button
                    type="submit"
                    className="flex items-center justify-center border rounded-xl my-8 py-2 px-4 bg-black text-white font-bold text-3xl">
                        Try Learning for free
                </button>
              </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSM;
