//Framework
import react from 'react';
//Icons
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlinePoll } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";

const FeedCard: React.FC = () => {
    return (
        <div className="border border-gray-900 border-t-0 border-b-2 border-l-0 border-r-0 hover:bg-slate-900 transition-all">
            <div className='grid grid-cols-12'>
                <div className='col-span-1'>
                    <Image className='p-1 rounded-full' src='https://media.istockphoto.com/id/1281863632/photo/close-up-portrait-of-smiling-happy-businessman-in-suit-with-suitcase-3d-illustration-of.jpg?s=612x612&w=is&k=20&c=t0SspzOdJ-2BrhSRDqeLBE36YM0Xq0laBNvBbI5bgCc=' alt='use-image' height="50" width="50" />
                </div>
                <div className="col-span-11 ">
                    <h1>Abhishek</h1>
                    <p>
                        Hey guys  👋🏻
                        Introducing 'Roast My Website' 🔥,
                        a tool that provides hilarious yet practical feedback on your website design.
                    </p>
                    <div className="flex justify-between mt-5 text-lg items-center">
                        <div className='hover:text-[#1D9BF0] transition-all cursor-pointer'><BiMessageRounded /></div>
                        <div className='hover:text-[#1D9BF0] transition-all cursor-pointer'><FaRetweet /></div>
                        <div className='hover:text-[#1D9BF0] transition-all cursor-pointer'><FaRegHeart /></div>
                        <div className='hover:text-[#1D9BF0] transition-all cursor-pointer'><MdOutlinePoll /></div>

                        <div className="flex ">
                            <div className='hover:text-[#1D9BF0] transition-all cursor-pointer'><FaRegBookmark /></div>
                            <div className='hover:text-[#1D9BF0] transition-all cursor-pointer'><IoShareOutline /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedCard;