import { createFileRoute } from "@tanstack/react-router";
import { Check, Phone, MessageCircle, ChevronDown, MapPin, Shield, Banknote, Gift, Repeat, Clock, BadgeCheck } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero-alphard.jpg";
import sa from "@/assets/sa-alaidin.jpg";
import alphardX from "@/assets/alphard-x.jpg";
import alphardS from "@/assets/alphard-s.jpg";
import alphardGold from "@/assets/alphard-gold.jpg";
import alphardSc from "@/assets/alphard-sc.jpg";
import alphardZ from "@/assets/alphard-z.jpg";
import vellfireGolden from "@/assets/vellfire-golden.jpg";
import vellfireZg from "@/assets/vellfire-zg.jpg";
import vellfireZ from "@/assets/vellfire-z.jpg";
import showroom from "@/assets/showroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alphard & Vellfire Recond 100% Jepun | Waranti 8 Tahun — SA Alaidin" },
      { name: "description", content: "Alphard & Vellfire recond 100% dari Jepun. Waranti 8 tahun, auction report original, bantuan loan A–Z. WhatsApp SA Alaidin sekarang." },
      { property: "og:title", content: "Alphard & Vellfire Recond — Waranti 8 Tahun" },
      { property: "og:description", content: "Kereta MPV mewah recond dari Jepun. WhatsApp SA AYIE untuk info & semakan kelayakan loan." },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/60168861454?text=";
const PHONE = "tel:+60168861454";

function CTA({ text = "WhatsApp SA AYIE", msg = "Salam, saya berminat dengan kereta recond." }: { text?: string; msg?: string }) {
  return (
    <a href={`${WA}${encodeURIComponent(msg)}`} className="btn-primary-toyota" target="_blank" rel="noopener">
      <MessageCircle size={20} strokeWidth={1.5} /> {text}
    </a>
  );
}
function CallBtn() {
  return (
    <a href={PHONE} className="btn-secondary-toyota">
      <Phone size={20} strokeWidth={1.5} /> Hubungi Saya
    </a>
  );
}

const alphards = [
  { name: "ALPHARD X", spec: "Basic Spec", price: "RM173,000", img: alphardX, seat: "7/8 Seater", engine: "2.5cc", colors: "Hitam, Putih & Brown" },
  { name: "ALPHARD S", spec: "Basic Spec", price: "RM185,000", img: alphardS, seat: "7/8 Seater", engine: "2.5cc", colors: "Hitam, Putih & Brown" },
  { name: "ALPHARD TYPE GOLD", spec: "Middle Spec", price: "RM195,000", img: alphardGold, seat: "7 Seater", engine: "2.5cc", colors: "Hitam, Putih & Brown" },
  { name: "ALPHARD SC", spec: "Full Spec", price: "RM210,000", img: alphardSc, seat: "7 Seater (Pilot Seat)", engine: "2.5cc", colors: "Hitam & Putih" },
  { name: "ALPHARD Z", spec: "New Facelift", price: "RM330,000", img: alphardZ, seat: "7 Seater (Pilot Seat)", engine: "2.5cc", colors: "Hitam, Putih & Brown" },
];

const vellfires = [
  { name: "VELLFIRE GOLDEN EYES", spec: "Middle Spec", price: "RM186,000", img: vellfireGolden, seat: "7 Seater", engine: "2.5cc", colors: "Hitam & Putih" },
  { name: "VELLFIRE ZG", spec: "Full Spec", price: "RM210,000", img: vellfireZg, seat: "7 Seater (Pilot Seat)", engine: "2.5cc", colors: "Hitam & Putih" },
  { name: "VELLFIRE Z PREMIER", spec: "New Facelift", price: "RM390,000", img: vellfireZ, seat: "7 Seater (Pilot Seat)", engine: "2.4cc", colors: "Hitam, Putih & Brown" },
];

