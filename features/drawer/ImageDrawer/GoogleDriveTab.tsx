"use client";

import { useState } from "react";
import { FaGoogleDrive, FaSpinner } from "react-icons/fa6";

type Props = {
  onSelect: (url: string) => void;
};

export function GoogleDriveTab(props: Props) {
  const { onSelect } = props;
  const [isConnecting, setIsConnecting] = useState(false);

  const handleOpenPicker = async () => {
    setIsConnecting(true);
    try {
      // 1. ここでGoogleのOAuth2認証を行い、アクセストークンを取得
      // 2. Google Picker APIを起動して、ユーザーに画像を選んでもらう
      // 3. 選ばれた画像のWeb表示用URL（またはダウンロードURL）を取得して onSelect(url) に渡す
      
      console.log("Google Pickerを開く処理");
    } catch (error) {
      console.error(error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={handleOpenPicker}
        className={`group flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 text-center transition cursor-pointer
          ${
            isConnecting
              ? "border-green-300 bg-green-50/30 cursor-not-allowed"
              : "border-gray-300 bg-gray-50 hover:border-green-500 hover:bg-green-50/50 hover:shadow-sm"
          }`}
      >
        {isConnecting ? (
          <div className="flex flex-col items-center gap-3">
            <FaSpinner className="h-10 w-10 animate-spin text-green-600" />
            <p className="text-sm font-semibold text-green-600">
              Google Driveに接続中...
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {/* Google Driveっぽいグリーンをアクセントに */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition duration-200">
              <FaGoogleDrive className="text-xl" />
            </div>

            <h4 className="text-base font-bold text-gray-900 mb-1">
              Google Drive から選択
            </h4>
            
            <p className="text-xs text-gray-500 leading-5">
              クリックしてGoogleアカウントに連携し、<br />
              共有可能な画像ファイルを選択します。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}