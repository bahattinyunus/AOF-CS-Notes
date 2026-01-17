# 📦 Örnek Proje: Stok Takip Sistemi (Seviye 1 - Çırak)

> **"Teori bitti, şimdi elleri kirletme zamanı. Sahada kodun çalışmıyorsa, Vize notun 100 olsa ne yazar?"**

Bu proje, bir **Bilgisayar Programcılığı** öğrencisinin mezun olmadan önce mutlaka kendi başına yapabilmesi gereken "Merhaba Dünya"sının bir tık ötesi, gerçek bir iş uygulamasıdır. Hem **Algoritma**, hem **Veritabanı**, hem de **Arayüz Tasarımı** bilgilerini birleştirir.

## 📁 Proje Senaryosu
Küçük bir hırdavat dükkanı için basit bir stok takip sistemi yazacağız.
*   **Müşteri İsteği:** "Elimde kaç tane çekiç var?, Hangi ürün bitmek üzere?, Yeni gelen malları sisteme girmek istiyorum."

## 🧱 Kullanılacak Teknolojiler (Öneri)
Bu projeyi istediğin dilde yapabilirsin, ancak sektör standardı önerimiz:
*   **Dil:** C# (Windows Forms veya WPF) ya da Python (Tkinter/PyQt).
*   **Veritabanı:** SQLite (Başlangıç için en iyisi) veya SQL Server LocalDB.

## 🛠️ Adım Adım Yapılacaklar Listesi

### 1. Veritabanı Tasarımı (SQL)
Önce veriyi nereye koyacağını tasarla. `Urunler` tablosu şöyle olabilir:
*   `UrunID` (Integer, Primary Key, Auto Increment)
*   `UrunAdi` (Varchar/Text)
*   `Kategori` (Varchar/Text)
*   `Adet` (Integer)
*   `BirimFiyat` (Decimal/Float)
*   `KritikStokSeviyesi` (Integer) -> *Stok bu sayının altına düşerse uyarı ver.*

### 2. CRUD İşlemleri (Backend)
Veritabanı ile konuşacak fonksiyonları yaz.
*   **Create (Ekle):** Yeni ürün kaydetme.
*   **Read (Oku):** Ürünleri listeleme ve arama.
*   **Update (Güncelle):** Stok sayısı değişince veya fiyat değişince güncelleme.
*   **Delete (Sil):** Ürünü sistemden kaldırma (Genelde "Pasif"e çekilir, silinmez ama bu projede silebilirsin).

### 3. Arayüz Tasarımı (Frontend)
Kullanıcı dostu (User Friendly) bir ekran çiz.
*   Sol tarafta bir liste (DataGridView / Table).
*   Üstte "Ekle", "Sil", "Güncelle" butonları.
*   Sağ üstte bir "Arama" çubuğu.
*   **Kritik Özellik:** Stok sayısı `KritikStokSeviyesi`nin altına düşen satırlar **KIRMIZI** renkte yansın. (Görsel uyarı).

## 🚀 Projeyi Geliştirme (Ekstra Puan)
Eğer yukarıdakileri bitirdiysen ve "Ben bu işin piri olacağım" diyorsan şunları ekle:
1.  **Raporlama:** "Tek tuşla stoktaki toplam ürün değerini (TL) hesapla."
2.  **Loglama:** "Kim, ne zaman, hangi ürünü sildi?" (Log.txt dosyasına yazdır).
3.  **Giriş Ekranı:** Basit bir Kullanıcı Adı / Şifre ekranı koy.

---
> **Metal Yaka Tavsiyesi:** Bu projeyi yaparken kopyala-yapıştır yapabilirsin, serbest. Ama yapıştırdığın kodun **her satırının ne işe yaradığını** bilmiyorsan, o proje senin değildir. Kodu satır satır debug et, değişkenlerin değerlerini izle. Öğrenme orada gerçekleşir.
