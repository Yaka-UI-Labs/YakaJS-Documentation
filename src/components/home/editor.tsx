import { ReactNode } from "react";

export function Editor({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl bg-transparent border border-white/10">
      <div className="rounded-xl p-1 text-sm scheme-dark">
        <div className="flex gap-2 p-2">
          <span className="size-3 rounded-full bg-white/20"></span>
          <span className="size-3 rounded-full bg-white/20"></span>
          <span className="size-3 rounded-full bg-white/20"></span>
        </div>
        <div className="with-line-numbers text-[13px]/6 *:*:p-3!">{children}</div>
      </div>
    </div>
  );
}
