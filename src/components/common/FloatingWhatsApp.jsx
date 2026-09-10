import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../../config/siteConfig";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Noor Ul Quran Online Academy on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#1F4A3C] py-3 pl-3 pr-3 text-paper shadow-lantern transition-all duration-300 hover:pr-5 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={22} aria-hidden="true" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-[9rem] group-focus-visible:max-w-[9rem]">
        WhatsApp Us
      </span>
    </a>
  );
}
