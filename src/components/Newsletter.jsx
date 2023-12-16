import React from "react";

const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="testimonial">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-4 lg:leading-snug">
            Lorem ipsum dolor sit amet.
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-primary text-white">
              Get a Demo
              <svg
                className="inline-block ml-2"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <path
                  d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM15.7071 9.29289C16.0976 8.90237 16.0976 8.2697 15.7071 7.87919L10.5355 2.70711C10.145 2.31658 9.51229 2.31658 9.12176 2.70711C8.73123 3.09763 8.73123 3.7303 9.12176 4.12082L13.2929 8.29289L9.12176 12.464L9.12176 12.464C8.73123 12.8545 8.73123 13.4872 9.12176 13.8777C9.51229 14.2682 10.145 14.2682 10.5355 13.8777L15.7071 9.7066C16.0976 9.31607 16.0976 8.68341 15.7071 8.29289L15.7071 9.29289Z"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