const valueProps = [
  { icon: BadgeCheck, title: "100% Recond Jepun", desc: "Alphard & Vellfire grad tinggi dan berkualiti. Low mileage dengan original auction report." },
  { icon: Banknote, title: "Bantuan Full Loan", desc: "Kami uruskan permohonan loan dari A–Z. Kadar pinjaman dari 2.4% dengan semua bank di Malaysia." },
  { icon: Shield, title: "Waranti 8 Tahun", desc: "Kereta anda dijamin waranti selama 8 tahun — terpanjang di Malaysia." },
  { icon: Gift, title: "Pelbagai Freegifts", desc: "Free kad TNG, Tinted, Car Wash, Polish & Wax, Crystal Plate, Full Tank & banyak lagi." },
  { icon: Repeat, title: "Trade-in & Nego", desc: "Kami terima trade-in kereta lama anda. Harga kereta boleh runding." },
  { icon: Clock, title: "Respon Pantas & Mesra", desc: "Saya standby 24 jam. Call, WhatsApp, jumpa berdepan — semua boleh." },
];

const steps = [
  { n: "01", title: "Pilih Kereta Idaman Anda", desc: "Kami mempunyai pelbagai pilihan model & variasi mengikut bajet anda." },
  { n: "02", title: "Semak Kelayakan (Percuma)", desc: "Kami periksa dengan bank kelayakan dan interest rate untuk loan anda." },
  { n: "03", title: "Booking & Checking", desc: "Kami book kereta anda dan proses untuk memastikan kondisi yang terbaik." },
  { n: "04", title: "Terima Kereta Anda", desc: "Kami inform setelah siap dan anda pickup kereta baru anda di showroom kami." },
];

