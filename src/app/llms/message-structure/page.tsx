const examples = [
  {
    title: "Weather Tool Conversation (Claude)",
    description:
      "Claude-generated ChatML transcript showing repeat tool calls in a multi-turn weather lookup.",
    content: `<|im_start|>system
# Tools

You have access to the following functions:

<tools>
{"type": "function", "function": {"name": "get_weather", "description": "Get current weather for a location", "parameters": {"type": "object", "properties": {"location": {"type": "string", "description": "City name"}, "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}}, "required": ["location"]}}}
</tools>

If you choose to call a function ONLY reply in the following format with NO suffix:

<tool_call>
<function=example_function_name>
<parameter=example_parameter_1>
value_1
</parameter>
<parameter=example_parameter_2>
This is the value for the second parameter
that can span
multiple lines
</parameter>
</function>
</tool_call>

<IMPORTANT>
Reminder:
- Function calls MUST follow the specified format: an inner <function=...></function> block must be nested within <tool_call></tool_call> XML tags
- Required parameters MUST be specified
- You may provide optional reasoning for your function call in natural language BEFORE the function call, but NOT after
- If there is no function call available, answer the question like normal with your current knowledge and do not tell the user about function calls
</IMPORTANT>

You are a helpful assistant.<|im_end|>
<|im_start|>user
What's the weather in Tokyo?<|im_end|>
<|im_start|>assistant
I'll check the weather for you.

<tool_call>
<function=get_weather>
<parameter=location>
Tokyo
</parameter>
<parameter=unit>
celsius
</parameter>
</function>
</tool_call><|im_end|>
<|im_start|>user
<tool_response>
{"temperature": 22, "condition": "sunny", "unit": "celsius"}
</tool_response><|im_end|>
<|im_start|>user
Thanks! And what about Paris?<|im_end|>
<|im_start|>assistant
<think>
The user is asking about the weather in Paris. I should call the get_weather function again.
</think>

Let me check the weather in Paris for you.

<tool_call>
<function=get_weather>
<parameter=location>
Paris
</parameter>
<parameter=unit>
celsius
</parameter>
</function>
</tool_call><|im_end|>
<|im_start|>user
<tool_response>
{"temperature": 18, "condition": "cloudy", "unit": "celsius"}
</tool_response><|im_end|>
<|im_start|>assistant
<think>
I have the Paris weather data now. Let me present it to the user.
</think>

The weather in Paris is currently 18°C and cloudy.<|im_end|>`,
  },
  {
    title: "Multi-Modal Weather + SMS (ChatGPT)",
    description:
      "ChatGPT-generated template that mixes vision placeholders with chained tool calls for weather lookup and SMS delivery.",
    content: `<|im_start|>system
# Tools

You have access to the following functions:



If you choose to call a function ONLY reply in the following format with NO suffix:

<tool_call>
<function=example_function_name>
<parameter=example_parameter_1>
value_1

<parameter=example_parameter_2>
This is the value for the second parameter
that can span
multiple lines


</parameter=example_parameter_2></parameter=example_parameter_1></function=example_function_name></tool_call>

<important>
Reminder:
- Function calls MUST follow the specified format: an inner <function=...> block must be nested within <tool_call></tool_call> XML tags
- Required parameters MUST be specified
- You may provide optional reasoning for your function call in natural language BEFORE the function call, but NOT after
- If there is no function call available, answer the question like normal with your current knowledge and do not tell the user about function calls
</function=...></important>

You are a concise assistant that can analyze text, images, video, and tool results.<|im_end|>
<|im_start|>user
Summarize everything briefly.<|im_end|>
<|im_start|>user
Picture 1: <|vision_start|><|image_pad|><|vision_end|>
Video 1: <|vision_start|><|video_pad|><|vision_end|>
Check the weather in Toronto and text it to +14165550123.<|im_end|>
<|im_start|>assistant
I will check the weather and send the result by text.

<tool_call>
<function=get_weather>
<parameter=city>
Toronto

<parameter=unit>
C


</parameter=unit></parameter=city></function=get_weather></tool_call>

<tool_call>
<function=send_text>
<parameter=phone>
+14165550123

<parameter=message>
Current weather in Toronto: 7 C and cloudy.


</parameter=message></parameter=phone></function=send_text></tool_call><|im_end|>
<|im_start|>user
<tool_response>
{"city":"Toronto","unit":"C","temperature":7,"condition":"Cloudy"}
</tool_response>
<tool_response>
{"status":"sent","phone":"+14165550123"}
</tool_response><|im_end|>
<|im_start|>assistant
<think>
The weather result is 7 C and cloudy, and the text message was successfully sent.
</think>

Toronto is currently 7 C and cloudy, and the text message was sent successfully.<|im_end|>
<|im_start|>assistant
<think>
<__filter_complete__></__filter_complete__></think><|im_end|>`,
  },
];

export default function MessageStructurePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Message Structure</h1>
        <p className="text-gray-400 text-lg mb-2">
          This example demonstrates the ChatML message format — a structured way to represent
          multi-turn conversations with LLMs, including system instructions, tool definitions,
          and tool call/response cycles.
        </p>
      </div>

      <div className="space-y-8">
        {examples.map((example) => (
          <div key={example.title} className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-3">{example.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{example.description}</p>
            <pre className="bg-gray-950 border border-gray-700 rounded-lg p-6 overflow-x-auto text-sm text-green-400 font-mono whitespace-pre leading-relaxed">
              {example.content}
            </pre>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-2">Special Tokens</h3>
          <p className="text-gray-400 text-sm">
            <code className="text-green-400">{"<|im_start|>"}</code> and{" "}
            <code className="text-green-400">{"<|im_end|>"}</code> delimit each message turn.
          </p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-2">Message Roles</h3>
          <p className="text-gray-400 text-sm">
            Three roles: <code className="text-blue-400">system</code>,{" "}
            <code className="text-blue-400">user</code>, and{" "}
            <code className="text-blue-400">assistant</code> structure the conversation.
          </p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-2">Tool Calls</h3>
          <p className="text-gray-400 text-sm">
            The assistant uses <code className="text-yellow-400">{"<tool_call>"}</code> blocks
            to invoke functions and receive structured responses.
          </p>
        </div>
      </div>
    </div>
  );
}
