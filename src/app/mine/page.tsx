"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useAppContext } from '@/context/useAppContext';
import { purchaseMineCard } from '@/lib/api';

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

interface CEOCardProps {
  profitPerhour: number,
  purchaseAmount: number,
  level: number,
  index: number,
  handlePurchaseCard: any,
}

const mine_config = [
  [{
    "profit_perhour": 100,
    "purchase_amount": 1500,
  },
  {
    "profit_perhour": 210,
    "purchase_amount": 2100,
  },
  {
    "profit_perhour": 310,
    "purchase_amount": 2700,
  },
  {
    "profit_perhour": 410,
    "purchase_amount": 3300,
  }],
  [{
    "profit_perhour": 150,
    "purchase_amount": 1700,
  },
  {
    "profit_perhour": 210,
    "purchase_amount": 2500,
  },
  {
    "profit_perhour": 370,
    "purchase_amount": 3200,
  },
  {
    "profit_perhour": 440,
    "purchase_amount": 3800,
  }],
  [{
    "profit_perhour": 200,
    "purchase_amount": 2000,
  },
  {
    "profit_perhour": 260,
    "purchase_amount": 2800,
  },
  {
    "profit_perhour": 330,
    "purchase_amount": 3600,
  },
  {
    "profit_perhour": 400,
    "purchase_amount": 4300,
  }],
  [{
    "profit_perhour": 250,
    "purchase_amount": 2500,
  },
  {
    "profit_perhour": 350,
    "purchase_amount": 3500,
  },
  {
    "profit_perhour": 450,
    "purchase_amount": 4500,
  },
  {
    "profit_perhour": 550,
    "purchase_amount": 5500,
  }],
]
const EarnMoreCoinsPage: React.FC = () => {
  const { user, setUser, balance, setBalance, profitPerHour, setProfitPerHour } = useAppContext();

  const handlePurchaseCard = async (level: number, index: number) => {
    if (user) {
      alert(user?.mine_levels);
      if (user?.totalEarned < mine_config[index][level].purchase_amount) { alert("inssuficient balance"); return; }
      setBalance(balance - mine_config[index][level].purchase_amount);
      setProfitPerHour(profitPerHour + mine_config[index][level].profit_perhour);
      let temp = user.mine_levels;
      temp[index] ++;
      setUser({
        ...user,
        mine_levels: temp
      });
      const res = await purchaseMineCard(user?.t_id, index);  
      if (res.status) {

      }
    }
  }
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
      <main className="mt-8 px-6 overflow-y-auto mb-[88px]" style={{ height: "calc(100% - 188px)" }}>
        <h1 className="text-3xl font-bold text-[#FFA41C] text-center mb-2">Earn more coins</h1>
        <p className="text-xs text-center mb-8">Make our tasks to get more coins</p>

        {/* Task list */}
        <WalletSection />
        <div className='flex flex-row justify-between mt-4 pb-2 gap-2'>
          <div className='shadow-sm shadow-[#FFA41C] bg-[#151515] rounded-lg p-4'>
            <div className='bg-[#232222] rounded-lg'>
              <Image src="https://framerusercontent.com/images/DPjUDKbhnnOvCvtx2iilTlBiki0.png" width={80} height={80} alt='image'></Image>
            </div>
          </div>
          <div className='shadow-sm shadow-[#FFA41C] bg-[#151515] rounded-lg p-4'>
            <div className='bg-[#232222] rounded-lg'>
              <Image src="https://framerusercontent.com/images/DPjUDKbhnnOvCvtx2iilTlBiki0.png" width={80} height={80} alt='image'></Image>
            </div>
          </div>
          <div className='shadow-sm shadow-[#FFA41C] bg-[#151515] rounded-lg p-4'>
            <div className='bg-[#232222] rounded-lg'>
              <Image src="https://framerusercontent.com/images/DPjUDKbhnnOvCvtx2iilTlBiki0.png" width={80} height={80} alt='image'></Image>
            </div>
          </div>
        </div>
        <div className="mt-4 py-1 px-3 bg-[#252423] rounded-lg flex justify-between items-center gap-2">
          <div className="flex text-[12px] w-1/4 justify-center p-2 whitespace-nowrap rounded-lg font-semibold text-white bg-gradient-radial from-orange-400 to-orange-600">PR & Team</div>
          <div className="flex text-[12px] w-1/4 justify-center p-2 border border-gray-600 rounded-lg text-[#8A8383]">Markets</div>
          <div className="flex text-[12px] w-1/4 justify-center p-2 border border-gray-600 rounded-lg text-[#8A8383]">Legal</div>
          <div className="flex text-[12px] w-1/4 justify-center p-2 border border-gray-600 rounded-lg text-[#8A8383]">Special</div>
        </div>
        <div className="flex flex-wrap justify-between gap-x-3 gap-y-2 mt-4">
          {
            user?.mine_levels.map((lv, index) => (
              <CEOCard key={lv*10 + index} profitPerhour={mine_config[index][lv].profit_perhour} purchaseAmount={mine_config[index][lv].purchase_amount} level={lv} index={index} handlePurchaseCard={handlePurchaseCard}/>
            ))
          }
        </div>
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="w-80 bg-[#232224] rounded-[30px] p-4 border border-gray-500">
          <div className="flex justify-around">
            <Link href="/play"><NavItem icon="https://framerusercontent.com/images/ocwsxaKhjvQMJ6nD9gmStEocfk8.png" label="Home" /></Link>
            <Link href="/minigame"><NavItem icon="https://framerusercontent.com/images/PaLywv8JELX8O1zrfQISs8ydEw.png" label="Playgame" /></Link>
            <Link href="/mine"><NavItem icon="https://framerusercontent.com/images/tdQGqBByAySW6zXCQoLnXmLciug.png" label="Mine" active /></Link>
            <Link href="/earn"><NavItem icon="https://framerusercontent.com/images/czKkkgn9siF2MUhPLGtiK34AlWI.png" label="Earn" /></Link>
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

const CEOCard: React.FC<CEOCardProps> = ({profitPerhour, purchaseAmount, level, index, handlePurchaseCard}) => (
  <div className="h-[103px] bg-[#252423] rounded-[11px] border border-[#4b4646] p-2 flex flex-col" style={{ width: "calc(50% - 6px)", cursor: "pointer" }} onClick={() => handlePurchaseCard(level, index)}>
    <div className="flex justify-between items-start mb-2 border-b-[1px] border-gray-600">
      <Image src="https://framerusercontent.com/images/mTnj7L3Y8EpQ0x4NN7ISSPs6nw.png" width={55} height={55} alt='image' />
      <div>
        <h3 className="text-xs font-medium">CEO</h3>
        <p className="text-[8px] text-[#8A8383]">Profit per hour</p>
        <div className="flex items-center mb-2">
          <Image src="https://framerusercontent.com/images/RDjFGfzOEU7aOGuLTlLCItNnrVU.png" alt="Coin" width={16} height={16} />
          <span className="text-[11px] font-medium whitespace-nowrap">+{profitPerhour} Coin</span>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center mt-auto">
      <div className="flex text-[10px] w-1/2 justify-center border-r-[1px] border-gray-600">level {level}</div>
      <div className="flex items-center w-1/2 justify-center">
        <Image src="https://framerusercontent.com/images/RDjFGfzOEU7aOGuLTlLCItNnrVU.png" alt="Coin" width={18} height={18} />
        <span className="text-[11px] font-medium ml-1">{purchaseAmount}</span>
      </div>
    </div>
  </div>
);


export default EarnMoreCoinsPage;