import ArchFrame from "../common/ArchFrame";

export default function TeacherCard({ teacher }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-night-100 bg-paper-card p-6 text-center transition-colors hover:border-brass-300">
      <ArchFrame
        src={teacher.photo}
        alt={teacher.name}
        label="Photo"
        className="aspect-[4/5] w-32"
      />
      <h3 className="mt-4 font-display text-lg text-night-900">{teacher.name}</h3>
      <p className="font-body text-xs uppercase tracking-wide text-brass-700">{teacher.role}</p>
      <p className="mt-3 font-body text-sm leading-relaxed text-ink-faint">{teacher.bio}</p>
    </div>
  );
}
