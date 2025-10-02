import React from 'react'
import { Link } from 'react-router-dom';
import { MdArrowForward } from "react-icons/md";
import img from '../Assets/3d.png'
import img1 from '../Assets/blog1.png'
import tip from '../Assets/tips.png'


function BlogPost() {
  return (
    <div className='blog-post'>
        <div className='blog-hero'>
            <h2>Ideas & Inspiration for Your Home</h2>
            <p>Discover design tips, style trends, and expert advice to help you create beautiful spaces with our bespoke furniture.</p>
        </div>

        <div className='blog1'>
            <div className='blog-txt'>
                <h3>HOW TO CHOOSE THE PERFECT SOFA FOR YOUR LIVING ROOM</h3>
                <p>A sofa is the centerpiece of your living room. Here’s how to pick one that balances comfort, durability, and style.</p>
                <div className='read'>
                    <span>30 Aug, 2025</span>
                    <Link to='/blog2'>Read More <MdArrowForward className='b-i'/></Link>
                </div>
            </div>

            <img src={img} alt='blogphoto'/>

        </div>




        <div className='blog1 blog-cards'>
            <div className='blog-txt'>
                <img src={img1} alt='blogphoto'/>
                <div className='blog-cc'>
                    <h3>5 Tips to Maintain Wooden Furniture for a Lifetime</h3>
                    <p>Wooden furniture is timeless, but proper care keeps it looking beautiful for decades. Here are 5 simple ways to protect and preserve your furniture.</p>
                    <div className='read'>
                        <span>30 Aug, 2025</span>
                        <Link to='/blog2'>Read More <MdArrowForward className='b-i'/></Link>
                    </div>
                </div>
            </div>

            
            <div className='blog-txt'>
                <img src={img1} alt='blogphoto'/>
                <div className='blog-cc'>
                    <h3>5 Tips to Maintain Wooden Furniture for a Lifetime</h3>
                    <p>Wooden furniture is timeless, but proper care keeps it looking beautiful for decades. Here are 5 simple ways to protect and preserve your furniture.</p>
                    <div className='read'>
                        <span>30 Aug, 2025</span>
                        <Link to='/blog2'>Read More <MdArrowForward className='b-i'/></Link>
                    </div>
                </div>
            </div>


            <div className='blog-txt'>
                <img src={img1} alt='blogphoto'/>
                <div className='blog-cc'>
                    <h3>5 Tips to Maintain Wooden Furniture for a Lifetime</h3>
                    <p>Wooden furniture is timeless, but proper care keeps it looking beautiful for decades. Here are 5 simple ways to protect and preserve your furniture.</p>
                    <div className='read'>
                        <span>30 Aug, 2025</span>
                        <Link to='/blog2'>Read More <MdArrowForward className='b-i'/></Link>
                    </div>
                </div>
            </div>



            <div className='blog-txt'>
                <img src={img1} alt='blogphoto'/>
                <div className='blog-cc'>
                    <h3>5 Tips to Maintain Wooden Furniture for a Lifetime</h3>
                    <p>Wooden furniture is timeless, but proper care keeps it looking beautiful for decades. Here are 5 simple ways to protect and preserve your furniture.</p>
                    <div className='read'>
                        <span>30 Aug, 2025</span>
                        <Link to='/blog2'>Read More <MdArrowForward className='b-i'/></Link>
                    </div>
                </div>
            </div>

        </div>

        <div className='tip-cc'>
            <div className='tips'>
                <div className='tip-txt'>
                    <h3>5 Tips to Maintain Wooden Furniture for a Lifetime</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
                    <div className='read'>
                        <span>30 Aug, 2025</span>
                        <Link to='/blog2'>Read More <MdArrowForward className='b-i'/></Link>
                    </div>
                </div>

                <img src={tip} alt='blogphoto'/>

            </div>
        </div>



        <div className='tip-cc tip-cc2'>
            <div className='tips tips2'>

                <img src={tip} alt='blogphoto'/>

                <div className='tip-txt'>
                    <h3>5 Tips to Maintain Wooden Furniture for a Lifetime</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
                    <div className='read'>
                        <span>30 Aug, 2025</span>
                        <Link to='/blog2'>Read More <MdArrowForward className='b-i'/></Link>
                    </div>
                </div>

                

            </div>
        </div>

    </div>
  );
}

export default BlogPost;
