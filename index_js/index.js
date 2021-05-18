var subject_list, subject_list_n_s;

subject_list = $('#subject_list');
subject_list_n_s = $('#subject_list_n_s');

var iconT = document.getElementById("uMenuMine_m"),
  iconBarTh = document.getElementsByClassName("icon-bar")[0],
  iconBar = document.getElementsByClassName("icon-bar")[1],
  iconBarT = document.getElementsByClassName("icon-bar")[2],
  isClickMenu = false,
  menLis = document.getElementById("menuLisWeb");
var lisBox = `<div class="lisBox">
               <div class="toLisBox">
                   <div class="secMainLis" > <p class="inPage"> الصفحة الرئيسية </p><a href="#sugIndex"> مقترحات </a> <a href="#subIndex"> مواضيع </a></div>
                   <div class="secSecLis" > <a href="./container_s_q/about.html"> حول </a><a href="../../../container_s_q/contact.html"> اتصل بنا </a><a href="#qusIndex"> أسئلة </a></div>
               </div>
               <div class="medLis">
                   <a class="fasMaenu" href="https://web.facebook.com/%D8%AA%D8%B1%D9%88%D9%83%D9%88-trouko-104470178026820"> <img src="../../../icons/facebook-m.svg" class="fasImg" /> </a>
                   <a class="twiMaenu" href="https://twitter.com/trouko1"> <img src="../../../icons/twitter-m.svg" /> </a>
                   <a class="telegramMaenu" href="https://t.me/trouko"> <img src="../../../icons/telegram-m.svg" /> </a>
               </div>
           </div>`
iconT.addEventListener("click", e => {
  if (isClickMenu === false) {
    iconBarTh.className = "icon-bar bar_a";
    setTimeout(function () { iconBar.className = "icon-bar bar_a" }, 100);
    setTimeout(function () { iconBarT.className = "icon-bar bar_a" }, 200);
    menLis.innerHTML = lisBox
    isClickMenu = true
  } else {
    cloLis()
  }
})
function cloLis() {
  iconBarTh.className = "icon-bar";
  iconBar.className = "icon-bar"
  iconBarT.className = "icon-bar"
  menLis.innerHTML = ""
  isClickMenu = false
}
var indexPage = [{n : " المواضيع آخر المقالات ", id: "xOne"},{n : " المواضيع فهرسة ", id: "subIndex"},{n : " الاسئلة آخر المقالات ", id: "xTwo"},
{n : "الاسئلة فهرسة ", id: "qusIndex"},{n : " مقترحات ", id: "sugIndex"}]


indexAll()
function indexAll(params) {
  var indexMain = document.getElementById("indexMain"),
  indexWeb = document.getElementById("indexWeb");
  indexPage.forEach(e=>{
    let y = document.createElement("div")
    let d = document.createElement("div")
    y.className = "itemMain"
    d.className = "itemMain"
    y.innerHTML = '<a class="b_index" href="#'+e.id+'" > '+ e.n + '</a>'
    d.innerHTML = '<a class="b_index" href="#'+e.id+'" > '+ e.n + '</a>'
    indexMain.append(y)
    indexWeb.append(d)
  })
}