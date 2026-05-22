import type { DeviceType } from "@/components/PlatformPreviews";

interface Props {
  image: string;
  device: DeviceType;
}

export default function LinkedInPreview({ image, device }: Props) {
  const sizes = device === "mobile"
    ? { profile: 128, post: 48, comment: 32, notification: 40, message: 48 }
    : { profile: 200, post: 48, comment: 32, notification: 40, message: 48 };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0A66C2]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        <h3 className="text-sm font-semibold text-gray-700">LinkedIn</h3>
        <span className="text-[10px] text-gray-400 ml-auto">{device === "mobile" ? "📱 Mobile" : "💻 Desktop"}</span>
      </div>

      {/* Profile */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Profile <span className="text-gray-300">({sizes.profile}×{sizes.profile}px)</span></p>
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="h-20 bg-gradient-to-r from-blue-700 to-blue-900" />
          <div className="px-4 pb-4">
            <div className="-mt-14 mb-2">
              <img src={image} alt="" style={{width: sizes.profile, height: sizes.profile}} className="rounded-full object-cover border-4 border-white" />
            </div>
            <p className="font-bold text-gray-900">Your Name</p>
            <p className="text-sm text-gray-600">Software Developer at Tech Company</p>
            <p className="text-xs text-gray-500 mt-1">Bangalore, Karnataka · 500+ connections</p>
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
              <p className="text-[10px] text-gray-500">Software Developer · 3h</p>
            </div>
          </div>
          <p className="text-sm text-gray-800 mb-3">
            Excited to share that I&apos;ve just completed a new project! 🚀
            <br /><br />
            #webdevelopment #nextjs #react
          </p>
          <div className="flex items-center gap-4 pt-3 border-t text-xs text-gray-500">
            <span>👍 Like</span><span>💬 Comment</span><span>🔁 Repost</span><span>📤 Send</span>
          </div>
        </div>
      </div>

      {/* Notification */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Notification <span className="text-gray-300">({sizes.notification}×{sizes.notification}px)</span></p>
        <div className="bg-white border rounded-xl p-3">
          <div className="flex items-center gap-3">
            <img src={image} alt="" style={{width: sizes.notification, height: sizes.notification}} className="rounded-full object-cover flex-shrink-0" />
            <p className="text-sm text-gray-800 flex-1"><span className="font-semibold">Your Name</span> viewed your profile <span className="text-gray-400 text-xs">· 1h</span></p>
          </div>
        </div>
      </div>

      {/* Messaging */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Messaging <span className="text-gray-300">({sizes.message}×{sizes.message}px)</span></p>
        <div className="bg-white border rounded-xl overflow-hidden">
          {["You", "Recruiter", "Colleague"].map((name, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 border-b last:border-0">
              <img
                src={i === 0 ? image : `https://ui-avatars.com/api/?name=${name}&background=random&size=96`}
                alt=""
                style={{width: sizes.message, height: sizes.message}}
                className="rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm">{name === "You" ? "Your Name" : name}</p>
                <p className="text-xs text-gray-500 truncate">{i === 0 ? "Thanks for connecting!" : "Hi, I saw your profile..."}</p>
              </div>
              <span className="text-[10px] text-gray-400">1d</span>
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
            <div className="bg-gray-50 border rounded-xl px-3 py-2 flex-1">
              <p className="font-semibold text-xs text-gray-900">Your Name</p>
              <p className="text-[10px] text-gray-500">Software Developer</p>
              <p className="text-sm text-gray-700 mt-1">Great insights! Thanks for sharing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
