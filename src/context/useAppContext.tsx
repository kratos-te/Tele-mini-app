"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface Item {
  item_id: string;
  level: number;
  time_stamp: string;
  _id: string;
}

interface Invitee {
  tgId: string;
  timestamp: string;
}

interface User {
  _id: string;
  t_id: string;
  t_name: string;
  balance: number;
  earnPerTap: number;
  energy: number;
  items: Item[];
  referalLink?: string;
  inviter?: string;
  invitees: Invitee[];
  isPremium: boolean;
  mine_levels: number[];
  last_login_timestamp?: string;
  last_daily_claim_timestamp?: string;
  last_daily_reward?: number;
  last_hourly_claim_timestamp?: string;
  last_hourly_reward?: number;
  totalEarned: number;
  __v: number;
  social_claim: number;
}

interface GemData {
  _id: string;
  level_required: number;
  item_name: string;
  cost: number;
  passive_income: number;
  imgSrc: string;
  itemLevel: number;
  baseCost: number;
}

interface AppContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  balance: number;
  setBalance: (balance: number) => void;
  totalEarned: number;
  setTotalEarned: (totalEarned: number) => void;
  userLevel: number;
  setUserLevel: (userLevel: number) => void;
  invitees: Invitee[];
  setInvitees: (invitees: Invitee[]) => void;
  totalPassiveIncome: number;
  setTotalPassiveIncome: (totalPassiveIncome: number) => void;
  profitPerHour: number;
  setProfitPerHour: (profitPerHour: number) => void;
  claimedIndexes: number[];
  setClaimedIndexes: (claimedIndexes: number[]) => void;
  characterId: number;
  setCharacterId: (characterId: number) => void;
  authToken: string | null;
  setAuthToken: (authToken: string | null) => void;
  gemData: GemData[];
  setGemData: (gemData: GemData[]) => void;
  avatar: string;
  setAvatar: (avatar: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [totalEarned, setTotalEarned] = useState<number>(0);
  const [userLevel, setUserLevel] = useState<number>(0);
  const [invitees, setInvitees] = useState<Invitee[]>([]);
  const [totalPassiveIncome, setTotalPassiveIncome] = useState<number>(0);
  const [profitPerHour, setProfitPerHour] = useState<number>(0);
  const [claimedIndexes, setClaimedIndexes] = useState<number[]>([]);
  const [characterId, setCharacterId] = useState<number>(0);
  const [authToken, setAuthToken] = useState<string | null>("");
  const [gemData, setGemData] = useState<GemData[]>([]);
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    if (user) {
      setBalance(user.balance);
      setTotalEarned(user.totalEarned);
    }
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        balance,
        setBalance,
        totalEarned,
        setTotalEarned,
        userLevel,
        setUserLevel,
        invitees,
        setInvitees,
        totalPassiveIncome,
        setTotalPassiveIncome,
        profitPerHour,
        setProfitPerHour,
        claimedIndexes,
        setClaimedIndexes,
        characterId,
        setCharacterId,
        authToken,
        setAuthToken,
        gemData,
        setGemData,
        avatar,
        setAvatar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
