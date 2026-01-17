# 🧑‍💻 Mesleki Etik, Sorumluluklar ve "Metal Yaka" Duruşu

> **"Tekniker, sadece kodu çalıştıran değil; veriyi koruyan, sistemi ayakta tutan ve teknolojiyi insani değerlerle harmanlayan kişidir."**

Bu modül, bir **Bilgisayar Programcılığı** öğrencisinin ve geleceğin **IT Teknikerinin** bilmesi gereken yasal, etik ve vicdani sorumlulukları kapsar. Kod yazmak kolaydır; zor olan, yazdığın kodun etki ettiği yaşamların sorumluluğunu taşımaktır.

## 1. Bilişim Etiği (IT Ethics)
Bir teknikerin pusulası etik değerleridir.

*   **Dürüstlük:** Yazdığınız kodda "arka kapı" (backdoor) bırakmamak, güvenlik açıklarını gizlememek.
*   **Fikri Mülkiyet:** Açık kaynak kod lisanslarına (MIT, GPL, Apache) saygı duymak. "Kopyala-yapıştır" yaparken kaynağı belirtmek.
*   **Zarar Vermeme:** Oluşturulan yazılımın (virüs, malware vb.) başkalarına zarar vermemesini sağlamak.

## 2. KVKK ve Veri Mahremiyeti (GDPR)
Türkiye'de **6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK)**, bir yazılımcının "Anayasası" gibidir.

*   **Nedir?** Kişisel verilerin (kimlik, adres, telefon vb.) izinsiz işlenmesini önleyen kanundur.
*   **Tekniker Olarak Görevimiz:**
    *   Veritabanlarında şifreleri asla "açık metin" (plain text) olarak saklamamak (Hashing kullanmak: SHA-256 vb.).
    *   Kullanıcıdan sadece *gereken* bilgiyi istemek (Veri Minimizasyonu).
    *   Verileri güvenli (şifreli) kanallardan taşımak (HTTPS/SSL).

## 3. Siber Güvenlik Farkındalığı
"Metal Yaka" bir çalışan, çalıştığı kurumun dijital kalesinin ilk savunma hattıdır.

*   **Sosyal Mühendislik:** Şifrelerini soran e-postalara karşı uyanık olmak.
*   **Güçlü Parola Politikaları:** Sistemlerde "123456" gibi şifrelerin kullanılmasına sistem seviyesinde engel olmak.
*   **Güncellemeler:** Sunucu ve kütüphaneleri sürekli güncel tutarak bilinen açıklardan korunmak.

## 4. Profesyonel İletişim ve Dokümantasyon
Bir şeyi tamir etmek kadar, **nasıl tamir ettiğini anlatmak** da önemlidir.

*   **Kod Yorumları:** Kodu senden sonra devralacak kişi için (veya 6 ay sonraki kendin için) açıklayıcı yorumlar bırak.
*   **Hata Raporlama:** Bir hata bulduğunda "Çalışmıyor" demek yerine; "X koşulunda, Y verisi girildiğinde Z hatasını veriyor" şeklinde raporla.

---
> **Not:** Bu ders, vize/final için ezberlenecek bir metin değil; meslek hayatınız boyunca başucunuzda duracak bir rehberdir.
