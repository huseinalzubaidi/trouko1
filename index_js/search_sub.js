var button_search, search_i_page_i, ul_search,
    search_random, random_ser_f,
    random_t_ser, form_search, body, pageSearch,
    header_m_t, pa_p, sub_r_s
    , google_search, se_in_p, cn_google, item_list_sub_empty,
    qususuggcon, sususuggcon;

var xReq = new XMLHttpRequest();
xReq.open('GET', '../data.json');

xReq.send();
item_list_sub_empty = document.getElementById('item_list_sub_empty')
qususuggcon = document.getElementById("qususuggcon")
sususuggcon = document.getElementById("sususuggcon")

random_ser_f = document.getElementById('random_ser_f');
button_search = document.getElementById('button_search');
search_random = document.getElementById('search_random');
search_i_page_i = document.getElementById('search_i_page_i');

random_t_ser = document.getElementById('random_t_ser')
pa_p = document.getElementById('pa_p')
sub_r_s = document.getElementById('sub_r_s')
google_search = document.getElementById("google_search")
se_in_p = document.getElementById("se_in_p")
cn_google = document.getElementById("cn_google")
function hsh(s) {
    let element = document.getElementById("s_" + s)
    element.style.display = (element.style.display == 'none') ? er(true) : er(false);
    function er(params) {
        if (params === true) {
            element.style.display = 'block'
            document.getElementById("im" + s).innerHTML = `<img src="icons/align-justify-solid.svg" style="width: 14px;" >`
        } else {
            element.style.display = 'none'
            document.getElementById("im" + s).innerHTML = `<img src="icons/align-left-solid.svg" style="width: 14px;">`
        }
    }
}
var sectionHide = ["text_one", "text_two", "text_three", "text_four", "text_five", "text_six"]

var sectionLoad = [{ n: "subjects/space", s: "space", x: "الفضاء", z: "sfirst" },
{ n: "subjects/physics", s: "physics", x: "الفيزياء", z: "sfirst" },
{ n: "subjects/sciences", s: "sciences", x: "العلوم", z: "sfirst" },
{ n: "subjects/technology", s: "technology", x: " التكنلوجيا ", z: "sfirst" },
{ n: "subjects/geography", s: "geography", x: " الجغرافية ", z: "sfirst" },
{ n: "subjects/else", s: "else", x: " متنوعة ", z: "sfirst" },

{ n: "questions/questions_space", s: "space", x: "الفضاء", z: "sTwo" },
{ n: "questions/questions_physics", s: "physics", x: "الفيزياء", z: "sTwo" },
{ n: "questions/questions_else", s: "else", x: " متنوعة ", z: "sTwo" },
{ n: "questions/questions_technology", s: "technology", x: " التكنلوجيا ", z: "sTwo" }]

xReq.onload = function () {
    cn_google.style.display = "block"
    var xData = JSON.parse(xReq.responseText);
    var fc = 0;
    rea()
    function rea() {
        if(fc < sectionLoad.length){
            let e = sectionLoad[fc]
            let hrt = e.n.replace(/\//g, "")
            $.getJSON("../jsData/" + hrt + ".json", function (data) {
                let xcas, anData = {}
                if (e.z === "sfirst") {
                    xcas = " مواضيع عن "
                    anData.id = "_pag_x_242"
                    anData.ur = "i_tfscript.js"
                    anData.sec = "xOne" 
                } else if (e.z === "sTwo") {
                    xcas = " أسئلة عن "
                    anData.id = "_pag_s_262"
                    anData.ur = "i_tnfscript.js"
                    anData.sec = "xTwo"
                }
                if (data.length > 0) {
                    var sfirst = document.getElementById(e.z)
                    let li = document.createElement("div")
                    li.id = "x_" + e.n
                    li.innerHTML = `<li class="li_list" id=` + hrt + `  onclick="hsh(this.id)"> <div id="im` + hrt + `">  <img src="icons/align-left-solid.svg" style="width: 14px;"> </div>` + xcas + e.x + `</li> <ul class="item_list_sub sub" id="s_` + hrt + `" style="display:none;"> </ul>`
                    sfirst.append(li)
                    addDataSec(data, hrt, e.n, e.s,anData)
                    function addDataSec(x, d, v, q,anData) {
                        let isFull = false
                        for (var e = 0; e < x.length; e++) {
                            if (e < 2) {
                                let nam = x[e].replace(v, "").replace("https://www.trouko.com/", "").replace(/\//g, "").replace(/_/g, " ")
                                let li = document.createElement("li")
                                li.innerHTML = '<a href=' + x[e] + '>' + nam + '</a>'
                                document.getElementById('s_' + d).append(li)
                                let z = (x.length - e) - 1
                                const index = xData.indexOf(x[z]);
                                if (index > -1) {
                                  xData.splice(index, 1);
                                }
                                addNewSubrt(x[z],document.getElementById(anData.sec),"_J_n_Hus_Qu",anData.id,anData.ur,"s_sub_t_dTw")
                            } else {
                                isFull = true
                            }
                        }
                        if (isFull === true) {
                            let li = document.createElement("li")
                            li.innerHTML = '<a href=../sub_s/' + q + '/index.html> مشاهدة المزيد </a>'
                            document.getElementById('s_' + d).append(li)
                        }
                    }
                }
            }).fail(function () {
                // 
            });
            if(sectionLoad.length -1 === fc){
                setTimeout(() => {
                    addNewSubr(xData);
                }, 1000);
            }
            console.log(fc)
            setTimeout(() => {
                fc ++;
                rea()
            }, 400);
        }
        
    }
}
function random_a() {
    random_t_ser.style.padding = "10px";
    var xData = JSON.parse(xReq.responseText);

    var r = Math.floor(Math.random() * xData.length)
    var el = document.createElement("div")
    el.innerHTML = "   الموضوع المقترح :  " + xData[r] + "<a class='r' href='" + xData[r] + "'>" + " [ انقر هنا للقرأه ]" + "</a>";
    return el.innerHTML;
}
function addNewSubr(xData) {
    var storageD = [];
    for (var i = 0; i < xData.length; i++) {
        if (i < 25) {
            var e = xData[(xData.length - i) - 1]
            let adSub = { "linkPage": e, "namePath": e };
            storageD.push(adSub)
        }
    }
    ad(storageD, { a: "_J_n_Hus_", b: "_pag_n_232", c: "i_fscript.js", d: "s_sub_t_d" });
}
function ad(d, c) {
    var cs = 0;
    var arr = [];
    while (arr.length < d.length) {
        var r = Math.floor(Math.random() * d.length);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    var i;
    for (i = 0; i < arr.length; i++) {
        if(cs < 8){
            cs ++;
            var x = arr[i]
            addNewSubrt(d[x].linkPage, sub_r_s, c.a, c.b, c.c, c.d)
        }
    }

}

function addNewSubrt(m, xz, vz, xxc, psssp, classP) {
    var n = m.replace("https://www.trouko.com/", "")

    var g = Math.floor(Math.random() * 2000911);

    var li = document.createElement("div");
    li.className = classP;
    li.id = n + vz + g
    li.innerHTML = '<div id="' + n + xxc + '"></div>'
    xz.append(li)

    var pMine = document.getElementById(n + vz + g)

    $.getScript(m + "JavaScript/" + psssp, function (data) {
        var li = document.createElement("div");
        li.innerHTML = "<script id='inf_sc_p'>" + data + "</script>";
        pMine.append(li)
    });
}