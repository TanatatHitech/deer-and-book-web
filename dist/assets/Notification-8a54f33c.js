import{u as M,r as b,s as S,a as j,j as e,b as t,L as T,a4 as E,S as m,ax as R}from"./index-b88e1732.js";import{C as l}from"./Highlight-71997208.js";import{I as r}from"./IconCode-24e24bcd.js";const A=()=>{const h=M();b.useEffect(()=>{h(S("Notifications"))});const[s,d]=b.useState([]),i=n=>{s.includes(n)?d(u=>u.filter(B=>B!==n)):d([...s,n])},c=j(n=>n.themeConfig.rtlClass)==="rtl",o=R(m),f=()=>{o.fire({title:"Hello, world! This is a toast message.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},p=()=>{o.fire({title:"Example notification text.",toast:!0,position:c?"top-end":"top-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},w=()=>{o.fire({title:"Example notification text.",toast:!0,position:"top",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},g=()=>{o.fire({title:"Example notification text.",toast:!0,position:c?"top-start":"top-end",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},C=()=>{o.fire({title:"Example notification text.",toast:!0,position:c?"bottom-end":"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},y=()=>{o.fire({title:"Example notification text.",toast:!0,position:"bottom",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},x=()=>{o.fire({title:"Example notification text.",toast:!0,position:c?"bottom-start":"bottom-end",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},N=()=>{o.fire({title:"Example notification text.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!1})},v=()=>{o.fire({title:"Example notification text.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:5e3,showCloseButton:!0})},k=()=>{m.fire({toast:!0,position:"bottom-start",text:"Custom callback when action button is clicked.",showCloseButton:!0,showConfirmButton:!1}).then(n=>{m.fire({toast:!0,position:"bottom-start",text:"Thanks for clicking the Dismiss button!",showCloseButton:!0,showConfirmButton:!1})})},a=n=>{m.mixin({toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0,customClass:{popup:`color-${n}`}}).fire({title:"Example notification text."})};return e("div",{children:[e("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t("li",{children:t(T,{to:"#",className:"text-primary hover:underline",children:"Components"})}),t("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t("span",{children:"Notifications"})})]}),e("div",{className:"pt-5 space-y-8",children:[e("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[t("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:t(E,{})}),t("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t("a",{href:"https://www.npmjs.com/package/sweetalert2",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/sweetalert2"})]}),e("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>i("code1"),children:e("span",{className:"flex items-center",children:[t(r,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:t("div",{className:"flex items-center justify-center",children:t("button",{type:"button",className:"btn btn-primary",onClick:f,children:"Open Toast"})})}),s.includes("code1")&&t(l,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage = () => {
    MySwal.fire({
        title: 'Hello, world! This is a toast message.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: true,
    });
};
<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-primary" onClick={showMessage}>
            Open Toast
        </button>
    </div>
</div>`})})]}),e("div",{className:"panel lg:row-span-2",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Position"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>i("code2"),children:e("span",{className:"flex items-center",children:[t(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:[t("h6",{className:"font-semibold text-base dark:text-white-light mb-3 text-center",children:"Top Position"}),e("div",{className:"flex items-center justify-center mb-10 gap-2",children:[t("button",{type:"button",className:"btn btn-success",onClick:p,children:"Top Left"}),t("button",{type:"button",className:"btn btn-secondary",onClick:w,children:"Top Center"}),t("button",{type:"button",className:"btn btn-info",onClick:g,children:"Top Right"})]}),t("h6",{className:"font-semibold text-base dark:text-white-light mb-3 text-center",children:"Bottom Position"}),e("div",{className:"flex items-center justify-center gap-2",children:[t("button",{type:"button",className:"btn btn-dark",onClick:C,children:"Bottom Left"}),t("button",{type:"button",className:"btn btn-primary",onClick:y,children:"Bottom Center"}),t("button",{type:"button",className:"btn btn-secondary",onClick:x,children:"Bottom Right"})]})]}),s.includes("code2")&&t(l,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

    const showMessage1 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'top-end' : 'top-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };
    const showMessage2 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage3 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'top-start' : 'top-end',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage4 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'bottom-end' : 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage5 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage6 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'bottom-start' : 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

<div className="mb-5">
    <h6 className="font-semibold text-base dark:text-white-light mb-3 text-center">Top Position</h6>
    <div className="flex items-center justify-center mb-10 gap-2">
        <button type="button" className="btn btn-success" onClick={showMessage1}>
            Top Left
        </button>
        <button type="button" className="btn btn-secondary" onClick={showMessage2}>
            Top Center
        </button>
        <button type="button" className="btn btn-info" onClick={showMessage3}>
            Top Right
        </button>
    </div>
    <h6 className="font-semibold text-base dark:text-white-light mb-3 text-center">Bottom Position</h6>
    <div className="flex items-center justify-center gap-2">
        <button type="button" className="btn btn-dark" onClick={showMessage4}>
            Bottom Left
        </button>
        <button type="button" className="btn btn-primary" onClick={showMessage5}>
            Bottom Center
        </button>
        <button type="button" className="btn btn-secondary" onClick={showMessage6}>
            Bottom Right
        </button>
    </div>
</div>`})})]}),e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"No Action"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>i("code3"),children:e("span",{className:"flex items-center",children:[t(r,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:t("div",{className:"flex items-center justify-center",children:t("button",{type:"button",className:"btn btn-success",onClick:N,children:"No Action"})})}),s.includes("code3")&&t(l,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage7 = () => {
    MySwal.fire({
        title: 'Example notification text.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: false,
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success" onClick={showMessage7}>
            No Action
        </button>
    </div>
</div>`})})]}),e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Click Callback"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>i("code4"),children:e("span",{className:"flex items-center",children:[t(r,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:t("div",{className:"flex items-center justify-center",children:t("button",{type:"button",className:"btn btn-info",onClick:k,children:"Click Callback"})})}),s.includes("code4")&&t(l,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const clickCallable = () => {
    Swal.fire({
        toast: true,
        position: 'bottom-start',
        text: 'Custom callback when action button is clicked.',
        showCloseButton: true,
        showConfirmButton: false,
    }).then((result) => {
        Swal.fire({
            toast: true,
            position: 'bottom-start',
            text: 'Thanks for clicking the Dismiss button!',
            showCloseButton: true,
            showConfirmButton: false,
        });
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={clickCallable}>
            Click Callback
        </button>
    </div>
</div>`})})]}),e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Duration"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>i("code5"),children:e("span",{className:"flex items-center",children:[t(r,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:t("div",{className:"flex items-center justify-center",children:t("button",{type:"button",className:"btn btn-dark",onClick:v,children:"Duration"})})}),s.includes("code5")&&t(l,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage8 = () => {
    MySwal.fire({
        title: 'Example notification text.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 5000,
        showCloseButton: true,
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-dark" onClick={showMessage8}>
            Duration
        </button>
    </div>
</div>`})})]}),e("div",{className:"panel lg:col-span-2",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Background Color"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>i("code6"),children:e("span",{className:"flex items-center",children:[t(r,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"grid grid-cols-2 sm:grid-cols-1 sm:flex items-center justify-center gap-2 colored-toast",children:[e("div",{children:[t("button",{type:"button",className:"btn btn-primary",onClick:()=>a("primary"),children:"Primary"}),t("div",{id:"primary-toast"})]}),e("div",{children:[t("button",{type:"button",className:"btn btn-secondary",onClick:()=>a("secondary"),children:"Secondary"}),t("div",{id:"secondary-toast"})]}),e("div",{children:[t("button",{type:"button",className:"btn btn-success",onClick:()=>a("success"),children:"Success"}),t("div",{id:"success-toast"})]}),e("div",{children:[t("button",{type:"button",className:"btn btn-danger",onClick:()=>a("danger"),children:"Danger"}),t("div",{id:"danger-toast"})]}),e("div",{children:[t("button",{type:"button",className:"btn btn-warning",onClick:()=>a("warning"),children:"Warning"}),t("div",{id:"warning-toast"})]}),e("div",{children:[t("button",{type:"button",className:"btn btn-info",onClick:()=>a("info"),children:"Info"}),t("div",{id:"info-toast"})]})]})}),s.includes("code6")&&t(l,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const coloredToast = (color: any) => {
    const toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: true,
        customClass: {
            popup: \`color-\${color}\`,
        },
    });
    toast.fire({
        title: 'Example notification text.',
    });
};

<div className="mb-5">
    <div className="grid grid-cols-2 sm:grid-cols-1 sm:flex items-center justify-center gap-2 colored-toast">
        <div>
            <button type="button" className="btn btn-primary" onClick={() => coloredToast('primary')}>
                Primary
            </button>
            <div id="primary-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-secondary" onClick={() => coloredToast('secondary')}>
                Secondary
            </button>
            <div id="secondary-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-success" onClick={() => coloredToast('success')}>
                Success
            </button>
            <div id="success-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-danger" onClick={() => coloredToast('danger')}>
                Danger
            </button>
            <div id="danger-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-warning" onClick={() => coloredToast('warning')}>
                Warning
            </button>
            <div id="warning-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-info" onClick={() => coloredToast('info')}>
                Info
            </button>
            <div id="info-toast"></div>
        </div>
    </div>
</div>`})})]})]})]})]})};export{A as default};
