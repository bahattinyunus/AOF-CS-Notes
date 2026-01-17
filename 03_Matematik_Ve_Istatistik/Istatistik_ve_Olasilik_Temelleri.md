# 📊 İstatistik ve Olasılık Temelleri (Teknikerler İçin)

> **"Veri, yeni petroldür; istatistik ise o petrolü çıkaran sondaj makinesidir."**

Bir bilgisayar programcısı için matematik, akademik bir zorunluluk değil, **algoritma kurma yeteneğinin** temelidir. Bu modül, özellikle veri tabanı yönetimi, oyun programlama ve basit yapay zeka uygulamalarında karşınıza çıkacak temel kavramları içerir.

## 1. Temel İstatistik Kavramları
Herhangi bir veri setini (örneğin; bir e-ticaret sitesindeki günlük satışlar) anlamlandırmak için kullanırız.

### Aritmetik Ortalama (Mean)
*   **Nedir?** Verilerin toplamının veri sayısına bölümü.
*   **Yazılımda Örnek:** Bir web sitesinin ortalama sayfa yüklenme süresini hesaplamak.
*   **Kod (Python):**
    ```python
    yuklenme_sureleri = [1.2, 0.8, 1.5, 2.0, 1.0]
    ortalama = sum(yuklenme_sureleri) / len(yuklenme_sureleri)
    print(f"Ortalama Süre: {ortalama} sn")
    ```

### Medyan (Ortanca)
*   **Nedir?** Veriler sıralandığında tam ortadaki değer. Aşırı uç değerlerden (outliers) etkilenmez.
*   **Önem:** Maaş verileri gibi dengesiz dağılımlarda ortalamadan daha güvenilirdir.

### Mod (Tepe Değer)
*   **Nedir?** En çok tekrar eden değer.
*   **Yazılımda Örnek:** Bir e-ticaret sitesinde "En Çok Satılan Ürün"ü bulmak.

## 2. Olasılık Temelleri (Probability)
Belirsizlik durumlarında karar verme mekanizmasıdır.

*   **Olasılık P(A):** İstenen durum sayısı / Tüm olası durumlar.
*   **Örnek:** Bir zar atıldığında 6 gelme olasılığı 1/6'dır.
*   **Yazılımda Kullanımı:**
    *   Oyunlarda "loot drop" (eşya düşme) oranları.
    *   Sistem hatalarının (bug) risk analizi.
    *   A/B Testleri (Kullanıcıların hangi butona tıklama olasılığının daha yüksek olduğu).

## 3. Veri Görselleştirme Mantığı
Sayıları grafiklere dökmek, yöneticilere ve müşterilere durumu anlatmanın en iyi yoludur.

*   **Histogram:** Dağılımı görmek için.
*   **Pasta Grafik (Pie Chart):** Parça-bütün ilişkisi için (Pazar payı vb.).
*   **Çizgi Grafik (Line Chart):** Zaman içindeki değişim (Trafiğin artışı vb.) için.

---
> **Saha Notu:** Bir SQL sorgusu yazarken `AVG()`, `COUNT()`, `MAX()` gibi fonksiyonları kullandığınızda aslında istatistik yapıyorsunuz. Korkmayın, formülleri ezberlemenize gerek yok; **mantığını anlamanız** yeterli.
