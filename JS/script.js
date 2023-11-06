function validateForm(){
const berat= document.forms['message-form']['berat'].value
const usia= document.forms['message-form']['usia'].value
const tinggi= document.forms['message-form']['tinggi'].value/100
const bmi = berat / Math.pow(tinggi, 2)

if(berat==""){
   document.getElementById("error-all").innerHTML="Masukkan Berat Badan (Kg)!"
   document.getElementById("error-all").style.color="red"
   return false;
}

if(usia==""){
    document.getElementById("error-all").innerHTML="Masukkan Usia!"
    document.getElementById("error-all").style.color="red"
    return false; 
}

if(tinggi==""){
    document.getElementById("error-all").innerHTML="Masukkan Tinggi (cm)!"
    document.getElementById("error-all").style.color="red"
    return false; 
}
document.getElementById("bmi_text").innerHTML = "Your BMI is :  ";
document.getElementById("bmi_big_text").innerHTML = bmi;


if(bmi < 18.5){
    document.getElementById("bmi_desc").innerHTML = "Hasil BMI berada dibawah 18.5"
    document.getElementById("bmi_desc").style.color="orange"
    document.getElementById("bmi_desc_2").innerHTML = "Anda dalam kategori underweight atau berat badan kurang."
    document.getElementById("bmi_desc_2").style.color="orange"
    document.getElementById("bmi_big_text").style.color="orange"
    document.getElementById("bmi_desc_3").innerHTML = "Cara Terbaik untuk menaikkan berat badan adalah dengan mengonsumsi makanan yang bergizi dan tidak berlebihan. Jika BMI Anda berada pada kategori ini berarti Anda dianjurkan untuk menaikkan berat badan hingga batas ideal."
    document.getElementById("error-all").innerHTML = ""
    document.getElementById("something").innerHTML = '<a href="/news_events/" style="text-decoration:none"><span class="picon-p-add-news">Download Hasil IBM</span></a>';
    document.getElementById("something2").innerHTML = '';
    return false
  } else if(bmi >= 18.5 && bmi <= 24.9){
    document.getElementById("bmi_desc").innerHTML = "Hasil BMI berada diantara 18.5 dan 24.9"
    document.getElementById("bmi_desc").style.color="green"
    document.getElementById("bmi_desc_2").innerHTML = "Anda dalam kategori healthy atau ideal."
    document.getElementById("bmi_desc_2").style.color="green"
    document.getElementById("bmi_big_text").style.color="green"
    document.getElementById("bmi_desc_3").innerHTML = "Anda Dianjurkan untuk rajin berolahraga untuk menstabilkan berat badan Anda."
    document.getElementById("error-all").innerHTML = ""
    document.getElementById("something").innerHTML = '<a href="/news_events/" style="text-decoration:none"><span class="picon-p-add-news">Download Hasil IBM</span></a>';
    document.getElementById("something2").innerHTML ='';
    return false
  } else if(bmi >= 25 && bmi <= 29.9){
    document.getElementById("bmi_desc").innerHTML = "Hasil BMI berada diantara 25 dan 29.9"
    document.getElementById("bmi_desc").style.color="red"
    document.getElementById("bmi_desc_2").innerHTML = "Anda dalam kategori overweight atau berat badan berlebih."
    document.getElementById("bmi_desc_2").style.color="red"
    document.getElementById("bmi_big_text").style.color="red"
    document.getElementById("bmi_desc_3").innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur pola makan yang dikonsumsi disertai dengan olahraga. Jika BMI Anda dalam kategori ini Anda disarankan untuk menurunkan berat badan hingga batas normal."
    document.getElementById("error-all").innerHTML = ""
    document.getElementById("something").innerHTML = '<a href="/news_events/" style="text-decoration:none"><span class="picon-p-add-news">Download Hasil IBM</span></a>';
    document.getElementById("something2").innerHTML = '<a href="/news_events/" style="text-decoration:none"><span class="picon-p-add-news">Konsultasi Ahli Gizi Via Aplikasi</span></a>';
    document.getElementById("something2").innerHTML += '<a href="/news_events/" style="text-decoration:none"><span class="picon-p-add-news">Registrasi Online Ahli Gizi</span></a>';
    document.getElementById("bmi_desc_4").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dari kekhawatiran Anda terkait dengan berat badan Anda.";
    document.getElementById("bmi_desc_5").innerHTML = "Beberapa penyakit yang berasal dari kegemukan:<br> Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthritis<br> ";
    document.getElementById("something3").innerHTML = '<a href="/news_events/" style="text-decoration:none"><span class="picon-p-add-news">Konsultasi Dokter Via Aplikasi</span></a>';
    document.getElementById("something3").innerHTML += '<a href="/news_events/" style="text-decoration:none"><span class="picon-p-add-news">Registrasi Online Sekarang</span></a>';
    return false
  } else if(bmi > 30){
    document.getElementById("bmi_desc").innerHTML = "Hasil BMI berada diatas 30"
    document.getElementById("bmi_desc").style.color="red"
    document.getElementById("bmi_desc_2").innerHTML = "Anda dalam kategori obesitas atau kegemukan."
    document.getElementById("bmi_desc_2").style.color="red"
    document.getElementById("bmi_big_text").style.color="red"
    document.getElementById("bmi_desc_3").innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur pola makan yang dikonsumsi disertai dengan olahraga. Jika BMI Anda dalam kategori ini Anda disarankan untuk menurunkan berat badan hingga batas normal."
    document.getElementById("error-all").innerHTML = ""
    document.getElementById("something").innerHTML = '<a href="/news_events/"style="text-decoration:none"><span class="picon-p-add-news">Download Hasil IBM</span></a>';
    document.getElementById("something2").innerHTML = '<a href="/news_events/" style="text-decoration:none"><span class="picon-p-add-news">Konsultasi Ahli Gizi Via Aplikasi</span></a>';
    document.getElementById("something2").innerHTML += '<a href="/news_events/" style="text-decoration:none"><span class="picon-p-add-news">Registrasi Online Ahli Gizi</span></a>';
    document.getElementById("bmi_desc_4").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dari kekhawatiran Anda terkait dengan berat badan Anda.";
    document.getElementById("bmi_desc_5").innerHTML = "Beberapa penyakit yang berasal dari kegemukan:<br><br> 1.Diabetes<br><br>2.Hipertensi<br><br>3.Sakit Jantung<br><br>4.Osteoarthritis<br><br> ";
    document.getElementById("something3").innerHTML = '<a href="/news_events/" style="text-decoration:none" <span class="picon-p-add-news">Konsultasi Dokter Via Aplikasi</span></a>';
    document.getElementById("something3").innerHTML += '<a href="/news_events/" style="text-decoration:none"><span class="picon-p-add-news">Registrasi Online Sekarang</span></a>';
    return false
  }
  return false;
}
function reset() {
    document.forms['message-form'].reset();
  }