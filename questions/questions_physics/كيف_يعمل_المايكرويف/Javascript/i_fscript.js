var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
titleIn = "كيف يعمل المايكرويف";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/VFPt_Solenoid_correct2.svg/200px-VFPt_Solenoid_correct2.svg.png"
adDiscription = "المايكرويف او الفرن الموجي وهو احد اهم الطرق المستخدمة في تسخن الطعام او للطهي , و على عكس الافران التقلديدية فأن المايكرويف يقوم بتسخين الطعام ليس فقط من الخارج بل من الداخل و الخارج وذلك بسسب أنفاذ أشعة المايكرويف التي سنتحدث عنها في داخل الغذاء ; و افران المايكرويف المتاعرف عليها بالوقت الحالي هي من تكنولوجيا القرن العشرين."
namePpath = "https://www.trouko.co/questions/questions_physics/كيف_يعمل_المايكرويف/"
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="'+namePpath+'">'+" قراءة المزيد "+"</a> </div>"
addTitleIpage.append(ap)
}