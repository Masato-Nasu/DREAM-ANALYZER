"use client";

type Entry={id:number;date:string;title:string;dream:string;mood:string;lens:string;result:unknown};

export default function JournalExport({history}:{history:Entry[]}){
  function download(){
    const associations=(()=>{try{return JSON.parse(localStorage.getItem("dream-analyzer-associations")||"{}")}catch{return {}}})();
    const payload={format:"DREAM_ANALYZER_JOURNAL",version:1,exportedAt:new Date().toISOString(),dreamCount:history.length,dreams:history,latestAssociations:associations};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=`dream-analyzer-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  return <button className="jsonExport" onClick={download} disabled={!history.length}><span>JSON</span><div><strong>記録を書き出す</strong><small>夢・分析結果・最新の自由連想をバックアップ</small></div><b>↓</b></button>;
}
