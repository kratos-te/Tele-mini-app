"use client";

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useState, useRef } from 'react';
import { useAppContext } from '@/context/useAppContext';
import usePersistedState from '@/hook/usePersistedState';
import { motion, AnimatePresence } from "framer-motion";
import { updateItem } from '@/lib/api';

const Home = () => {
  const { balance, setBalance, authToken, totalEarned, setTotalEarned, profitPerHour, setProfitPerHour, user, setUser, userLevel, setUserLevel, totalPassiveIncome, setTotalPassiveIncome } = useAppContext();
  const [animations, setAnimations] = useState<{ id: number; x: number; y: number }[]>([]);
  const [mount, setMount] = usePersistedState('mount', user?.energy || 0);
  const [count, setCount] = useState<number>(0);
  let animationId = 0;
  const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerVibration = () => {
    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
  };

  const handleIncrement = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (mount <= 0) return;

    if ('touches' in event) {
      const touches = Array.from(event.touches);
      alert(touches);
      touches.forEach(touch => {
        setAnimations((prev) => [...prev, { id: animationId++, x: touch.clientX, y: touch.clientY }]);
        const newCount = count + (user?.earnPerTap || 0);
        setCount(newCount);
        setMount(mount - 1);
        setBalance(balance + (user?.earnPerTap || 0));
        setTotalEarned(totalEarned + (user?.earnPerTap || 0));
      });
    } else {
      setAnimations((prev) => [...prev, { id: animationId++, x: event.clientX, y: event.clientY }]);
      const newCount = count + (user?.earnPerTap || 0);
      setCount(newCount);
      setMount(mount - 1);
      setBalance(balance + (user?.earnPerTap || 0));
      setTotalEarned(totalEarned + (user?.earnPerTap || 0));
    }
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'tap', {
        'event_category': 'User Interaction',
        'event_label': 'Increment',
        'value': user?.earnPerTap || 0
      });
    }
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }
    updateTimeoutRef.current = setTimeout(async () => {
      try {
        if (user) {
          await updateItem(user.t_id, { count });
          setCount(0);
        }
      } catch (error) {
        console.error("Failed to update item", error);
      }
      setAnimations([]);
    }, 500);

    window.navigator.vibrate([200]);
  };

  return (
    <div className="bg-black text-white w-full h-screen rounded-[21px] overflow-hidden font-poppins relative">
      {/* Top bar */}
      <div className="flex justify-between items-center p-4">
        <span className="text-xs">Close</span>
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold">$BEE Trade</span>
          <span className="text-[8px]">{user?.t_id}</span>
        </div>
        <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Connect wallet and CEO section */}
      <div className="mt-4 mx-6">
        <div className="bg-[#252423] rounded-lg p-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="https://framerusercontent.com/images/Hr67yj6I3bDvBMruWOyGWjc8jPc.png" alt="CEO" width={28} height={28} className="rounded-full" />
            <span className="text-xs">Merry Merry (CEO)</span>
          </div>
          <button className="flex items-center gap-1 bg-gradient-to-r from-[#FFA41C] to-[#FF7B00] text-xs py-1 px-3 rounded-md">
            <Image src="/play/wallet.svg" alt="Fire" width={14} height={14} />
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Daily actions section */}
      <div className="mt-6 mx-6 flex justify-between">
        <DailyAction title="Daily reward" icon="/header/reward.svg" />
        <DailyAction title="Daily cipher" icon="/header/cipher.svg" />
        <DailyAction title="Daily combo" icon="/header/combo.svg" />
        <DailyAction title="Settings" icon="/header/settings.svg" />
        <DailyAction title="Keys" icon="/header/keys.svg" />
      </div>

      {/* Main content area */}
      <div className="mt-8 mx-6 flex flex-col items-center" onClick={(e) => handleIncrement(e)}>
        <Image className='w-full' src="https://framerusercontent.com/images/ficc3qsh4dFWFgrEV5SRZxs8dc.png" alt="Main Content" width={450} height={330} />
        <AnimatePresence>
          {animations.map((animation) => (
            <motion.div
              key={animation.id}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -400 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="select-none font-medium text-[40px] text-white touch-none"
              style={{
                position: "fixed",
                left: `${animation.x}px`,
                top: `${animation.y}px`,
              }}
            >
              + {(user?.earnPerTap || 0)}
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="flex gap-1 items-center mt-4 bg-gradient-to-r from-[#FFA41C] to-[#FF7B00] rounded-full px-4 py-2">
          <Image src="/play/hand.svg" alt="Fire" width={21} height={17} />
          <span className="text-sm font-medium">Tap Bee</span>
        </div>
        <div className="mt-4 text-center">
          <span className="flex gap-1 items-center text-4xl font-bold">
            <Image src="/bee.png" alt="Fire" width={36} height={36} />
            {balance}
          </span>
          <div className="flex items-center justify-center mt-2">
            <Image src="/play/mount.svg" alt="Fire" width={14} height={14} />
            <span className="ml-2 text-sm">{mount}/1000</span>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="w-80 bg-[#232224] rounded-[30px] p-4 border border-gray-500">
          <div className="flex justify-around">
            <Link href="/play"><NavItem icon="https://framerusercontent.com/images/rrlphpQ1OAwSMfmnVmMJgPRu054.png" label="Home" active /></Link>
            <Link href="/minigame"><NavItem icon="https://framerusercontent.com/images/PaLywv8JELX8O1zrfQISs8ydEw.png" label="Playgame" /></Link>
            <Link href="/mine"><NavItem icon="https://framerusercontent.com/images/tdQGqBByAySW6zXCQoLnXmLciug.png" label="Mine" /></Link>
            <Link href="/earn"><NavItem icon="https://framerusercontent.com/images/czKkkgn9siF2MUhPLGtiK34AlWI.png" label="Earn" /></Link>
            <Link href="/airdrop"><NavItem icon="https://framerusercontent.com/images/iYfCITQQyKRc5MkIOx77MhmzU.png" label="Airdrop" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DailyAction = ({ title, icon }: { title: string; icon: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 bg-[#242323] rounded-lg flex items-center justify-center mb-1 shadow-sm shadow-[#FFA41C]">
      <Image src={icon} alt={title} width={24} height={24} />
    </div>
    <span className="text-[8px]">{title}</span>
  </div>
);

const NavItem = ({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) => (
  <div className="flex flex-col items-center">
    <Image src={icon} alt={label} width={22} height={22} />
    <span className={`text-[8px] mt-1 ${active ? 'text-[#FFA41C]' : 'text-[#BFBEBE]'}`}>{label}</span>
  </div>
);


export default Home;