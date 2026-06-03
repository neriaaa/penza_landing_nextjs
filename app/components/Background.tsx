export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-neutral-950">
      <div className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-emerald-900/20 blur-[120px]"></div>
      <div className="absolute -bottom-[10%] -right-[10%] h-[50vw] w-[50vw] rounded-full bg-amber-900/10 blur-[120px]"></div>
    </div>
  );
}