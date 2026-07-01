interface SectionHeadingProps {
  /** Small label above the title. */
  eyebrow: string;
  title: string;
  /** Optional supporting line under the title. */
  description?: string;
}

/** Consistent section header: eyebrow + title + optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-accent text-sm font-semibold tracking-wide uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-fg mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted mt-4 text-base sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
