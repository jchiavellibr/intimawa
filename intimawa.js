//ref https://raw.githubusercontent.com/mikelustosa/Projeto-TInject/master/Source/JS/js.abr

let meta = JSON.parse(ALL('meta[name="intimawa"]',0).getAttribute('content'));
let IWA = {
    divBarraBtns : null,
    spanBarraBtns : null,
    accItem : null,
    accHD : null,
    procList : [],
    btnClass : '',
    spanBarraBtnsClass : '',
    divBarraBtnsClass : '',
    divTesteAvoClass : '',
    divTestePaiClass : '',
    divTesteFilho2Class : '',
    divTesteFilho1Class : '',
    telTeste : '',
    hashFile : '',
    btnOpenTxt : null,
    btnSend : null,
    btnAbout: null,
    btnVerify : null,
    btnStop : null,
    btnCopyClipboard: null,
    btnVistoUltimo: null,
    btnTest : null,
    btnClose : null,
    dvEditTest : null,
    txtEditTest : null,
    btnConf : null,
    dvPROGBARmain : null,
    dvPROGBARgrad : null,
    spPROGBARperc : null,
    spPROGBARcur : null,
    storingMSG : false,
    abortOP : false,
    dinoRunning : false,
    speedOP : '2',
    verfyOnSend : true,
    runDinoOnSend : true,
    extensionId : meta.id,
    BASE_PATH : `chrome-extension://${meta.id}/`,
    appVersion : `v${meta.version}`,
    appName : meta.name,
    lastSeens : [],
    _serializeNumberStatusObjMD : (obj) => {
        if (obj === undefined) {
            return null;
        }
        let awid = false
        var	_awid = ""+obj.wid+""
        awid = _awid.length > 0;
        console.log('_awid: '+ awid)

        return Object.assign({}, {
            id: obj.wid,
            status: awid
            //isBusiness: (obj.biz === true)
        });
    }
}

/*return md5 hash of a string*/
var MD5=function(m){function r(a,b){return a<<b|a>>>32-b}function k(d,e){var f,g,b,c,a;return(b=2147483648&d,c=2147483648&e,f=1073741824&d,g=1073741824&e,a=(1073741823&d)+(1073741823&e),f&g)?2147483648^a^b^c:f|g?1073741824&a?3221225472^a^b^c:1073741824^a^b^c:a^b^c}function g(a,c,d,e,f,g,h){var b,i,j;return a=k(a,k(k((b=c,b&(i=d)| ~b&e),f),h)),k(r(a,g),c)}function h(a,b,f,g,h,i,j){var c,d,e;return a=k(a,k(k((c=b,d=f,c&(e=g)|d& ~e),h),j)),k(r(a,i),b)}function i(a,b,d,e,f,g,h){var c,i,j;return a=k(a,k(k((c=b,c^(i=d)^e),f),h)),k(r(a,g),b)}function j(a,b,d,e,f,g,h){var c,i,j;return a=k(a,k(k((c=b,(i=d)^(c| ~e)),f),h)),k(r(a,g),b)}function l(d){var a,b="",c="";for(a=0;a<=3;a++)b+=(c="0"+(d>>>8*a&255).toString(16)).substr(c.length-2,2);return b}var e,n,o,p,q,a,b,c,d,f=Array();for(e=0,f=function(g){for(var c,d=g.length,h=d+8,f=((h-h%64)/64+1)*16,b=Array(f-1),e=0,a=0;a<d;)c=(a-a%4)/4,e=a%4*8,b[c]=b[c]|g.charCodeAt(a)<<e,a++;return c=(a-a%4)/4,e=a%4*8,b[c]=b[c]|128<<e,b[f-2]=d<<3,b[f-1]=d>>>29,b}(m=function(c){c=c.replace(/\r\n/g,"\n");for(var b="",d=0;d<c.length;d++){var a=c.charCodeAt(d);a<128?b+=String.fromCharCode(a):a>127&&a<2048?(b+=String.fromCharCode(a>>6|192),b+=String.fromCharCode(63&a|128)):(b+=String.fromCharCode(a>>12|224),b+=String.fromCharCode(a>>6&63|128),b+=String.fromCharCode(63&a|128))}return b}(m)),a=1732584193,b=4023233417,c=2562383102,d=271733878;e<f.length;e+=16)n=a,o=b,p=c,q=d,a=g(a,b,c,d,f[e+0],7,3614090360),d=g(d,a,b,c,f[e+1],12,3905402710),c=g(c,d,a,b,f[e+2],17,606105819),b=g(b,c,d,a,f[e+3],22,3250441966),a=g(a,b,c,d,f[e+4],7,4118548399),d=g(d,a,b,c,f[e+5],12,1200080426),c=g(c,d,a,b,f[e+6],17,2821735955),b=g(b,c,d,a,f[e+7],22,4249261313),a=g(a,b,c,d,f[e+8],7,1770035416),d=g(d,a,b,c,f[e+9],12,2336552879),c=g(c,d,a,b,f[e+10],17,4294925233),b=g(b,c,d,a,f[e+11],22,2304563134),a=g(a,b,c,d,f[e+12],7,1804603682),d=g(d,a,b,c,f[e+13],12,4254626195),c=g(c,d,a,b,f[e+14],17,2792965006),b=g(b,c,d,a,f[e+15],22,1236535329),a=h(a,b,c,d,f[e+1],5,4129170786),d=h(d,a,b,c,f[e+6],9,3225465664),c=h(c,d,a,b,f[e+11],14,643717713),b=h(b,c,d,a,f[e+0],20,3921069994),a=h(a,b,c,d,f[e+5],5,3593408605),d=h(d,a,b,c,f[e+10],9,38016083),c=h(c,d,a,b,f[e+15],14,3634488961),b=h(b,c,d,a,f[e+4],20,3889429448),a=h(a,b,c,d,f[e+9],5,568446438),d=h(d,a,b,c,f[e+14],9,3275163606),c=h(c,d,a,b,f[e+3],14,4107603335),b=h(b,c,d,a,f[e+8],20,1163531501),a=h(a,b,c,d,f[e+13],5,2850285829),d=h(d,a,b,c,f[e+2],9,4243563512),c=h(c,d,a,b,f[e+7],14,1735328473),b=h(b,c,d,a,f[e+12],20,2368359562),a=i(a,b,c,d,f[e+5],4,4294588738),d=i(d,a,b,c,f[e+8],11,2272392833),c=i(c,d,a,b,f[e+11],16,1839030562),b=i(b,c,d,a,f[e+14],23,4259657740),a=i(a,b,c,d,f[e+1],4,2763975236),d=i(d,a,b,c,f[e+4],11,1272893353),c=i(c,d,a,b,f[e+7],16,4139469664),b=i(b,c,d,a,f[e+10],23,3200236656),a=i(a,b,c,d,f[e+13],4,681279174),d=i(d,a,b,c,f[e+0],11,3936430074),c=i(c,d,a,b,f[e+3],16,3572445317),b=i(b,c,d,a,f[e+6],23,76029189),a=i(a,b,c,d,f[e+9],4,3654602809),d=i(d,a,b,c,f[e+12],11,3873151461),c=i(c,d,a,b,f[e+15],16,530742520),b=i(b,c,d,a,f[e+2],23,3299628645),a=j(a,b,c,d,f[e+0],6,4096336452),d=j(d,a,b,c,f[e+7],10,1126891415),c=j(c,d,a,b,f[e+14],15,2878612391),b=j(b,c,d,a,f[e+5],21,4237533241),a=j(a,b,c,d,f[e+12],6,1700485571),d=j(d,a,b,c,f[e+3],10,2399980690),c=j(c,d,a,b,f[e+10],15,4293915773),b=j(b,c,d,a,f[e+1],21,2240044497),a=j(a,b,c,d,f[e+8],6,1873313359),d=j(d,a,b,c,f[e+15],10,4264355552),c=j(c,d,a,b,f[e+6],15,2734768916),b=j(b,c,d,a,f[e+13],21,1309151649),a=j(a,b,c,d,f[e+4],6,4149444226),d=j(d,a,b,c,f[e+11],10,3174756917),c=j(c,d,a,b,f[e+2],15,718787259),b=j(b,c,d,a,f[e+9],21,3951481745),a=k(a,n),b=k(b,o),c=k(c,p),d=k(d,q);return(l(a)+l(b)+l(c)+l(d)).toLowerCase()};

