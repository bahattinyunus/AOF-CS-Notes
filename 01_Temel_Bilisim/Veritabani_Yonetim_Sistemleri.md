# Veritabanı Yönetim Sistemleri (SQL) - Özet

**Kategori:** Temel Bilişim
**Konu:** SQL Sorguları ve Veritabanı Tasarımı

---

## 💾 1. Veritabanı Nedir?

Verilerin düzenli, erişilebilir ve yönetilebilir bir şekilde saklandığı dijital ortamlardır. Geleneksel dosya sistemlerine göre daha güvenli, hızlı ve tutarlıdır.

**Temel Kavramlar:**
*   **Tablo (Table):** Verilerin satır ve sütunlar halinde tutulduğu yapı.
*   **Satır (Row/Record):** Her bir kayıt.
*   **Sütun (Column/Field):** Verinin bir özelliği (Ad, Soyad, Yaş).
*   **Primary Key (Birincil Anahtar):** Her satırı benzersiz kılan kimlik numarasıdır (Örn: TC Kimlik No).

## 🔑 2. SQL (Structured Query Language)

Veritabanı ile konuşmamızı sağlayan standart dildir.

### Temel Komutlar (CRUD)

#### SELECT (Listeleme)
Verileri seçmek için kullanılır.
```sql
SELECT * FROM Ogrenciler; -- Tüm öğrencileri getir
SELECT Ad, Soyad FROM Ogrenciler WHERE Bolum = 'YBS'; -- Sadece YBS öğrencilerini getir
```

#### INSERT (Ekleme)
Yeni veri eklemek için kullanılır.
```sql
INSERT INTO Ogrenciler (Ad, Soyad, No) 
VALUES ('Ahmet', 'Yılmaz', 12345);
```

#### UPDATE (Güncelleme)
Mevcut veriyi değiştirmek için kullanılır.
```sql
UPDATE Ogrenciler 
SET NotOrtalamasi = 3.50 
WHERE No = 12345;
```

#### DELETE (Silme)
Veriyi silmek için kullanılır.
```sql
DELETE FROM Ogrenciler WHERE MezunDurumu = 1;
```

## 📐 3. Veritabanı Normalizasyonu

Veri tekrarını önlemek ve tutarlılığı sağlamak için uygulanan kurallardır.

*   **1NF (Birinci Normal Form):** Her sütunda tek bir değer olmalı. (Örn: Bir hücrede birden fazla telefon numarası olmamalı).
*   **2NF:** Tablodaki her alan, Primary Key'e tam bağımlı olmalı.
*   **3NF:** Sütunlar arasında geçişli bağımlılık olmamalı.

---
*Hazırlayan: AÖF CS Topluluğu*
