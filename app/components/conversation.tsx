"use client"
import { useConversation } from "@11labs/react"
import { useCallback } from "react"
import { Phone, PhoneOff } from "lucide-react"

export function Conversation() {
  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),

    onError: (error) => console.error("Error:", error),
  })

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true })

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: "elIxmdwPGvUZvSQ7PMHF", // Replace with your agent ID
      })
    } catch (error) {
      console.error("Failed to start conversation:", error)
    }
  }, [conversation])

  const stopConversation = useCallback(async () => {
    await conversation.endSession()
  }, [conversation])

  return (
    <div className="flex flex-col items-center space-y-2 w-full max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-zinc-300 text-xs">
        <div className="flex flex-col items-center">
          <p>
            Status:
            {conversation.status === "connecting" ? (
              <span className="text-black"> {conversation.status}</span>
            ) : conversation.status === "connected" ? (
              <span className="text-green-600"> {conversation.status}</span>
            ) : (
              <span className="text-red-600"> {conversation.status}</span>
            )}
          </p>
          {/* </div> */}
          {/* {conversation.status === "connected" ? (
              <span className="text-green-600"> {conversation.status}</span>
            ) : (
              <span className="text-red-600">{conversation.status}</span>
            )}
          </p> */}
        </div>
        {conversation.status === "connected" ? (
          <div className="flex items-center gap-2">
            <p>Agent is {conversation.isSpeaking ? "speaking" : "listening"}</p>
          </div>
        ) : null}
      </div>
      <div className="flex">
        {conversation.status !== "connected" ? (
          <button
            onClick={startConversation}
            className="px-4 py-2 bg-black text-white rounded-[32px] flex flex-row hover:ring-3 hover:ring-zinc-100/20"
          >
            <Phone size={14} className="mr-2 mt-1" />
            Start Chat
          </button>
        ) : (
          <button
            onClick={stopConversation}
            className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 flex flex-row"
          >
            <PhoneOff size={14} className="mr-2 mt-1" />
            End Chat
          </button>
        )}
      </div>

      {/* <ChatHistory  /> */}
    </div>
  )
}
