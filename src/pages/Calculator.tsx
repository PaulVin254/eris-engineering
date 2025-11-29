import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Copy, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
import Footer from "@/components/Footer";

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
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your project details.",
        variant: "destructive",
      });
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

    // Add user message to chat
    const userMessage: Message = {
      role: "user",
      content: prompt,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setLoading(true);

    try {
      const res = await fetch("/api/consult-fundi", {
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

      // Extract the Fundi response
      const fundiResponse =
        data.fundi_response ||
        data.response ||
        data.result ||
        JSON.stringify(data, null, 2);

      // Add assistant message to chat
      const assistantMessage: Message = {
        role: "assistant",
        content: fundiResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setSessionStarted(true);

      // Check if this is a final estimate (contains html_report or specific keywords)
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Copied!",
      description: "Message copied to clipboard.",
    });
  };

  const copyAllMessages = () => {
    const allText = messages
      .map((msg) => `${msg.role === "user" ? "You" : "Fundi"}: ${msg.content}`)
      .join("\n\n");
    navigator.clipboard.writeText(allText);
    toast({
      title: "Copied!",
      description: "Full conversation copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />

      <main className="pt-24 pb-16 px-4 container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10 space-y-4">
            <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-4">
              <span className="text-4xl">👷🏾‍♂️</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Fundi: Your Honest Construction Partner
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a real-time, AI-powered cost breakdown for your Kenyan
              construction project. No hidden fees. No "foreman math".
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="border-2 border-slate-200 shadow-xl">
              <CardHeader className="bg-slate-900 text-white rounded-t-xl p-6">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <span className="animate-pulse text-orange-500">●</span>
                  Consultation Room
                </CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  {sessionStarted
                    ? "Continue the conversation with Fundi..."
                    : "Tell us what you want to build. Be as specific as possible."}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                {/* Conversation History */}
                {messages.length > 0 && (
                  <div className="space-y-4 max-h-[500px] overflow-y-auto border border-slate-200 rounded-lg p-4 bg-slate-50">
                    {messages.map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex gap-3 ${
                          msg.role === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            msg.role === "user"
                              ? "bg-orange-500 text-white"
                              : "bg-white border border-slate-200 text-slate-900"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold opacity-70">
                              {msg.role === "user" ? "You" : "🏗️ Fundi"}
                            </span>
                          </div>
                          <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">
                            {msg.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    {loading && (
                      <div className="flex gap-3 justify-start">
                        <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3">
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-orange-500" />
                            <span className="text-sm text-slate-600">
                              Fundi is thinking...
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Email Input (only shown before session starts) */}
                {!sessionStarted && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 uppercase tracking-wider">
                      Your Email
                    </label>
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        className="h-14 text-lg pl-12 border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <Send className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Message Input Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 uppercase tracking-wider">
                      {sessionStarted ? "Your Message" : "Project Details"}
                    </label>
                    <Textarea
                      placeholder={
                        sessionStarted
                          ? "Type your response here..."
                          : "e.g., I want a 3 bedroom bungalow in Kitengela with premium finishes, a perimeter wall, and a septic tank. The land is 50x100."
                      }
                      className={`text-lg p-4 border-slate-300 focus:border-orange-500 focus:ring-orange-500/20 resize-none ${
                        sessionStarted ? "min-h-[100px]" : "min-h-[150px]"
                      }`}
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSubmit(e);
                        }
                      }}
                    />
                    <p className="text-xs text-slate-500">
                      Press Enter to send, Shift+Enter for new line
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="flex-1 h-14 text-lg font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.01]"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          {sessionStarted
                            ? "Send Message"
                            : "Start Consultation"}
                        </span>
                      )}
                    </Button>
                    {messages.length > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={copyAllMessages}
                        className="h-14 px-6"
                      >
                        <Copy className="w-5 h-5" />
                      </Button>
                    )}
                  </div>
                </form>

                {/* Disclaimer */}
                {messages.length > 0 && (
                  <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
                    <AlertTriangle className="w-5 h-5 shrink-0 text-yellow-600" />
                    <p>
                      <strong>Disclaimer:</strong> This is an AI-generated
                      estimate based on current market rates. Actual costs may
                      vary based on site conditions, specific material choices,
                      and labor fluctuations. For a binding quotation, please
                      book a site visit.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
