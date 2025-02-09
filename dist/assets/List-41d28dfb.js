import{u as k,r as o,s as D,b as a,j as i,x as C,L as E,f as I,ad as $,ae as w,a8 as J,o as G}from"./index-b88e1732.js";import{s as S}from"./sortBy-4c775b17.js";const F=()=>{const L=k();o.useEffect(()=>{L(D("Invoice List"))});const[r,x]=o.useState([{id:1,invoice:"081451",name:"Laurie Fox",email:"lauriefox@company.com",date:"15 Dec 2020",amount:"2275.45",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:2,invoice:"081452",name:"Alexander Gray",email:"alexGray3188@gmail.com",date:"20 Dec 2020",amount:"1044.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:3,invoice:"081681",name:"James Taylor",email:"jamestaylor468@gmail.com",date:"27 Dec 2020",amount:"20.00",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:4,invoice:"082693",name:"Grace Roberts",email:"graceRoberts@company.com",date:"31 Dec 2020",amount:"344.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:5,invoice:"084743",name:"Donna Rogers",email:"donnaRogers@hotmail.com",date:"03 Jan 2021",amount:"405.15",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:6,invoice:"086643",name:"Amy Diaz",email:"amy968@gmail.com",date:"14 Jan 2020",amount:"100.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:7,invoice:"086773",name:"Nia Hillyer",email:"niahillyer666@comapny.com",date:"20 Jan 2021",amount:"59.21",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:8,invoice:"087916",name:"Mary McDonald",email:"maryDonald007@gamil.com",date:"25 Jan 2021",amount:"79.00",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:9,invoice:"089472",name:"Andy King",email:"kingandy07@company.com",date:"28 Jan 2021",amount:"149.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:10,invoice:"091768",name:"Vincent Carpenter",email:"vincentcarpenter@gmail.com",date:"30 Jan 2021",amount:"400",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:11,invoice:"095841",name:"Kelly Young",email:"youngkelly@hotmail.com",date:"06 Feb 2021",amount:"49.00",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:12,invoice:"098424",name:"Alma Clarke",email:"alma.clarke@gmail.com",date:"10 Feb 2021",amount:"234.40",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"}]),y=(e=null)=>{if(window.confirm("Are you sure want to delete selected row ?"))if(e)d(r.filter(t=>t.id!==e)),p(r.filter(t=>t.id!==e)),x(r.filter(t=>t.id!==e)),f(""),g([]);else{const h=(P||[]).map(b=>b.id),v=r.filter(b=>!h.includes(b.id));d(v),p(v),x(v),f(""),g([]),c(1)}},[u,c]=o.useState(1),N=[10,20,30,50,100],[l,j]=o.useState(N[0]),[n,p]=o.useState(S(r,"invoice")),[R,d]=o.useState(n),[P,g]=o.useState([]),[s,f]=o.useState(""),[m,A]=o.useState({columnAccessor:"firstName",direction:"asc"});return o.useEffect(()=>{c(1)},[l]),o.useEffect(()=>{const e=(u-1)*l,t=e+l;d([...n.slice(e,t)])},[u,l,n]),o.useEffect(()=>{p(()=>r.filter(e=>e.invoice.toLowerCase().includes(s.toLowerCase())||e.name.toLowerCase().includes(s.toLowerCase())||e.email.toLowerCase().includes(s.toLowerCase())||e.date.toLowerCase().includes(s.toLowerCase())||e.amount.toLowerCase().includes(s.toLowerCase())||e.status.tooltip.toLowerCase().includes(s.toLowerCase())))},[s]),o.useEffect(()=>{const e=S(n,m.columnAccessor);d(m.direction==="desc"?e.reverse():e),c(1)},[m]),a("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:i("div",{className:"invoice-table",children:[i("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:[i("div",{className:"flex items-center gap-2",children:[i("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>y(),children:[a(C,{}),"Delete"]}),i(E,{to:"/apps/invoice/add",className:"btn btn-primary gap-2",children:[a(I,{}),"Add New"]})]}),a("div",{className:"ltr:ml-auto rtl:mr-auto",children:a("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:s,onChange:e=>f(e.target.value)})})]}),a("div",{className:"datatables pagination-padding",children:a($,{className:"whitespace-nowrap table-hover invoice-table",records:R,columns:[{accessor:"invoice",sortable:!0,render:({invoice:e})=>a(w,{to:"/apps/invoice/preview",children:a("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})})},{accessor:"name",sortable:!0,render:({name:e,id:t})=>i("div",{className:"flex items-center font-semibold",children:[a("div",{className:"p-0.5 bg-white-dark/30 rounded-full w-max ltr:mr-2 rtl:ml-2",children:a("img",{className:"h-8 w-8 rounded-full object-cover",src:`/assets/images/profile-${t}.jpeg`,alt:""})}),a("div",{children:e})]})},{accessor:"email",sortable:!0},{accessor:"date",sortable:!0},{accessor:"amount",sortable:!0,titleClassName:"text-right",render:({amount:e,id:t})=>a("div",{className:"text-right font-semibold",children:`$${e}`})},{accessor:"status",sortable:!0,render:({status:e})=>a("span",{className:`badge badge-outline-${e.color} `,children:e.tooltip})},{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:e})=>i("div",{className:"flex gap-4 items-center w-max mx-auto",children:[a(w,{to:"/apps/invoice/edit",className:"flex hover:text-info",children:a(J,{className:"w-4.5 h-4.5"})}),a(w,{to:"/apps/invoice/preview",className:"flex hover:text-primary",children:a(G,{})}),a("button",{type:"button",className:"flex hover:text-danger",onClick:t=>y(e),children:a(C,{})})]})}],highlightOnHover:!0,totalRecords:n.length,recordsPerPage:l,page:u,onPageChange:e=>c(e),recordsPerPageOptions:N,onRecordsPerPageChange:j,sortStatus:m,onSortStatusChange:A,selectedRecords:P,onSelectedRecordsChange:g,paginationText:({from:e,to:t,totalRecords:h})=>`Showing  ${e} to ${t} of ${h} entries`})})]})})};export{F as default};
