"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// 1. Separate the logic into a Child Component
function AnalysisContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const video = searchParams.get("video") || "";

  const [logs, setLogs] = useState([]);
  const [report, setReport] = useState(null);
  const [status, setStatus] = useState("starting");
  const esRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!video) {
      router.push("/");
      return;
    }

    setLogs([]);
    setReport(null);
    setStatus("running");

    const url = `http://localhost:8000/run-analysis-stream?video=${encodeURIComponent(
      video
    )}&full_audit=true`;

    const es = new EventSource(url);
    esRef.current = es;

    es.addEventListener("log", (e) => {
      try {
        const line = JSON.parse(e.data);
        setLogs((prev) => [...prev, line]);
      } catch {
        setLogs((prev) => [...prev, e.data]);
      }
    });

    es.addEventListener("done", (e) => {
      try {
        const r = JSON.parse(e.data);
        setReport(r);
      } catch {
        setReport({ raw: e.data });
      }
      setStatus("done");
      es.close();
    });

    es.addEventListener("error", () => {
      setLogs((prev) => [...prev, "⚠ SSE connection error"]);
      setStatus("error");
      try {
        es.close();
      } catch {}
    });

    return () => {
      try {
        es.close();
      } catch {}
    };
  }, [video, router]);

  // Auto-scroll logs
  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.scrollTop = panelRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#082235]">Audit in Progress</h1>
          <p className="text-sm text-[#082235]/60 break-all">{video}</p>
        </div>
        <span
          className={
            "px-3 py-1 rounded-full text-xs font-semibold " +
            (status === "running"
              ? "bg-amber-100 text-amber-700"
              : status === "done"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-rose-100 text-rose-700")
          }
        >
          {status.toUpperCase()}
        </span>
      </div>

      {/* Live terminal-style logs */}
      <div
        ref={panelRef}
        className="bg-black text-green-300 rounded-xl p-4 h-[60vh] overflow-auto text-sm font-mono"
      >
        {logs.length === 0 ? (
          <div className="text-xs text-gray-400">Waiting for output…</div>
        ) : (
          logs.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {line}
            </div>
          ))
        )}
      </div>

      <div className="mt-4 flex gap-3">
        <button
          className="px-4 py-2 bg-[#082235] text-white rounded-lg text-sm font-semibold"
          onClick={() => {
            try {
              esRef.current?.close();
            } catch {}
            router.push("/");
          }}
        >
          Back to Home
        </button>
      </div>

      {status === "done" && report && (
        <div className="mt-6 bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-bold text-[#082235] mb-2">Final Report</h2>
          <pre className="text-xs max-h-96 overflow-auto bg-[#F9FCF9] p-3 rounded">
            {JSON.stringify(report, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

// 2. Export the Page Component wrapped in Suspense
export default function AnalysisPage() {
  return (
    <div className="min-h-screen p-8 bg-[#F9FCF9]">
      {/* Suspense boundary required for useSearchParams */}
      <Suspense fallback={<div className="text-center p-10">Loading Analysis...</div>}>
        <AnalysisContent />
      </Suspense>
    </div>
  );
}