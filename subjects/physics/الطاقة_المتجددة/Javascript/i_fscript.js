var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
titleIn = "الطاقة المتجددة";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bioreaktor_quer2.jpg/220px-Bioreaktor_quer2.jpg"
adDiscription = "الحصول على الطاقة بشكل متجدد قد يبدو أمراً غريباً بعض الشيء , ولكن في الواقع أن كل شيء في الحياة هو متجدد و بطريقة ليست بتكرارية , و الطاقة المتجددة هي الطّاقة المستمدة من الموارد الطبيعية التي تتجدد أي الّتي لا تنفذ . تختلف جوهريًا عن الوقود الأحفوري من بترول وفحم وغاز الطبيعي، أو الوقود النووي الّذي يستخدم في المفاعلات النووية."
namePpath = "https://www.trouko.co/subjects/physics/الطاقة_المتجددة/"
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="'+namePpath+'">'+" قراءة المزيد "+"</a> </div>"
addTitleIpage.append(ap)
}