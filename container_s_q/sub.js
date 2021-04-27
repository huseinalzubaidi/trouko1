var index_sugg_p, nameP, title_p_index, sub_r_s, hol_sugg, psp
    , sub_r_sSugg, sub_r_nSugg, index_sugg_pT, hol_suggT;

index_sugg_p = document.getElementById("index_sugg_p")
index_sugg_pT = document.getElementById("index_sugg_pT")
nameP = document.getElementById("title").innerHTML
title_p_index = document.getElementById("title_p_index").innerHTML = nameP;
sub_r_s = document.getElementById("sub_r_s")
hol_sugg = document.getElementById("hol_sugg")
hol_suggT = document.getElementById("hol_suggT")
psp = document.getElementById("psp").innerHTML

sub_r_nSugg = document.getElementById("sub_r_nSugg")
sub_r_sSugg = document.getElementById("sub_r_sSugg")

var xReq = new XMLHttpRequest();
xReq.open('GET', '../../../data.js');

xReq.send();

xReq.onload = function () {
    adIndexSugg(title_p_index)
}
cdLink(true)

//

function ad(s,t) {
    var cos = 0
    var arr = [];
    while (arr.length < s.length) {
        var r = Math.floor(Math.random() * s.length);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    var i;
    if (t === false) {
        for (i = 0; i < arr.length; i++) {
            if(cos < 4){
                cos ++
                var x = arr[i]
                addSuggTIndex(s[x].linkPage, s[x].namePath)
                addSugg(s[x].linkPage, "_J_n_Hus_S", "_pag_x_242", "i_tfscript.js", sub_r_sSugg, "s_sub_t_dTw");
                sub_r_nSugg.style.display = "none"
            }
        }
    } else {
        for (i = 0; i < arr.length; i++) {
            if(cos < 4){
                cos ++
                var x = arr[i]
                adSugg(s[x].linkPage, "_J_n_Hus_", "_pag_n_232", "i_fscript.js", sub_r_s, "s_sub_t_d");
            }
        }
    }
}

var storageD = [];
var iWeSt = []

function adIndexSugg() {
    var miUrl = document.getElementById("miUrl").innerText + '/'
    var lin_k_One = document.getElementById("lin_k_One").innerText;
    var lin_k_Two = document.getElementById("lin_k_Two").innerText;
    var lin_k_Three = document.getElementById("lin_k_Three").innerText;
    var lin_k_Four = document.getElementById("lin_k_Four").innerText;
    var lin_k_Five = document.getElementById("lin_k_Five").innerText;
    var xData = JSON.parse(xReq.responseText);
    var iBasic = 0
    var iWe = 0
    var iVe = 0
    var iVeSt = []
    for(var x = 0 ; x < xData.length; x++){
        var e = xData[(xData.length-x)-1]
        if (e.linkPage.includes(psp) === true && miUrl !== e.linkPage && lin_k_One !== e.linkPage && lin_k_Two !== e.linkPage && lin_k_Three !== e.linkPage && lin_k_Four !== e.linkPage && lin_k_Five !== e.linkPage) {
            if (iBasic < 8) {
                iBasic++
                var s = e.namePath;
                var l = e.linkPage;
                var sub = { "linkPage": l, "namePath": s };
                storageD.push(sub)
            } else {
                if (iWe < 8) {
                    iWe++
                    var s = e.namePath;
                    var l = e.linkPage;
                    var sub = { "linkPage": l, "namePath": s };
                    iWeSt.push(sub)
                }
            }
        } else {
            if(iVe < 16){
                iVe++
                var s = e.namePath;
                var l = e.linkPage;
                var sub = { "linkPage": l, "namePath": s };
                iVeSt.push(sub)
            }
        }
    }
    iVeSt.forEach(e=>{
        if(iBasic < 8){
            iBasic ++
            var s = e.namePath;
            var l = e.linkPage;
            var sub = { "linkPage": l, "namePath": s };
            storageD.push(sub)
        } else {
            if(iWe < 8){
                var s = e.namePath;
                var l = e.linkPage;
                var sub = { "linkPage": l, "namePath": s };
                iWeSt.push(sub)
            }
        }
    })
    ad(storageD,false);
    cdLink(false)
}
setTimeout(function () {
    if (index_sugg_p.innerText === "" || index_sugg_pT.innerText === "") {
        hol_sugg.innerHTML = '<div class="no_result"> لا يتوفر مقترحات في الوقت الحالي </div>'
        hol_suggT.innerHTML = '<div class="no_result"> لا يتوفر مقترحات في الوقت الحالي </div>'
    }
}, 3000)

var callf = 0;

function addSuggTIndex(l, n) {
    var g = title_p_index.replace(/ /g, "")
    callf++;
    if (callf > 5) {
        return false
    }
    else if (g.includes(n)) {
        return false
    }
    var lit, li;
    li = document.createElement("p");
    li.className = "linShort"
    li.innerHTML = "<a class='sugg_i_li' href='" + l + "'>" + n + "</a><a href='" + l + "' class='icoLinShort'><img src='../../../icons/chevron-left-solid.svg'  style='width:10px;'></a>";
    lit = document.createElement("p");
    lit.className = "linShort"
    lit.innerHTML = "<a class='sugg_i_li' href='" + l + "'>" + n + "</a><a href='" + l + "' class='icoLinShort'><img src='../../../icons/chevron-left-solid.svg'  style='width:10px;'></a>";
    setTimeout(function () {
        index_sugg_p.append(li)
        index_sugg_pT.append(lit)
    }, 200)
}


//.
function cdLink(x) {
    if(x === true){
        if (addSugg_vrOne === "" && addSugg_vrTwo === "" && addSugg_vrThree === "" && addSugg_vrFour === "" && addSugg_vrFive === "") {
            return false
        } else {
            adSugg(addSugg_vrOne, "_J_n_Hus_", "_pag_n_232", "i_fscript.js", sub_r_s, "s_sub_t_d");
            adSugg(addSugg_vrTwo, "_J_n_Hus_", "_pag_n_232", "i_fscript.js", sub_r_s, "s_sub_t_d");
            adSugg(addSugg_vrThree, "_J_n_Hus_", "_pag_n_232", "i_fscript.js", sub_r_s, "s_sub_t_d");
            adSugg(addSugg_vrFour, "_J_n_Hus_", "_pag_n_232", "i_fscript.js", sub_r_s, "s_sub_t_d");
            adSugg(addSugg_vrFive, "_J_n_Hus_", "_pag_n_232", "i_fscript.js", sub_r_s, "s_sub_t_d");
        }
    } else {
        if (addSugg_vrOne === "" && addSugg_vrTwo === "" && addSugg_vrThree === "" && addSugg_vrFour === "" && addSugg_vrFive === "") {
            ad(iWeSt,true)
            // Add From System
        }
    }
}
var isCallHim = false
function callGayes() {
    if (isCallHim === false) {
        isCallHim = true
        setTimeout(() => {
            document.getElementById("suggContainerMed").style.display = "block"
            document.getElementById("suggContainerWeb").style.display = "block"
        }, 500);
    }
}

function addSugg(m, xxID, ccID, iiID, appe, classP) {
    if (m === null || m === "") {
        return false
    }
    var n = m.replace("https://www.trouko.com/", "").replace("https://trouko.com/", "")
    var g = Math.floor(Math.random() * 2000911);
    var li = document.createElement("div");
    li.className = classP;
    li.id = n + xxID + g
    li.innerHTML = '<div id="' + n + ccID + '"></div>'
    appe.append(li)
    var pMine = document.getElementById(n + xxID + g)
    $.getScript(m + "JavaScript/" + iiID, function (data) {
        var li = document.createElement("div");
        li.innerHTML = "<script id='inf_sc_p'>" + data + "</script>";
        pMine.append(li)
    });
}
function adSugg(m, xxID, ccID, iiID, appe, classP) {
    if (m === null || m === "") {
        return false
    }
    var n = m.replace("https://www.trouko.com/", "").replace("https://trouko.com/", "")
    var g = Math.floor(Math.random() * 2000911);
    var li = document.createElement("div");
    li.className = classP;
    li.id = n + xxID + g
    li.innerHTML = '<div id="' + n + ccID + '"></div>'
    appe.append(li)
    var pMine = document.getElementById(n + xxID + g)
    $.getScript(m + "JavaScript/" + iiID, function (data) {
        var li = document.createElement("div");
        li.innerHTML = "<script id='inf_sc_p'>" + data + "</script>";
        pMine.append(li)
        if (pMine.innerText.length > 0) {
            sub_r_n.style.display = "none"
            callGayes()
        }
    });
}