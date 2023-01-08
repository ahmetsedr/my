nav.addEventListener("click", e => {
    // Tıklanan elemanın data-section özelliğini al
    const section = e.target.getAttribute("data-section");

    // Eğer tıklanan eleman data-section özelliğine sahipse
    if (section) {
        // Tüm elemanlardan active özelliğini kaldır
        nav.querySelectorAll("[data-section]").forEach(item => {
            item.classList.remove("active");
        });
        // Tıklanan elemana active özelliğini ver
        e.target.classList.add("active");
    }
    // .post sınıfı içine yazıyı değiştir
    if (section === "tweet") {
        document.querySelector(".postTxt").innerHTML = "<p>Eğitim hayatım ve tecrübelerim doğrultusunda farklı insanlarla birlikte çalışma, bir takımda yer alma ve birlikte üretebilmeyi öğrenme fırsatım oldu. Bu nedenle takımınıza kolaylıkla adapte olacağımı düşünüyorum.<br><br>İş yaşamında efektif ve hızlı olmak konusunda son derece özverili ve hevesli olduğumu, pozisyonun gerektirdiği sorumluluğu merak ve istekle üzerime almak istediğimi belirtmek isterim.<br><br> İstekli, özenli ve dikkatli çalışmanın mutlaka başarı ile sonuçlanacağının bilincindeyim.<br> Bu nedenle size yeteneklerim ve çalışma disiplinim ile katkı sağlayabileceğim noktasında şüphem yok.</p>";
        document.querySelector(".postPh").src = " ";
        document.querySelector(".postPh").style.width = "90%";
        document.querySelector(".postPh").style.height = "50%";
    } else if (section === "experience") {
        document.querySelector(".postTxt").innerHTML = "<p>İş Deneyimi<br><br>Bilgi işlem - Toki istanbul 06.09.2021-17.06.2022<br><br>Front-End Geliştirmeyi Burada Sevdim.Güzel tecrübe edindiğim , insan ilişkileri, iş düzeni , öz saygı , vb. birçok alanda kendimi geliştirdiğim yer oldu. Yazılımı sevdiğim yer oldu.</p>";
        document.querySelector(".postPh").src = "https://www.cumhuriyet.com.tr/Archive/2017/10/5/838388_resource/Adalet_yuruyusu.jpg";
        document.querySelector(".postPh").style.width = "90%";
        document.querySelector(".postPh").style.height = "50%";

    } else if (section === "roadAndEducation") {
        document.querySelector(".postTxt").innerHTML = "<p>Biz Erzurum’un âşığı olarak son 20 yılda bu şehre 50 milyar lira tutarında kamu yatırımı yaptık. İnşallah önümüzdeki dönemde Erzurum’u hep birlikte Türkiye Yüzyılı hedeflerimize ulaşmamızı sağlayacak daha büyük yatırımlara kavuşturacağız.</p>";
        document.querySelector(".postPh").src = "https://s1.dmcdn.net/v/4gKMc1VjFIl0lmnPR/x1080";
        document.querySelector(".postPh").style.width = "90%";
        document.querySelector(".postPh").style.height = "50%";
    } else if (section === "projects") {
        window.open("https://ahmetsedr.github.io/ahmetsemihdur/", "_blank");
    }
});