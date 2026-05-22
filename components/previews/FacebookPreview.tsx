import type { DeviceType } from "@/components/PlatformPreviews";

interface Props {
  image: string;
  device: DeviceType;
}

export default function FacebookPreview({ image, device }: Props) {
  const sizes = device === "mobile"
    ? { profile: 128, post: 40, comment: 32, notification: 36, story: 56, messenger: 56 }
    : { profile: 170, post: 40, comment: 32, notification: 36, story: 56, messenger: 56 };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#1877F2]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        <h3 className="text-sm font-semibold text-gray-700">Facebook</h3>
        <span className="text-[10px] text-gray-400 ml-auto">{device === "mobile" ? "📱 Mobile" : "💻 Desktop"}</span>
      </div>

      {/* Profile */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Profile <span className="text-gray-300">({sizes.profile}×{sizes.profile}px)</span></p>
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="h-28 bg-gradient-to-r from-blue-400 to-blue-600" />
          <div className="px-4 pb-4">
            <div className="-mt-14 mb-2">
              <img src={image} alt="" style={{width: sizes.profile, height: sizes.profile}} className="rounded-full object-cover border-4 border-white" />
            </div>
            <p className="font-bold text-gray-900">Your Name</p>
            <p className="text-xs text-gray-500">1.2K friends · Lives in Bangalore</p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Stories <span className="text-gray-300">({sizes.story}×{sizes.story}px)</span></p>
        <div className="bg-white border rounded-xl p-4">
          <div className="flex gap-3 overflow-x-auto">
            {["You", "Friend", "Family"].map((name, i) => (
              <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className={`rounded-full p-[2px] ${i === 0 ? "bg-blue-500" : "bg-gray-300"}`} style={{width: sizes.story + 6, height: sizes.story + 6}}>
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

      {/* Post */}
      <div>
        <p className="text-xs text-gray-400 mb-2">In a Post <span className="text-gray-300">({sizes.post}×{sizes.post}px)</span></p>
        <div className="bg-white border rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <img src={image} alt="" style={{width: sizes.post, height: sizes.post}} className="rounded-full object-cover flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm text-gray-900">Your Name</p>
              <p className="text-[10px] text-gray-500">Just now · 🌐</p>
            </div>
          </div>
          <p className="text-sm text-gray-800 mb-3">Feeling good today! ☀️</p>
          <div className="flex items-center gap-4 pt-3 border-t text-xs text-gray-500">
            <span>👍 Like</span><span>💬 Comment</span><span>↗️ Share</span>
          </div>
        </div>
      </div>

      {/* Notification */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Notification <span className="text-gray-300">({sizes.notification}×{sizes.notification}px)</span></p>
        <div className="bg-blue-50 border rounded-xl p-3">
          <div className="flex items-center gap-3">
            <img src={image} alt="" style={{width: sizes.notification, height: sizes.notification}} className="rounded-full object-cover flex-shrink-0" />
            <p className="text-sm text-gray-800 flex-1"><span className="font-semibold">Your Name</span> updated their profile picture. <span className="text-gray-400 text-xs">Just now</span></p>
          </div>
        </div>
      </div>

      {/* Messenger */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Messenger <span className="text-gray-300">({sizes.messenger}×{sizes.messenger}px)</span></p>
        <div className="bg-white border rounded-xl overflow-hidden">
          {["You", "Best Friend", "Work"].map((name, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 border-b last:border-0">
              <img
                src={i === 0 ? image : `https://ui-avatars.com/api/?name=${name}&background=random&size=96`}
                alt=""
                style={{width: sizes.messenger, height: sizes.messenger}}
                className="rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm">{name}</p>
                <p className="text-xs text-gray-500 truncate">{i === 0 ? "You: Hey!" : "Sent a photo"}</p>
              </div>
              <span className="text-[10px] text-gray-400">2h</span>
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
            <div className="bg-gray-100 rounded-2xl px-3 py-2">
              <p className="font-semibold text-xs text-gray-900">Your Name</p>
              <p className="text-sm text-gray-700">Congratulations! 🎉</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
