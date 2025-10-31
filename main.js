
// // خلفية ماتريكس
// const canvas = document.getElementById("matrixCanvas");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%';
// const fontSize = 16;
// const columns = Math.floor(canvas.width / fontSize);
// const drops = Array(columns).fill(1);
// function drawMatrix() {
//   ctx.fillStyle = 'rgba(0,0,0,0.05)';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = '#0F0';
//   ctx.font = fontSize + "px monospace";
//   for (let i = 0; i < drops.length; i++) {
//     const text = letters.charAt(Math.floor(Math.random() * letters.length));
//     ctx.fillText(text, i * fontSize, drops[i] * fontSize);
//     if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) { drops[i] = 0; }
//     drops[i]++;
//   }
// }
// setInterval(drawMatrix, 50);
// window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });

// كلمات مرور الزوار
let visitorPasswords = [
  "skyLock_2025!","darkNode_X77#","cryptoWave_09$","alphaCore_88@","ironGate_33*",
  "stormPulse_19%","novaKey_X5!","matrixEdge_72#","quantumGate_44$","shadowLink_11&",
  "omegaPath_66*","cipherGrid_08!","byteLock_77#","zenithPulse_92$","deltaRing_55@",
  "prismFlux_21*","vectorCode_88!","starDrift_42#","blackTrace_07$","horizonGate_99&"
];
let usedPasswords = JSON.parse(sessionStorage.getItem("usedPasswords") || "[]");

function updateStageInfo(text){ document.getElementById("stageInfo").textContent = text; }

function checkPassword(){
    // const passInput = document.getElementById("password").value.trim();
    // if(passInput === "bodex55510200"){
    //     document.getElementById("adminPanel").style.display = "block";
    //     updateStageInfo("مرحباً بالمدير! يمكنك نسخ كلمات المرور للزوار.");
    //     document.getElementById("loginBox").style.display = "none";
    //     displayVisitorPasswords();
    //     document.getElementById("password").value = "";
    //     return;
    // }
        
            // usedPasswords.push(passInput);
            // sessionStorage.setItem("usedPasswords", JSON.stringify(usedPasswords));
            document.getElementById("loginBox").style.display = "none";
            document.getElementById("regionBox").style.display = "block";
            updateStageInfo("اختر دولتك أولاً");
        }

// عرض كلمات السر مع زر نسخ صغير
function displayVisitorPasswords(){
    const passList = document.getElementById("generatedPasswords");
    passList.innerHTML = "";
    visitorPasswords.forEach(pass=>{
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        div.style.alignItems = "center";
        div.style.marginBottom = "5px";
        div.style.whiteSpace = "nowrap";

        const spanPass = document.createElement("span");
        spanPass.textContent = pass;
        spanPass.style.overflow = "hidden";
        spanPass.style.textOverflow = "ellipsis";
        spanPass.style.flex = "1";

        const copyBtn = document.createElement("button");
        copyBtn.textContent = "نسخ";
        copyBtn.style.background = "#38bdf8";
        copyBtn.style.color = "#fff";
        copyBtn.style.fontSize = "12px";
        copyBtn.style.padding = "4px 8px";
        copyBtn.style.borderRadius = "6px";
        copyBtn.style.border = "none";
        copyBtn.style.cursor = "pointer";
        copyBtn.style.marginLeft = "10px";
        copyBtn.style.flexShrink = "0";
        copyBtn.style.width = "auto";
        copyBtn.onclick = () => navigator.clipboard.writeText(pass);

        div.appendChild(spanPass);
        div.appendChild(copyBtn);
        passList.appendChild(div);
    });
}
// خيارات الدولة
let currentRegion = null;
const usStates = [
  {name:"Alabama", code:"AL"}, {name:"Alaska", code:"AK"}, {name:"Arizona", code:"AZ"},
  {name:"Arkansas", code:"AR"}, {name:"California", code:"CA"}, {name:"Colorado", code:"CO"},
  {name:"Connecticut", code:"CT"}, {name:"Delaware", code:"DE"}, {name:"Florida", code:"FL"},
  {name:"Georgia", code:"GA"}, {name:"Hawaii", code:"HI"}, {name:"Idaho", code:"ID"},
  {name:"Illinois", code:"IL"}, {name:"Indiana", code:"IN"}, {name:"Iowa", code:"IA"},
  {name:"Kansas", code:"KS"}, {name:"Kentucky", code:"KY"}, {name:"Louisiana", code:"LA"},
  {name:"Maine", code:"ME"}, {name:"Maryland", code:"MD"}, {name:"Massachusetts", code:"MA"},
  {name:"Michigan", code:"MI"}, {name:"Minnesota", code:"MN"}, {name:"Mississippi", code:"MS"},
  {name:"Missouri", code:"MO"}, {name:"Montana", code:"MT"}, {name:"Nebraska", code:"NE"},
  {name:"Nevada", code:"NV"}, {name:"New Hampshire", code:"NH"}, {name:"New Jersey", code:"NJ"},
  {name:"New Mexico", code:"NM"}, {name:"New York", code:"NY"}, {name:"North Carolina", code:"NC"},
  {name:"North Dakota", code:"ND"}, {name:"Ohio", code:"OH"}, {name:"Oklahoma", code:"OK"},
  {name:"Oregon", code:"OR"}, {name:"Pennsylvania", code:"PA"}, {name:"Rhode Island", code:"RI"},
  {name:"South Carolina", code:"SC"}, {name:"South Dakota", code:"SD"}, {name:"Tennessee", code:"TN"},
  {name:"Texas", code:"TX"}, {name:"Utah", code:"UT"}, {name:"Vermont", code:"VT"}, {name:"Virginia", code:"VA"},
  {name:"Washington", code:"WA"}, {name:"West Virginia", code:"WV"}, {name:"Wisconsin", code:"WI"},
  {name:"Wyoming", code:"WY"}
];
const ukCities = ["London","Manchester","Birmingham","Liverpool","Leeds","Glasgow","Edinburgh","Bristol","Cardiff","Belfast"];

