import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-700 to-blue-900 py-5">
        <div className="flex justify-center">
          <div className="text-center mb-4 pb-2">
            <i className="fas fa-quote-left text-white text-3xl" />
          </div>
          <div className="max-w-3xl w-full">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-5">
                {/* Carousel */}
                <div className="relative">
                  {/* Carousel Items */}
                  <div className="carousel-inner">
                    {/* Item 1 */}
                    <div className="carousel-item active">
                      <div className="flex justify-center">
                        <div className="max-w-2xl w-full">
                          <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/3 flex justify-center">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                className="rounded-full shadow-lg mb-4"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                            </div>
                            <div className="lg:w-2/3 text-center lg:text-left">
                              <h4 className="text-xl font-semibold mb-4">
                                Maria Smantha - Web Developer
                              </h4>
                              <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem. Est, exercitationem id ipsa ipsum laboriosam perferendis.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="carousel-item">
                      <div className="flex justify-center">
                        <div className="max-w-2xl w-full">
                          <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/3 flex justify-center">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-full shadow-lg mb-4"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                            </div>
                            <div className="lg:w-2/3 text-center lg:text-left">
                              <h4 className="text-xl font-semibold mb-4">
                                Lisa Cudrow - Graphic Designer
                              </h4>
                              <p className="mb-4">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="carousel-item">
                      <div className="flex justify-center">
                        <div className="max-w-2xl w-full">
                          <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/3 flex justify-center">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                                className="rounded-full shadow-lg mb-4"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                            </div>
                            <div className="lg:w-2/3 text-center lg:text-left">
                              <h4 className="text-xl font-semibold mb-4">
                                John Smith - Marketing Specialist
                              </h4>
                              <p className="mb-4">
                                At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia mollitia animi id laborum et dolorum fuga.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Carousel Controls */}
                  <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
                    <button className="text-white bg-black bg-opacity-50 rounded-full p-2">
                      <i className="fas fa-chevron-left" />
                    </button>
                    <button className="text-white bg-black bg-opacity-50 rounded-full p-2">
                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 pt-2">
              <i className="fas fa-quote-right text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}


export default Testimonial;