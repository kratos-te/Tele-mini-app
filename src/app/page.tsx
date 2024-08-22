"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppContext } from '@/context/useAppContext';
import { getAllItems, getItemDetails, getUpdatedUserDetails } from '@/lib/api';
import usePersistedState from '@/hook/usePersistedState';
import { Suspense } from 'react';

const HomePage: React.FC = () => {
  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainContent />
    </Suspense>
  );
};

const MainContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    setUser,
    user,
    setUserLevel,
    setInvitees,
    setTotalPassiveIncome,
    setProfitPerHour,
    setClaimedIndexes,
    setAuthToken,
    setBalance,
    setTotalEarned,
    setGemData,
    setAvatar,
    gemData,
  } = useAppContext();
  const [mount, setMount] = usePersistedState("mount", user?.energy || 0);

  // const { data }: String | any = router.query;
  // console.log(data);
  const token = searchParams.get('token');
  useEffect(() => {

    if (token) {
      localStorage.setItem("t", token);
      setAuthToken(token);

      const fetchData = async () => {
        const res = await getUpdatedUserDetails(token);
        const itemsResponse = await getAllItems();
        const itemDetailsResponse = await getItemDetails(
          res.data.user.t_id,
          token
        );
        if (itemsResponse.status) {
          const items = itemsResponse.data.data.map((item: any) => ({
            ...item,
            itemLevel: 0,
            baseCost: item.cost,
          }));

          const mergedData = items.map((item: any) => {
            const itemDetail = itemDetailsResponse.data.data.find(
              (detail: any) => detail.name === item.item_name
            );
            return itemDetail
              ? {
                ...item,
                itemLevel: itemDetail.itemLevel,
                baseCost: itemDetail.baseCost,
                passive_income: itemDetail.basePassiveIncome,
              }
              : item;
          });

          setGemData(mergedData);
        }

        if (res.status) {
          setProfitPerHour(res.data.profitPerHour);
          setUserLevel(res.data.userLevel);
          setTotalPassiveIncome(res.data.totalPassiveIncome);
          setClaimedIndexes([]);
          setBalance(res.data.user.balance);
          setTotalEarned(res.data.user.totalEarned);
          setUser(res.data.user);
          setMount(
            Math.min(mount + res.data.timecount * 3, res.data.user.energy)
          );
          console.log("Context values set:", res.data);
        }
      }

      fetchData();
    }
  }, [router]);

  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full p-5 flex justify-between items-center">
        <span className="text-sm">Close</span>
        <div className="flex flex-col items-center">
          <span className="text-xs">mini app</span>
          <div className="flex items-center">
            <span className="text-sm font-semibold mr-1">$BEE Trade</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center">
          <div className="flex space-x-0.5">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col items-center justify-center relative">
        <div className="w-48 h-48 rounded-full bg-orange-500 opacity-50 absolute top-0 -translate-y-1/2"></div>
        <Image
          src="https://framerusercontent.com/images/Hr67yj6I3bDvBMruWOyGWjc8jPc.png"
          alt="Bee Trade"
          width={300}
          height={300}
          className="mb-8"
          style={{visibility: 'visible'}}
        />
        <div className="w-32 h-4 bg-orange-600 rounded-full blur-sm mb-8"></div>
        <Link href="/play">
          <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-3 px-24 rounded-full" >
            Start Now
          </button>
        </Link>
      </main>

      {/* Background SVG */}
      <div className="fixed inset-0 z-[-1] opacity-70">
        <svg width="100%" height="100%" viewBox="0 0 694 424" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7">
            <path d="M667.713 83.0941L680.537 90.491L693.724 82.8885L693.012 81.6565L680.536 88.8493L668.424 81.8628V67.8892L680.892 60.6971L680.18 59.4652L667.712 66.6579L655.593 59.6707V45.6957L667.712 38.7085L680.536 46.1061L693.723 38.5036L693.011 37.2716L680.536 44.4637L668.424 37.4765V23.5021L680.892 16.3101L680.18 15.0781L667.712 22.2709L655.593 15.2837V0.898926H654.169V15.2837L642.057 22.2709L629.94 15.2837V0.898926H628.516V15.2837L616.404 22.2709L604.285 15.2837V0.898926H602.861V15.2837L590.75 22.2709L578.631 15.2837V0.898926H577.207V15.2837L565.095 22.2709L552.977 15.2837V0.898926H551.552V15.2837L539.442 22.2709L527.33 15.2837V0.898926H525.906V15.2837L513.788 22.2709L501.675 15.2837V0.898926H500.251V15.2837L488.133 22.2709L476.022 15.2837V0.898926H474.598V15.2837L462.479 22.2709L450.368 15.2837V0.898926H448.944V15.2837L436.825 22.2709L424.714 15.2837V0.898926H423.29V15.2837L411.172 22.2709L399.06 15.2837V0.898926H397.635V15.2837L385.517 22.2709L373.405 15.2837V0.898926H371.981V15.2837L359.863 22.2709L347.751 15.2837V0.898926H346.327V15.2837L334.212 22.2723L322.096 15.2837V0.898926H320.672V15.2837L308.561 22.2709L296.442 15.2837V0.898926H295.018V15.2837L282.907 22.2709L270.79 15.2837V0.898926H269.366V15.2837L257.254 22.2709L245.135 15.2837V0.898926H243.711V15.2837L231.6 22.2709L219.481 15.2837V0.898926H218.057V15.2837L205.945 22.2709L193.826 15.2837V0.898926H192.402V15.2837L180.291 22.2709L168.172 15.2837V0.898926H166.748V15.2837L154.637 22.2709L142.525 15.2837V0.898926H141.101V15.2837L128.982 22.2709L116.87 15.2837V0.898926H115.446V15.2837L103.328 22.2709L91.2163 15.2837V0.898926H89.7923V15.2837L77.6737 22.2709L65.5629 15.2837V0.898926H64.1389V15.2837L52.0203 22.2709L39.9088 15.2837V0.898926H38.4848V15.2837L26.3662 22.2709L14.2547 15.2837V0.898926H12.8306V16.1045L25.6541 23.5021V37.4765L13.5426 44.4637L1.42404 37.4765V23.0917H0V38.2974L12.8313 45.695V60.4901L25.6548 67.8877V81.8614L13.5434 88.8479L1.42404 81.8621V67.4773H0V82.6829L12.8313 90.0798V104.876L25.6548 112.273V126.255L13.5434 133.241L1.42404 126.255V111.863H0V127.076L12.8313 134.473V149.268L25.6548 156.666V170.64L13.5434 177.627L1.42404 170.64V156.256H0V171.461L12.8313 178.859V193.654L25.6548 201.052V215.025L13.5434 222.012L1.42404 215.026V200.641H0V215.847L12.8313 223.244V238.04L25.6548 245.437V259.411L13.5434 266.398L1.42404 259.412V245.027H0V260.232L12.8313 267.63V282.425L25.6548 289.823V303.796L13.5434 310.79L1.42404 303.797V289.412H0V304.618L12.8313 312.023V326.818L25.6548 334.216V348.19L13.5434 355.176L1.42404 348.19V333.805H0V349.011L12.8313 356.408V371.204L25.6548 378.6V392.575L13.5434 399.562L1.42404 392.576V378.191H0V393.396L12.8313 400.794V415.589L26.3669 423.397L39.1982 416L52.0217 423.397L64.8523 416L77.6766 423.397L90.5072 416L103.331 423.397L116.161 416L128.985 423.397L141.815 416L154.64 423.397L167.464 416L180.294 423.397L193.118 416L205.949 423.397L218.772 416L231.603 423.397L244.428 416L257.258 423.397L270.082 416L282.912 423.397L295.737 416L308.567 423.397L321.39 416L333.858 423.192L334.031 423.288H334.412L347.044 416L359.868 423.397L372.698 416L385.522 423.397L398.352 416L411.177 423.397L424.007 416L436.83 423.397L449.661 416L462.485 423.397L475.316 416L488.14 423.397L500.97 416L513.794 423.397L526.625 416L539.448 423.397L552.272 416L565.103 423.397L577.926 416L590.758 423.397L603.582 416L616.412 423.397L629.236 416L642.066 423.397L654.89 416L667.721 423.397L680.9 415.795L680.188 414.563L667.721 421.755L655.602 414.768V400.794L667.721 393.807L680.544 401.204L693.732 393.602L693.02 392.37L680.536 399.563L668.424 392.576V378.601L680.892 371.41L680.18 370.178L667.712 377.37L655.593 370.383V356.409L667.712 349.423L680.536 356.82L693.723 349.217L693.011 347.985L680.536 355.177L668.424 348.191V334.216L680.892 327.024L680.18 325.792L667.712 332.985L655.593 325.998V312.024L667.712 305.03L680.536 312.435L693.723 304.824L693.011 303.592L680.536 310.791L668.424 303.797V289.824L680.892 282.632L680.18 281.4L667.712 288.592L655.593 281.605V267.631L667.712 260.644L680.536 268.041L693.723 260.438L693.011 259.206L680.536 266.399L668.424 259.412V245.437L680.892 238.246L680.18 237.013L667.712 244.205L655.593 237.219V223.244L667.712 216.257L680.536 223.654L693.723 216.052L693.011 214.819L680.536 222.013L668.424 215.027V201.053L680.892 193.861L680.18 192.628L667.712 199.821L655.593 192.834V178.86L667.712 171.873L680.536 179.271L693.723 171.668L693.011 170.436L680.536 177.628L668.424 170.64V156.667L680.892 149.475L680.18 148.243L667.712 155.435L655.593 148.448V134.475L667.712 127.488L680.536 134.886L693.723 127.283L693.011 126.051L680.536 133.242L668.424 126.256V112.274L680.892 105.083L680.18 103.851L667.712 111.043L655.593 104.056V90.082L667.713 83.0941Z" fill="url(#paint0_radial_51_135)" />
          </g>
          <defs>
            <radialGradient id="paint0_radial_51_135" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(334.223 223.83) scale(256.883 256.625)">
              <stop />
              <stop offset="0.521667" stopColor="#FFAB0D" />
              <stop offset="1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
export default HomePage;
