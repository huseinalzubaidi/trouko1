var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "تضاريس كوكب المريخ";
adPhoto = "data:image/jpeg;base64,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"
adDiscription = "المريخ هو رابع كوكب بعدا عن الشمس في مجموعتنا الشمسية بعد عطارد، وتصل متوسط المسافة بين الشمس والمريخ حوالي 228.53 مليون كم، وهو ثاني أقرب الكواكب إلى الكرة الأرضية بعد الزهرة، ويصنف على أنه من الكواكب الصخرية، وهو سابع الكواكب من حيث الحجم والكتلة، إذ يبلغ حجمه نصف حجم كوكب الأرض، ويتشابه مع كوكب الأرض من حيث امتلاكه للفصول الأربعة خلال العام، وتغطي طبقات من الجليد قطبيه الجنوبي والشمالي. يعود تسمية كوكب المريخ بهذا الاسم إلى الرومان، إذ تمت تسميته تيمنا بإله الحرب لديهم، بسبب اعتقادهم أن لونه البرتقالي المائل إلى الأحمر يشبه لون الدم، لكن السبب الحقيقي للون هو الصدأ الناتج عن أكاسيد الحديد الموجودة في صخوره وتربته، لذا يطلق عليه اسم الكوكب الأحمر ."
namePpath = "https://www.trouko.com/subjects/space/تضاريس_كوكب_المريخ/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاثنين, 18 يناير 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}