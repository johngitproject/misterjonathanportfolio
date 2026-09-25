import Image from "next/image";
import type { ProjectType } from "@/data/projects";

interface ProjectPreviewProps {
  type: ProjectType;
  title: string;
  tall?: boolean;
  cover?: { src: string; alt: string; ratio?: string };
  illustrativePrefix?: string;
}

/* Project cover when available (final illustration, object-contain:
   never cropped, never distorted). Otherwise the labelled
   illustrative SVG preview by project type, no fabricated
   metrics, performance or screenshots. */
export function ProjectPreview({ type, title, tall = false, cover, illustrativePrefix = "Illustrative" }: ProjectPreviewProps) {
  return (
    <div className="relative overflow-hidden rounded border border-line bg-base">
      {cover ? (
        <div
          className={`relative w-full overflow-hidden transition-transform duration-150 group-hover:scale-[1.01] ${
            tall ? "h-[300px] lg:h-[340px]" : "h-44 lg:h-48"
          }`}
        >
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 700px"
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className={`w-full ${
            tall ? "h-[300px] lg:h-[340px]" : "h-44 lg:h-48"
          }`}
        >
          <div className="h-full w-full transition-transform duration-150 group-hover:scale-[1.01]">
            {type === "product" ? (
              <ProductScene />
            ) : type === "research" ? (
              <ResearchScene />
            ) : (
              <InfraScene />
            )}
          </div>
          <span className="absolute left-3 top-3 rounded border border-line bg-panel px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-mute">
            {illustrativePrefix} — {title}
          </span>
        </div>
      )}
    </div>
  );
}

/* Product: application structure, chrome, sidebar, stat blocks,
   table rows. No numbers, no performance claims. */
function ProductScene() {
  return (
    <svg
      viewBox="0 0 800 360"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <rect x="0" y="0" width="800" height="40" fill="#0E111A" />
      <circle cx="28" cy="20" r="5" fill="#252A3A" />
      <circle cx="46" cy="20" r="5" fill="#252A3A" />
      <circle cx="64" cy="20" r="5" fill="#252A3A" />
      <rect x="96" y="13" width="220" height="14" rx="3" fill="#1A1F2D" />
      <rect x="0" y="40" width="800" height="1" fill="#252A3A" />
      <rect x="0" y="41" width="150" height="319" fill="#0E111A" />
      <rect x="150" y="41" width="1" height="319" fill="#252A3A" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x="16"
          y={70 + i * 40}
          width="118"
          height="22"
          rx="4"
          fill={i === 0 ? "#1A1F2D" : "transparent"}
          stroke="#252A3A"
        />
      ))}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={178 + i * 200}
          y="70"
          width="176"
          height="86"
          rx="6"
          fill="#0E111A"
          stroke="#252A3A"
        />
      ))}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={194 + i * 200}
          y="88"
          width="90"
          height="10"
          rx="2"
          fill="#252A3A"
        />
      ))}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={194 + i * 200}
          y="110"
          width="140"
          height="22"
          rx="3"
          fill="#141824"
        />
      ))}
      <rect
        x="178"
        y="180"
        width="594"
        height="152"
        rx="6"
        fill="#0E111A"
        stroke="#252A3A"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x="202"
          y={202 + i * 20}
          width={520 - i * 62}
          height="10"
          rx="2"
          fill={i % 2 === 0 ? "#141824" : "#1A1F2D"}
        />
      ))}
    </svg>
  );
}

/* Research: methodology sketch, grid, level lines, one path,
   one selected point. No axes values, no results. */
function ResearchScene() {
  return (
    <svg
      viewBox="0 0 800 360"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line
          key={`v${i}`}
          x1={60 + i * 100}
          y1="20"
          x2={60 + i * 100}
          y2="340"
          stroke="#141824"
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`h${i}`}
          x1="40"
          y1={60 + i * 60}
          x2="780"
          y2={60 + i * 60}
          stroke="#141824"
        />
      ))}
      {[120, 210, 300].map((y) => (
        <line
          key={y}
          x1="40"
          y1={y}
          x2="780"
          y2={y}
          stroke="#686F82"
          strokeDasharray="6 6"
          strokeWidth="1.5"
        />
      ))}
      <path
        d="M40 300 C140 290 170 220 260 225 C350 230 360 150 460 160 C560 170 590 240 690 200 C730 183 755 190 780 175"
        fill="none"
        stroke="#A4A9B8"
        strokeWidth="2"
      />
      <circle cx="460" cy="160" r="6" fill="#FF914D" />
      <circle cx="460" cy="160" r="11" fill="none" stroke="#FF914D" opacity="0.4" />
      <circle cx="260" cy="225" r="4" fill="#252A3A" stroke="#A4A9B8" />
      <circle cx="690" cy="200" r="4" fill="#252A3A" stroke="#A4A9B8" />
    </svg>
  );
}

/* Infrastructure: intended data flow. Design target,
   not an as-built diagram. */
function InfraScene() {
  const steps = [
    "SOURCES",
    "INGESTION",
    "NORMALIZATION",
    "DATABASE",
    "API",
    "ANALYSIS",
  ];
  return (
    <svg
      viewBox="0 0 800 360"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <line x1="400" y1="18" x2="400" y2="342" stroke="#363C52" strokeWidth="2" />
      {steps.map((step, i) => {
        const y = 24 + i * 54;
        return (
          <g key={step}>
            <rect
              x="270"
              y={y}
              width="260"
              height="38"
              rx="6"
              fill="#0E111A"
              stroke="#363C52"
              strokeWidth="1.5"
            />
            <text
              x="400"
              y={y + 24}
              textAnchor="middle"
              fill="#A4A9B8"
              fontSize="15"
              fontFamily="JetBrains Mono, monospace"
              letterSpacing="2"
            >
              {step}
            </text>
            {i < steps.length - 1 && (
              <path d="M392 62 h16 l-8 10 z" fill="#363C52" transform={`translate(0 ${i * 54})`} />
            )}
          </g>
        );
      })}
    </svg>
  );
}
