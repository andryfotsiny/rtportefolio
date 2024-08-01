"use client"
import CountUp from "react-countup";

const stats=[
  {
    num:5,
    text:"ans d'expérience"
  },
  {
    num:35,
    text:"projets réalisés environ"
  },
  {
    num:8,
    text:"Technologies maîtrisées"
  },
]
const Stats = () => {
  return (<section>
        <div className="container mx-auto h-3">
          <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto wl:max-w-none   ">
            {stats.map((item,index)=>{
            return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-items-start " key={index}>
                <CountUp  end={item.num}   className="text-4xl xl:text-6xl font-extrabold"/>
            <p className={`${item.text.length<15 ? "max-w-[100px]" : "max-w-[150px]"}`}>{item.text}</p>
            </div>
          })}
          </div>
        </div>
      </section>
  )
}
export default Stats