const faqs = [
  { q: "Apakah maksud kereta Recond?", a: "Kereta Recond adalah kereta yang diimport terus dari Jepun dalam keadaan low mileage dengan spec yang lebih tinggi berbanding kereta biasa." },
  { q: "Ada waranti tak kereta Recond ni?", a: "Ya — kami sediakan waranti 8 tahun (terpanjang di Malaysia) merangkumi enjin, gearbox dan komponen utama." },
  { q: "Proses nak beli kereta Recond?", a: "5 langkah: Pilih → Semak kelayakan → Booking → Inspection → Delivery. Kami uruskan A–Z." },
  { q: "Boleh trade-in kereta lama tak?", a: "Boleh. Kami beri valuation yang telus dan boleh digunakan sebagai deposit." },
  { q: "Adakah harga boleh runding?", a: "Ya, harga boleh dirunding bergantung kepada model, kondisi dan promosi semasa." },
  { q: "Adakah kereta Recond selamat dan original?", a: "Semua kereta lulus pemeriksaan PUSPAKOM. Bukan potong sambung, bukan half-cut — 100% original." },
  { q: "Mileage betul atau tipu?", a: "Mileage disahkan dengan auction sheet asli dari Jepun. Gambar meter asli disediakan." },
  { q: "Berapa deposit untuk beli kereta Recond?", a: "Biasanya 10%. Sesetengah pembeli layak deposit 0–5% bergantung kepada kelayakan." },
  { q: "Bank apa yang boleh buat loan?", a: "Maybank, CIMB, Public Bank, AmBank, RHB, Bank Islam, Hong Leong. Kami bantu pilih bank terbaik." },
  { q: "Apa beza Recond dengan Used car?", a: "Recond: low mileage, spec premium, kondisi terjaga. Used: mileage tinggi, kondisi bergantung pemilik lama." },
  { q: "Adakah kereta pernah eksiden?", a: "Tidak. Bebas accident, bebas banjir, lulus PUSPAKOM, dengan auction sheet sebagai bukti." },
  { q: "Boleh request video atau gambar tambahan?", a: "Ya — video walkaround, gambar interior/exterior, meter mileage, engine start dan inspection report disediakan." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-foreground sticky top-0 bg-background z-50">
        <div className="container-toyota flex items-center justify-between h-[72px]">
          <a href="#top" className="font-bold text-[18px] tracking-tight">
            ECW<span className="text-primary">.</span>MOTORSPORT
          </a>
          <nav className="hidden md:flex items-center gap-2">
            {[
              ["#alphard", "Alphard"],
              ["#vellfire", "Vellfire"],
              ["#kenapa", "Kenapa Kami"],
              ["#proses", "Proses"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-4 py-2 text-[14px] hover:text-primary transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <a href={PHONE} className="hidden sm:flex items-center gap-2 text-[13px]">
            <Phone size={16} strokeWidth={1.5} /> 013 574 0092
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="border-b border-foreground">
        <div className="container-toyota grid lg:grid-cols-2 gap-12 lg:gap-16 py-16 lg:py-24 items-center">
          <div>
            <div className="badge-toyota badge-alert mb-6">RAYA 2026 PROMO</div>
            <h1 className="h-display mb-6">
              Recond Alphard & Vellfire Mewah<br />
              <span className="text-primary">dari RM2,000+</span> sebulan
            </h1>
            <p className="text-[18px] font-light mb-3">
              Miliki Alphard & Vellfire Recond — Tanpa Risiko + Waranti 8 Tahun.
            </p>
            <p className="text-[16px] text-muted-foreground font-light mb-8">
              Dapatkan kereta MPV mewah anda — kereta keluarga dengan keselesaan premium & prestij.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Kereta kondisi tip-top, low mileage",
                "Original auction report, bebas risiko",
                "Waranti 8 tahun — bebas sakit kepala",
                "Pelbagai freegifts untuk anda",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px]">
                  <Check size={20} strokeWidth={2} className="text-primary shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <CTA text="Semak Kelayakan Anda" msg="Salam Alaidin, saya nak semak kelayakan loan untuk kereta recond." />
              <CallBtn />
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Toyota Alphard recond mewah" width={1600} height={1000} className="w-full h-auto border border-foreground" />
            <div className="absolute -bottom-4 -left-4 hidden md:flex flex-col bg-background border border-foreground p-5">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Bersama anda</span>
              <span className="text-[18px] font-bold">SA AYIE</span>
              <span className="text-[13px] text-muted-foreground">ECW MOTORSPORT</span>
            </div>
          </div>
        </div>
      </section>

      {/* SA Intro */}
      <section className="border-b border-foreground bg-surface">
        <div className="container-toyota section-pad grid md:grid-cols-[360px_1fr] gap-12 items-start">
          <img src={sa} alt="SA Alaidin" width={800} height={1000} loading="lazy" className="w-full border border-foreground" />
          <div>
            <div className="text-[13px] uppercase tracking-wider text-muted-foreground mb-2">Perunding Anda</div>
            <h2 className="h-section mb-3">Hi, Saya AYIE dari ECW MOTORSPORT.</h2>
            <p className="text-[18px] font-light mb-6">Perunding jualan kereta recond anda.</p>
            <p className="text-[15px] text-foreground/80 mb-8 max-w-xl">
              Ratusan pelanggan telah saya bantu untuk memiliki kereta idaman mereka dengan proses
              yang mudah, cepat dan selamat.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Bantuan penuh proses loan sehingga lulus",
                "100% dari Jepun (Auction Report, Original Mileage, Original Grade)",
                "Waranti 8 tahun TERPANJANG di Malaysia",
                "Kami terima trade-in",
                "Layanan pantas, jujur & telus",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px]">
                  <Check size={20} strokeWidth={2} className="text-primary shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
            <CTA text="Saya Bantu Anda A–Z" msg="Salam Ayie, saya berminat dengan recond Alphard/Vellfire." />
          </div>
        </div>
      </section>

      {/* Alphard listings */}
      <ListingSection
        id="alphard"
        title="Listing Ready Stock Alphard Recond"
        subtitle="Pilihan spec & warna untuk setiap bajet."
        items={alphards}
      />

      {/* Vellfire listings */}
      <ListingSection
        id="vellfire"
        title="Listing Ready Stock Vellfire Recond"
        subtitle="Sporty, agresif dan premium — sentuhan Vellfire."
        items={vellfires}
        dark
      />

      {/* Mid CTA */}
      <section className="bg-foreground text-background border-y border-foreground">
        <div className="container-toyota py-20 lg:py-24 text-center">
          <h2 className="h-section mb-4">Hubungi Saya Sekarang Untuk Fast Response.</h2>
          <p className="text-[16px] font-light max-w-2xl mx-auto mb-8 opacity-80">
            Saya sudah membantu ratusan pelanggan mendapatkan Alphard & Vellfire idaman mereka.
            Kereta recond 100% dari Jepun — harga boleh nego.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <CTA />
            <a href={PHONE} className="btn-secondary-toyota" style={{ borderColor: "white", color: "white" }}>
              <Phone size={20} strokeWidth={1.5} /> Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section id="kenapa" className="border-b border-foreground">
        <div className="container-toyota section-pad">
          <div className="max-w-2xl mb-12">
            <div className="text-[13px] uppercase tracking-wider text-primary mb-3">Kenapa Beli Dengan Saya</div>
            <h2 className="h-section mb-4">Layanan terbaik. Uruskan A–Z.</h2>
            <p className="text-[16px] font-light text-foreground/80">
              Anda hanya perlu pilih, serahkan dokumen berkaitan kepada saya, dan saya uruskan semuanya.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-foreground">
            {valueProps.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-8 lg:p-10 border-foreground"
                  style={{
                    borderRight: i % 3 !== 2 ? "1px solid" : undefined,
                    borderBottom: i < 3 ? "1px solid" : undefined,
                  }}
                >
                  <Icon size={36} strokeWidth={1.2} className="text-primary mb-6" />
                  <h3 className="text-[20px] font-bold mb-3">{v.title}</h3>
                  <p className="text-[14px] font-light text-foreground/75 leading-[22px]">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proses" className="bg-surface border-b border-foreground">
        <div className="container-toyota section-pad">
          <div className="max-w-2xl mb-12">
            <div className="text-[13px] uppercase tracking-wider text-primary mb-3">Bagaimana</div>
            <h2 className="h-section mb-4">4 Langkah Mudah Memiliki Kereta Idaman.</h2>
            <p className="text-[13px] font-light text-muted-foreground">
              Proses mengambil masa antara 3 hingga 14 hari, bergantung kepada stok semasa.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-foreground bg-background">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="p-8 lg:p-10"
                style={{ borderRight: i < 3 ? "1px solid var(--color-foreground)" : undefined }}
              >
                <div className="text-[48px] font-bold text-primary leading-none mb-6">{s.n}</div>
                <h3 className="text-[18px] font-bold mb-3">{s.title}</h3>
                <p className="text-[14px] font-light text-foreground/75 leading-[22px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="border-b border-foreground">
        <div className="container-toyota section-pad grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-[13px] uppercase tracking-wider text-primary mb-3">Showroom Kami</div>
            <h2 className="h-section mb-4">ECW Motorsport, Bandar Baru Bangi.</h2>
            <p className="text-[16px] font-light mb-6 text-foreground/80">
              Pengimport & penjual kereta import (Recond). Anda mencari kereta Alphard & Vellfire
              recond 100% dari Jepun? Disinilah tempatnya.
            </p>
            <div className="card-feature mb-6">
              <div className="flex items-start gap-3 mb-3">
                <MapPin size={20} strokeWidth={1.5} className="shrink-0 mt-1" />
                <p className="text-[14px] font-light leading-[22px]">
                  ECW Motorsport, Jalan P10/21,<br />
                  Taman Perindustrian Selaman,<br />
                  43650 Bandar Baru Bangi, Selangor.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} strokeWidth={1.5} />
                <a href={PHONE} className="text-[14px] underline">AYIE - 016-886-1454</a>
              </div>
            </div>
            <CTA />
          </div>
          <img src={showroom} alt="Showroom ECW Motorsport" width={1400} height={1000} loading="lazy" className="w-full border border-foreground" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-toyota py-20 lg:py-24 text-center">
          <h2 className="h-section mb-4">Ada sebarang soalan mengenai kereta recond?</h2>
          <p className="text-[16px] font-light max-w-2xl mx-auto mb-8 opacity-95">
            Jom berhubung dengan saya sekarang. Saya akan terangkan apa yang anda nak tahu.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`${WA}${encodeURIComponent("Salam Ayie, saya ada soalan.")}`} className="btn-secondary-toyota" style={{ borderColor: "white", color: "white" }}>
              <MessageCircle size={20} strokeWidth={1.5} /> WhatsApp SA Ayie
            </a>
            <a href={PHONE} className="btn-secondary-toyota" style={{ borderColor: "white", color: "white" }}>
              <Phone size={20} strokeWidth={1.5} /> Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-foreground">
        <div className="container-toyota section-pad max-w-[900px] mx-auto">
          <div className="text-[13px] uppercase tracking-wider text-primary mb-3">Soalan Lazim</div>
          <h2 className="h-section mb-10">FAQs.</h2>
          <div className="border-t border-foreground">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="container-toyota py-12 grid md:grid-cols-3 gap-8 text-[13px] font-light">
          <div>
            <div className="font-bold text-[16px] mb-3">ECW MOTORSPORT</div>
            <p className="opacity-70">Pengimport & penjual kereta import (Recond) — Alphard & Vellfire 100% dari Jepun.</p>
          </div>
          <div>
            <div className="font-bold mb-3">Hubungi</div>
            <p className="opacity-70">Ayie - 016-886-1454</p>
            <p className="opacity-70 mt-2">Jalan P10/21, Taman Perindustrian Selaman, 43650 Bandar Baru Bangi.</p>
          </div>
          <div>
            <div className="font-bold mb-3">Cepat</div>
            <div className="flex flex-col gap-2">
              <a href="#alphard" className="opacity-70 hover:opacity-100">Alphard</a>
              <a href="#vellfire" className="opacity-70 hover:opacity-100">Vellfire</a>
              <a href="#faq" className="opacity-70 hover:opacity-100">FAQ</a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20">
          <div className="container-toyota py-5 text-[12px] opacity-60">
            © {new Date().getFullYear()} Web design by Bob SB. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`${WA}${encodeURIComponent("Salam Alaidin.")}`}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground h-14 w-14 flex items-center justify-center shadow-[0_8px_24px_rgba(235,10,30,0.35)] hover:bg-primary-hover transition-colors"
      >
        <MessageCircle size={26} strokeWidth={1.5} />
      </a>
    </div>
  );
}

