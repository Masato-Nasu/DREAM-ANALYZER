"use client";

import UnifiedResult from "./UnifiedResult";

type Analysis={summary:string;elements:string[];synthesis:string};

export default function DiagnosisTimeline({initial,final}:{initial:Analysis;final:Analysis|null}){return <section className="diagnosisTimeline"><div className="diagnosisBlock initialDiagnosis"><div className="diagnosisLabel"><span>初診</span><small>INITIAL READING</small></div><UnifiedResult result={initial}/></div>{final&&<div className="diagnosisBlock finalDiagnosis"><div className="diagnosisLabel"><span>再診断</span><small>FOLLOW-UP READING</small></div><UnifiedResult result={final}/></div>}</section>}
