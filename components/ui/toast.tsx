import * as React from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastProps {
  type: "success" | "error";
  title: string;
  message: string;
  onClose: () => void;
}

export function Toast({ type, title, message, onClose }: ToastProps) {
  return (
    <div
      role="alert"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex max-w-md items-start gap-3.5 rounded-2xl border p-4 shadow-xl transition-all animate-in slide-in-from-bottom-5 duration-300",
        type === "success"
          ? "border-emerald-200 bg-emerald-50/95 text-emerald-950 backdrop-blur-md"
          : "border-rose-200 bg-rose-50/95 text-rose-950 backdrop-blur-md"
      )}
    >
      <div className="shrink-0 pt-0.5">
        {type === "success" ? (
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        ) : (
          <AlertCircle className="h-5 w-5 text-rose-600" />
        )}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-stone-900">{title}</h4>
        <p className="mt-1 text-xs text-stone-700 leading-relaxed">{message}</p>
      </div>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="shrink-0 rounded-lg p-1 text-stone-400 hover:bg-stone-200/50 hover:text-stone-700 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
