export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,96,255,0.22),transparent_38%),radial-gradient(circle_at_20%_80%,rgba(110,231,249,0.12),transparent_28%),radial-gradient(circle_at_80%_24%,rgba(232,121,249,0.14),transparent_32%),#050816]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:110px_110px] opacity-[0.18] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="absolute left-[-8rem] top-[10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl animate-float-slow" />
      <div className="absolute right-[-10rem] top-[16rem] h-[32rem] w-[32rem] rounded-full bg-violet-500/12 blur-3xl animate-float-reverse" />
      <div className="absolute bottom-[-10rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-3xl animate-float-slower" />
      <div className="noise-mask absolute inset-0 opacity-[0.16]" />
    </div>
  );
}
