import { Conversation } from "./components/conversation"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 max-w-6xl w-full items-center justify-between font-sans text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          AI Marcus Aurelius
        </h1> */}
      <div className="z-10 justify-between items-center max-w-6xl w-full ">
        <div>
          <Card className="bg-purple-700 rounded-3xl  text-white w-1/3 mx-auto shadow-xl border border-solid border-neutral-500	">
            <CardHeader className="space-y-1 p-3">
              <CardTitle className="flex justify-center items-center text-3xl font-bold">
                <Avatar className="mr-2 shadow-sm flex ring-1 ring-neutral-200	justify-center items-center w-12 h-12">
                  <AvatarImage src="./marcus2.png" alt="Avatar" className="" />
                </Avatar>
                AI Marcus Aurelius
              </CardTitle>
              <CardDescription className="flex justify-center text-pretty items-center text-sm tracking-tighter	 text-zinc-200">
                A conversational agent that can help you with your daily life.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <Conversation />
            </CardContent>
          </Card>
        </div>
        <elevenlabs-convai agent-id="elIxmdwPGvUZvSQ7PMHF"></elevenlabs-convai>
        <script
          src="https://elevenlabs.io/convai-widget/index.js"
          async
          type="text/javascript"
          className="flex justify-center items-center "
        ></script>
        {/* <Conversation /> */}
      </div>
    </main>
  )
}
