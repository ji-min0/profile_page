import nodemailer from "nodemailer";

// .env: EMAIL_PROVIDER(naver|gmail|icloud), EMAIL_USER, EMAIL_PASS — 기존 FastAPI 버전과 같은 키
const PROVIDERS: Record<string, { host: string; port: number }> = {
  naver: { host: "smtp.naver.com", port: 465 },
  gmail: { host: "smtp.gmail.com", port: 587 },
  icloud: { host: "smtp.mail.me.com", port: 587 },
};

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const { EMAIL_PROVIDER = "", EMAIL_USER, EMAIL_PASS } = process.env;
  const smtp = PROVIDERS[EMAIL_PROVIDER];
  if (!smtp || !EMAIL_USER || !EMAIL_PASS) {
    return Response.json({ message: "메일 설정이 되어 있지 않습니다." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ message: "잘못된 요청입니다." }, { status: 400 });
  }

  const name = clean(body.name, 100).replace(/[\r\n]/g, " ");
  const email = clean(body.email, 200);
  const message = clean(body.message, 5000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ message: "이름, 올바른 이메일, 메시지를 모두 입력해주세요." }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.port === 465,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });
    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      replyTo: email,
      subject: `[포트폴리오 문의] ${name}`,
      text: `보낸 사람: ${name} (${email})\n\n${message}`,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: "메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요." }, { status: 502 });
  }
}
