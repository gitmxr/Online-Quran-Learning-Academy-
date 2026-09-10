import { Mail, MessageCircle, Globe2 } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppLink } from "../../config/siteConfig";

export default function TopBar() {
  return (
    <div className="hidden bg-night-950 text-paper/80 sm:block">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-5 py-2 text-xs sm:px-8 lg:px-10">
        <div className="flex items-center gap-5">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brass-300 transition-colors"
          >
            <MessageCircle size={13} aria-hidden="true" />
            {SITE_CONFIG.whatsappDisplay}
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-1.5 hover:text-brass-300 transition-colors"
          >
            <Mail size={13} aria-hidden="true" />
            {SITE_CONFIG.email}
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-paper/60">
          <Globe2 size={13} aria-hidden="true" />
          {SITE_CONFIG.availability}
        </div>
      </div>
    </div>
  );
}
