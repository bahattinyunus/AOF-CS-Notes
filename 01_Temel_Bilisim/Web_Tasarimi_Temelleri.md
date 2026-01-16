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
    border-radius: 8px; /* Kenar yuvarlama */
}
```

## 🏗️ 4. Modern Düzenler (Flexbox & Grid)
Eski yöntemlerin (float) yerine modern hizalama araçlarını kullanın.

### Flexbox (Tek Boyutlu)
```css
.container {
    display: flex;
    justify-content: space-between; /* Yatay hiza */
    align-items: center; /* Dikey hiza */
}
```

### Grid (İki Boyutlu)
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 eşit sütun */
    gap: 15px; /* Hücreler arası boşluk */
}
```

## 📱 5. Responsive Tasarım (Mobil Uyumluluk)
Ekran boyutuna göre değişen tasarımlar yapın.

```css
/* Masaüstü için standart stiller buraya... */

/* Tablet ve Mobil için (992px altı) */
@media (max-width: 992px) {
    .grid-container {
        grid-template-columns: 1fr; /* Sütunları alt alta diz */
    }
}
```

## 🛠️ 6. Tekniker İpucu: Tarayıcı Geliştirici Araçları
Bir web sayfası bozuk görünüyorsa, kodda kaybolmak yerine **F12** tuşuna basın.

1.  **Inspect (İncele):** Sayfadaki bir öğeye sağ tıklayıp "İncele" deyin.
2.  **Styles Tab:** CSS kurallarını anlık olarak değiştirip sonucu görün.
3.  **Console:** Hataları ve çıktıları takip edin.
4.  **Network:** Sayfanın neden yavaş yüklendiğini analiz edin.

> **💡 Sınav İpucu:**
> HTML yapıyı kurar, CSS şekil verir, JavaScript ise hareket/işlev katar. İnsan vücuduna benzetirsek; HTML kemikler, CSS deri ve kıyafet, JS ise kas sistemidir.

---
*Hazırlayan: Bahattin Yunus Çetin*
