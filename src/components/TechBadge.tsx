export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-badge-bg text-badge-text">
      {label}
    </span>
  );
}
