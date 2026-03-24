import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Course</Badge>
        <h1 className="text-4xl font-bold text-white mb-4">
          Prompt Engineering Foundations
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Master the art and science of crafting effective prompts for large language models.
          Learn how to communicate with AI systems more effectively and build better AI-powered applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">System Prompts</CardTitle>
            <CardDescription className="text-gray-400">
              Learn how to craft effective system prompts that guide model behavior
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-sm">
              Understand the role of system prompts in shaping AI responses, setting context,
              and establishing behavioral guidelines for your applications.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Agent Prompts</CardTitle>
            <CardDescription className="text-gray-400">
              Design prompts for autonomous AI agents and multi-step workflows
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-sm">
              Explore techniques for building AI agents that can reason, plan, and execute
              complex multi-step tasks through well-structured prompting.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">LLMs</CardTitle>
            <CardDescription className="text-gray-400">
              Deep dive into large language model fundamentals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-sm">
              Understand how LLMs process messages, the structure of conversations,
              and how different message roles affect model behavior.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Best Practices</CardTitle>
            <CardDescription className="text-gray-400">
              Industry-proven techniques and patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-sm">
              Discover battle-tested prompt engineering patterns used by leading AI practitioners
              to build reliable, consistent AI-powered systems.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
