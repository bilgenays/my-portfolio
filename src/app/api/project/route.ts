
export async function GET() {
    const posts = [
        { id: 1, title: "E-Ticaret Sitesi", content: "Ürün listeleme, kategori/filtreleme, ürün detay, sepet ve ödeme adımlarını içeren uçtan uca bir e-ticaret akışı geliştirdim. Bileşen tabanlı yapı kurup sayfa durumları (yükleniyor/boş/hatâ), form doğrulama ve bildirim akışlarını düzenledim. API tüketimiyle ürün, sepet ve sipariş verilerini yönettim; giriş/kayıt ve yetkilendirme ekranlarını bağladım. Mobil uyumluluk, temel SEO (meta/başlık yapısı) ve performans tarafında (lazy load, route-level code split) iyileştirmeler yaptım." },
        { id: 2, title: "Köpek Duygu Analizi Mobil Uygulaması", content: "Köpek görüntülerinden duygusal durum tahmini yapan bir mobil arayüz tasarladım. Görsel yüklendiğinde arka planda çalışan model sonuçlarını okunabilir etiketlere dönüştürüp güven skoru ile gösterdim. Kullanıcıya örnek görseller, çekim talimatları ve sonuç açıklamaları sunarak deneyimi sade bir akış üzerine kurdum." },
        { id: 3, title: "Giysi Giydirme ve Renk Değiştirme Uygulaması", content: "Sanal manken üzerinde giysi bölgesini işaretleyip farklı renk/variation çıktıları üreten bir web arayüzü hazırladım. Kullanıcı, görsel yükleyip renk seçtiğinde sistem segmentasyon sonrası görseli yeniden üretir; orijinal–sonuç karşılaştırması ve indirme adımıyla akış tamamlanır." },
        { id: 4, title: "Kişisel Web Sitesi", content: "Hakkımda, projeler ve iletişim bölümleri olan, hızlı açılan ve okunabilirlik odaklı bir portföy sitesi geliştirdim. Bileşenleri yeniden kullanılabilir olacak şekilde tasarladım; tipografi/boşluk hiyerarşisi, koyu/açık tema ve mobil uyumlulukla sade bir deneyim hedefledim." },
        { id: 5, title: "Web Tabanlı Test Sitesi", content: "Herhangi bir web sitesini hızlıca test edebilmek için geliştirdiğim bir araçtır. Kullanıcı, test etmek istediği URL’i girer; ardından hazır kontrol setlerinden seçim yapar (sayfa başlığı/meta kontrolü, kırık bağlantı taraması, temel erişilebilirlik uyarıları, mobil–tablet–desktop görünümleri, yüklenme süresi gibi). Araç; sayfayı farklı ekran boyutlarında açarak kritik öğelerin görünürlüğünü ve yerleşimini denetler, yönlendirme/404 durumlarını yakalar, basit performans ölçümleri ve konsol hatalarını raporlar. Her çalıştırma sonunda özet bir rapor, ekran görüntüleri ve “geçti/uyarı/hata” ayrımıyla kontrol listesi sunulur. Test geçmişi saklanır, aynı site için tekrar test başlatmak tek tık sürer." },
        { id: 6, title: "WhatsApp Konuşma Analizi Uygulaması", content: "WhatsApp sohbet dökümlerini analiz eden, Java (Spring Boot) ve Python (FastAPI) tabanlı bir web uygulaması geliştirdim. Kullanıcı, dışa aktardığı konuşma dosyasını yüklediğinde sistem mesaj sayısı, aktif saat aralıkları, kullanıcı bazlı yoğunluk, emoji kullanımı ve kelime bulutu gibi verileri görselleştirir. Yapay zekâ destekli metin işleme yöntemleriyle mesajları sınıflandırır ve iletişim alışkanlıklarını özetleyen etkileşimli raporlar üretir." }

    ];
    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    })

}