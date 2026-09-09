import { useState } from "react";
export default function App(){
  const [url,setUrl]=useState("https://example.com");
  const [report,setReport]=useState<any>(null);
  function audit(){
    // mock audit - in real would fetch and parse
    setReport({ title: url.includes("example")?"Example Domain":"Page", hasTitle:true, h1:1, meta: url.length>20?"good":"short" });
  }
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a]">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="text-2xl font-light">seo-audit-lite</h1>
        <div className="mt-4 flex gap-2">
          <input value={url} onChange={e=>setUrl(e.target.value)} className="flex-1 rounded-xl border border-[#ebe7e0] px-3 py-2 text-sm" />
          <button onClick={audit} className="rounded-xl bg-[#1a1a1a] px-4 py-2 text-sm text-white">Audit</button>
        </div>
        {report && (
          <div className="mt-6 rounded-2xl border border-[#ebe7e0] bg-white p-4 text-sm space-y-1">
            <div>Title: {report.title} {report.hasTitle?"✓":"✗"}</div>
            <div>H1 count: {report.h1}</div>
            <div>URL length: {report.meta}</div>
          </div>
        )}
      </div>
    </main>
  );
}
