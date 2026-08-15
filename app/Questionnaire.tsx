"use client";

import { useEffect, useState } from "react";

export default function Questionnaire({questions,loading,onSubmit}:{questions:string[];loading:boolean;onSubmit:(answers:string)=>void}){
  const [answers,setAnswers]=useState<Record<number,string>>({});
  useEffect(()=>{try{setAnswers(JSON.parse(localStorage.getItem("dream-analyzer-associations")||"{}"))}catch{}},[]);
  const update=(i:number,value:string)=>{const next={...answers,[i]:value};setAnswers(next);try{localStorage.setItem("dream-analyzer-associations",JSON.stringify(next))}catch{}};
  const compiled=questions.map((q,i)=>answers[i]?.trim()?`質問: ${q}\n回答: ${answers[i].trim()}`:"").filter(Boolean).join("\n\n");
  return <section className="questionnaire">
    <div className="sectionLabel"><span>03</span>YOUR ASSOCIATIONS</div>
    <h2>あなた自身の連想を聞かせてください</h2>
    <p>ここへの回答を優先して、分析をもう一段深めます。すべてに答える必要はありません。</p>
    <div className="answerGrid">{questions.map((q,i)=><label key={`${q}-${i}`}><span>{i+1}</span><strong>{q}</strong><textarea value={answers[i]||""} onChange={e=>update(i,e.target.value)} placeholder="ここに回答を入力…"/></label>)}</div>
    <button className="deepen" disabled={!compiled||loading} onClick={()=>onSubmit(compiled)}>{loading?"回答を分析中…":"回答を反映して再分析する"}<b>→</b></button>
  </section>;
}
