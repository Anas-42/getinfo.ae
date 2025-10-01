export default function Card({children,className=""}){
  return (<div className={`rounded-3xl shadow-card ring-1 ring-white/10 card-bg ${className}`}>{children}</div>);
}
