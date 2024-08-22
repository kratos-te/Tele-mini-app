import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Key } from 'lucide-react';

interface TaskItemProps {
  icon: string;
  title: string;
  points: number;
  buttonActive: boolean;
}

interface NavItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

const EarnMoreCoinsPage: React.FC = () => {
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
      <main className="mt-2 px-6 overflow-y-auto mb-[88px]" style={{ height: "calc(100% - 188px)" }}>
        <div className="mt-4">
          <div className="bg-[#252423] rounded-lg p-2 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image src="https://framerusercontent.com/images/Hr67yj6I3bDvBMruWOyGWjc8jPc.png" alt="CEO" width={28} height={28} className="rounded-full" />
              <span className="text-xs">Merry Merry (CEO)</span>
            </div>
            <button className="flex items-center gap-1 bg-gradient-to-r from-[#FFA41C] to-[#FF7B00] text-xs py-1 px-3 rounded-md">
              <Key />
              04 Keys
            </button>
          </div>
        </div>

        {/* Task list */}
        <div className='flex flex-row justify-between mt-4 pb-2 gap-2'>
          <div className='flex flex-col shadow-sm shadow-[#FFA41C] bg-[#151515] rounded-lg p-4'>
            <div className='bg-[#232222] rounded-lg'>
              <Image src="https://framerusercontent.com/images/DPjUDKbhnnOvCvtx2iilTlBiki0.png" width={80} height={80} alt='image'></Image>
            </div>
            <p className='text-sm text-center whitespace-nowrap text-white'>Game Name</p>
            <div className='flex flex-row text-[10px] gap-[2px] text-center whitespace-nowrap items-center w-full justify-center text-white'>
              <Key className='text-[#FFA41C]' width={16} height={16} />
              <p>0/4 <span className='text-gray-400'> received</span></p>
            </div>
          </div>
          <div className='flex flex-col shadow-sm shadow-[#FFA41C] bg-[#151515] rounded-lg p-4'>
            <div className='bg-[#232222] rounded-lg'>
              <Image src="https://framerusercontent.com/images/DPjUDKbhnnOvCvtx2iilTlBiki0.png" width={80} height={80} alt='image'></Image>
            </div>
            <p className='text-sm text-center whitespace-nowrap text-white'>Game Name</p>
            <div className='flex flex-row text-[10px] gap-[2px] text-center whitespace-nowrap items-center w-full justify-center text-white'>
              <Key className='text-[#FFA41C]' width={16} height={16} />
              <p>0/4 <span className='text-gray-400'> received</span></p>
            </div>
          </div>
          <div className='flex flex-col shadow-sm shadow-[#FFA41C] bg-[#151515] rounded-lg p-4'>
            <div className='bg-[#232222] rounded-lg'>
              <Image src="https://framerusercontent.com/images/DPjUDKbhnnOvCvtx2iilTlBiki0.png" width={80} height={80} alt='image'></Image>
            </div>
            <p className='text-sm text-center whitespace-nowrap text-white'>Game Name</p>
            <div className='flex flex-row text-[10px] gap-[2px] text-center whitespace-nowrap items-center w-full justify-center text-white'>
              <Key className='text-[#FFA41C]' width={16} height={16} />
              <p>0/4 <span className='text-gray-400'> received</span></p>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between mt-4 pb-2 gap-2'>
          <div className='flex flex-col shadow-sm shadow-[#FFA41C] bg-[#151515] rounded-lg p-4'>
            <div className='bg-[#232222] rounded-lg'>
              <Image src="https://framerusercontent.com/images/DPjUDKbhnnOvCvtx2iilTlBiki0.png" width={80} height={80} alt='image'></Image>
            </div>
            <p className='text-sm text-center whitespace-nowrap text-white'>Game Name</p>
            <div className='flex flex-row text-[10px] gap-[2px] text-center whitespace-nowrap items-center w-full justify-center text-white'>
              <Key className='text-[#FFA41C]' width={16} height={16} />
              <p>0/4 <span className='text-gray-400'> received</span></p>
            </div>
          </div>
          <div className='flex flex-col shadow-sm shadow-[#FFA41C] bg-[#151515] rounded-lg p-4'>
            <div className='bg-[#232222] rounded-lg'>
              <Image src="https://framerusercontent.com/images/DPjUDKbhnnOvCvtx2iilTlBiki0.png" width={80} height={80} alt='image'></Image>
            </div>
            <p className='text-sm text-center whitespace-nowrap text-white'>Game Name</p>
            <div className='flex flex-row text-[10px] gap-[2px] text-center whitespace-nowrap items-center w-full justify-center text-white'>
              <Key className='text-[#FFA41C]' width={16} height={16} />
              <p>0/4 <span className='text-gray-400'> received</span></p>
            </div>
          </div>
          <div className='flex flex-col shadow-sm shadow-[#FFA41C] bg-[#151515] rounded-lg p-4'>
            <div className='bg-[#232222] rounded-lg'>
              <Image src="https://framerusercontent.com/images/DPjUDKbhnnOvCvtx2iilTlBiki0.png" width={80} height={80} alt='image'></Image>
            </div>
            <p className='text-sm text-center whitespace-nowrap text-white'>Game Name</p>
            <div className='flex flex-row text-[10px] gap-[2px] text-center whitespace-nowrap items-center w-full justify-center text-white'>
              <Key className='text-[#FFA41C]' width={16} height={16} />
              <p>0/4 <span className='text-gray-400'> received</span></p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="w-80 bg-[#232224] rounded-[30px] p-4 border border-gray-500">
          <div className="flex justify-around">
            <Link href="/play"><NavItem icon="https://framerusercontent.com/images/ocwsxaKhjvQMJ6nD9gmStEocfk8.png" label="Home" /></Link>
            <Link href="/minigame"><NavItem icon="https://framerusercontent.com/images/PaLywv8JELX8O1zrfQISs8ydEw.png" label="Playgame" active /></Link>
            <Link href="/mine"><NavItem icon="https://framerusercontent.com/images/tdQGqBByAySW6zXCQoLnXmLciug.png" label="Mine" /></Link>
            <Link href="/earn"><NavItem icon="https://framerusercontent.com/images/czKkkgn9siF2MUhPLGtiK34AlWI.png" label="Earn"  /></Link>
            <Link href="/airdrop"><NavItem icon="https://framerusercontent.com/images/iYfCITQQyKRc5MkIOx77MhmzU.png" label="Airdrop" /></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

const TaskItem: React.FC<TaskItemProps> = ({ icon, title, points, buttonActive }) => (
  <div className="flex items-center bg-[#ffffff1a] rounded-lg p-2">
    <Image src={icon} alt={title} width={40} height={40} className="rounded-md" />
    <div className="ml-4 flex-grow">
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-xs text-gray-400">{points} Points</p>
    </div>
    <button
      className={`px-4 py-1 rounded-full text-xs ${buttonActive
          ? 'bg-gradient-to-r from-[#FFA41C] to-[#FF7B00] text-white'
          : 'bg-[#403C3C] text-gray-500'
        }`}
    >
      {buttonActive ? 'Redeem' : 'Claimed'}
    </button>
  </div>
);

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <div className="flex flex-col items-center">
    <Image src={icon} alt={label} width={22} height={22} />
    <span className={`text-[8px] mt-1 ${active ? 'text-[#FFA41C]' : 'text-[#BFBEBE]'}`}>{label}</span>
  </div>
);

