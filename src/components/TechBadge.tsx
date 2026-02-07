export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-[11px] font-medium tracking-wide uppercase rounded bg-badge-bg text-badge-text">
      {label}
    </span>
  );
}
