
# Quiz Uygulaması

Bu proje, **JavaScript**, **HTML** ve **CSS** kullanılarak geliştirilmiş, zaman sınırlı sorular içeren bir quiz uygulamasıdır.
Sorular, bir **Node.js + Express** backend üzerinden **MySQL/MSSQL** veritabanından çekilmektedir.

## 📌 Özellikler

* Zaman sınırlı quiz akışı
* Doğru/yanlış cevaplara anında görsel geri bildirim
* Soru sayacı ve ilerleme çubuğu
* Toplam skorun gösterimi
* Soruların backend API üzerinden dinamik olarak çekilmesi

## 📂 Proje Yapısı

```
.
├── quiz.js        # Quiz sınıfı (soruların yönetimi)
├── script.js      # Oyun akışı ve event listener'lar
├── soru.js        # Soru sınıfı ve API'den soru çekme fonksiyonu
├── style.css      # Tasarım dosyası
├── ui.js          # UI işlemleri ve DOM güncellemeleri
├── package.json   # Proje bağımlılıkları
├── package-lock.json
└── BackupDb       # (Opsiyonel) Veritabanı yedek dosyası
```

## ⚙️ Kurulum

1. **Projeyi klonla**

   ```bash
   git clone <repo-url>
   cd quiz
   ```

2. **Bağımlılıkları yükle**

   ```bash
   npm install
   ```

3. **.env dosyası oluştur ve veritabanı bilgilerini ekle**

   ```env
   DB_HOST=localhost
   DB_USER=kullanici
   DB_PASSWORD=sifre
   DB_NAME=veritabani
   ```

4. **Sunucuyu başlat**

   ```bash
   npm start
   ```

5. **Frontend’i tarayıcıda aç**
   `index.html` dosyasını açarak quiz uygulamasını çalıştırabilirsiniz.

## 📡 API Uç Noktası

Backend, soruları şu uç noktadan döndürür:

```
GET /get_soru
Response:
[
  {
    "soru": "Türkiye'nin başkenti neresidir?",
    "a_secenek": "Ankara",
    "b_secenek": "İstanbul",
    "c_secenek": "İzmir",
    "d_secenek": "Bursa",
    "dogru_secenek": "a"
  }
]
```

## 🛠 Kullanılan Teknolojiler

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **Veritabanı:** MySQL veya MSSQL
* **Diğer Paketler:**

  * body-parser
  * cookie-parser
  * cors
  * dotenv
  * morgan

## 👩‍💻 Geliştirici

* **Yazar:** esrayilmaz


