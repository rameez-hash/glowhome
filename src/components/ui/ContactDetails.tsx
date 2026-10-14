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
    <div className={`space-y-0 border-t border-line ${className}`}>
      <div className="border-b border-line py-5">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-brass-soft">
          Call
        </p>
        <div className={`mt-4 ${compact ? "space-y-2.5" : "space-y-3"}`}>
          {siteConfig.phones.map((phone, i) => (
            <a
              key={phone}
              href={`tel:${siteConfig.phoneRaw[i]}`}
              className="group flex items-center gap-3 text-ink transition-colors hover:text-brass-soft"
            >
              <PhoneIcon className="h-[1.05rem] w-[1.05rem] shrink-0 text-brass transition-colors group-hover:text-brass-soft" />
              <span className="text-sm tracking-[0.04em] md:text-[0.95rem]">
                {phone}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="border-b border-line py-5">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-brass-soft">
          Email
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="group mt-4 flex items-center gap-3 text-ink transition-colors hover:text-brass-soft"
        >
          <MailIcon className="h-[1.05rem] w-[1.05rem] shrink-0 text-brass transition-colors group-hover:text-brass-soft" />
          <span className="text-sm tracking-[0.04em] md:text-[0.95rem]">
            {siteConfig.email}
          </span>
        </a>
      </div>

      {showAddress ? (
        <div className="border-b border-line py-5">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-brass-soft">
            Visit
          </p>
          <div className={`mt-4 ${compact ? "space-y-4" : "space-y-5"}`}>
            {siteConfig.locations.map((place) => (
              <a
                key={place.label}
                href={place.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-ink transition-colors hover:text-brass-soft"
              >
                <LocationIcon className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-brass transition-colors group-hover:text-brass-soft" />
                <span className="max-w-sm">
                  <span className="block text-[0.65rem] uppercase tracking-[0.16em] text-brass-soft">
                    {place.label}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed tracking-[0.02em] text-ink-muted transition-colors group-hover:text-brass-soft">
                    {place.address}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-brass">
                    Open in Maps
                    <span aria-hidden>→</span>
                  </span>
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
