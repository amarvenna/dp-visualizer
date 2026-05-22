import type { DeviceType } from "@/components/PlatformPreviews";

interface Props {
  image: string;
  device: DeviceType;
}

export default function XPreview({ image, device }: Props) {
  const sizes = device === "mobile"
    ? { profile: 133, tweet: 40, reply: 32, notification: 36, dm: 48 }
    : { profile: 133, tweet: 48, reply: 32, notification: 36, dm: 48 };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        <h3 className="text-sm font-semibold text-gray-700">X (Twitter)</h3>
        <span className="text-[10px] text-gray-400 ml-auto">{device === "mobile" ? "📱 Mobile" : "💻 Desktop"}</span>
      </div>

      {/* Profile */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Profile <span className="text-gray-300">({sizes.profile}×{sizes.profile}px)</span></p>
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="h-24 bg-gradient-to-r from-gray-700 to-gray-900" />
          <div className="px-4 pb-4">
            <div className="-mt-12 mb-2">
              <img src={image} alt="" style={{width: sizes.profile, height: sizes.profile}} className="rounded-full object-cover border-4 border-white" />
            </div>
            <p className="font-bold text-gray-900">Your Name</p>
            <p className="text-sm text-gray-500">@yourhandle</p>
            <p className="text-sm text-gray-700 mt-1">Building cool stuff 🚀</p>
            <div className="flex gap-4 mt-2 text-xs text-gray-500">
              <span><strong className="text-gray-900">256</strong> Following</span>
              <span><strong className="text-gray-900">1.4K</strong> Followers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tweet */}
      <div>
        <p className="text-xs text-gray-400 mb-2">In a Post <span className="text-gray-300">({sizes.tweet}×{sizes.tweet}px)</span></p>
        <div className="bg-white border rounded-xl p-4">
          <div className="flex gap-3">
            <img src={image} alt="" style={{width: sizes.tweet, height: sizes.tweet}} className="rounded-full object-cover flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm text-gray-900">Your Name</span>
                <span className="text-gray-500 text-sm">@yourhandle · 2h</span>
              </div>
              <p className="text-sm text-gray-800 mt-1">Just shipped a new feature! Let me know what you think 🎉</p>
              <div className="flex gap-8 mt-3 text-xs text-gray-500">
                <span>💬 12</span><span>🔁 5</span><span>❤️ 48</span><span>📊 1.2K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Notification <span className="text-gray-300">({sizes.notification}×{sizes.notification}px)</span></p>
        <div className="bg-white border rounded-xl p-3">
          <div className="flex items-center gap-3">
            <span className="text-red-500 text-lg">❤️</span>
            <img src={image} alt="" style={{width: sizes.notification, height: sizes.notification}} className="rounded-full object-cover flex-shrink-0" />
            <p className="text-sm text-gray-800 flex-1"><span className="font-semibold">Your Name</span> liked your post <span className="text-gray-400 text-xs">· 5m</span></p>
          </div>
        </div>
      </div>

      {/* DM */}
      <div>
        <p className="text-xs text-gray-400 mb-2">DM List <span className="text-gray-300">({sizes.dm}×{sizes.dm}px)</span></p>
        <div className="bg-white border rounded-xl overflow-hidden">
          {["You", "friend", "dev_community"].map((name, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 border-b last:border-0">
              <img
                src={i === 0 ? image : `https://ui-avatars.com/api/?name=${name}&background=random&size=96`}
                alt=""
                style={{width: sizes.dm, height: sizes.dm}}
                className="rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm">{i === 0 ? "Your Name" : name}</p>
                <p className="text-xs text-gray-500 truncate">{i === 0 ? "Thanks!" : "Hey, check this out"}</p>
              </div>
              <span className="text-[10px] text-gray-400">3h</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reply */}
      <div>
        <p className="text-xs text-gray-400 mb-2">In a Reply <span className="text-gray-300">({sizes.reply}×{sizes.reply}px)</span></p>
        <div className="bg-white border rounded-xl p-4">
          <div className="flex gap-3">
            <img src={image} alt="" style={{width: sizes.reply, height: sizes.reply}} className="rounded-full object-cover flex-shrink-0" />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-xs text-gray-900">Your Name</span>
                <span className="text-gray-500 text-xs">@yourhandle · 1h</span>
              </div>
              <p className="text-sm text-gray-700 mt-0.5">This is incredible! 👏</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
