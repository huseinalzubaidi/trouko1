var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
titleIn = "ناسا";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/800px-NASA_logo.svg.png"
adDiscription = "افتتحت وكالة ناسا للعمل في 1 أكتوبر 1958 . وتم إنشاء الوكالة للإشراف على استكشاف الفضاء الأمريكي وأبحاث الطيران.<br>لتقف على الإدارة الوطنية للملاحة الجوية والفضاء. و هي وكالة حكومية أمريكية مسؤولة عن العلوم والتكنولوجيا المتعلقة بالهواء والفضاء. بدأ عصر الفضاء عام 1957 بإطلاق القمر الصناعي السوفيتي سبوتنيك."
namePpath = "https://www.trouko.co/subjects/space/ناسا/"
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="'+namePpath+'">'+" قراءة المزيد "+"</a> </div>"
addTitleIpage.append(ap)
}