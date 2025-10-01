export function Button({
  children,
  variant = "solid",     // "solid" | "outline"
  size = "md",           // "sm" | "md" | "lg"
  animate = true,        // turn off if you ever need
  className = "",
  ...props
}) {
  const base =
    "pill font-bold inline-flex items-center justify-center gi-btn " +
    (animate ? "shine" : "");

  const sizeCls =
    size === "sm" ? "gi-btn-sm" :
    size === "lg" ? "gi-btn-lg"  :
                    "gi-btn-md";

  const solid =
    "text-white gi-gradient shadow-card hover:brightness-110";

  const outline =
    "ring-1 ring-white/70 text-white/90 gi-outline-hover";

  const styles = variant === "outline" ? outline : solid;

  return (
    <button
      className={`${base} ${sizeCls} ${styles} ${className}`}
      {...props}
    >
      {/* gradient layer stays behind the content */}
      <span className="relative z-[2]">{children}</span>
    </button>
  );
}
