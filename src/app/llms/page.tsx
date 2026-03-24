import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LLMsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Large Language Models</h1>
        <p className="text-gray-400 text-lg">
          Understand the fundamentals of large language models — how they process input,
          generate output, and how message structure affects their behavior.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Link href="/llms/message-structure">
          <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="text-white">Message Structure</CardTitle>
              <CardDescription className="text-gray-400">
                Explore the ChatML message format used by modern LLMs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm">
                See a real example of how LLMs handle multi-turn conversations, tool calls,
                and structured responses using the ChatML format with system, user, and assistant roles.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