const WalletSection: React.FC = () => (
  <div className="mt-4 p-2 bg-[#151515] rounded-lg border border-[#4c4a4a] flex items-center justify-between px-2">
    <div className="flex items-center">
      <Image src="https://framerusercontent.com/images/O6BrCFwsXyKnx6Q4wt1Qlipuoww.png" alt="Binance" width={28} height={28} className="rounded-full" />
      <span className="ml-2 text-xs">Binance</span>
    </div>
    <div className="flex items-center">
      <span className="text-[21px] font-bold text-[#FFA41C] mr-1">109 343</span>
      <Image src="https://framerusercontent.com/images/RDjFGfzOEU7aOGuLTlLCItNnrVU.png" alt="Coin" width={24} height={21} />
    </div>
  </div>
);

const CEOCard: React.FC = () => (
  <div className="h-[103px] bg-[#252423] rounded-[11px] border border-[#4b4646] p-2 flex flex-col" style={{ width: "calc(50% - 6px)" }}>
    <div className="flex justify-between items-start mb-2 border-b-[1px] border-gray-600">
      <Image src="https://framerusercontent.com/images/mTnj7L3Y8EpQ0x4NN7ISSPs6nw.png" width={55} height={55} alt='image' />
      <div>
        <h3 className="text-xs font-medium">CEO</h3>
        <p className="text-[8px] text-[#8A8383]">Profit per hour</p>
        <div className="flex items-center mb-2">
          <Image src="https://framerusercontent.com/images/RDjFGfzOEU7aOGuLTlLCItNnrVU.png" alt="Coin" width={16} height={16} />
          <span className="text-[11px] font-medium whitespace-nowrap">+100 Coin</span>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center mt-auto">
      <div className="flex text-[10px] w-1/2 justify-center border-r-[1px] border-gray-600">level 12</div>
      <div className="flex items-center w-1/2 justify-center">
        <Image src="https://framerusercontent.com/images/RDjFGfzOEU7aOGuLTlLCItNnrVU.png" alt="Coin" width={18} height={18} />
        <span className="text-[11px] font-medium ml-1">4M</span>
      </div>
    </div>
  </div>
);


export default EarnMoreCoinsPage;