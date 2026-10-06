"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { highlightIcons } from "@/components/ui/ContactDetails";

export function HighlightIcon({
  name,
  className = "h-5 w-5",
}: {
  name: keyof typeof highlightIcons;
  className?: string;
}) {
  return (
    <FontAwesomeIcon
      icon={highlightIcons[name]}
      className={className}
      aria-hidden
    />
  );
}
