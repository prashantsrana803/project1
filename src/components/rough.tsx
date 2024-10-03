import React from "react";

const rough = () => {
  return (
    
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          {/* Left Column */}
          <div className="md:w-1/2 px-4">
            <div className=" bg-yellow-800 p-6 rounded-md">
              <div className="flex">
                <div className="xs:w-1/3 lg:w-2/3">
                  <h3 className="text-white font-bold">
                    2500+ NEET selections
                  </h3>
                  <p className="text-white">
                    Highest number of <br /> selections in government <br />{" "}
                    medical colleges across <br /> India from an online <br />{" "}
                    teaching platform
                  </p>
                </div>
              </div>
            </div>

            <div className="flex mt-6 space-x-4">
              {/* First box */}
              <div className="md:w-1/2 w-1/2">
                <div className=" bg-purple-600 p-4 rounded-md">
                  <div className=" mb-4">
                    <img
                      src=""
                      alt="Open Book"
                    />
                  </div>
                  <h3 className="text-white font-bold">
                    Customizable tests available for all 97 chapters
                  </h3>
                </div>
              </div>

              {/* Second box */}
              <div className="md:w-1/2 w-1/2 ps-0">
                <div className=" bg-blue-800 p-4 rounded-md">
                  <div className=" mb-4 text-white">#1</div>
                  <h3 className="text-white font-bold">
                    Player in exclusive NEET preparation since 2016
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 px-4">
            <div className="h-96 bg-green-600 p-6 rounded-md">
              <div className="flex flex-wrap space-x-2 mb-4">
                <a
                  target="_blank"
                  href=""
                  className="news-logos-item"
                >
                  <img
                    src=""
                    alt="NDTV Logo"
                    className="h-12"
                  />
                </a>
                <a
                  target="_blank"
                  href=""
                  className="news-logos-item"
                >
                  <img
                    src=""
                    alt="CNBC Logo"
                    className="h-12"
                  />
                </a>
                {/* Repeat for all logos */}
              </div>
              <h4 className="text-white font-bold">
                <strong>NEETprep</strong> <br />
                Media Coverage
              </h4>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default rough;
