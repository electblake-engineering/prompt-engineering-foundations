"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/system-prompts", label: "System Prompts" },
  { href: "/agent-prompts", label: "Agent Prompts" },
  {
    href: "/llms",
    label: "LLMs",
    children: [
      { href: "/llms/message-structure", label: "Message Structure" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-gray-950 border-r border-gray-800 flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-white font-bold text-sm uppercase tracking-wider">
          Prompt Engineering
        </h1>
        <p className="text-gray-400 text-xs mt-1">Foundations</p>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                  pathname === item.href
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="ml-4 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                          pathname === child.href
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