function ListingSection({
  id,
  title,
  subtitle,
  items,
  dark,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: typeof alphards;
  dark?: boolean;
}) {
  return (
    <section id={id} className={`border-b border-foreground ${dark ? "bg-surface" : ""}`}>
      <div className="container-toyota section-pad">
        <div className="max-w-2xl mb-12">
          <div className="text-[13px] uppercase tracking-wider text-primary mb-3">Ready Stock</div>
          <h2 className="h-section mb-4">{title}</h2>
          <p className="text-[16px] font-light text-foreground/70">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <article key={c.name} className="card-toyota bg-background flex flex-col">
              <div className="relative">
                <img src={c.img} alt={c.name} width={1200} height={900} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="badge-toyota badge-success">Low Mileage</span>
                  <span className="badge-toyota badge-alert">8Y Waranti</span>
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="text-[12px] uppercase tracking-wider text-muted-foreground mb-2">{c.spec}</div>
                <h3 className="text-[22px] font-bold leading-tight mb-4">{c.name}</h3>
                <div className="mb-5">
                  <div className="text-[12px] text-muted-foreground">Dari</div>
                  <div className="text-[28px] font-bold text-primary leading-tight">{c.price}</div>
                </div>
                <ul className="space-y-2 mb-6 text-[14px] font-light">
                  <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-1" /> Seat: {c.seat}</li>
                  <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-1" /> Enjin {c.engine}</li>
                  <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-1" /> Warna: {c.colors}</li>
                </ul>
                <a
                  href={`${WA}${encodeURIComponent(`Salam Alaidin, saya berminat dengan ${c.name}. Boleh info lanjut?`)}`}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary-toyota w-full mt-auto"
                >
                  <MessageCircle size={18} strokeWidth={1.5} /> Info Lanjut
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-foreground">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[16px] font-bold">{q}</span>
        <ChevronDown
          size={20}
          strokeWidth={1.5}
          className={`shrink-0 transition-transform ${open ? "rotate-180 text-primary" : ""}`}
        />
      </button>
      {open && <p className="pb-6 pr-10 text-[14px] font-light text-foreground/75 leading-[22px]">{a}</p>}
    </div>
  );
}
