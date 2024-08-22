'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useAppContext } from '@/context/useAppContext';

interface TaskItemProps {
  icon: string;
  title: string;
  buttonText: string;
  buttonActive: boolean;
  onClickFunc?: any;
}

interface NavItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

const GetAirdropPage: React.FC = () => {
  const { user } = useAppContext();

  const handleCopy = () => {
    if (user?.referalLink) {
      // Use Telegram Web Apps API to show the share modal
      const shareLink = `https://t.me/share/url?url=${encodeURIComponent(user?.referalLink)}`;

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'referal', {
          'event_category': 'User Interaction',
          'event_label': 'Invitation',
          'value': 1
        });
      }

      // Open the share link in a new window
      window.open(shareLink, '_blank');
    }
  };
  return (
    <div className="bg-black text-white w-full h-screen rounded-[21px] overflow-hidden font-poppins relative">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <span className="text-xs">Close</span>
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold">$BEE Trade</span>
          <span className="text-[8px]">mini app</span>
        </div>
        <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </header>

      {/* Main content */}
      <main className="mt-8 px-6 mb-[88px]" style={{ height: "calc(100% - 196px)" }}>
        <h1 className="text-3xl font-bold text-[#FFA41C] text-center mb-2">Get Airdrop</h1>
        <p className="text-xs text-center mb-4">Make our tasks to get more coins</p>

        {/* Connect Wallet Button */}
        <div className="bg-[#151515] border border-gray-800 rounded-lg p-2 mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="https://framerusercontent.com/images/1mClp5JV3dTNKE6q6iJpR3taWA.png" alt="Wallet" width={28} height={28} className="rounded-full mr-2" />
            <span className="text-md">Connect Wallet</span>
            <ChevronRight className='text-white' />
          </div>
          <div className="flex gap-2 items-center">
            <Image src="/bee.png" alt="Coin" width={24} height={21} />
            <span className="text-xl font-bold text-[#FFA41C] mr-2">0</span>
          </div>
        </div>

        {/* Task list */}
        <div className="space-y-2 mb-[88px] overflow-y-auto" style={{ height: "calc(100% - 160px)" }}>
          <TaskItem
            icon="https://framerusercontent.com/images/xo6o5T9IgiPnebpLANdNPrJ6g.png"
            title="Passive Income"
            buttonText="Get Airdrop"
            buttonActive={true}
          />
          <TaskItem
            icon="https://framerusercontent.com/images/2w2knrh5LS5w9M2i8j5dFHCGUw.png"
            title="Earn Task"
            buttonText="Get Airdrop"
            buttonActive={true}
          />
          <TaskItem
            icon="https://framerusercontent.com/images/6FoTZw2uxSkPMtTCWVY8GtRExs.png"
            title="Friends"
            buttonText="Get Airdrop"
            buttonActive={true}
            onClickFunc={handleCopy}
          />
          <TaskItem
            icon="https://framerusercontent.com/images/8SoEDJ9z04qN2zFuNOHblq1o8.png"
            title="Achievement"
            buttonText="Get Airdrop"
            buttonActive={true}
          />
          <TaskItem
            icon="https://framerusercontent.com/images/NdIiSNO9GRgb7ci8DFUXKjV2Y.png"
            title="Telegram Subscription"
            buttonText="Get Airdrop"
            buttonActive={true}
          />
          <TaskItem
            icon="https://framerusercontent.com/images/CZCRqkxwIgYZMail9CYIHvIN2yc.png"
            title="Keys"
            buttonText="Get Airdrop"
            buttonActive={true}
          />
        </div>
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="w-80 bg-[#232224] rounded-[30px] p-4 border border-gray-500">
          <div className="flex justify-around">
            <Link href="/play"><NavItem icon="https://framerusercontent.com/images/ocwsxaKhjvQMJ6nD9gmStEocfk8.png" label="Home" /></Link>
            <Link href="/minigame"><NavItem icon="https://framerusercontent.com/images/PaLywv8JELX8O1zrfQISs8ydEw.png" label="Playgame" /></Link>
            <Link href="/mine"><NavItem icon="https://framerusercontent.com/images/tdQGqBByAySW6zXCQoLnXmLciug.png" label="Mine" /></Link>
            <Link href="/earn"><NavItem icon="https://framerusercontent.com/images/czKkkgn9siF2MUhPLGtiK34AlWI.png" label="Earn" /></Link>
            <Link href="/airdrop"><NavItem icon="https://framerusercontent.com/images/HMTf5Zx1tzorCHEGPsyBTnQrss.png" label="Airdrop" active /></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

const TaskItem: React.FC<TaskItemProps> = ({ icon, title, buttonText, buttonActive, onClickFunc }) => (
  <div className="flex items-center bg-transparent border border-gray-800 rounded-lg p-2" onClick={onClickFunc}>
    <Image src={icon} alt={title} width={30} height={30} className="rounded-md" />
    <div className="ml-2 flex-grow">
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
    <button
      className={`px-2 py-1 rounded-md text-xs flex items-center gap-0 flex-shrink-0 ${buttonActive
        ? 'bg-gradient-to-r from-[#FFA41C] to-[#FF7B00] text-white'
        : 'bg-transparent text-gray-500'
        }`}
    >
      {buttonText}
      <ChevronRight className='text-white' />
    </button>
  </div>
);

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <div className="flex flex-col items-center">
    <Image src={icon} alt={label} width={22} height={22} />
    <span className={`text-[8px] mt-1 ${active ? 'text-[#FFA41C]' : 'text-[#BFBEBE]'}`}>{label}</span>
  </div>
);

export default GetAirdropPage;