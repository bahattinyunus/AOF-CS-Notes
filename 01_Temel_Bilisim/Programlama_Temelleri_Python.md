# Programlama Temelleri (Python ile)

**Kategori:** Temel Bilişim
**Dil:** Python 3.x

---

## 🐍 Neden Python?
*   Okunması ve yazılması kolaydır (İngilizceye benzer).
*   AÖF müfredatında sıkça tercih edilir.
*   Veri bilimi ve yapay zeka alanında liderdir.

## 1. Değişkenler ve Veri Tipleri

Değişkenler verileri saklamak için kullanılan kutulardır.

```python
# String (Metin)
isim = "Anadolu Üniversitesi"

# Integer (Tam Sayı)
yil = 2024

# Float (Ondalıklı Sayı)
ortalama = 3.55

# Boolean (Mantıksal)
mezun_oldu_mu = False

print(isim)
```

## 2. Koşullu İfadeler (If-Else)

Karar verme yapılarıdır.

```python
not_ortalamasi = 60

if not_ortalamasi >= 50:
    print("Geçti")
elif not_ortalamasi >= 35:
    print("Şartlı Geçti")
else:
    print("Kaldı")
```

## 3. Döngüler (Loops)

Tekrar eden işlemler için kullanılır.

### For Döngüsü
Belirli bir sayıda tekrar eder.

```python
# 0'dan 4'e kadar yazdırır
for i in range(5):
    print(f"Sayı: {i}")
```

### While Döngüsü
Koşul doğru olduğu sürece çalışır.

```python
sayac = 0
while sayac < 3:
    print("Hala dönüyorum...")
    sayac += 1
```

## 4. Fonksiyonlar (Functions)

Kod tekrarını önlemek için kullanılan bloklardır.

```python
def selamla(ad):
    """Verilen ismi selamlar."""
    return f"Merhaba, {ad}!"

mesaj = selamla("Ahmet")
print(mesaj) # Çıktı: Merhaba, Ahmet!
```

## 5. Hata Yönetimi (Error Handling)
Bir teknikerin en önemli görevi sistemin çökmesini engellemektir.

```python
try:
    sayi = int(input("Bir sayı girin: "))
    sonuc = 100 / sayi
    print(f"Sonuç: {sonuc}")
except ValueError:
    print("Hata: Lütfen geçerli bir tam sayı girin!")
except ZeroDivisionError:
    print("Hata: Bir sayı sıfıra bölünemez!")
except Exception as e:
    print(f"Beklenmedik bir hata oluştu: {e}")
finally:
    print("İşlem tamamlandı (Hata olsa da olmasa da çalışır).")
```

## 6. Liste Metotları ve List Comprehension
Verileri hızlıca işlemek için kullanılır.

```python
programlar = ["Python", "C#", "SQL", "Java"]

# Yeni bir liste oluşturma (Klasik yöntem)
buyuk_harfli = []
for p in programlar:
    buyuk_harfli.append(p.upper())

# List Comprehension (Profesyonel yöntem)
buyuk_harfli_pro = [p.upper() for p in programlar]
print(buyuk_harfli_pro)
```

## 7. Dosya İşlemleri (File I/O)
Log dosyalarını okumak veya rapor oluşturmak için kritiktir.

```python
# Dosyaya yazma
with open("log.txt", "w", encoding="utf-8") as dosya:
    dosya.write("Sistem başlatıldı...\n")
    dosya.write("Hata: Veritabanı bağlantısı koptu.")

# Dosyadan okuma
with open("log.txt", "r", encoding="utf-8") as dosya:
    icerik = dosya.read()
    print(icerik)
```

## 🛠️ Tekniker Otomasyon Örneği: Log Analizi
Bir tekniker olarak binlerce satırlık log dosyası içinde "Hata" kelimesini aramanız gerekebilir.

```python
def hata_ara(dosya_yolu):
    try:
        with open(dosya_yolu, "r") as f:
            hatalar = [satir.strip() for satir in f if "HATA" in satir.upper()]
            return hatal
    except FileNotFoundError:
        return "Dosya bulunamadı!"

# Kullanım
bulunan_hatalar = hata_ara("sunucu_log.txt")
print(f"Toplam {len(bulunan_hatalar)} hata bulundu.")
```

## 📝 Algoritma Mantığı
Programlamanın temeli algoritmadır. Bir problemin çözüm yoludur.

**Örnek: Çay Demleme Algoritması**
1.  Başla
2.  Su kaynat
3.  Demliğe çay koy
4.  Kaynayan suyu ekle
5.  15 dk bekle
6.  Servis yap
7.  Bitir

> **💡 Sınav İpucu:**
> Akış şemalarında "Elips" Başla/Bitir, "Dikdörtgen" İşlem, "Eşkenar Dörtgen" Karar (If) anlamına gelir.

---
*Bu notlar [AOF-CS-Notes](https://github.com/bahattinyunus/AOF-CS-Notes) reposu için hazırlanmıştır.*
