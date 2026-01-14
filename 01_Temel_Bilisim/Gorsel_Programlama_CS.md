# Görsel Programlama (C#) - Özet

**Kategori:** Temel Bilişim / Programlama
**Konu:** Windows Forms, Olaylar (Events) ve Araç Kutusu (Toolbox)

---

## 🖥️ 1. C# ve .NET Ortamı

Bilgisayar Programcılığı bölümünün en temel dersidir. Microsoft'un .NET platformu üzerinde çalışan, modern ve nesne yönelimli bir dildir.

*   **IDE:** Visual Studio (Mor ikonlu olan).
*   **Form:** Kullanıcının gördüğü pencere ekranıdır (GUI).
*   **Toolbox:** Buton, Etiket, Metin Kutusu gibi araçların bulunduğu kutudur.

## 🛠️ 2. Temel Araçlar (Controls)

Sürükle-bırak yöntemiyle forma eklenen nesnelerdir.

### Button (Düğme)
*   **Olay:** `Click` (Tıklanma).
*   **Özellik:** `Text` (Üzerindeki yazı), `Name` (Kod içindeki adı: `btnKaydet`).

### Label (Etiket)
*   **Kullanım:** Ekrana sabit yazı yazmak için kullanılır. Kullanıcı buraya veri giremez.
*   **Özellik:** `Text`.

### TextBox (Metin Kutusu)
*   **Kullanım:** Kullanıcıdan veri almak için kullanılır.
*   **Özellik:** `Text` (İçindeki yazı).

### MessageBox (Mesaj Kutusu)
Kullanıcıya uyarı veya bilgi vermek için açılan küçük penceredir.

```csharp
MessageBox.Show("İşlem Başarılı!", "Bilgi", MessageBoxButtons.OK, MessageBoxIcon.Information);
```

## ⚡ 3. Olay Tabanlı Programlama (Event Driven)

Klasik programlamadan farklı olarak, kodlar sırayla çalışmaz; bir "olay" olunca çalışır.

**Örnek: Butona Tıklayınca Merhaba Yazma**

```csharp
// btnSelamla butonunun Click olayı
private void btnSelamla_Click(object sender, EventArgs e)
{
    // txtAd isimli kutudan veriyi al
    string isim = txtAd.Text;
    
    // Label'a yazdır
    lblSonuc.Text = "Merhaba " + isim;
}
```

## 🏗️ 4. Değişken Dönüşümleri (Type Casting)

TextBox'tan gelen her şey "String" (Metin) türündedir. Matematiksel işlem yapmak için sayıya çevirmek gerekir.

*   `Convert.ToInt32(txtSayi.Text)`: Metni tam sayıya çevirir.
*   `int.Parse(txtSayi.Text)`: Alternatif çevirme yöntemi.
*   `sayi.ToString()`: Sayıyı tekrar metne çevirip ekrana basmak için.

## 🎓 5. Pratik Örnek: Basit Giriş Paneli (Login Form)

Sınavlarda ve projelerde en çok istenen senaryolardan biridir.

**Senaryo:**
Kullanıcı adı "admin", şifre "1234" ise "Giriş Başarılı", değilse "Hatalı Şifre" diyen program.

```csharp
// "Giriş Yap" butonunun Click olayı
private void btnGiris_Click(object sender, EventArgs e)
{
    // 1. Verileri Al
    string kadi = txtKullaniciAdi.Text;
    string sifre = txtSifre.Text;

    // 2. Kontrol Et
    if (kadi == "admin" && sifre == "1234")
    {
        MessageBox.Show("Hoşgeldiniz Patron!", "Giriş", MessageBoxButtons.OK, MessageBoxIcon.Information);
        
        // Yeni formu aç (AnaSayfa)
        AnaSayfa yeniForm = new AnaSayfa();
        yeniForm.Show();
        
        // Mevcut formu gizle
        this.Hide(); 
    }
    else
    {
        MessageBox.Show("Hatalı kullanıcı adı veya şifre!", "Hata", MessageBoxButtons.OK, MessageBoxIcon.Error);
        
        // Şifre kutusunu temizle ve odağı oraya ver
        txtSifre.Clear();
        txtSifre.Focus();
    }
}
```

---
*Bu notlar vize/final sınavlarında sıkça sorulan kod bloklarını içerir.*