function clearIconsStatus(){
    for (const msg of IWA.procList) {
        let el = ID('iwa-icon-stt-' + msg.hash);
        if (el) {
            el.className = `iwa-item-status`;
            el.title = '';
        }
    }
}




async function setIconAndStore(msg){
    let elIcon = ID('iwa-icon-stt-' + msg.hash);
    if (elIcon) {
        elIcon.className = `iwa-item-status ${stt2Class(msg.status)}`;
        elIcon.title = stt2Title(msg.status);
    }
    let elDate = ALL(`.iwa-item-date[data-hash="${msg.hash}"]`,0);
    elDate && (elDate.innerHTML = fmtDate(msg.date));
    let elLastSeen = ALL(`.iwa-item-lastseen[data-hash="${msg.hash}"]`,0);
    elLastSeen && (elLastSeen.innerHTML = fmtDate(msg.lastseen));

    await saveMsg2Store({hash: msg.hash, status: msg.status, id: msg.id, date: msg.date});
}


function alert(msg){
    showModal(msg, [
        {
            class: 'success',
            text: 'OK',
            closeOnClick: true
        }]);
}


async function checkLastSeen(sellArray){
    setLastSeenEnabled(true);
    startOp('lastseen');
    await closeChat();
    ID('app').classList.add('iwa-hide-app');
    try {
        let idx = 1;
        for await (const msg of sellArray) {
            if (IWA.abortOP) continue;
            IWA.spPROGBARcur.innerHTML = `verificando ${idx} de ${sellArray.length} `;
            animatePerc(idx++, sellArray.length , 0.1);
            if ([1,2,3,4].includes(msg.status)){
                let chat = IWA.API.Chat.get(msg.numero + '@c.us');
                chat && await IWA.API.Cmd.openChatAt(chat);
            }
            await sleep(50);
        }
    }catch (e) {
    }
    stopOp();
    await closeChat();
    setTimeout(()=>!ID('app').classList.contains('iwa-hide-app') && setLastSeenEnabled(false),10000);
}

async function _verifyMessages(selArray){
    clearIconsStatus();
    let idx = 1;
    startOp('verify');

    for await (const msg of selArray) {
        if (IWA.abortOP) return;
        let status = msg.status;
        IWA.spPROGBARcur.innerHTML = `verificando ${idx} de ${selArray.length} `;
        animatePerc(  idx++, selArray.length, 0.1);
        accordionBlink(msg.hash);
        await IWA.API.MsgCollectionImpl.MsgCollection.search(msg.hash).then(  async s=>{
            if (s && s.messages && s.messages.length) {
                status = s.messages[0].__x_ack;
                msg.id = s.messages[0].__x_id._serialized;
                msg.date = s.messages[0].t*1000;
            } else if (!await numberHasWtz(msg.numero)) status = -2; else status = -3;
        })
        msg.status = status;
        await setIconAndStore({hash: msg.hash, status: status, id:msg.id, date: msg.date})
    }
    stopOp();
}

async function onBtnVistoUltimoClik(){
    const selArray = IWA.procList.filter(function (el) {
        return el.checked;
    });
    if(!selArray.length){
        alert('Selecione ao menos uma mensagem para verificar o "Visto por último"');
        return;
    }
    showModal(`Deseja verificar o "Visto por último" das mensagens selecionadas?
                <p><strong style="color: var(--danger);">* O resultado depende da configuração "Visto por último" estar habilitada nessa conta e nas contas dos destinatários.</strong></p>`, [
        {
            class: 'success',
            text: 'SIM',
            onclick: ()=>{checkLastSeen(selArray)},
            closeOnClick: true
        },
        {
            class: 'danger',
            text: 'NÃO',
            closeOnClick: true
        }])
}

async function onBtnVerifyClik() {
    const selArray = IWA.procList.filter(function (el) {
        return el.checked;
    });
    if(!selArray.length){
        alert('Selecione ao menos uma mensagem para verificar');
        return;
    }
    showModal('Deseja verificar as mensagens selecionadas?', [
        {
            class: 'success',
            text: 'SIM',
            onclick: ()=>{_verifyMessages(selArray)},
            closeOnClick: true
        },
        {
            class: 'danger',
            text: 'NÃO',
            closeOnClick: true
        }])
}

async function _sendMessages(selArray){
    let idx = 1;
    startOp();
    ALL('.iwa-item-date, .iwa-item-lastseen').forEach(el=>el.innerHTML = '');
    ALL('.iwa-item-status').forEach(el=>el.className = 'iwa-item-status');
    selArray.forEach(m=>{
        let idx = IWA.procList.indexOf(m);
        IWA.procList[idx] = {...IWA.procList[idx], ...{date:0, lastseen:0, status:-1}};
    })
    storeProcList();

    for await (const msg of selArray) {
        if (IWA.abortOP) return;
        try {
            await sendMsgIWA({msg: msg.raw_msg, numero: validPhoneNumber(IWA.telTeste)?IWA.telTeste:msg.numero, idx: idx++, msgs:selArray.length, hash: msg.hash, id: msg.id})
                .catch(err=>{});
        } catch (e) {}
    }
    stopOp();
}

async function onBtnSendClick(){
    const selArray = IWA.procList.filter(function (el) {
        return el.checked;
    });
    if(!selArray.length){
        alert('Selecione ao menos uma mensagem para enviar');
        return;
    }
    let styleTT = window.getComputedStyle(IWA.txtEditTest);
    if (styleTT.visibility==='visible' && !validPhoneNumber(IWA.telTeste)){
        alert('O telefone de teste informado é inválido.');
        return;
    }

    const hasMsgsSent = IWA.procList.filter(function (el) {
        return el.checked && [1,2,3,4].includes(el.status);
    });

    let confTitle = validPhoneNumber(IWA.telTeste) ? `Deseja enviar as mensagens para o telefone de teste <strong>${fmtPhoneNumber(IWA.telTeste)}</strong>?`: ( hasMsgsSent.length ?`<span style="color:var(--danger)">ATENÇÃO!</span><br>Há <strong style="color:var(--danger)">
                                       ${hasMsgsSent.length}</strong> mensagens já enviadas selecionadas. 
                                       Deseja continuar com a operação e reenviá-las?`:`Deseja enviar as mensagens selecionadas?`);

    showModal(confTitle, [
        {
            class: 'success',
            text: 'SIM',
            onclick: ()=>{_sendMessages(selArray)},
            closeOnClick: true
        },
        {
            class: 'danger',
            text: 'NÃO',
            closeOnClick: true
        }])
}

function fmtDate(date){
    if (!date || date === 0) return '';
    const t = new Date(date), hoje = new Date(), ontem = new Date(new Date().setDate(hoje.getDate() - 1))  ;
    const dia = ('0' + t.getDate()).slice(-2);
    const mes = ('0' + (t.getMonth() + 1)).slice(-2);
    const ano = t.getFullYear();
    const hora = ('0' + t.getHours()).slice(-2);
    const minutos = ('0' + t.getMinutes()).slice(-2);
    const segundos = ('0' + t.getSeconds()).slice(-2);
    const data =  hoje.toLocaleDateString() === t.toLocaleDateString()?'hoje': ontem.toLocaleDateString() === t.toLocaleDateString()?'ontem':dia + '/' + mes;
    return `${data} às ${hora}:${minutos}`
}

function setLastSeenEnabled(onOff){
    if (onOff)
    {
        IWA.API.Chat.on('change', async (chat)=> {
            if(chat?.presence?.chatstate?.t && chat?.presence?.chatstate?.id?.user) {
                let ts = chat.presence.chatstate.t * 1000 - 10800, num = chat.presence.chatstate.id.user;
                let idx = IWA.lastSeens.findIndex(x => x.numero === num);
                let obj = {numero: num, lastseen: ts};
                if (idx === -1) IWA.lastSeens.push(obj); else IWA.lastSeens[idx] = obj;
            }
        });
        if (IWA?.intervalLS) clearInterval(IWA.intervalLS);
        IWA.intervalLS = setInterval(()=>{
            IWA.lastSeens.forEach(async rec=>{
                let el = ID(`iwa-item-lastseen-${rec.numero}`) ;
                if (el && el.innerHTML !== fmtDate(rec.lastSeen)) {
                    let hash = el.getAttribute('data-hash');
                    el.innerHTML = fmtDate(rec.lastSeen);
                    await setMsgProp(hash, 'lastseen', rec.lastSeen, true);
                }
            });
        },2000);
    }else {
        IWA.API.Chat.off('change');
        if (IWA?.intervalLS) clearInterval(IWA.intervalLS);
    }
}

