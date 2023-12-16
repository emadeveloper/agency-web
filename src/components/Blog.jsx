import React from 'react'

const Blog = () => {
    const blogs = [
        {id: 1, title:'Creating Streamlined Safeguarding Processes with OneRen', img: ''},
        {id: 2, title:'What are your safeguarding responsibilities and how can you manage them?', img: ''},
        {id: 3, title:'Revamping the Membership Model with Triathlon Australia', img: ''}
    ]
    return (
    <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-12 '>
        <div>
        <h2 className="text-4xl text-neutralDGray font-semibold mb-4">
              Caring is the new marketing
            </h2>
            <p className="text-sm text-neutralGray mb-8 md:w-3/4 mx-auto">
              The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who joining the community read about how our community are increasing their membership income and lots more
            </p>
        </div>

        {/* all blogs */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => (<div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.img} alt="/" className='hover:scale-95 transition-all duration-300' />
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralGray font-semibold'>{blog.title}</h3>
                            <div className="flex items-center justify-center gap-8 flex-wrap">
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
                    ReadMore
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
                    </div>))
                }
        </div>
    </div>
  )
}

export default Blog