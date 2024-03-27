// FrameWork
import React from "react";
// Icons
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiNotification2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { TbSlash } from "react-icons/tb";
// components
import FeedCard from "./components/FeedCard/FeedCard";


interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill />,
  },
  {
    title: "Explore",
    icon: <FaMagnifyingGlass />,
  },
  {
    title: "Notifications",
    icon: <RiNotification2Line />,
  },
  {
    title: "Messages",
    icon: <MdOutlineEmail />,
  },
  {
    title: "Grok",
    icon: <TbSlash />,
  },
  {
    title: "Lists",
    icon: <TbNotes />,
  },
  {
    title: "Profile",
    icon: <BsPerson />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];
export default function Home() {
  return (
    <div>

      <div className="grid grid-cols-12 h-screen w-screen px-56 ">
        {/*info grid >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
        <div className="col-span-3 pt-1 ml-28">
          <div className="text-2xl h-fit w-fit  hover:bg-gray-800 rounded-full p-2 cursor-point">
            <FaXTwitter />
          </div>
          <div className="mt-1 text-xl  pr-4 ">
            <ul>
              {SidebarMenuItems.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full  px-3 py-3 w-fit cursor-point"
                  key={item.title}>
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-10 ">
              <button className="bg-[#1D9BF0] p-4 w-full rounded-full font-semibold text-lg py-4 px-4">Post</button>
            </div>
          </div>
        </ div>
        {/* FeedCard grid>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-800 h-screen overflow-y-auto">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3">03</div>
      </div>
    </div>
  );
}
