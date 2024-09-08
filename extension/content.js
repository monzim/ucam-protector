async function b(){return new Promise(t=>{chrome.storage.sync.get(["settings"],e=>{t(e.settings||{blurEnabled:!1,darkTheme:!1,blurLevel:50})})})}const m=["ctl00_MainContainer_Status_CGPA","ctl00_MainContainer_lblCGPA","ctl00_MainContainer_Status_CompletedCr","academicresult_std","ctl00_MainContainer_lblProbation","ctl00_MainContainer_lblAttemptedCr","ctl00_MainContainer_gvResult","ctl00_MainContainer_UpdatePanel04","ctl00_MainContainer_FI_CurrentBalance","ctl00_MainContainer_lblCompletedCr","ctl00_MainContainer_lblCGPAMsg","ctl00_MainContainer_lblProbationMsg","ctl00_MainContainer_lblLastCGPA"];async function y(){var i,l,c,d,s;const t=((i=document.getElementById("ctl00_MainContainer_Label1"))==null?void 0:i.textContent)||"",e=((l=document.getElementById("ctl00_MainContainer_SI_Name"))==null?void 0:l.textContent)||"",r=((c=document.getElementById("ctl00_MainContainer_SI_DOB"))==null?void 0:c.textContent)||"",o=((d=document.getElementById("ctl00_MainContainer_SI_Phone"))==null?void 0:d.textContent)||"",n=document.getElementById("ctl00_MainContainer_SI_Image"),p=n?(s=n.getAttribute("src"))==null?void 0:s.split("/").pop():"",u={studentId:t,full_name:e,avatar_url:p,phone_number:o,date_of_birth:r,last_updated:new Date().toDateString()};chrome.runtime.sendMessage({type:"SAVE_USER_INFO",data:u})}async function g(t=5){const e=t,r={academicresult_std:e*2,ctl00_MainContainer_UpdatePanel04:e*1.5};for(let o of m){const n=document.getElementById(o);n&&(n.style.filter=`blur(${r[o]||e}px)`,n.style.pointerEvents="none")}}async function _(){for(let t of m){const e=document.getElementById(t);e&&(e.style.filter="none",e.style.pointerEvents="auto")}}function f(){const t=document.createElement("style");t.id="dark-mode-style",t.innerHTML=`
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
    `,document.head.appendChild(t)}function x(){const t=document.getElementById("dark-mode-style");t&&t.remove()}function C(){return new Promise(t=>{chrome.storage.sync.get(["extentionBannerData"],e=>{t(e.extentionBannerData)})})}async function h(){chrome.storage.sync.remove("userObj",()=>{console.log("User info cleared from storage")})}async function E(){const t=await C();if(!t||!t.show){M();return}const e=document.createElement("div");e.id="extention-banner",e.style.position="fixed",e.style.bottom="0",e.style.left="0",e.style.width="100%",e.style.zIndex="10000",e.style.backgroundColor="#83B4FF",e.style.color="#000",e.style.padding="10px 20px",e.style.boxShadow="0 2px 5px rgba(0, 0, 0, 0.3)",e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="center",e.innerHTML=`
    <div
      style="
        display: flex;
        align-items: center;
      "
    >
      <span>${t.message}</span>
      <a
      target="_blank"
      href="${t.link}" style="color: white; text-decoration: underline;">Learn More</a>
    </div>
  `,document.body.appendChild(e)}function M(){const t=document.getElementById("extention-banner");t&&t.remove()}async function a(){const t=await b();await E(),t.blurEnabled?g(t.blurLevel):_(),t.darkTheme?f():x()}chrome.runtime.onMessage.addListener(async t=>{t.type==="UPDATE_SETTINGS"||t.type==="PAGE_UPDATED"?a():t.type==="GET_USER_INFO"?await y():t.type==="CLEAR_USER_INFO"&&h()});a();
