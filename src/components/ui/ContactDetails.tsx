"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouseChimney,
  faLightbulb,
  faListCheck,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "@/lib/site";

type ContactDetailsProps = {
  showAddress?: boolean;
  className?: string;
  compact?: boolean;
};

export function PhoneIcon({ className = "h-[1.05rem] w-[1.05rem]" }: { className?: string }) {
  return (
    <FontAwesomeIcon icon={faPhone} className={className} aria-hidden />
  );
}

export function MailIcon({ className = "h-[1.05rem] w-[1.05rem]" }: { className?: string }) {
  return (
    <FontAwesomeIcon icon={faEnvelope} className={className} aria-hidden />
  );
}

export function LocationIcon({ className = "h-[1.05rem] w-[1.05rem]" }: { className?: string }) {
  return (
    <FontAwesomeIcon icon={faLocationDot} className={className} aria-hidden />
  );
}

export function ContactDetails({
  showAddress = false,
  className = "",
  compact = false,
}: ContactDetailsProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div
        className={`grid gap-3 ${showAddress ? "sm:grid-cols-2" : "grid-cols-1"}`}
      >
        <div className="border border-line bg-bg/50 p-4 md:p-5">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-brass-soft">
            Call
          </p>
          <div className={`mt-3 ${compact ? "space-y-2" : "space-y-2.5"}`}>
            {siteConfig.phones.map((phone, i) => (
              <a
                key={phone}
                href={`tel:${siteConfig.phoneRaw[i]}`}
                className="group flex items-center gap-2.5 text-ink transition-colors hover:text-brass-soft"
              >
                <PhoneIcon className="h-3.5 w-3.5 shrink-0 text-brass transition-colors group-hover:text-brass-soft" />
                <span className="text-sm tracking-[0.04em]">{phone}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border border-line bg-bg/50 p-4 md:p-5">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-brass-soft">
            Email
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group mt-3 flex items-center gap-2.5 text-ink transition-colors hover:text-brass-soft"
          >
            <MailIcon className="h-3.5 w-3.5 shrink-0 text-brass transition-colors group-hover:text-brass-soft" />
            <span className="break-all text-sm tracking-[0.04em]">
              {siteConfig.email}
            </span>
          </a>
        </div>
      </div>

      {showAddress ? (
        <div className="border border-line bg-bg/50 p-4 md:p-5">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-brass-soft">
            Visit
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {siteConfig.locations.map((place) => (
              <a
                key={place.label}
                href={place.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-line bg-bg p-4 transition-colors hover:border-brass/40"
              >
                <span className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-brass-soft">
                  <LocationIcon className="h-3 w-3 text-brass" />
                  {place.label}
                </span>
                <span className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted transition-colors group-hover:text-ink">
                  {place.address}
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-brass transition-all group-hover:gap-2.5">
                  Open in Maps
                  <span aria-hidden>→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export const highlightIcons = {
  design: faLightbulb,
  process: faListCheck,
  spaces: faHouseChimney,
} as const;
