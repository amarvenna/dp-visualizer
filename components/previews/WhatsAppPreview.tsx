"use client";
import { useState } from "react";
import type { DeviceType } from "@/components/PlatformPreviews";

interface Props {
  image: string;
  device: DeviceType;
}

export default function WhatsAppPreview({ image, device }: Props) {
  const [dpView, setDpView] = useState<"none" | "square" | "full">("none");

  const sizes = device === "mobile"
    ? { profile: 140, chatList: 49, notification: 40, conversation: 28 }
    : { profile: 200, chatList: 49, notification: 40, conversation: 33 };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <h3 className="text-sm font-semibold text-gray-700">WhatsApp</h3>
        <span className="text-[10px] text-gray-400 ml-auto">{device === "mobile" ? "📱 Mobile" : "💻 Desktop"}</span>
      </div>

      {/* Profile view */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Profile View <span className="text-gray-300">({sizes.profile}×{sizes.profile}px)</span></p>
        <div className="bg-[#0b141a] rounded-xl p-6 flex flex-col items-center">
          <img src={image} alt="" style={{width: sizes.profile, height: sizes.profile}} className="rounded-full object-cover mb-3" />
          <p className="text-white font-medium">Your Name</p>
          <p className="text-gray-400 text-xs">Online</p>
        </div>
      </div>

      {/* Chat list */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Chat List <span className="text-gray-300">({sizes.chatList}×{sizes.chatList}px)</span></p>
        <div className="bg-white border rounded-xl overflow-hidden">
          {["You", "Family Group", "Work Team"].map((name, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 border-b last:border-0">
              <img
                src={i === 0 ? image : `https://ui-avatars.com/api/?name=${name}&background=random&size=96`}
                alt=""
                style={{width: sizes.chatList, height: sizes.chatList}}
                className="rounded-full object-cover cursor-pointer flex-shrink-0"
                onClick={() => i === 0 && setDpView("square")}
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm">{name}</p>
                <p className="text-xs text-gray-500 truncate">
                  {i === 0 ? "Hey! How are you?" : i === 1 ? "Mom: Dinner is ready 🍕" : "Meeting at 3pm"}
                </p>
              </div>
              <span className="text-[10px] text-gray-400">
                {i === 0 ? "now" : i === 1 ? "12:30" : "Yesterday"}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-400 mt-1 italic">Tap your DP to see how it looks when someone clicks on it</p>
      </div>

      {/* DP Click Preview - Square then Full (WhatsApp behavior) */}
      {dpView !== "none" && (
        <div>
          <p className="text-xs text-gray-400 mb-2">
            {dpView === "square" ? "DP Tap — Square Preview (1st tap)" : "DP Tap — Full View (2nd tap)"}
          </p>
          <div
            className="bg-black/90 rounded-xl flex items-center justify-center p-4 cursor-pointer min-h-[200px]"
            onClick={() => setDpView(dpView === "square" ? "full" : "none")}
          >
            {dpView === "square" ? (
              <img src={image} alt="" className="w-48 h-48 sm:w-64 sm:h-64 object-cover" />
            ) : (
              <img src={image} alt="" className="w-full max-w-xs object-contain" />
            )}
          </div>
          <p className="text-[10px] text-gray-400 mt-1 italic">
            {dpView === "square" ? "Tap to see full view (like 2nd tap in WhatsApp)" : "Tap to close"}
          </p>
        </div>
      )}

      {/* Notification */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Notification <span className="text-gray-300">({sizes.notification}×{sizes.notification}px)</span></p>
        <div className="bg-gray-100 border rounded-xl p-3 flex items-start gap-3">
          <img src={image} alt="" style={{width: sizes.notification, height: sizes.notification}} className="rounded-full object-cover flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-sm">Your Name</p>
            <p className="text-xs text-gray-600 truncate">Hey! How are you? 👋</p>
          </div>
          <span className="text-[10px] text-gray-400 flex-shrink-0">now</span>
        </div>
      </div>

      {/* In Conversation */}
      <div>
        <p className="text-xs text-gray-400 mb-2">
          In Conversation <span className="text-gray-300">({sizes.conversation}×{sizes.conversation}px · {device === "mobile" ? "Group chats only" : "Web WhatsApp"})</span>
        </p>
        <div className="bg-[#0b141a] rounded-xl p-4 space-y-2">
          <div className="flex items-end gap-2">
            <img src={image} alt="" style={{width: sizes.conversation, height: sizes.conversation}} className="rounded-full object-cover flex-shrink-0" />
            <div className="bg-[#202c33] text-white text-sm px-3 py-2 rounded-xl rounded-bl-none max-w-[70%]">
              Hey! Check out my new profile pic 😄
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#005c4b] text-white text-sm px-3 py-2 rounded-xl rounded-br-none max-w-[70%]">
              Looks great! 🔥
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
