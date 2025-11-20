import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, message, captchaToken } = body || {};

    if (!email || !message) {
      return NextResponse.json(
        { error: "E-posta ve mesaj gereklidir." },
        { status: 400 }
      );
    }

    // 🟣 1) CAPTCHA GELMİŞ Mİ?
    if (!captchaToken) {
      return NextResponse.json(
        { error: "Captcha doğrulanamadı." },
        { status: 400 }
      );
    }

    // 🟣 2) CAPTCHA TOKENINI GOOGLE'A DOĞRULAT
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.warn("RECAPTCHA_SECRET_KEY missing. Skipping verification.");
      return NextResponse.json(
        { error: "Captcha doğrulaması yapılandırılmamış." },
        { status: 500 }
      );
    }

    const googleRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `secret=${secretKey}&response=${captchaToken}`
      }
    );

    const captchaValidation = await googleRes.json();

    console.log("Captcha doğrulama:", captchaValidation);

    // Eğer başarılı değilse mail gönderme!
    if (!captchaValidation.success) {
      return NextResponse.json(
        { error: "Captcha doğrulaması geçersiz." },
        { status: 400 }
      );
    }

    // 🟣 3) CAPTCHA OK → Artık mail gönderebiliriz
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY missing. Skipping email send.");
      return NextResponse.json(
        { error: "E-posta servisi yapılandırılmamış." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const sendResult = await resend.emails.send({
  from: "Cemile Form <onboarding@resend.dev>",
  to: "xxceyox@gmail.com",
  subject: `Yeni iletişim formu - ${email}`,
  text: `Gönderen: ${email}\n\nMesaj:\n${message}`,
});

    console.log("Resend yanıtı:", sendResult);

    return NextResponse.json(
      { success: true, message: "Mesaj başarıyla gönderildi." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
