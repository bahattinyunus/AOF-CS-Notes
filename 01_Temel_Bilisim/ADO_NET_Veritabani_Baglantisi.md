# ADO.NET ve Veritabanı Bağlantısı - Özet

**Kategori:** Görsel Programlama / Veritabanı
**Konu:** C# ile SQL Server Haberleşmesi

---

## 🔌 1. ADO.NET Nedir?

ActiveX Data Objects .NET. C# uygulamanızın SQL Server, Access veya Oracle gibi veritabanlarına bağlanmasını, veri çekmesini ve veri kaydetmesini sağlayan kütüphanedir.

**Namespace:**
Projenin en tepesine mutlaka eklenmelidir:
```csharp
using System.Data.SqlClient;
```

## 🗝️ 2. Temel Nesneler

### SqlConnection (Bağlantı Kablosu)
Veritabanına giden yolu ve anahtarı tutar.
```csharp
SqlConnection baglanti = new SqlConnection("Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;");
```

### SqlCommand (Emir Kulu)
SQL sorgularını (SELECT, INSERT) veritabanına taşır.
```csharp
SqlCommand komut = new SqlCommand("SELECT * FROM Ogrenciler", baglanti);
```

### SqlDataReader (Okuyucu)
Gelen verileri satır satır okur (Sadece okunabilir ve ileri yönlüdür).

### SqlDataAdapter & DataSet (Çevrimdışı Depo)
Verileri hafızaya kopyalar, bağlantı kesilse bile verilerle çalışmanızı sağlar.

## 📝 3. Örnek: Veri Ekleme Kod Bloğu

Bir "Kaydet" butonunun içine yazılacak standart kod:

```csharp
try
{
    // 1. Bağlantıyı Aç
    baglanti.Open();

    // 2. Komutu Hazırla (Parametreli Kullanım - Güvenli Yöntem)
    string sql = "INSERT INTO Musteriler (Ad, Soyad) VALUES (@p1, @p2)";
    SqlCommand komut = new SqlCommand(sql, baglanti);
    
    // 3. Parametreleri Doldur (SQL Injection önlemek için)
    komut.Parameters.AddWithValue("@p1", txtAd.Text);
    komut.Parameters.AddWithValue("@p2", txtSoyad.Text);

    // 4. Komutu Çalıştır (Etkilenen satır sayısını döndürür)
    int sonuc = komut.ExecuteNonQuery();

    if (sonuc > 0)
        MessageBox.Show("Kayıt Başarılı!");
    else
        MessageBox.Show("Kayıt Yapılamadı.");
}
catch (Exception hata)
{
    MessageBox.Show("Hata Oluştu: " + hata.Message);
}
finally
{
    // 5. Bağlantıyı Mutlaka Kapat
    baglanti.Close();
}
```

> **💡 Sınav İpucu:**
> `ExecuteNonQuery()` ekleme, silme, güncelleme için kullanılır.
> `ExecuteReader()` listeleme (SELECT) için kullanılır.
> `ExecuteScalar()` tek bir değer (örneğin kayıt sayısı) döndürmek için kullanılır.

---
*Hazırlayan: Bahattin Yunus Çetin*
