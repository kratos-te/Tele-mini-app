"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface TaskItemProps {
  icon: string;
  title: string;
  points: number;
  buttonActive: boolean;
  link?: string;
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
      <main className="mt-8 px-6 overflow-y-auto mb-[88px]">
        <h1 className="text-3xl font-bold text-[#FFA41C] text-center mb-2">Earn more coins</h1>
        <p className="text-xs text-center mb-8">Make our tasks to get more coins</p>

        {/* Task list */}
        <div className="space-y-4 mb-[88px] overflow-y-auto h-full">
          <TaskItem
            icon="https://framerusercontent.com/images/yz7E51NyR4p8YX2suDDb1ibDNs.png"
            title="Watch video to earn"
            points={500}
            buttonActive={true}
          />
          <TaskItem
            icon="https://framerusercontent.com/images/pkM7y6S5JPBzqsrFV8HAyMUUXWU.png"
            title="Daily Reward"
            points={500}
            buttonActive={false}
          />
          <TaskItem
            icon="https://framerusercontent.com/images/CzTMwiPA09rrjEgtAlveYX8qqk.png"
            title="Join Telegram"
            points={500}
            buttonActive={true}
            link="https://t.me/PaladinAI"
          />
          <TaskItem
            icon="https://framerusercontent.com/images/um9irHwIcvLHLHB3NsVih9SEZY.png"
            title="Watch youtube"
            points={500}
            buttonActive={false}
            link="https://www.youtube.com/channel/UCIs08SsLKcxbVoGELo68rfg"
          />
          <TaskItem
            icon="https://framerusercontent.com/images/eCXjWk52mrgGHGnVnaVg0Z8WUgM.png"
            title="Fun and innovation"
            points={500}
            buttonActive={true}
          />
          <TaskItem
            icon="https://framerusercontent.com/images/wnhi4fWQQ1jnU59p0E3jrDnrs.png"
            title="Follow on Facebook"
            points={500}
            buttonActive={false}
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
            <Link href="/earn"><NavItem icon="https://framerusercontent.com/images/UHwVivL7Ata8yoPqKiHk2cCYM8I.png" label="Earn" active /></Link>
            <Link href="/airdrop"><NavItem icon="https://framerusercontent.com/images/iYfCITQQyKRc5MkIOx77MhmzU.png" label="Airdrop" /></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

const TaskItem: React.FC<TaskItemProps> = ({ icon, title, points, buttonActive, link }) => {
  const [open, setOpen] = React.useState(false);
  const [joined, setJoined] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBonous = async () => {
    const price = 1000;
    const id = localStorage.getItem('id');
    const data = {
      title: title,
      id: id,
    };
    window.open(link, "_blank")
    setOpen(false);
    setJoined(true);
  };

  return (
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
        onClick={handleClickOpen}
      >
        {buttonActive ? 'Redeem' : 'Claimed'}
      </button>

      {open && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <img src={icon} alt="mexc" className='w-24 h-24' />
            </div>
            <div className="modal-body">
              <div className='text-base font-semibold text-center mt-3'>{title}</div>
              <div className='flex justify-center space-x-2 items-center mt-4'>
                <img src='/images/time-min.webp' alt='dollar' className='w-5 h-5' />
                <div>+{points}</div>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={handleBonous}>
                Join
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <div className="flex flex-col items-center">
    <Image src={icon} alt={label} width={22} height={22} />
    <span className={`text-[8px] mt-1 ${active ? 'text-[#FFA41C]' : 'text-[#BFBEBE]'}`}>{label}</span>
  </div>
);

export default EarnMoreCoinsPage;