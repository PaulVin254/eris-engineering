import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Copy,
  Check,
  AlertTriangle,
  Paperclip,
  Mic,
  CornerDownLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { ChatMessageList } from "@/components/ui/chat-message-list";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
} from "@/components/ui/chat-bubble";
import { ChatInput } from "@/components/ui/chat-input";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const Calculator = () => {
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      return;
    }

    if (!sessionStarted && !email.trim()) {
      toast({
        title: "Email Required",
        description: "Please provide your email to start the consultation.",
        variant: "destructive",
      });
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: prompt,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${apiUrl}/api/consult-fundi`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_input: userMessage.content,
          email: email,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to get estimate");
      }

      const data = await res.json();

      const fundiResponse =
        data.fundi_response ||
        data.response ||
        data.result ||
        JSON.stringify(data, null, 2);

      const assistantMessage: Message = {
        role: "assistant",
        content: fundiResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setSessionStarted(true);

      if (
        data.html_report ||
        fundiResponse.toLowerCase().includes("total cost") ||
        fundiResponse.toLowerCase().includes("breakdown")
      ) {
        toast({
          title: "Estimate Ready!",
          description: "Fundi has finished calculating your project costs.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Connection Error",
        description:
          "Could not connect to Fundi. Is the backend server running?",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-8 px-4 container mx-auto max-w-4xl flex flex-col h-[calc(100vh-4rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 space-y-2 flex-shrink-0"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Fundi: Construction Partner
          </h1>
          <p className="text-muted-foreground">
            Real-time, AI-powered cost breakdown.
          </p>
        </motion.div>

        <Card className="flex-1 flex flex-col border-2 border-slate-200 shadow-xl overflow-hidden bg-background">
          <CardHeader className="bg-slate-900 text-white p-4 flex-shrink-0">
            <CardTitle className="flex items-center gap-2 text-xl">
              <span className="animate-pulse text-orange-500">●</span>
              Consultation Room
            </CardTitle>
            {!sessionStarted && (
              <div className="mt-2">
                <Input
                  type="email"
                  placeholder="Enter your email to start..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
            )}
          </CardHeader>

          <CardContent className="flex-1 p-0 overflow-hidden flex flex-col">
            <ChatMessageList className="flex-1 p-4">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8 opacity-50">
                  <span className="text-6xl mb-4">👷🏾‍♂️</span>
                  <p>
                    Tell me about your project. I can help with estimates,
                    materials, and labor costs.
                  </p>
                </div>
              )}
              {messages.map((msg, idx) => (
                <ChatBubble
                  key={idx}
                  variant={msg.role === "user" ? "sent" : "received"}
                >
                  <ChatBubbleAvatar
                    fallback={msg.role === "user" ? "US" : "FU"}
                    src={msg.role === "user" ? "" : "/placeholder.svg"}
                  />
                  <ChatBubbleMessage
                    variant={msg.role === "user" ? "sent" : "received"}
                  >
                    {msg.content}
                    {msg.role === "assistant" && (
                      <div className="mt-2 flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => {
                            navigator.clipboard.writeText(msg.content);
                            toast({ title: "Copied" });
                          }}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </ChatBubbleMessage>
                </ChatBubble>
              ))}
              {loading && (
                <ChatBubble variant="received">
                  <ChatBubbleAvatar fallback="FU" src="/placeholder.svg" />
                  <ChatBubbleMessage isLoading />
                </ChatBubble>
              )}
            </ChatMessageList>

            <div className="p-4 bg-background border-t">
              <form
                onSubmit={handleSubmit}
                className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
              >
                <ChatInput
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message here..."
                  className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center p-3 pt-0">
                  <Button variant="ghost" size="icon" type="button">
                    <Paperclip className="size-4" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                  <Button variant="ghost" size="icon" type="button">
                    <Mic className="size-4" />
                    <span className="sr-only">Use Microphone</span>
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    className="ml-auto gap-1.5"
                    disabled={loading || !prompt.trim()}
                  >
                    Send Message
                    <CornerDownLeft className="size-3.5" />
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Calculator;