function getConf(confName, def=''){
    let val = window.localStorage.getItem(confName);
    return val===null?def:val
}

function setConf(confName, val){
    window.localStorage.setItem(confName, val);
}

function injectAbout(){
    let div = document.createElement('div');
    div.className = "iwa-about-main";
    div.id = "iwa-about-main";
    div.oncontextmenu = ()=>false;
    div.innerHTML = `    <div class="dvCard">
                                        <div class="close-about" title="Fechar"></div>
                                        <p><strong>${IWA.appName} ${meta.version}</strong></p>
                                        <h5>Desenvolvido por Jessé Chiavelli<br><a href="mailto:jchiavel@trf3.jus.br">jchiavel@trf3.jus.br</a></h5><br>
                                        <p>
                                            Essa extensão é para uso exclusivo de servidores da Justiça Federal da 3ª Região.
                                        </p>                                        
                                    </div>
                                `;
    ALL('body',0).prepend(div);
}

function injectConfDrawer(){
    const template_config = `                    
                <div class="iwa-drawer-title"><h2>Opções</h2></div>
                <div class="${IWA.spanBarraBtnsClass} iwa-drawer-dv-close">
                    <div aria-disabled="false"  id="iwa-drawer-btn-close" role="button" tabindex="0" class="${IWA.btnClass}" 
                    data-tab="2" title="Fechar" ><div class="iwa-drawer-btn-close" ></div></span>
                    </div><span></span>
                </div>

                <div class="iwa-drawer-body">
                    <p>
                        <div class="checkbox-rect">
                            <input type="checkbox" id="iwa-ckb-opt-verstatus" ${getConf('iwa-opt-verstatus','checked')}>
                            <label for="iwa-ckb-opt-verstatus"></label>
                        </div>
                        <div class="iwa-ckb-opt-caption">Verificar status das mensagens após enviá-las</div>
                    </p>
                    <p>
                        <div class="checkbox-rect">
                            <input type="checkbox" id="iwa-ckb-opt-dino" ${getConf('iwa-opt-dino','checked')}>
                            <label for="iwa-ckb-opt-dino"></label>
                        </div>
                        <div class="iwa-ckb-opt-caption">Abrir passatempo "T-Rex Runner" durante envio</div>
                    </p>                    
                    
                     <div class="iwa-dv-speed">
                        <div id="form-wrapper">
                            <form action="">
                                <h1 id="form-title">Velocidade de envio</h1>
                                <div id="iwa-speed-slider">
                                    <input type="radio" name="speed-radio" id="1" value="1" ${getConf('iwa-speed-slider','')==='1'?'checked':''} required>
                                    <label for="1" data-speed-val="lento"></label>
                                    <input type="radio" name="speed-radio" id="2" value="2" ${getConf('iwa-speed-slider','2')==='2'?'checked':''} required>
                                    <label for="2" data-speed-val="normal"></label>
                                    <input type="radio" name="speed-radio" id="3" value="3"  ${getConf('iwa-speed-slider','')==='3'?'checked':''} required>
                                    <label for="3" data-speed-val="rápido"></label>
                                </div>
                            </form>
                        </div>
                        <div class="iwa-speed-warn" id="iwa-speed-warn">
                            Atenção! essa velocidade pode ocasionar bloqueio temporário ou até banimento da conta do Whatsapp!<br>Use por sua conta e risco.
                        <div>
                     </div>                       
                </div>
            `;
    let app = ID('app');
    let dv = document.createElement('div');
    dv.oncontextmenu = ()=>false;
    dv.className = 'iwa-drawer-main';
    dv.id = 'iwa-drawer-conf';
    dv.innerHTML = template_config;
    app.parentNode.prepend(dv);
    ID('iwa-drawer-btn-close').addEventListener('click', (evt)=>{
        ID('iwa-drawer-conf').style.setProperty('right','-470px','important');
    }, false);

    ID('iwa-ckb-opt-verstatus').addEventListener('click', (evt)=>{
        IWA.verfyOnSend = evt.target.checked;
        setConf('iwa-opt-verstatus', evt.target.checked?'checked':'')
    }, false);

    ID('iwa-ckb-opt-dino').addEventListener('click', (evt)=>{
        IWA.runDinoOnSend = !!evt.target.checked;
        setConf('iwa-opt-dino', evt.target.checked?'checked':'')
    }, false);
    ALL('#iwa-speed-slider input[type="radio"]').forEach(radio=> {
        radio.addEventListener('click', el => {
            setConf('iwa-speed-slider', el.target.value);
            IWA.speedOP = el.target.value;
            ID('iwa-speed-warn').style.display = el.target.value === '3' ? 'block' : 'none'
        });
    })
    IWA.speedOP = ALL('#iwa-speed-slider input[type="radio"]:checked',0).value;
    IWA.runDinoOnSend = getConf('iwa-opt-dino', 'checked')==='checked';
    IWA.verfyOnSend = getConf('iwa-opt-verstatus', 'checked')==='checked';

    ID('iwa-speed-warn').style.display = ALL('#iwa-speed-slider input[type="radio"]:checked',0).value === '3' ? 'block' : 'none'
}

function ID(id){
    return document.getElementById(id);
}
function ALL(selector, idx=-1){
    let els = document.querySelectorAll(selector);
    if (idx>-1) {
        if (els.length>idx) return els[idx];
        return null;
    }
    return els;
}


function loadTxtFile(){
    // alert('Tempo de teste expirado. Extensão aguardando liberação.');
    // return;

    let inpFile = document.createElement('input');
    inpFile.style.display = 'none';
    inpFile.type="file";
    inpFile.accept=".txt";
    inpFile.addEventListener('change', (e)=>{
        const [file] = e.target.files;
        let reader = new FileReader();
        reader.addEventListener('load', event=>{
            if (event.target.result.indexOf('<#fim#>') === -1) {alert('Arquivo com conteúdo não reconhecido'); return;}
            IWA.hashFile = MD5(event.target.result);
            createMsgList(event.target.result);
            createAccordionMsgs();
            IWA.fileName = file.name;
            ID('spFileName').innerHTML = 'Arquivo: ' + file.name;
            let panel = ALL('.iwa-panel-main',0);
            panel.classList.add('scale-up-center');
            panel.classList.remove('scale-down-center');
            panel.style.setProperty('display', 'block', 'important');
            inpFile.remove();
        });
        reader.readAsText(file, 'ISO-8859-1');
    });
    document.body.appendChild(inpFile);
    inpFile.click();
}


function disableEnableBtn(btn, val){
    if(!val) btn.classList.add("iwa-btn-disabled"); else btn.classList.remove("iwa-btn-disabled");
}

function readMsgsFromStore(){
    if (IWA.hashFile==='') return;
    let content = window.localStorage.getItem('iwa_' + IWA.hashFile);
    if (content) return JSON.parse(atob(content)).data;
    return null;
}

function initalStoreMsgs(){
    if (IWA.procList.length===0 || IWA.hashFile==='') return;
    let obj = [];
    IWA.procList.forEach(el=>obj.push({hash: el.hash, id:'', status:-1}));
    window.localStorage.setItem('iwa_' + IWA.hashFile, btoa(JSON.stringify({date:Date.now(), data: obj})))
}

function storeProcList(){
    if (IWA.procList.length===0 || IWA.hashFile==='') return;
    let obj = [];
    IWA.procList.forEach(el=>obj.push({hash: el.hash, id:el.id, status:el.status, lastseen: el.lastseen, date: el.date}));
    window.localStorage.setItem('iwa_' + IWA.hashFile, btoa(JSON.stringify({date:Date.now(), data: obj})))
}


function clearOldStoreMsgs(){
    let now = new Date();
    Object.keys(localStorage).forEach(function(key){
        if(key.indexOf('iwa_') === 0){
            let item = JSON.parse(atob(localStorage.getItem(key)));
            let iDate = new Date(item.date);
            if ((now.getTime() - iDate.getTime()) / (1000 * 3600 * 24) > 60) //60 days
                localStorage.removeItem(key);
        }
    });
}

