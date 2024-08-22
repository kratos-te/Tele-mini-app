import axios from 'axios';

const api = axios.create({
//   baseURL: 'https://tap-squad-back.vercel.app/', // Adjust the baseURL to your backend server
  baseURL: 'http://localhost:5000'
});

export const updateItem = async (id: any, data: { count: number }) => {
  try {
    const response = await api.post(`/getItem`, { t_id: id, data });
    return {
      status: true,
      data: response.data
    }
  } catch (error: any) {
    return {
      message: error?.response?.data?.message,
      status: false
    }
  }
};

export const getItem = async (id: string) => {
  try {
    const response = await api.get(`/items/${id}`);
    return response.data
  } catch (error) {
    console.error("Failed to get item", error);
    throw error;
  }
}

export const login = async (tgId: string, password: string) => {
  try {
    const response = await api.post(`/login`, { tgId, password });

    return {
      status: true,
      data: response.data
    }
  } catch (error: any) {
    return {
      message: error?.response?.data?.message,
      status: false
    }
  }

}

export const getAllItems = async () => {

  try {
    const response = await api.post(`/items-list`, {});

    return {
      status: true,
      data: response.data
    }
  } catch (error: any) {
    return {
      message: error?.response?.data?.message,
      status: false
    }
  }
}

export const getLeaderboard = async (token: string | null) => {

  if (!token) {
    return {
      status: false,
      message: "No token found in localStorage"
    };
  }

  try {
    const response = await api.get(`/leaderboard`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      status: true,
      data: response.data
    };
  } catch (error: any) {
    return {
      message: error?.response?.data?.message || 'An error occurred',
      status: false
    };
  }
};

export const getItemDetails = async (userId: string, token: string | null) => {

  if (!token) {
    return {
      status: false,
      message: "No token found in localStorage"
    };
  }

  try {
    const response = await api.post('/item-details', { userId }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      status: true,
      data: response.data
    };
  } catch (error: any) {
    return {
      message: error?.response?.data?.message || 'An error occurred',
      status: false
    };
  }
};

export const updateLoginTime = async (userId: string, token: string | null): Promise<{ status: boolean; message: string; data?: any }> => {
  
  if (!token) {
    return {
      status: false,
      message: "No token found in localStorage"
    };
  }

  try {
    const response = await api.post('/updated-login-time', { userId }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      status: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error: any) {
    return {
      status: false,
      message: error?.response?.data?.message || 'An error occurred'
    };
  }
};

export const updateHourlyClaimTime = async (userId: string, token: string | null): Promise<{ status: boolean; message: string; data?: any }> => {

  if (!token) {
    return {
      status: false,
      message: "No token found in localStorage"
    };
  }

  try {
    const response = await api.post('/updated-hourly-time', { userId }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      status: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error: any) {
    return {
      status: false,
      message: error?.response?.data?.message || 'An error occurred'
    };
  }
};

export const updateDailyClaimTime = async (userId: string, token: string | null): Promise<{ status: boolean; message: string; data?: any }> => {

  if (!token) {
    return {
      status: false,
      message: "No token found in localStorage"
    };
  }

  try {
    const response = await api.post('/updated-daily-time', { userId }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      status: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error: any) {
    return {
      status: false,
      message: error?.response?.data?.message || 'An error occurred'
    };
  }
};

export const updateWallet = async (userId: string, wallet: string | null, token: string): Promise<{ status: boolean; message: string; data?: any }> => {

  if (!token) {
    return {
      status: false,
      message: "No token found in localStorage"
    };
  }

  try {
    const response = await api.post('/updated-wallet', { userId, wallet }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      status: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error: any) {
    return {
      status: false,
      message: error?.response?.data?.message || 'An error occurred'
    };
  }
};

export const updateHourly = async (userId: string, hourly: number, token: string | null): Promise<{ status: boolean; message: string; data?: any }> => {

  if (!token) {
    return {
      status: false,
      message: "No token found in localStorage"
    };
  }

  try {
    const response = await api.post('/updated-hourly', { userId, hourly }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      status: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error: any) {
    return {
      status: false,
      message: error?.response?.data?.message || 'An error occurred'
    };
  }
};

export const updateDaily = async (userId: string, daily: number, token: string | null): Promise<{ status: boolean; message: string; data?: any }> => {

  if (!token) {
    return {
      status: false,
      message: "No token found in localStorage"
    };
  }

  try {
    const response = await api.post('/updated-daily', { userId, daily }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      status: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error: any) {
    return {
      status: false,
      message: error?.response?.data?.message || 'An error occurred'
    };
  }
};


export const purchaseItem = async (userId: string, itemId: string, token: string | null): Promise<{ status: boolean; message: string; data?: any }> => {

  if (!token) {
    return {
      status: false,
      message: "No token found in localStorage"
    };
  }

  try {
    const response = await api.post('/item-purchase', { userId, item_id: itemId }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      status: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error: any) {
    return {
      status: false,
      message: error?.response?.data?.message || 'An error occurred'
    };
  }
};

export const upgradeTap = async (t_id: string) => {
  try {
    const response = await api.post(`/upgrade-tap`, { t_id });

    return {
      status: true,
      data: response.data
    }
  } catch (error: any) {
    return {
      message: error?.response?.data?.message,
      status: false
    }
  }
}

export const setSocial = async (t_id: string, number: number, token: string | null) => {
  
  if (!token) {
    return {
      status: false,
      message: "No token found in localStorage"
    };
  }

  try {
    const response = await api.post('/set-social', { t_id, number });

    return {
      status: true,
      data: response.data
    };
  } catch (error: any) {
    return {
      message: error?.response?.data?.message || 'An error occurred',
      status: false
    };
  }
}

export const addBalance = async (t_id: string, amount: number, token: string | null) => {

  if (!token) {
    return {
      status: false,
      message: "No token found in localStorage"
    };
  }

  try {
    const response = await api.post('/add-balance', { t_id, amount });

    return {
      status: true,
      data: response.data
    };
  } catch (error: any) {
    return {
      message: error?.response?.data?.message || 'An error occurred',
      status: false
    };
  }
};

export const upgradeEnergy = async (t_id: string) => {
  try {
    const response = await api.post(`/upgrade-energy`, { t_id });

    return {
      status: true,
      data: response.data
    }
  } catch (error: any) {
    return {
      message: error?.response?.data?.message,
      status: false
    }
  }
}

export const itemPurchase = async (item_id: string) => {
  try {
    const response = await api.post(`/item-purchase`, { item_id });

    return {
      status: true,
      data: response.data
    }
  } catch (error: any) {
    return {
      message: error?.response?.data?.message,
      status: false
    }
  }
}

export const getUpdatedUserDetails = async (token: string | null | null) => {
  const HEADER = () => ({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  try {
    const response = await api.post("/updated-user-data", {}, HEADER());

    return {
      status: true,
      data: response.data
    }

  } catch (error: any) {
    return {
      message: error?.response?.data?.message,
      status: false
    }
  }
}

export const purchaseMineCard = async (t_id: string | null | null, index: number) => {  
    try {
      const response = await api.post("/purchase-card", {
        t_id,
        index
      });

      return {
        status: true,
        data: response.data
      }
    } catch (error: any) {
        return {
            message: error?.response?.data?.message,
            status: false
        }
    }
}
