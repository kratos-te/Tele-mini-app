import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Search, SearchCodeIcon } from 'lucide-react';
import images from './images';

const data = [
  { label: 'English', image: images.english, symbol: 'ENG' },
  { label: 'Bulgarian', image: images.bulgarian, symbol: 'BG' },
  { label: 'Chinese', image: images.chinese, symbol: 'ZH' },
  { label: 'Czech', image: images.czech, symbol: 'CS' },
  { label: 'Danish', image: images.danish, symbol: 'DA' },
  { label: 'Finnish', image: images.finnish, symbol: 'FI' },
  { label: 'French', image: images.french, symbol: 'FR' },
  { label: 'German', image: images.german, symbol: 'DE' },
  { label: 'Greek', image: images.greek, symbol: 'EL' },
  { label: 'Hindi', image: images.hindi, symbol: 'HI' },
  { label: 'Indonesian', image: images.indonesian, symbol: 'ID' },
  { label: 'Italian', image: images.italian, symbol: 'IT' },
  { label: 'Japanese', image: images.japanese, symbol: 'JA' },
  { label: 'Korean', image: images.korean, symbol: 'KO' },
  { label: 'Polish', image: images.polish, symbol: 'PL' },
  { label: 'Portuguese', image: images.portuguese, symbol: 'PT' },
  { label: 'Romanian', image: images.romanian, symbol: 'RO' },
  { label: 'Russian', image: images.russian, symbol: 'RU' },
  { label: 'Slovak', image: images.slovak, symbol: 'SK' },
  { label: 'Spanish', image: images.spanish, symbol: 'ES' },
  { label: 'Swedish', image: images.swedish, symbol: 'SV' },
  { label: 'Turkish', image: images.turkish, symbol: 'TR' },
  { label: 'Ukrainian', image: images.ukrainian, symbol: 'UK' },
];

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
      <main className="mt-8 px-6 overflow-y-auto mb-[88px]" style={{height:"calc(100% - 188px)"}}>
        <h1 className="text-3xl font-bold text-[#FFA41C] text-center mb-2">Languages</h1>
        <p className="text-xs text-center mb-8">Change settings according to yourself</p>

        <div className="mt-4 mb-6">
          <div className="bg-[#252423] rounded-lg py-2 pr-2 pl-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400">Search language</span>
            </div>
            <button className="flex items-center gap-1 bg-gradient-to-r from-[#FFA41C] to-[#FF7B00] text-xs py-1 px-1 rounded-md">
              <SearchCodeIcon className='text-black' width={30} height={30}/>
            </button>
          </div>
        </div>

        <RadioGroup defaultValue="ENG" className="grid grid-cols-2 gap-4">
          {data.map((item) => (
            <div key={item.symbol} className="[&:has(:checked)]:border-orange-300 relative flex items-center space-x-2 justify-between rounded-md border border-gray-500 p-2 bg-transparent">
              <Label htmlFor={item.symbol} className="flex items-center gap-2 cursor-pointer">
                <Image src={item.image} alt={item.label} width={20} height={20} />
                <span className="text-xs">{item.label}</span>
              </Label>
              <RadioGroupItem value={item.symbol} id={item.symbol} className="border-gray-500 text-orange-300" />
            </div>
          ))}
        </RadioGroup>
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="w-80 bg-[#232224] rounded-[30px] p-4 border border-gray-500">
          <div className="flex justify-around">
            <NavItem icon="https://framerusercontent.com/images/ocwsxaKhjvQMJ6nD9gmStEocfk8.png" label="Home" />
            <NavItem icon="https://framerusercontent.com/images/PaLywv8JELX8O1zrfQISs8ydEw.png" label="Playgame" />
            <NavItem icon="https://framerusercontent.com/images/tdQGqBByAySW6zXCQoLnXmLciug.png" label="Mine" />
            <NavItem icon="https://framerusercontent.com/images/UHwVivL7Ata8yoPqKiHk2cCYM8I.png" label="Earn" active />
            <NavItem icon="https://framerusercontent.com/images/iYfCITQQyKRc5MkIOx77MhmzU.png" label="Airdrop" />
          </div>
        </div>
      </nav>
    </div>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <div className="flex flex-col items-center">
    <Image src={icon} alt={label} width={22} height={22} />
    <span className={`text-[8px] mt-1 ${active ? 'text-[#FFA41C]' : 'text-[#BFBEBE]'}`}>{label}</span>
  </div>
);

export default EarnMoreCoinsPage;