async function setMsgProp(hash, propName, propValue, store=false){
    let msgIdx = IWA.procList.findIndex((msg => msg.hash === hash));
    (msgIdx > -1) && (IWA.procList[msgIdx][propName] = propValue);
    if (store) {
        await saveMsg2Store(IWA.procList[msgIdx]);
    }
}

function validPhoneNumber(tel){
    //return tel.match(/(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}/g) !== null;
    return tel.match(/^55\d{2}9\d{8}$/g) !== null;
}

function createMsgList(texto){
    let arLinhas = texto.trim().split('<#fim#>');
    IWA.procList.length = 0;
    if (arLinhas.length === 0) return;
    arLinhas.forEach(msg => {
        msg  = msg.trim();
        const arMsg = msg.split('\n');
        if (arMsg.length > 2) {
            let Nums = [];
            arMsg[0].match(/\d{2}9\d{8}/g).forEach(numTel => {
                // arMsg[0].match(/(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}[ \n]?/g).forEach(numTel => {
                numTel = '55'+numTel.trim();
                if (!Nums.includes(numTel)) Nums.push(numTel);
            });
            let proc = '';
            const matchProcesso = arMsg.find(element => {
                if (element.includes('*Processo número: ')) {
                    return true;
                }
            });
            if (matchProcesso) {
                let procMatch = /\d{7}\-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}/.exec(matchProcesso);
                (procMatch.length) && (proc = procMatch[0]);
            }

            Nums.forEach(numTel => {
                numTel = numTel.trim();
                let hash = MD5(numTel+msg);
                let msgFmt = msg, msgRaw = msg;

                if (matchProcesso) {
                    msgFmt = msgFmt.replace(matchProcesso,`*ID da mensagem: ${hash}*\n${matchProcesso}`);
                    msgRaw = msgRaw.replace(matchProcesso,`*ID da mensagem: ${hash}*\n${matchProcesso}`).split('\n').slice(1).join('\n');
                }

                msgFmt = msgFmt.replace(/(_.*?)_/g, '$1</i>').replace(/_/g, '<i>').replace(/(\*.*?)\*/g, '$1</strong>').replace(/\*/g, '<strong>').split('\n').slice(1).join("<br>");
                IWA.procList.push({numero:numTel, processo: proc, raw_msg: msgRaw,  fmt_msg: msgFmt, hash: hash, checked : true, status: -1, id:'', lastseen:0, date:0});
            });
        }
    });
    if (IWA.procList.length === 0) alert('Nenhuma mensagem encontrada no arquivo.<br>Certifique-se que os telefones no arquivo são números ' +
        'de celulares válidos e que estejam no padrão <strong>dddnumero</strong> (ex: 14988142211)'); else
    if (!localStorage.getItem('iwa_' + IWA.hashFile))
        initalStoreMsgs(); else
        syncStatusFromStore('iwa_' + IWA.hashFile)
}

function syncStatusFromStore(stItem){
    let arStore = JSON.parse(atob(localStorage.getItem(stItem))).data;
    arStore.forEach(stMsg=>{
        let idx = IWA.procList.findIndex(x => x.hash === stMsg.hash);
        if (idx !== -1){
            IWA.procList[idx].status = stMsg.status;
            IWA.procList[idx].lastseen = stMsg.lastseen;
            IWA.procList[idx].date = stMsg.date;
            if(IWA.procList[idx].id === '' && stMsg.id !== '')
                IWA.procList[idx].id = stMsg.id;
        }
    })
}

function showModal(text, btns){
    let dvModal = document.createElement('div');
    dvModal.oncontextmenu = ()=>false;
    dvModal.className = 'iwa-dialog';
    let idModal = MD5(Date.now().toString());
    dvModal.id = idModal;
    dvModal.innerHTML = `<label  class="modal-bg visible"></label>
                            <div class="modal-content">                         
                                <article class="content">
                                    <p>${text}</p>
                                </article>
                                <footer id="iwa-dialog-${idModal}">                                    
                                </footer>
                            </div>`;
    ID('app').prepend(dvModal);
    let footer = ID(`iwa-dialog-${idModal}`);
    btns.forEach(btn=>{
        let label = document.createElement('label');
        label.className = 'button ' + btn.class;
        label.innerHTML = btn.text;
        btn.onclick && label.addEventListener('click', btn.onclick, false);
        btn.closeOnClick && label.addEventListener('click', evt=>{dvModal.remove()}, false);
        footer.append(label);
    })
}

function createAccordionMsgs(checkAll=true){

    if (IWA.procList.length === 0) return '';
    let ret = '';
    let storedList = readMsgsFromStore();
    IWA.procList.forEach(itemLista => {
        let msgStore = null;
        let status = itemLista.status;
        if (storedList){
            let idx = storedList.findIndex((msg => msg.hash === itemLista.hash));
            if(idx>-1) {
                msgStore = storedList[idx];
                status = msgStore.status;
            }
        }
        let body =	`<div class="iwa-accordionItem iwa-accordion-closed"   data-hash="${itemLista.hash}">
                              <h2 class="iwa-accordionItemHeading">
                                  <div class="checkbox-rect">
                                    <input type="checkbox" data-hash="${itemLista.hash}" id="checkbox-${itemLista.hash}" name="checks[]" ${itemLista.checked?'checked':''}>
                                    <label for="checkbox-${itemLista.hash}"></label>
                                  </div>
                                  <div class="iwa-item-title">${itemLista.processo} - ${fmtPhoneNumber(itemLista.numero)}</div>
                                  <div id="iwa-item-date-${itemLista.numero}" data-hash="${itemLista.hash}" title="Enviada em" class="iwa-item-date">${fmtDate(itemLista?.date)}</div>                                  
                                  <div id="iwa-item-lastseen-${itemLista.numero}" data-hash="${itemLista.hash}" title="Visto por último em" class="iwa-item-lastseen">${fmtDate(itemLista?.lastseen)}</div>
                                  
                                  <div id="iwa-icon-stt-${itemLista.hash}" title="${stt2Title(status)}" class="iwa-item-status ${stt2Class(status)}"></div>
                              </h2>                              
                              <div class="iwa-accordionItemContent">
                                <p>${itemLista.fmt_msg}</p>
                              </div>
				 	     </div>`;

        ret += body;
    });

    ID('iwa-intimacoes-list').innerHTML =  `<div class="accordionWrapper"><form action="" class="iwa-form-items">` +  ret + '</form></div>';
    IWA.accItem = ALL('.iwa-accordionItem');
    IWA.accHD = ALL('.iwa-item-title');
    IWA.accHD.forEach(el => el.addEventListener('click', toggleItemAccordion, false));
    let chbx = ALL('.iwa-accordionItem input[type="checkbox"]');
    chbx.forEach(el =>	el.addEventListener('click', ckbClick, false));
}

function stt2Title(status){
    switch (status){
        case -2: return 'Número sem Whatsapp';
        case -3: return 'Não enviada ou excluída';
        case 0 : return 'Pendente de envio';
        case 1 : return 'Enviada (não entregue)';
        case 2 : return 'Entregue ao usuário';
        case 3 :
        case 4 : return 'Lida';
        default: return '';
    }
}

function stt2Class(status){
    switch (status){
        case -2: return 'iwa-sem-wtz';
        case -3: return 'iwa-msg-404';
        case 0 : return 'iwa-msg-pendente';
        case 1 : return 'iwa-msg-enviada';
        case 2 : return 'iwa-msg-entregue';
        case 3 :
        case 4 : return 'iwa-msg-lida';
        default: return '';
    }
}