function populateOptions(list){
    const select = document.getElementById("state");
    select.style.display = "block";
    select.innerHTML = '<option value="">اختر من القائمة</option>';
    list.forEach(item=>{
        const opt=document.createElement("option");
        if(typeof item === "object"){ opt.textContent=item.name; opt.value=item.code; }
        else{ opt.textContent=item; opt.value=item; }
        select.appendChild(opt);
    });
}

function showUSForm(){ currentRegion = "US"; populateOptions(usStates); document.getElementById("regionBox").style.display="none"; document.getElementById("formBox").style.display="block"; updateStageInfo("اختر ولايتك الأمريكية ثم اضغط متابعة"); }
function showUKForm(){ currentRegion = "UK"; populateOptions(ukCities); document.getElementById("regionBox").style.display="none"; document.getElementById("formBox").style.display="block"; updateStageInfo("اختر مدينتك البريطانية ثم اضغط متابعة"); }

function randomString(length){
    const chars='abcdefghijklmnopqrstuvwxyz0123456789';
    let result='';
    for(let i=0;i<length;i++){ result+=chars.charAt(Math.floor(Math.random()*chars.length)); }
    return result;
}
function randomNumber(length){
    let result='';
    for(let i=0;i<length;i++){ result+=Math.floor(Math.random()*10); }
    return result;
}

function submitForm(){
    if(currentRegion==="US"){ goUS(); }
    else if(currentRegion==="UK"){ goUK(); }
    else{ alert("الرجاء اختيار الوجهة أولاً (أمريكا أو بريطانيا)"); }
}

