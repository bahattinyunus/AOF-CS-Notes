# Web Tasarımı Temelleri (HTML & CSS) - Özet

**Kategori:** Temel Bilişim
**Konu:** Web Geliştirme

---

## 🌍 1. Web Nasıl Çalışır?

*   **İstemci (Client):** Web sitesini isteyen kişi (Tarayıcı: Chrome, Edge).
*   **Sunucu (Server):** Web sitesinin dosyalarının barındığı bilgisayar.
*   **HTTP:** İstemci ve sunucu arasındaki konuşma kuralları (Protokol).

## 🏗️ 2. HTML (HyperText Markup Language)

Web sayfalarının iskeletidir. Bir programlama dili değil, işaretleme dilidir.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sayfa Başlığı</title>
</head>
<body>
    <h1>Ana Başlık</h1>
    <p>Bu bir paragraftır.</p>
    <a href="https://google.com">Google'a Git</a>
    <img src="resim.jpg" alt="Açıklama">
</body>
</html>
```

**Temel Etiketler:**
*   `<h1>` - `<h6>`: Başlıklar (H1 en büyük).
*   `<p>`: Paragraf.
*   `<a>`: Link (Anchor).
*   `<ul>`, `<ol>`, `<li>`: Listeler.
*   `<div>`: Gruplama kutusu (En çok kullanılan).

## 🎨 3. CSS (Cascading Style Sheets)

Web sayfalarının makyajıdır. Renk, boyut, düzen işlemlerini yapar.

```css
/* Etikete göre seçme */
h1 {
    color: red; /* Yazı rengi kırmızı */
    font-size: 24px; /* Boyut */
}

/* ID'ye göre seçme (#) */
#ozel-baslik {
    text-align: center; /* Ortala */
}

/* Class'a göre seçme (.) */
.kutu {
    background-color: #f0f0f0; /* Arka plan gri */
    margin: 10px; /* Dış boşluk */
    padding: 20px; /* İç boşluk */
}
```

> **💡 Sınav İpucu:**
> HTML yapıyı kurar, CSS şekil verir, JavaScript ise hareket/işlev katar. İnsan vücuduna benzetirsek; HTML kemikler, CSS deri ve kıyafet, JS ise kas sistemidir.

---
*Hazırlayan: Bahattin Yunus Çetin*
