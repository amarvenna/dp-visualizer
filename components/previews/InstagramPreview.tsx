import type { DeviceType } from "@/components/PlatformPreviews";

interface Props {
  image: string;
  device: DeviceType;
}

export default function InstagramPreview({ image, device }: Props) {
  const sizes = device === "mobile"
    ? { profile: 77, story: 56, comment: 28, notification: 36, dm: 56 }
    : { profile: 150, story: 56, comment: 32, notification: 36, dm: 56 };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-6 h-6"><defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FFDC80"/><stop offset="25%" stopColor="#F77737"/><stop offset="50%" stopColor="#F56040"/><stop offset="75%" stopColor="#C13584"/><stop offset="100%" stopColor="#833AB4"/></linearGradient></defs><path fill="url(#ig)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        <h3 className="text-sm font-semibold text-gray-700">Instagram</h3>
        <span className="text-[10px] text-gray-400 ml-auto">{device === "mobile" ? "📱 Mobile" : "💻 Desktop"}</span>
      </div>

      {/* Profile page */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Profile Page <span className="text-gray-300">({sizes.profile}×{sizes.profile}px)</span></p>
        <div className="bg-white border rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" style={{width: sizes.profile + 10, height: sizes.profile + 10}}>
              <div className="w-full h-full p-[2px] rounded-full bg-white">
                <img src={image} alt="" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm">yourname</p>
              <div className="flex gap-4 mt-2 text-center">
                <div><p className="font-bold text-sm">42</p><p className="text-[10px] text-gray-500">Posts</p></div>
                <div><p className="font-bold text-sm">1.2K</p><p className="text-[10px] text-gray-500">Followers</p></div>
                <div><p className="font-bold text-sm">380</p><p className="text-[10px] text-gray-500">Following</p></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-900 mt-3 font-medium">Your Name</p>
          <p className="text-xs text-gray-500">Digital Creator ✨</p>
        </div>
      </div>

      {/* Story tray */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Stories Tray <span className="text-gray-300">({sizes.story}×{sizes.story}px)</span></p>
        <div className="bg-white border rounded-xl p-4">
          <div className="flex gap-3 overflow-x-auto">
            {["You", "travel", "food", "music"].map((name, i) => (
              <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0">
                <div
                  className={`rounded-full p-[2px] ${i === 0 ? "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" : "bg-gray-300"}`}
                  style={{width: sizes.story + 6, height: sizes.story + 6}}
                >
                  <div className="w-full h-full p-[2px] rounded-full bg-white">
                    <img
                      src={i === 0 ? image : `https://ui-avatars.com/api/?name=${name}&background=random&size=96`}
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-[10px] text-gray-600">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notification */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Notification <span className="text-gray-300">({sizes.notification}×{sizes.notification}px)</span></p>
        <div className="bg-white border rounded-xl p-3">
          <div className="flex items-center gap-3">
            <img src={image} alt="" style={{width: sizes.notification, height: sizes.notification}} className="rounded-full object-cover flex-shrink-0" />
            <p className="text-sm text-gray-800 flex-1"><span className="font-semibold">yourname</span> liked your photo. <span className="text-gray-400 text-xs">2h</span></p>
            <div className="w-10 h-10 bg-gray-200 rounded flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* DM list */}
      <div>
        <p className="text-xs text-gray-400 mb-2">DM List <span className="text-gray-300">({sizes.dm}×{sizes.dm}px)</span></p>
        <div className="bg-white border rounded-xl overflow-hidden">
          {["You", "bestfriend", "colleague"].map((name, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 border-b last:border-0">
              <img
                src={i === 0 ? image : `https://ui-avatars.com/api/?name=${name}&background=random&size=96`}
                alt=""
                style={{width: sizes.dm, height: sizes.dm}}
                className="rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm">{i === 0 ? "yourname" : name}</p>
                <p className="text-xs text-gray-500 truncate">{i === 0 ? "Sent a photo" : "Active 2h ago"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comment */}
      <div>
        <p className="text-xs text-gray-400 mb-2">In Comments <span className="text-gray-300">({sizes.comment}×{sizes.comment}px)</span></p>
        <div className="bg-white border rounded-xl p-4">
          <div className="flex items-start gap-2">
            <img src={image} alt="" style={{width: sizes.comment, height: sizes.comment}} className="rounded-full object-cover flex-shrink-0" />
            <div>
              <p className="text-sm"><span className="font-semibold">yourname</span> This looks amazing! 🙌</p>
              <p className="text-[10px] text-gray-400 mt-0.5">2h · Reply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
