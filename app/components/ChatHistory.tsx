// "use client"

// import { type Message } from "@11labs/react"
// import { motion } from "motion/react"
// import { ElevenLabsClient } from "elevenlabs"
// const client = new ElevenLabsClient({
//   apiKey: "process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY",
// })
// const fetchConversation = async () => {
//   const conversation = await client.conversationalAi.getConversation(
//     "wGrrQlAcZwejZ91nn9Up"
//   )
//   const posts = await conversation.json()
// }
// export async function ChatHistory() {
//   return (
//     <div className="w-full max-w-2xl h-96 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-white">
//       {conversation.map((message, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className={`flex  mb-4`}
//         >
//           <div
//             className={`max-w-xs md:max-w-md p-3 rounded-lg ${
//               message.role === "assistant"
//                 ? "bg-blue-100 text-blue-900"
//                 : "bg-gray-100 text-gray-900"
//             }`}
//           >
//             <p className="text-sm font-medium mb-1">
//               {message.role === "assistant" ? "Marcus Aurelius" : "You"}
//             </p>
//             <p className="text-sm">{message.message}</p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   )
// }
// import { ElevenLabsClient } from "elevenlabs"

// const client = new ElevenLabsClient({
//   apiKey: "process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY",
// })
// await client.conversationalAi.getConversation("wGrrQlAcZwejZ91nn9Up")
// const conversation = client.conversationalAi.getConversation(
//   "wGrrQlAcZwejZ91nn9Up"
// )

// export default async function ChatHistory() {
//   const data = await fetch(
//     "https://api.elevenlabs.io/v1/convai/conversations/jBH7mwsxpsOz6k7MQgJ7",
//     {
//       headers: {
//         "xi-api-key": process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY,
//       },
//     }
//   )
//   const posts = await data.json()
//   const transcript = posts.transcript

//   console.log(transcript)
//   return (
//     <div>
//       {transcript.map((message, index) => (
//         <div
//           key={index}
//           className={`flex mb-4 ${
//             message.role === "agent" ? "justify-start" : "justify-end"
//           }`}
//         >
//           <div
//             className={`p-3 rounded-lg ${
//               message.role === "agent"
//                 ? "bg-blue-100 text-blue-900"
//                 : "bg-gray-100 text-gray-900"
//             }`}
//           >
//             <p className="text-sm font-medium mb-1">
//               {message.role === "agent" ? "Marcus Aurelius" : "You"}
//             </p>
//             <p className="text-sm">{message.message}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
