import React from "react";

const Products = () => {
  return (
    <div>
      {/* About Text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 ">
          <div>
            <img src="" alt="/" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGray mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nam
              at facilis odit iste mollitia omnis rerum deserunt. Dignissimos
              vel repellendus aut facilis consectetur ducimus a eaque
              perferendis voluptatem ullam dolor eligendi, tempora provident
              consequuntur adipisci officiis nobis, nihil odio?
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:p-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
          <div className="md:w-1/3">
            <img src="" alt="/" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <p className="md:w-4/5 text-sm text-neutralGray mb-8 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              aperiam in nisi a non sint excepturi cupiditate tempora fugit
              debitis odit voluptatem, qui distinctio laudantium aspernatur
              cumque similique eum corrupti quia. Veritatis aperiam aliquam,
              cumque debitis optio vero reprehenderit repellat.
            </p>
            <h5 className="text-brandPrimary text-xl font-semibold mb-2">
              Tim Smith
            </h5>
            <p className="text-base mb-8 text-neutralGray ">British Dragon Boat Racing Asociation</p>
            <div>
              <div className="flex items-center gap-8 flex-wrap">
                <img src="" alt="/" className="cursor-pointer" />
                <img src="" alt="/" className="cursor-pointer" />
                <img src="" alt="/" className="cursor-pointer" />
                <img src="" alt="/" className="cursor-pointer" />
                <img src="" alt="/" className="cursor-pointer" />
                <img src="" alt="/" className="cursor-pointer" />
                <div className="flex items-center">
                  <a
                    href="/"
                    className="font-bold text-brandPrimary hover:text-neutral-700"
                  >
                    Meet all customers
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="17"
                    viewBox="0 0 17 11"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M16.354 5.354a.5.5 0 000-.708L11.172.464a.5.5 0 10-.708.708L14.793 5H.5a.5.5 0 000 1h14.293l-4.33 4.828a.5.5 0 00.708.708l5.182-5.182z"
                      stroke="#4CAF4F"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
