import { Badge } from "@/components/ui/badge";

export default function AgentPromptsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold text-white">Agent Prompts</h1>
          <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
            Coming Soon
          </Badge>
        </div>
        <p className="text-gray-400 text-lg">
          Explore techniques for designing prompts that power autonomous AI agents capable of
          reasoning, planning, and executing complex multi-step workflows.
        </p>
      </div>

      <div className="border border-gray-700 rounded-lg p-8 text-center">
        <p className="text-gray-500 text-sm">Content is being prepared. Check back soon!</p>
      </div>
    </div>
  );
}
