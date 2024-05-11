import { useState, useEffect } from "react";
import axios from "axios";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // ログイン状態をサーバーから取得するためのAPIリクエスト
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("/admin/home");
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        // エラー処理
        console.error("ログイン状態の取得に失敗しました:", error);
      }
    };

    // ログイン状態を取得する関数を呼び出す
    checkAuthStatus();
  }, []);

  return isLoggedIn;
};