function fmtPhoneNumber(tel){
    const cleaned = ('' + tel).replace(/\D/g, '')
    const match = cleaned.match(/^55(\d{2})(\d{5})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return 'err_tel'
}

function toggleItemAccordion() {
    let itemClass = this.parentNode.parentNode.className;
    IWA.accItem.forEach(el=>{
        el.className = 'iwa-accordionItem iwa-accordion-closed';
    })
    if (itemClass === 'iwa-accordionItem iwa-accordion-closed') {
        this.parentNode.parentNode.className = 'iwa-accordionItem iwa-accordion-opened';
    }
}

function ckbClick(){
    let checked = this.checked;
    let hash = this.getAttribute('data-hash');
    setMsgProp(hash,'checked', checked);
}

function createMainPanel(){
    let div = document.createElement('div');
    div.oncontextmenu = ()=>false;
    div.className = 'iwa-panel-main scale-down-center';
    div.innerHTML =	`<div class="iwa-dv-title">
                            <span class='iwa-app-title'>${IWA.appName}</span><span class="iwa-app-version">${IWA.appVersion}</span>
                         </div>   
                         <div class="${IWA.spanBarraBtnsClass} iwa-dv-close" id="iwa-dv-close">
								<div aria-disabled="false" role="button" tabindex="0" class="${IWA.btnClass}" data-tab="2" title="Fechar" id="iwa-btn-close"><div class="iwa-btn-close"></div>
								</div><span></span>
						</div>
						<div class="iwa-prog-main">
						    <div id="iwa-prog-info" class="iwa-prog-info">
						    	<span class="iwa-prog-cur-sent"></span>
						    	<span class="iwa-prog-perc"></span>
						    </div>
						    <div id="iwa-prog-bar" class="iwa-prog-bar"></div>
					     </div>
						<div class='iwa-panel-body'>
						
                        <div class="iwa-md-select" id="iwa-mnu-sel">                        
                          <div class="icon-check"></div>
                          <label for="ul-id"><button type="button" title="Selecionar.."></button></label>
                          <ul role="listbox" id="ul-id"  name="ul-id">
                               <li role="option"  value="1"  tabindex="-1">Todas</li>
                               <li role="option"  value="2" tabindex="-1">Nenhuma</li>
                               <li role="option"  value="3" tabindex="-1">Não enviadas</li>
                               <li role="option"  value="4"  tabindex="-1">Enviadas</li>
                               <li role="option"  value="5"  tabindex="-1">Entregue</li>
                               <li role="option"  value="6" tabindex="-1">Lidas</li>
                          </ul>                        
                        </div>
                            
						<span class="iwa-int-title" id="spFileName"></span> </div> 
						<div id='iwa-intimacoes-list'></div>
						<div class="iwa-footer">
							<div class="${IWA.divBarraBtnsClass}">
								<span>
									<div class="${IWA.spanBarraBtnsClass}" id="iwa-dv-send">
										<div aria-disabled="false" role="button" tabindex="0" class="${IWA.btnClass}" data-tab="2" title="Enviar mensagens selecionadas" id="iwa-btn-send"><div class="iwa-btn-send"></div></span>
										</div><span></span>
									</div>
									<div class="${IWA.spanBarraBtnsClass}" id="iwa-dv-verify">
										<div aria-disabled="false" role="button" tabindex="0" class="${IWA.btnClass}" data-tab="2" title="Verificar status das mensagens selecionadas" id="iwa-btn-verify"><div class="iwa-btn-verify"></div></span>
										</div><span></span>
									</div>
									<div class="${IWA.spanBarraBtnsClass} iwa-btn-disabled">
										<div aria-disabled="false" role="button" tabindex="0" class="${IWA.btnClass}" data-tab="2" title="Parar operação" id="iwa-btn-stop"><div class="iwa-btn-stop"></div></span>
										</div><span></span>
									</div>
									<div class="${IWA.spanBarraBtnsClass}" id="iwa-dv-btn-lastseen">
										<div aria-disabled="false" role="button" tabindex="0" class="${IWA.btnClass}" data-tab="2" title="Verificar 'Visto por último'" id="iwa-btn-vistoultimo"><div class="iwa-btn-vistoultimo" ></div></span>
										</div><span></span>
									</div>
									<div class="${IWA.spanBarraBtnsClass}" id="iwa-dv-btn-copy-cpb">
										<div aria-disabled="false" role="button" tabindex="0" class="${IWA.btnClass}" data-tab="2" title="Copiar número dos processos selecionados para área de transferência" id="iwa-btn-copy-cpb"><div class="iwa-btn-copy-cpb"></div></span>
										</div><span></span>
									</div>
									<div class="${IWA.spanBarraBtnsClass}" id="iwa-dv-btn-teste">
										<div aria-disabled="false" role="button" tabindex="0" class="${IWA.btnClass}" data-tab="2" title="Modo Teste" id="iwa-btn-teste"><div class="iwa-btn-teste" ></div></span>
										</div><span></span>
									</div>
									<div  class="${IWA.divTesteAvoClass} iwa-dv-teste" id="iwa-dv-teste">
									    <div   class="${IWA.divTestePaiClass}">
									        <div class="${IWA.divTesteFilho1Class}" contenteditable="true" id="iwa-edit-test" role="textbox"title="Informe um número de telefone para teste"  data-lexical-editor="true" style="min-height: 1.47em; user-select: text; white-space: pre-wrap; word-break: break-word;"></div>
									        <div class="${IWA.divTesteFilho2Class}" ></div>
									    </div>
									</div>
									
									<!--div class="$ {IWA.divEditorAvoClass} iwa-dv-teste" id="iwa-dv-teste">
										<div tabindex="-1" class="$ {IWA.divEditorPaiClass}">
											<div data-testid="pluggable-input-placeholder" class="$ {IWA.divEditorFilho1Class}">
											</div>
											<div role="textbox" title="Informe um número de telefone para teste" id="iwa-edit-test" class="$ {IWA.divEditorFilho2Class} copyable-text selectable-text" contenteditable="true" data-tab="3" dir="ltr" tabindex="0">
											</div>
										</div>
									</div-->
								</span>
								
								<div class="${IWA.spanBarraBtnsClass} iwa-dv-about" id="iwa-dv-btn-about">
										<div aria-disabled="false"  role="button" tabindex="0"   class="${IWA.btnClass}" data-tab="2" 
										title="Sobre" id="iwa-btn-about">
										    <div class="iwa-btn-about" ></div></span>
										</div><span></span>
							    </div>	
								
								<div class="${IWA.spanBarraBtnsClass} iwa-dv-conf" id="iwa-dv-btn-conf">
										<div aria-disabled="false"  role="button" tabindex="0"   class="${IWA.btnClass}" data-tab="2" 
										title="Opções" id="iwa-btn-conf">
										    <div class="iwa-btn-conf" ></div></span>
										</div><span></span>
							    </div>							 
								 

							</div>
						</div>`;
    document.body.appendChild(div);
}

function toggleTestField(){
    let style = window.getComputedStyle(IWA.txtEditTest);
    if (style.visibility==='visible')
    {
        IWA.dvEditTest.classList.remove('iwa-dv-test-visible');
        IWA.dvEditTest.classList.remove('iwa-dv-test-error');
        IWA.txtEditTest.title = 'Informe um número de telefone para teste';
        IWA.telTeste = '';
    } else
    {
        IWA.dvEditTest.classList.add('iwa-dv-test-visible');
        let num = '55' + IWA.txtEditTest.innerHTML.replace(/\D/g, '');
        IWA.txtEditTest.focus();
        if (IWA.txtEditTest.innerText.trim() !== '' && !validPhoneNumber(num)) {
            IWA.dvEditTest.classList.add('iwa-dv-test-error');
            IWA.txtEditTest.title = 'Número inválido';
        }
        else if (validPhoneNumber(num))
            IWA.telTeste = num;
    }
}

function maskTel(o, f) {
    setTimeout(function() {
        let v = mTel(o.innerHTML);
        if (v != o.innerHTML) {
            o.innerHTML = v;
            setEndOfContenteditable(o);
        }
    }, 1);
}

function mTel(v) {
    let r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else if (r.length > 0){
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}

function setEndOfContenteditable(contentEditableElement)
{
    let range,selection;
    if(document.createRange)
    {
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
    else if(document.selection)
    {
        range = document.body.createTextRange();
        range.moveToElementText(contentEditableElement);
        range.collapse(false);
        range.select();
    }
}


function injectMainBns(){
    let div = document.createElement('div');
    div.oncontextmenu = ()=>false;
    div.className  = 'iwa-main-btns';
    div.innerHTML =
        `
                    <div class="${IWA.spanBarraBtnsClass} iwa-blink iwa-btn-main" id="iwa-dv-upload">
                    <div aria-disabled="false" role="button" tabindex="0" class="${IWA.btnClass}" data-tab="2" title="IntimaWA - Carregar arquivo de Intimações" aria-label="Carregar arquivo TXT de Intimações" id="iwa-btn-upload"><span><div class="iwa-btn-upload"></div></span></div><span></span></div>
    
                    <div class="${IWA.spanBarraBtnsClass} iwa-blink iwa-btn-main" style="margin-left: 2px;" id="iwa-dv-help">
                    <div aria-disabled="false" role="button" tabindex="0" class="${IWA.btnClass}" data-tab="2" title="IntimaWA - Ajuda" aria-label="Ajuda" id="iwa-btn-help"><span><div class="iwa-btn-help"></div></span></div><span></span></div>
        `;
    IWA.spanBarraBtns.prepend(div);

    let mnuHelp = document.createElement('div');
    mnuHelp.oncontextmenu = ()=>false;
    mnuHelp.className = "iwa-md-select";
    mnuHelp.id = "iwa-mnu-help";
    mnuHelp.innerHTML = `                         
                          <ul role="listbox" id="ul-id2"  class="iwa-help-menu">
                               <li role="option"  value="1"  tabindex="-1">Como importar e enviar mensagens</li>
                               <li role="option"  value="2" tabindex="-1">Como verificar status das mensagens enviadas</li>
                               <li role="option"  value="3" tabindex="-1">Como usar o Modo de Teste</li>
                               <li role="option"  value="4"  tabindex="-1">Verificar o "Visto por último" dos contatos</li>
                               <li role="option"  value="5"  tabindex="-1">Copiar números dos processos selecionados</li>
                               <li role="option"  value="6"  tabindex="-1">Opções do aplicativo</li>
                          </ul>`;
    ALL('body',0).prepend(mnuHelp);
    window.addEventListener('resize', evt=>adjustMnuHelpPos());
    setTimeout(()=>adjustMnuHelpPos(),500);

    ID('iwa-dv-upload').addEventListener('click', function handleClick(event) {
        loadTxtFile();
    });

    ID('iwa-dv-help').addEventListener('click', function handleClick(event) {
        ID('iwa-dv-help').classList.toggle('iwa-btntoogle-down');
        ID('ul-id2').style.display = ID('iwa-dv-help').classList.contains('iwa-btntoogle-down') ? 'block': 'none';
    });

    ALL('#ul-id2 li').forEach(li=>li.addEventListener('click', evt=> {
        ID('ul-id2').style.display = 'none';
        ID('iwa-dv-help').classList.remove('iwa-btntoogle-down');
        showHelp(evt.target.value);
    }));

    let dvOverHelp = document.createElement('div');
    dvOverHelp.oncontextmenu = ()=>false;
    dvOverHelp.className = "iwa-dv-help-over";
    dvOverHelp.id = "iwa-dv-help-over";
    dvOverHelp.innerHTML = `<div class="iwa-dv-help-img"><img id="iwa-img-help" src="" alt="Ajuda"><div class="iwa-close-help" id="iwa-close-help" title="Fechar"></div></div>`;
    ALL('body',0).prepend(dvOverHelp);
    dvOverHelp.onclick = ()=>{dvOverHelp.style.display = 'none'}
    ID('iwa-close-help').addEventListener('click',evt=>dvOverHelp.style.display = 'none')

    setTimeout(()=>{
        ALL('.iwa-blink').forEach(el=>el.classList.remove('iwa-blink'));
    },10000)
}

function showHelp(opt){
    let fName;
    switch (opt) {
        case 1 : fName = 'importar.gif'; break;
        case 2 : fName = 'verificar.gif'; break;
        case 3 : fName = 'modoteste.gif'; break;
        case 4 : fName = 'vistoultimo.gif'; break;
        case 5 : fName = 'copiar.gif'; break;
        case 6 : fName = 'opcoes.gif'; break;
    }
    ID('iwa-dv-help-over').style.display = 'block';
    ID('iwa-img-help').src = '';
    ID('iwa-img-help').src = IWA.BASE_PATH + 'assets/help/' + fName + '?fo=' + Math.random();
}

function adjustMnuHelpPos(){
    let mnu = ID('iwa-mnu-help');
    let dvMainBtnsPos = getOffset(ALL('.iwa-main-btns',0));
    mnu.style.top = Math.floor(dvMainBtnsPos.top + 47) + 'px';
    mnu.style.left = Math.floor(dvMainBtnsPos.left) + 'px';
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}


// function waitLoadWZ(){
//     if (ALL("#pane-side").length !== 0)  {initIWA();} else {setTimeout(waitLoadWZ, 500);}
// }


async function saveMsg2Store(msgInfo){
    while (IWA.storingMSG) await sleep(200);
    IWA.storingMSG = true;
    try {
        let idx = IWA.procList.findIndex(x => x.hash === msgInfo.hash);
        if (idx !== -1){
            IWA.procList[idx].status = msgInfo.status;
            IWA.procList[idx].id = msgInfo.id;
            IWA.procList[idx].lastseen = msgInfo.lastseen;
            IWA.procList[idx].date = msgInfo.date;
        }
        const msgs = localStorage.getItem('iwa_' + IWA.hashFile);
        let obj = {date: Date.now(), data: []};
        let msg = {hash: msgInfo.hash, id: msgInfo.id, status: msgInfo.status, lastseen:msgInfo.lastseen||0, date:msgInfo.date||0 };
        if (msgs !== null)
            obj = JSON.parse(atob(msgs));
        idx = obj.data.findIndex(x => x.hash === msgInfo.hash);
        if (idx !== -1)
            obj.data[idx] = msg; else
            obj.data.push(msg);
        window.localStorage.setItem('iwa_' + IWA.hashFile, btoa(JSON.stringify(obj)));
    }catch (e) {}
    IWA.storingMSG = false;
}

function enableDisableFields(val){
    disableEnableBtn(IWA.btnOpenTxt.parentNode,val);
    disableEnableBtn(IWA.btnSend.parentNode,val);
    disableEnableBtn(IWA.btnVerify.parentNode,val);
    disableEnableBtn(IWA.btnStop.parentNode,!val);
    disableEnableBtn(IWA.btnCopyClipboard.parentNode,val);
    disableEnableBtn(IWA.btnTest.parentNode,val);
    IWA.btnClose.parentNode.style.display = val?'block':'none';
    disableEnableBtn(IWA.btnClose.parentNode,val);
    disableEnableBtn(IWA.btnAbout.parentNode,val);
    disableEnableBtn(IWA.btnConf.parentNode,val);
    ALL('.checkbox-rect').forEach(ckb=>disableEnableBtn(ckb,val));
    disableEnableBtn(IWA.txtEditTest.parentNode,val);
    disableEnableBtn(IWA.btnVistoUltimo.parentNode,val);
}

function startOp(opType='send'){ //verify|send
    enableDisableFields(false);
    IWA.abortOP = false;
    IWA.spPROGBARcur.innerHTML = '';
    IWA.spPROGBARcur.innerHTML =``;
    IWA.spPROGBARperc.innerHTML = '';
    IWA.dvPROGBARmain.style.setProperty('visibility','visible','important');
    IWA.dvPROGBARgrad.style.setProperty('right', '270px', 'important');
    opType==='send' && IWA.runDinoOnSend && showDinoGame(true);
}

function stopOp(){
    IWA.abortOP = true;
    !IWA.dinoRunning && showDinoGame(false);
    enableDisableFields(true);
    ID('app').classList.remove('iwa-hide-app');
    endOfProgress();
    ALL(`.iwa-accordionItem`).forEach(el=>el.classList.remove('iwa-blink'));
}

function endOfProgress() {
    IWA.spPROGBARcur.innerHTML = `FIM`;
    IWA.dvPROGBARgrad.style.setProperty('right', '2px', 'important');
    IWA.spPROGBARperc.innerHTML = '';
    setTimeout(() => {
        IWA.dvPROGBARmain.style.setProperty('visibility', 'hidden', 'important');
        IWA.dvPROGBARgrad.style.setProperty('right', '270px', 'important');
    }, 3000);
}

function animatePerc(curPas, totalPas, fator= 2){
    let perc = Math.floor(curPas/totalPas*100);

    let curRight = parseInt(IWA.dvPROGBARgrad.style.right.replace(/\D/g, ''));
    let toRight = Math.floor(270 - (268 * perc /100));
    let rPer = Math.floor((270 - curRight)/268*100);
    if (rPer<100) {
        IWA.dvPROGBARgrad.style.setProperty('right', (curRight-1) + 'px', 'important');
        IWA.spPROGBARperc.innerHTML = ` [${rPer}%]`;
    } else endOfProgress();
    if (toRight<curRight && curRight>2 && curRight<=270)
        setTimeout(()=>{animatePerc(curPas, totalPas, fator)},Math.floor(3000 / Math.floor(268 / totalPas) * (fator/parseInt(IWA.speedOP) )));
}

function onBtnStopClick(){
    stopOp();
    IWA.dvPROGBARmain.style.setProperty('visibility','hidden','important');
    IWA.dvPROGBARgrad.style.setProperty('right', '270px', 'important');

}

function onBtnCloseClick(){
    let panel = ALL('.iwa-panel-main',0);
    panel.classList.remove('scale-up-center');
    panel.classList.add('scale-down-center');
    setTimeout(()=>{panel.style.setProperty('display', 'none', 'important');},200);
    //ALL('.iwa-panel-main',0).style.setProperty('display', 'none', 'important');
    IWA.procList.length = 0;
}

function confModules(b) {
    let e = 0,
        a = [
            {id: "Store", conditions: (a) => (a.default && a.default.Chat && a.default.Msg ? a.default : null)},
            {id: "MyStatus", conditions: (a) => (a.getStatus && a.setMyStatus ? a : null)},
            {id: "WidFactory", conditions: (a) => (a.isWidlike && a.createWid && a.createWidFromWidLike ? a : null)                },
            {id: "Cmd", conditions: (a) => a.Cmd || null},
            {id: "genId", conditions: (a) => a.randomId || null},
            {id: "queryExists", conditions: (a) => a.queryExists || null},
            {id: "WapQueryMD", conditions: (a) => (a.queryWidExists && a.queryPhoneExists) || (a.queryExists && a.queryPhoneExists) ? a : null},
            {id: "ChatState", conditions: (a) => (a.sendChatStateComposing ? a : null)},
            {id: "MsgCollectionImpl" , conditions: (a) => (a.MsgCollectionImpl ? a : null)},
            {id: "ChatCreateUtil" , conditions: (a) => (a.create ? a : null)},
            {id: "Me", conditions: (a) => (a.PLATFORMS && a.Conn ? a.default : null)},
            {id: "sendMsgToChat", conditions: (a) => a.sendMsgToChat || null},
            {id: "SendTextMsgToChat", conditions: (a) => a.sendTextMsgToChat || null},
            {id: "Conn", conditions: (a) => (a.default && a.default.ref && a.default.refTTL ? a.default : null)},
        ];
    for (let c in b) {
        if (
            "object" == typeof b[c] && null !== b[c] &&   (a.forEach((a) => {
                let d;
                !a.conditions || a.foundedModule || (null !== (d = a.conditions(b[c])) && (e++, (a.foundedModule = d)));
            }),
            e === a.length)
        )
            break;
    }
    let d = a.find((a) => "Store" === a.id);
    return (
        (IWA.API = d.foundedModule || {}),
            a.splice(a.indexOf(d), 1),
            a.forEach((a) => {
                a.foundedModule && (IWA.API[a.id] = a.foundedModule);
            }),
            (IWA.API.Chat.modelClass.prototype.sendMessage = function (a) {
                IWA.API.SendTextMsgToChat(this, ...arguments);
            }),
        IWA.API.Chat._find ||
        (IWA.API.Chat._find = (a) => {
            let b = IWA.API.Chat.get(a);
            return b ? Promise.resolve(b) : Promise.resolve({ id: a });
        }),
            IWA.API
    );
}


function initAPIIWA(){
    IWA.API = {};
    let t = 'parasite' + Date.now();
    "function" == typeof webpackJsonp ? webpackJsonp([], {
        [t]: (t,e,n)=>confModules(n)
    }, [t]) : webpackChunkwhatsapp_web_client.push([[t], {}, function(t, e, n) {
        let r = [];
        for (let a in t.m)
            r.push(t(a));
        confModules(r);

        IWA.API.Msg.on("add", async (n,t)=>{

            if (IWA.verfyOnSend && n.__x_isSentByMeFromWeb && n.__x_isNewMsg && n.__x_id._serialized){
                setTimeout(()=>{
                    getStatusById(n.__x_id._serialized).then(async (res)=>{
                        (res.hash!=='') && (await setIconAndStore({hash:  res.hash, status:  res.status, id:n.__x_id._serialized, date: n.t*1000}));
                    })},5000);
            }
        })
    }]);
}

function getStatusById(_serialized_id){
    return new Promise(async (resolve,reject) => {
        let res = {hash: '', status: -3};
        try {
            let msg = IWA.API.Msg.get(_serialized_id);
            if (msg && msg.__x_ack) {
                let hash = getHashFromMsg(msg.__x_text);
                hash && (res.hash = hash, res.status = msg.__x_ack, res.date = msg.t)
            }
        }catch (e){ console.log(e);}
        resolve(res);
    })
}

function getHashFromMsg(msg_body){
    let hashM = /[a-f\d]{32}/.exec(msg_body);
    if (hashM) return hashM[0].trim();
    return null;
}

function showDinoGame(val){
    ID('iwa-app-dino').style.display = val?'block':'none';
    val && setTimeout(()=> ID('iwa-iframe-dino').contentWindow.focus(),500);
    !val && ID('app').style.setProperty('display','block','important');
}

function injectDinoGame(){
    const app = ID('app');
    let div = document.createElement('div');
    div.oncontextmenu = ()=>false;
    div.style.position = 'absolute';
    div.className = 'iwa-dino';
    div.id = 'iwa-app-dino';
    div.innerHTML = `
                <div class="iwa-dino-title">T-Rex Runner</div>
                <div class="iwa-dino-rule">Pressione "Espaço" para iniciar/pular e "Seta" pra baixo para agachar...</div>
                <div class="iwa-close-btn-dino" title="Fechar"></div>
                <iframe id="iwa-iframe-dino" src="${IWA.BASE_PATH}dino/index.html" style="width:100%; height:100%; overflow:hide">
            `;
    app.parentNode.prepend(div);
    ALL('.iwa-close-btn-dino',0).addEventListener('click', evt=>{showDinoGame(false)}, false);
}

function _sendMsg(num, msg, slpSend, slpComp= 300 ){
    return new Promise(async(resolve,reject)=>{
        try {
            num = num + '@c.us';
            let usuWid = IWA.API.WidFactory.createWid(num);
            let r = await IWA.API.Chat.get(num);
            if (r === undefined) {
                await IWA.API.ChatCreateUtil.create(usuWid, {createdLocally: true}, {forceUsync: true});
                await sleep(200);
                r = IWA.API.Chat.get(num);
            }
            if (r) {
                if (localStorage.getItem('hideTypingStatus') === "true") { //extensão WA instalada
                    setTimeout(async ()=>{
                        await __delayedSend(slpComp,slpSend,msg, r);
                        resolve(true);
                    })
                } else {
                    IWA.API.ChatState.sendChatStateComposing(usuWid).then(async resp=>{
                        await __delayedSend(slpComp,slpSend,msg, r)
                        resolve(true);
                    });
                }
            } else reject('impossível obter Chat: ' + num);
        }catch (e) {
            reject('_sendMsg: ' + e.message);
        }
    })
}

async function __delayedSend(slpComp,slpSend,msg, r){
    await sleep(slpComp)
    r.sendMessage = r.sendMessage || function () {
        return IWA.API.sendMessage.apply(this, arguments)
    }
    await sleep(slpSend);
    await r.sendMessage(msg);
}


async function numberHasWtz(numero){
    try {
        if (numero.substring(0,1)!=='55' && numero.length === 11) numero = `55${numero}`;
        let w = IWA.API.WidFactory.createWid(numero + '@c.us');
        let hasW = await IWA.API.WapQueryMD.queryWidExists(w);
        let data = IWA._serializeNumberStatusObjMD(hasW);
        return data.status;
    }
    catch (e) {
        return null;
    }

}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function notWtz(MSG_ST){
    await saveMsg2Store(MSG_ST);
    let el = ID('iwa-icon-stt-' + MSG_ST.hash);
    if(el) {
        el.className = `iwa-item-status ${stt2Class(MSG_ST.status)}`;
        el.title = stt2Title(MSG_ST.status);
    }
}

async function sendMsgIWA(MSG_ST){
    return new Promise(async (resolve, reject) => {
        if (IWA.abortOP) return resolve(false);
        startSend(MSG_ST);
        let hasW = await numberHasWtz(MSG_ST.numero);

        if (!hasW) {
            MSG_ST.status = -2;
            await notWtz(MSG_ST);
            return reject('sem whatsapp');
        }
        let rnd;
        switch (IWA.speedOP) {
            case '1' :  rnd = Math.floor(Math.random() * (5000 - 3500)) + 3500; break; //lento
            case '3' :  rnd = Math.floor(Math.random() * (2000 - 1000)) + 1000; break;  //rapido
            default:    rnd = Math.floor(Math.random() * (3500 - 2000)) + 2000; //normal
        }
        let elStt = ID('iwa-icon-stt-' + MSG_ST.hash);
        elStt && (elStt.className = 'iwa-item-status iwa-msg-pendente');

        await _sendMsg(MSG_ST.numero, MSG_ST.msg, rnd).then(resp=>{
            elStt && (elStt.className = 'iwa-item-status');
            return resolve(true);
        }, rej => {
            elStt && (elStt.className = 'iwa-item-status');
            return reject(rej);
        }).catch(err=>{
            elStt && (elStt.className = 'iwa-item-status');
            return reject('_sendMsg', err);
        });
    })
}

function accordionBlink(hash){
    let items = ALL(`.iwa-accordionItem`), curItem = ALL(`.iwa-accordionItem[data-hash="${hash}"]`,0);
    items.forEach(el=>el.classList.remove('iwa-blink'));
    curItem && (curItem.classList.add('iwa-blink'))
}

function startSend(MSG_ST){
    let fator = IWA.speedOP === 1 ? 5.5 : (IWA.speedOP === 2 ? 4 : 2);
    accordionBlink(MSG_ST.hash)
    animatePerc(MSG_ST.idx, MSG_ST.msgs , fator);
    IWA.spPROGBARcur.innerHTML = `enviando ${MSG_ST.idx} de ${MSG_ST.msgs} `;
}

function closeChat(){
    let curChat = IWA.API.Chat.getActive();
    curChat && IWA.API.Cmd.closeChat(curChat);
}

function onBtnAboutClik(){
    ID('iwa-about-main').style.setProperty('top','calc(50% - 200px)','important');
}

function onBtnConfClick(){
    ID('iwa-drawer-conf').style.setProperty('right','18px','important');
}

function receiveMessage(evt)
{
    if (evt.origin === `chrome-extension://${IWA.extensionId}`)
    {
        if (evt.data === 'dino-running') IWA.dinoRunning = true; else
        if (evt.data === 'dino-stopped') IWA.dinoRunning = false;
        IWA.dinoRunning && (ALL('.iwa-dino-rule',0).style.display = 'none');
    }
}

function onBtnCopyClipboardClick() {
    let arProcs = [];
    IWA.procList.forEach(msg =>  msg.checked && !arProcs.includes(msg.processo) && arProcs.push(msg.processo));
    if (arProcs.length === 0) alert('Selecione ao menos uma mensagem para copiar o número do processo'); else {
        navigator.clipboard.writeText(arProcs.join('\n'))
            .then( ()=> alert('Copiado com sucesso!'))
            .catch(()=>alert('Desculpe, não foi possível copiar os números dos processos'));
    }
}

function initIWA(){
    window.addEventListener('message', receiveMessage, false);
    initAPIIWA()
    clearOldStoreMsgs();
    let divStt = ALL('div[data-testid="menu-bar-status"]',0);
    let divTesteFilho1 = ALL('div[data-testid="chat-list-search"]',0);
    let divTestePai = divTesteFilho1.parentNode;
    let divTesteFilho2 = divTestePai.getElementsByTagName('div')[1];


    IWA.spanBarraBtns = divStt.parentNode;
    IWA.divBarraBtns = IWA.spanBarraBtns.parentNode;
    IWA.btnClass = divStt.firstChild.className;
    IWA.spanBarraBtnsClass = divStt.className;
    IWA.divBarraBtnsClass = IWA.divBarraBtns.className;
    IWA.divTestePaiClass = divTestePai.className;
    IWA.divTesteFilho2Class = divTesteFilho2.className;
    IWA.divTesteFilho1Class = divTesteFilho1.className;

    IWA.divTesteAvoClass = divTestePai.parentNode.className;
    injectMainBns();
    createMainPanel();
    injectDinoGame();
    injectConfDrawer();
    injectAbout();

    IWA.btnTest = ID('iwa-btn-teste');
    IWA.btnSend = ID('iwa-btn-send');
    IWA.btnStop = ID('iwa-btn-stop');
    IWA.btnOpenTxt = ID('iwa-btn-upload');
    IWA.btnVerify = ID('iwa-btn-verify');
    IWA.btnClose = ID('iwa-btn-close');
    IWA.btnCopyClipboard = ID('iwa-btn-copy-cpb');
    IWA.btnConf = ID('iwa-btn-conf');
    IWA.btnAbout = ID('iwa-btn-about');
    IWA.txtEditTest = ID('iwa-edit-test');
    IWA.dvEditTest = ID('iwa-dv-teste');
    IWA.btnVistoUltimo = ID('iwa-btn-vistoultimo');


    IWA.btnTest.addEventListener('click', toggleTestField, false);
    IWA.btnSend.addEventListener('click', onBtnSendClick, false);
    IWA.btnStop.addEventListener('click', onBtnStopClick, false);
    IWA.btnClose.addEventListener('click', onBtnCloseClick, false);
    IWA.btnConf.addEventListener('click', onBtnConfClick, false)
    IWA.btnVerify.addEventListener('click', onBtnVerifyClik, false);
    IWA.btnVistoUltimo.addEventListener('click', onBtnVistoUltimoClik, false);
    IWA.btnAbout.addEventListener('click', onBtnAboutClik, false);
    IWA.btnCopyClipboard.addEventListener("click", onBtnCopyClipboardClick, false);

    IWA.dvPROGBARmain = ALL('.iwa-prog-main',0);
    IWA.dvPROGBARgrad = ALL('.iwa-prog-bar',0);
    IWA.spPROGBARperc = ALL('.iwa-prog-perc',0);
    IWA.spPROGBARcur = ALL('.iwa-prog-cur-sent',0);

    ID('iwa-mnu-sel').addEventListener('click', evt=>{
        ID('iwa-mnu-sel').classList.toggle('active')
    })

    ALL('#iwa-mnu-sel ul li').forEach(el=>{
        el.addEventListener('click', evt=> {
            let val = evt.target.value;
            switch(val.toString()){
                case '1' : IWA.procList.forEach(msg=>msg.checked=true); break;
                case '2' : IWA.procList.forEach(msg=>msg.checked=false); break;
                case '3' : IWA.procList.forEach(msg=>msg.checked=![-2,1,2,3,4].includes(msg.status)); break;
                case '4' : IWA.procList.forEach(msg=>msg.checked=[1,2,3,4].includes(msg.status)); break;
                case '5' : IWA.procList.forEach(msg=>msg.checked=[2,3,4].includes(msg.status)); break;
                case '6' : IWA.procList.forEach(msg=>msg.checked=[3,4].includes(msg.status)); break;
            }
            createAccordionMsgs();
        })
    });

    ALL('.close-about',0).addEventListener('click', evt=> {
        ID('iwa-about-main').style.setProperty('top','-300px','important');
    });


    IWA.txtEditTest.addEventListener("keypress", function() {
        IWA.telTeste = '';
        IWA.dvEditTest.classList.remove('iwa-dv-test-error');
        IWA.txtEditTest.title = 'Informe um número de telefone para teste';
        maskTel(this, mTel);
    });
    IWA.txtEditTest.addEventListener("blur", function() {
        maskTel(this, mTel);
        let num = '55'+this.innerText.replace(/\D/g, '');
        if (validPhoneNumber(num)) {
            IWA.telTeste = num;
            IWA.dvEditTest.classList.remove('iwa-dv-test-error');
            IWA.txtEditTest.title = 'Informe um número de telefone para teste';
        } else if (num !== '') {
            IWA.dvEditTest.classList.add('iwa-dv-test-error');
            IWA.txtEditTest.title = 'Número inválido';
        }
    });

}

//waitLoadWZ();

initIWA();
