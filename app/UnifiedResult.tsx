"use client";

type Analysis={summary:string;elements:string[];synthesis:string};

export default function UnifiedResult({result}:{result:Analysis}){return <section className="results unifiedResult"><div className="sectionLabel"><span>02</span>DREAM READING</div><h2>{result.summary}</h2><div className="tags">{result.elements.map(x=><span key={x}>{x}</span>)}</div><article className="singleReading"><small>YOUR DREAM ANALYSIS</small><h3>夢が映している可能性</h3><p>{result.synthesis}</p></article><p className="readingNote">これは未来の予言や心理診断ではなく、夢から自分の経験や感情を振り返るための一つの読み方です。</p></section>}
