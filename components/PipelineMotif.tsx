"use client";

import { motion } from "@/components/Motion";

export function PipelineMotif({ className = "" }: { className?: string }) {
  const nodes = [
    { cx: 24, cy: 42, labelX: 24, labelY: 75, label: "Extract" },
    { cx: 146, cy: 132, labelX: 146, labelY: 165, label: "Transform" },
    { cx: 268, cy: 42, labelX: 268, labelY: 75, label: "Load" },
    { cx: 390, cy: 132, labelX: 390, labelY: 165, label: "Serve" },
  ];

  return (
    <motion.svg
      className={className}
      viewBox="0 0 420 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M24 42C86 42 84 132 146 132S206 42 268 42s60 90 122 90"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="5 7"
        initial={{ pathLength: 0, opacity: 0.4 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.85, delay: 0.35, ease: "easeOut" }}
      />
      {nodes.map((node, index) => (
        <g key={node.label}>
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="12"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.45 + index * 0.1, ease: "easeOut" }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.55 + index * 0.1, ease: "easeOut" }}
          />
          <motion.text
            x={node.labelX}
            y={node.labelY}
            textAnchor="middle"
            className="fill-current text-[9px]"
            fontSize="9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.6 + index * 0.1, ease: "easeOut" }}
          >
            {node.label}
          </motion.text>
        </g>
      ))}
    </motion.svg>
  );
}
