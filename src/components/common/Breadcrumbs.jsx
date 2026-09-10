import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/** items: [{ label, to }] — last item is the current page (no link). */
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-faint">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={13} aria-hidden="true" />}
              {isLast || !item.to ? (
                <span aria-current={isLast ? "page" : undefined} className="text-ink-soft">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="hover:text-night-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
