import{u as p,r as l,s as h,j as t,b as e,L as b,a4 as u,av as r,aw as f}from"./index-b88e1732.js";import{C as i}from"./Highlight-71997208.js";import{I as c}from"./IconCode-24e24bcd.js";import{I as w}from"./IconUsers-08d1f0e4.js";import{I as g}from"./IconCloudDownload-77eebb6a.js";const C=()=>{const m=p();l.useEffect(()=>{m(h("Counter"))});const[s,x]=l.useState([]),d=a=>{s.includes(a)?x(o=>o.filter(n=>n!==a)):x([...s,a])};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(b,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Counter"})})]}),t("div",{className:"pt-5 space-y-8",children:[t("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e(u,{})}),e("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e("a",{href:"https://www.npmjs.com/package/react-countup",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-countup"})]}),t("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-6",children:[t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Simple Counter"}),e("button",{onClick:()=>d("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(c,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5 grid grid-cols-3 justify-items-center gap-3 max-w-[900px] mx-auto",children:[t("div",{children:[e("div",{className:"w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e(r,{start:0,end:710,duration:7,className:"text-primary text-xl sm:text-3xl text-center"})}),e("h4",{className:"text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"HOURS"})]}),t("div",{children:[e("div",{className:"w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e(r,{start:0,end:915,duration:7,className:"text-primary text-xl sm:text-3xl text-center"})}),e("h4",{className:"text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"TICKETS"})]}),t("div",{children:[e("div",{className:"w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e(r,{start:0,end:580,duration:7,className:"text-primary text-xl sm:text-3xl text-center"})}),e("h4",{className:"text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"CUSTOMERS"})]})]}),s.includes("code1")&&e(i,{children:e("pre",{className:"language-typescript",children:`import CountUp from 'react-countup';

<div className="mb-5 grid grid-cols-3 justify-items-center gap-3 max-w-[900px] mx-auto">
    <div>
        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <CountUp start={0} end={710} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
        </div>
        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">HOURS</h4>
    </div>
    <div>
        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <CountUp start={0} end={915} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
        </div>
        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">TICKETS</h4>
    </div>
    <div>
        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <CountUp start={0} end={580} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
        </div>
        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">CUSTOMERS</h4>
    </div>
</div>
`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"With Icon"}),e("button",{onClick:()=>d("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(c,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5 grid grid-cols-3 justify-items-center gap-3 max-w-[900px] mx-auto",children:[t("div",{children:[e("div",{className:"w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e(r,{start:0,end:105,duration:7,className:"text-primary text-xl sm:text-3xl text-center"})}),t("h4",{className:"text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:[e(w,{className:"sm:w-6 sm:h-6 text-primary mx-auto mb-2"}),"Clients"]})]}),t("div",{children:[e("div",{className:"w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e(r,{start:0,end:300,duration:7,className:"text-primary text-xl sm:text-3xl text-center"})}),t("h4",{className:"text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:[e(g,{className:"sm:w-6 sm:h-6 text-primary mx-auto mb-2"}),"Downloads"]})]}),t("div",{children:[e("div",{className:"w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e(r,{start:0,end:58,duration:7,className:"text-primary text-xl sm:text-3xl text-center"})}),t("h4",{className:"text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:[e(f,{className:"sm:w-6 sm:h-6 text-primary mx-auto mb-2"}),"Awards"]})]})]}),s.includes("code2")&&e(i,{children:e("pre",{className:"language-typescript",children:`import CountUp from 'react-countup';

<div className="mb-5 grid grid-cols-3 justify-items-center gap-3 max-w-[900px] mx-auto">
    <div>
        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <CountUp start={0} end={105} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
        </div>
        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">
            <svg>...</svg>
            Clients
        </h4>
    </div>
    <div>
        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <CountUp start={0} end={300} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
        </div>
        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">
        <svg>...</svg>
            Downloads
        </h4>
    </div>
    <div>
        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <CountUp start={0} end={58} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
        </div>
        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">
        <svg>...</svg>
            Awards
        </h4>
    </div>
</div>

`})})]})]})]})]})};export{C as default};
