var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ناسا";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/800px-NASA_logo.svg.png"
adDiscription = "افتتحت وكالة ناسا للعمل في 1 أكتوبر 1958 . وتم إنشاء الوكالة للإشراف على استكشاف الفضاء الأمريكي وأبحاث الطيران.<br>لتقف على الإدارة الوطنية للملاحة الجوية والفضاء. و هي وكالة حكومية أمريكية مسؤولة عن العلوم والتكنولوجيا المتعلقة بالهواء والفضاء. بدأ عصر الفضاء عام 1957 بإطلاق القمر الصناعي السوفيتي سبوتنيك."
namePpath = "https://www.trouko.co/subjects/space/ناسا/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 27 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.className = "suggTwo"
ap.innerHTML ='<div class="img_p_sugg_pTw"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_iTw" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23Tw'> <a class='s_sub_tTw' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQuTw">'+infSuGuPageOn+'</div>'+"<div class='p_t_infTw'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_pTw" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTwTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}