// دوال فتح الروابط US / UK كما في الكود الأصلي
function goUS(){
    var email=document.getElementById("mail").value.trim();
    var fname=document.getElementById("fname").value.trim();
    var lname=document.getElementById("lname").value.trim();
    var stateCode=document.getElementById("state").value.trim();
    if(email===""||fname===""||lname===""||stateCode===""){alert("الرجاء إدخال جميع البيانات المطلوبة");return;}
    var city = usStates.find(s => s.code===stateCode).name.replace(' ','+');
    var region_code = stateCode;
    var today=new Date();
    var dateStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    var transaction_id="102"+randomString(27);
    var ran=randomNumber(9);
    // var link="https://app.lifepointspanel.com/registration"+
    //     "?city="+city+"&country_code=US&date="+dateStr+"&file_id=%7Bfile_id%7D&file_name=&mobile_carrier=att"+
    //     "&ran="+ran+"&referer=&region_code="+region_code+"&source=&user_agent=GuzzleHttp%2F7"+
    //     "&advertiser_id=1&aff_click_id=&aff_id=1006&aff_sub=4368&aff_unique1=l-e7e7138a-8992-4aab-99b4-238ccfb97fce"+
    //     "&affiliate_id=1006&affiliate_name=Leadgency+Performance+B.V.&affiliate_ref=624507"+
    //     "&offer_file_id=0&offer_id=1637&offer_name=LEADGENCY_API_DOI_US_EN_NULL"+
    //     "&transaction_id="+transaction_id+"&title=f&state="+city+"&lang=&country=US"+
    //     "&contactEmail="+encodeURIComponent(email)+"&firstName="+encodeURIComponent(fname)+"&lastName="+encodeURIComponent(lname)+
    //     "&streetAddress=%7BstreetAddress%7D&streetAddress2=%7BstreetAddress2%7D&contactCity=%7BcontactCity%7D"+
    //     "&doi_token=OTViM2IzM2JkMGY0NzI1MDI2YTlmN2I5MjczZTQwYTJlNDE3YjEyMWQ2NjNjZjA2ZTlmMjUxZmYwNzVkMDA4MQ%3D%3D";
    

    var link = "https://app.lifepointspanel.com/en-US/registration?city=Newyork&"+
               "country_code=US"+
               "&date="+dateStr+"ran=576602346"+
               "&region_code="+region_code+"&"+
               "user_agent=Mozilla%2F5.0+%28Linux%3B+1292187616+10%3B+K%29+AppleWebKit%2F537.36+%28KHTML%2C+Like+Gecko%29+Chrome%2F140.0.0.0+Mobile+Safari%2F537.36&advertiser_id=1"+
               "&aff_id=1466&aff_sub2=1098_1_3062&affiliate_id=1466&affiliate_name=ARROYO&affiliate_ref=617979&offer_id=1237&offer_name=ARROYO_API_DOI_US_EN_1"+
               "&transaction_id="+transaction_id+"&"+
               "state="+stateCode+"&lang=EN&country=US"+
               "&contactEmail="+email+"&"+
               "firstName="+fname+"&"+
               "lastName="+lname+"&"
               window.open(link,"_blank");
    document.getElementById("formBox").style.display="none";
    }

function goUK(){
    var email=document.getElementById("mail").value.trim();
    var fname=document.getElementById("fname").value.trim();
    var lname=document.getElementById("lname").value.trim();
    var city=document.getElementById("state").value.trim();
    if(email===""||fname===""||lname===""||city===""){alert("الرجاء إدخال جميع البيانات المطلوبة");return;}
    city = city.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join('+');
    var region_code = city.slice(0,2).toUpperCase();
    var today=new Date();
    var dateStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    var transaction_id="102"+randomString(27);
    var ran=randomNumber(9);
    var link="https://app.lifepointspanel.com/en-gb/registration"+
        "?city="+city+"&country_code=UK&date="+dateStr+"&file_id=%7Bfile_id%7D&file_name=&mobile_carrier=att"+
        "&ran="+ran+"&referer=&region_code="+region_code+"&source=&user_agent=GuzzleHttp%2F7"+
        "&advertiser_id=1&aff_click_id=&aff_id=1006&aff_sub=4368&aff_unique1=l-e7e7138a-8992-4aab-99b4-238ccfb97fce"+
        "&affiliate_id=1006&affiliate_name=Leadgency+Performance+B.V.&affiliate_ref=624507"+
        "&offer_file_id=0&offer_id=1637&offer_name=LEADGENCY_API_DOI_US_EN_NULL"+
        "&transaction_id="+transaction_id+"&title=f&state="+city+"&lang=&country=UK"+
        "&contactEmail="+encodeURIComponent(email)+"&firstName="+encodeURIComponent(fname)+"&lastName="+encodeURIComponent(lname)+
        "&streetAddress=%7BstreetAddress%7D&streetAddress2=%7BstreetAddress2%7D&contactCity=%7BcontactCity%7D"+
        "&doi_token=OTViM2IzM2JkMGY0NzI1MDI2YTlmN2I5MjczZTQwYTJlNDE3YjEyMWQ2NjNjZjA2ZTlmMjUxZmYwNzVkMDA4MQ%3D%3D";
    window.open(link,"_blank");
    document.getElementById("formBox").style.display="none";
}