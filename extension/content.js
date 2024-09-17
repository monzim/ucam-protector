const m="https://storage-portfolio.monzim.com/projects/ucam-protector/ucam-protector-vYYShFd8npwO3Q.webp";function b(){const e="auto-fill-card-ucam-protector";if(document.getElementById(e))return;const t=document.getElementById("ctl00_MainContainer_UpdatePanel4");if(t&&t.parentNode){const o=document.createElement("div");o.id=e,o.style.width="100%",o.style.maxWidth="600px",o.style.margin="20px auto",o.style.padding="20px",o.style.border="1px solid #ddd",o.style.borderRadius="10px",o.style.boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)",o.style.backgroundColor="#fff";const a=document.createElement("h3");a.textContent="Auto Fill (Powered by UCAM Protector)",a.style.margin="0 0 20px 0",a.style.fontSize="24px",a.style.fontWeight="bold",a.style.color="#333";const l=document.createElement("img");l.src=m,l.style.width="50px",l.style.height="50px",l.style.borderRadius="50%",l.style.marginRight="10px",a.prepend(l);const n=document.createElement("select");n.id="fieldSelect",n.style.width="100%",n.style.padding="10px",n.style.fontSize="16px",n.style.border="1px solid #ccc",n.style.borderRadius="5px",n.style.marginBottom="10px",[{text:"Strongly Agree",value:"5"},{text:"Agree",value:"4"},{text:"Neither Agree nor Disagree",value:"3"},{text:"Disagree",value:"2"},{text:"Strongly Disagree",value:"1"},{text:"Random (Choose randomly for each question)",value:"random"}].forEach(i=>{const d=document.createElement("option");d.value=i.value,d.textContent=i.text,i.value==="random"&&(d.style.fontWeight="bold",d.style.color="#ff5733"),n.appendChild(d)});const r=document.createElement("button");r.type="button",r.textContent="Auto Fill",r.style.width="100%",r.style.padding="15px",r.style.fontSize="18px",r.style.color="#fff",r.style.backgroundColor="#ff5733",r.style.border="none",r.style.borderRadius="5px",r.style.cursor="pointer",r.style.boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)",r.style.transition="background-color 0.3s ease",r.addEventListener("mouseover",()=>{r.style.backgroundColor="#e74c3c"}),r.addEventListener("mouseout",()=>{r.style.backgroundColor="#ff5733"}),r.addEventListener("click",()=>{const i=document.getElementById("fieldSelect").value;i==="random"?f():g(i)}),o.appendChild(a),o.appendChild(n),o.appendChild(r),t.parentNode.insertBefore(o,t)}}function g(e){document.querySelectorAll(`input[type="radio"][value="${e}"]`).forEach(o=>{o.checked=!0})}function f(){document.querySelectorAll('input[type="radio"]').forEach(t=>{const o=Math.floor(Math.random()*5)+1;t.value===o.toString()&&(t.checked=!0)})}async function x(){return new Promise(e=>{chrome.storage.sync.get(["settings"],t=>{e(t.settings||{blurEnabled:!0,darkTheme:!1,blurLevel:50})})})}const y=["ctl00_lbtnUserName","academicresult_std","ctl00_MainContainer_Status_CGPA","ctl00_MainContainer_lblCGPA","ctl00_MainContainer_Status_CompletedCr","ctl00_MainContainer_lblProbation","ctl00_MainContainer_lblAttemptedCr","ctl00_MainContainer_gvResult","ctl00_MainContainer_UpdatePanel04","ctl00_MainContainer_FI_CurrentBalance","ctl00_MainContainer_lblCompletedCr","ctl00_MainContainer_lblCGPAMsg","ctl00_MainContainer_lblProbationMsg","ctl00_MainContainer_lblLastCGPA","ctl00_MainContainer_lblCGPA"];async function h(){var r,i,d,p,u;const e=((r=document.getElementById("ctl00_MainContainer_Label1"))==null?void 0:r.textContent)||"",t=((i=document.getElementById("ctl00_MainContainer_SI_Name"))==null?void 0:i.textContent)||"",o=((d=document.getElementById("ctl00_MainContainer_SI_DOB"))==null?void 0:d.textContent)||"",a=((p=document.getElementById("ctl00_MainContainer_SI_Phone"))==null?void 0:p.textContent)||"",l=document.getElementById("ctl00_MainContainer_SI_Image"),n=l?(u=l.getAttribute("src"))==null?void 0:u.split("/").pop():"",c={studentId:e,full_name:t,avatar_url:n,phone_number:a,date_of_birth:o,last_updated:new Date().toDateString()};chrome.runtime.sendMessage({type:"SAVE_USER_INFO",data:c})}async function _(e=5){const t=e,o={academicresult_std:t*2,ctl00_MainContainer_UpdatePanel04:t*1.5};for(let a of y){const l=document.getElementById(a);l&&(l.style.filter=`blur(${o[a]||t}px)`,l.style.pointerEvents="none")}}async function C(){for(let e of y){const t=document.getElementById(e);t&&(t.style.filter="none",t.style.pointerEvents="auto")}}function E(){const e=document.createElement("style");e.id="dark-mode-style",e.innerHTML=`
html, body {
  color: #dcdcdc !important;
  background-image: none !important;
  background-color: #292929 !important;
}

html::before, body::before {
  background-image: none !important;
}

html *:not(input) {color: #dcdcdc !important}
html * {background-color: rgb(41, 41, 41, 0.90) !important}

html *, html *[id], html *[class] {
  box-shadow: none !important;
  text-shadow: none !important;
  border-radius: unset !important;
  border-color: #373A40 !important;
  outline-color: #373A40 !important;
  border-radius: 5px !important;
}

img, img[src] {
  z-index: 1;
  filter: brightness(0.85) !important;
  background-color: initial !important;
  border-radius: 5px !important;
}

video, video[src] {
  z-index: 1;
  background-color: transparent !important;
  border-radius: 5px !important;
}

input:not([type='button']):not([type='submit']) {
  color: #dcdcdc !important;
  background-image: none !important;
  background-color: #333333 !important;
  border-radius: 5px !important;
}

textarea, textarea[class], input[type='text'], input[type='text'][class] {
  color: #dcdcdc !important;
  background-color: #555555 !important;
  border-radius: 5px !important;
}

th, th * {
  background-color: #003C43 !important;
  color: #dcdcdc !important;
  border-radius: 5px !important;
}

svg:not([fill]) {fill: #7d7d7d !important}
li, select {background-image: none !important   border-radius: 5px !important;}
input[type='text'], input[type='search'] {text-indent: 10px   border-radius: 5px !important;}
a {background-color: rgba(255, 255, 255, 0.01) !important}
html cite, html cite *, html cite *[class] {color: #029833 !important}
svg[fill], button, input[type='button'], input[type='submit'] {opacity: 0.85 !important}

:before {color: #dcdcdc !important}
:link:not(cite), :link *:not(cite) {color: #8db2e5 !important}
:visited, :visited *, :visited *[class] {color: #5BBCFF !important}

#extention-banner {
  background-color: #83B4FF;
  color: #000;
}
    `,document.head.appendChild(e)}function v(){const e=document.getElementById("dark-mode-style");e&&e.remove()}function S(){return new Promise(e=>{chrome.storage.sync.get(["extentionBannerData"],t=>{e(t.extentionBannerData)})})}async function k(){chrome.storage.sync.remove("userObj",()=>{console.log("User info cleared from storage")})}async function I(){const e=await S();if(!e||!e.show){M();return}const t=document.createElement("div");t.id="extension-banner",t.style.position="fixed",t.style.bottom="0",t.style.left="0",t.style.width="100%",t.style.zIndex="10000",t.style.backgroundColor="#ff5733",t.style.color="#fff",t.style.padding="8px 12px",t.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)",t.style.display="flex",t.style.justifyContent="space-between",t.style.alignItems="center",t.style.fontFamily="Arial, sans-serif",t.style.maxHeight="50px";const o=document.createElement("img");o.src=m,o.style.width="30px",o.style.height="30px",o.style.marginRight="10px",o.style.borderRadius="50%";const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.gap="10px";const l=document.createElement("span");l.textContent=e.message,l.style.fontSize="13px",l.style.fontWeight="500";const n=document.createElement("a");n.href=e.link||"#",n.target="_blank",n.textContent="Discover More",n.style.padding="6px 14px",n.style.backgroundColor="#000",n.style.color="#fff",n.style.textDecoration="none",n.style.borderRadius="4px",n.style.fontSize="13px",n.style.fontWeight="bold",n.style.boxShadow="0 3px 6px rgba(0, 0, 0, 0.1)",n.style.transition="background-color 0.3s ease, box-shadow 0.3s ease",n.style.borderRadius="4px",n.addEventListener("mouseover",()=>{n.style.backgroundColor="#00C853",n.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"}),n.addEventListener("mouseout",()=>{n.style.backgroundColor="#000",n.style.boxShadow="0 3px 6px rgba(0, 0, 0, 0.1)"}),a.appendChild(o),a.appendChild(l),t.appendChild(a),e.link&&t.appendChild(n),document.body.appendChild(t)}function M(){const e=document.getElementById("extention-banner");e&&e.remove()}async function s(){const e=await x();await I(),e.blurEnabled?_(e.blurLevel):C(),e.darkTheme?E():v()}chrome.runtime.onMessage.addListener(async e=>{e.type==="UPDATE_SETTINGS"||e.type==="PAGE_UPDATED"?s():e.type==="GET_USER_INFO"?await h():e.type==="CLEAR_USER_INFO"&&k(),window.location.href.includes("EvaluationForm")&&b()});s();
