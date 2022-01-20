services = document.getElementById("bootstrap-toggle");
const segments = new URL(window.location.href).pathname.split('/');
const page = segments.pop() || segments.pop();
$(document).ready(function () {
    if (["/", "", "index.html", "index"].includes(page)) {
        list = [
            "الجوازات",
            "وزارة الخارجية",
            "وزارة العمل والتنمية الاجتماعية",
            "وزارة التجارة والاستثمار",
            "البلدية",
            "وزارة الصحة",
            "وزارة الأسكان",
            "الأحوال المدنية",
            "وزارة العدل",
            "الدفاع المدني",
            "المرور",
            "البريد",
            "التحقيق والإدعاء العام",
            "وزارة المالية",
            "وزارة الزراعة",
            "وزراة التعليم",
            "وزارة النقل",
            "وزارة الإقتصاد والتخطيط",
            "التأمينات الإجتماعية",
            "مساند",
            "مصلحة الزكاة والدخل",
            "الجمارك",
            "الهيئة العامة للسياحة والآثار",
            "النيابة العامة",
            "حساب المواطن",
            "بلدي",
        ];
        services.innerHTML = '';
        list.forEach(e => {
            services.appendChild(createElementFromHTML(`
                <div class="col-12 col-md-6">
                <a href="page1.html">
                <div class="card" >
                    <div class="card-header" role="tab" id="headingTwo">
                        
                            <h6 class="panel-title-edit mbr-fonts-style mb-0 display-7"> <span class="mobi-mbri mobi-mbri-protect mbr-iconfont"></span>&nbsp;${e}</h6>
                        
                    </div>
                    <div id="collapse2_2"  style="display: none" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body" style="display: none">
                            <p class="mbr-fonts-style panel-text display-4">ss </p>
                        </div>
                    </div>
                </div>   
                </a>             
            </div>
        `));
        });

    } else if (["page1.html", "join"].includes(page)) {
        list = ["تمديد تأشيرة خروج وعوده", "برنت جوازات", "إسقاط خرج ولم يعد", "طباعة الاقامة", "نقل مستضيف", "تمديد صلاحية جواز", "إضافة تابع أو مولود خارج المملكة", "إصدار وتجديد إقامة للشركات والمؤسسات", "إصدار تأشيرة خروج وعودة متعددة", "الإصدار والتجديد للمرافقين بعد بلوغ 18 سنة", "إصدار رخصة الإقامة للعمالة المنزلية", "تجديد رخصة الإقامة للعمالة المنزلية", "تأشيرة مرور عبر الأراضي السعودية", "إصدار تأشيرة خروج وعودة مفردة", "إصدار وتجديد جواز سفر سعودي", "إصدار تجديد إقامة لحاملي التأشيرة الدراسية", "تـأشيرة خروج نهائي", "إضافة تابع من مواليد المملكة", "تمديد تأشيرة زيارة", "تغير المهنة", "تجديد اقامة", "نقل كفالة فردي", "نقل كفالة مهني", "نقل المعلومات"];
        services.innerHTML = '';
        list.forEach(e => {
            services.appendChild(createElementFromHTML(`
                <div class="col-12 col-md-6">
                <a  href="https://wa.me/+966501335948?text=${e}" target="_blank" >
                <div class="card" >
                    <div class="card-header">
                        
                            <h6 class="panel-title-edit mbr-fonts-style mb-0 display-7"> <span class="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont"></span>&nbsp;${e}</h6>
                        
                    </div>
                    <div id="collapse2_2"  style="display: none" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body" style="display: none">
                            <p class="mbr-fonts-style panel-text display-4">ss </p>
                        </div>
                    </div>
                </div>   
                </a>             
            </div>
        `));
        });
    } else if (["about_us.html", "about_us"].includes(page)) {
        $(function () {
            setTimeout(function () {
                if (searchParams.get("action") === "contact")
                    document
                        .getElementById("contacts1-t")
                        .scrollIntoView({behavior: "smooth"});
            }, 1000);
        });
    }
});


function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}

