import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Zap,
  Smartphone,
  Search,
  Shield,
  LifeBuoy,
  LayoutTemplate,
  Rocket,
  RefreshCw,
  Cloud,
  Globe,
  Server,
  Wrench,
  MessageSquare,
  Mail,
  Linkedin,
  Send,
  Plus,
  Minus,
  Compass,
  PenTool,
  Code2,
  Sparkle,
} from "lucide-react";

import projRestaurant from "../assets/project-restaurant.jpg";
import projGym from "../assets/project-gym.jpg";
import projRealEstate from "../assets/project-realestate.jpg";
import projBarber from "../assets/project-barber.jpg";
import projSports from "../assets/project-sportsclub.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marc Martínez — Diseño y desarrollo web para negocios que quieren crecer" },
      {
        name: "description",
        content:
          "Desarrollador web freelance. Diseño webs modernas, rápidas y optimizadas para conversión para restaurantes, clínicas, gimnasios, inmobiliarias y profesionales.",
      },
      {
        property: "og:title",
        content: "Marc Martínez — Webs modernas que hacen crecer tu negocio",
      },
      {
        property: "og:description",
        content:
          "Diseño web premium enfocado en velocidad, confianza y conversiones. Presupuesto sin compromiso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Marc Martínez — Desarrollo web premium" },
      {
        name: "twitter:description",
        content: "Webs modernas, rápidas y optimizadas para convertir visitas en clientes.",
      },
    ],
  }),
  component: Index,
});

// ---------- Small primitives ----------

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-6 py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
      {children}
    </div>
  );
}

function fadeUp(delay = 0): any {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any, delay },
  };
}

// ---------- Nav ----------

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Principal"
        className="glass-strong flex w-full max-w-4xl items-center justify-between rounded-full px-4 py-2 shadow-soft"
      >
        <a href="#top" className="flex items-center gap-2 pl-2 text-sm font-semibold tracking-tight">
          <span className="grid size-7 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-elegant">
            <Sparkle className="size-3.5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span>Marc Martínez</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="group inline-flex items-center gap-1.5 rounded-full bg-foreground/95 px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
        >
          Contactar
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </nav>
    </header>
  );
}

// ---------- Hero ----------

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div ref={ref} id="top" className="relative overflow-hidden pt-32">
      {/* Animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <div className="absolute left-[10%] top-[20%] size-[420px] rounded-full bg-primary/25 blur-[120px] animate-float-slow" />
        <div className="absolute right-[5%] top-[10%] size-[360px] rounded-full bg-primary-glow/20 blur-[110px] animate-float-slower" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-4 text-center md:pt-10"
      >
        <motion.div {...fadeUp(0)}>
          <Eyebrow>Disponible para nuevos proyectos · 2026</Eyebrow>
        </motion.div>

        <motion.h1
          {...fadeUp(0.05)}
          className="text-balance font-display text-5xl leading-[1.12] tracking-tight text-gradient sm:text-6xl md:text-[88px]"
        >
          Webs modernas que
          <br />
          <span className="italic text-gradient-primary">hacen crecer</span> tu negocio.
        </motion.h1>

        <motion.p
          {...fadeUp(0.12)}
          className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Diseño y desarrollo webs a medida enfocadas en velocidad, confianza y conversión.
          Preparadas para que tu negocio destaque el primer día.
        </motion.p>

        <motion.div {...fadeUp(0.18)} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
          >
            <span className="relative z-10">Solicitar presupuesto</span>
            <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-surface"
          >
            Ver proyectos
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.28)}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-1.5">
            <Check className="size-4 text-primary" strokeWidth={2.5} />
            <span>Presupuesto cerrado desde el primer día</span>
          </div>
          <div className="hidden h-3 w-px bg-border md:block" />
          <div className="flex items-center gap-1.5">
            <Zap className="size-4 text-primary" strokeWidth={2.5} />
            <span>Respuesta en menos de 24h</span>
          </div>
          <div className="hidden h-3 w-px bg-border md:block" />
          <div className="flex items-center gap-1.5">
            <MessageSquare className="size-4 text-primary" strokeWidth={2.5} />
            <span>Trato directo conmigo, sin intermediarios</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ---------- Trust bar ----------

const TRUST = [
  "Diseño moderno",
  "Web rápida",
  "Optimizada para móviles",
  "SEO básico",
  "Seguridad",
  "Soporte",
];

function Trust() {
  return (
    <section className="relative border-y border-border/60 bg-surface/30 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-8">
        {TRUST.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Check className="size-4 text-primary" strokeWidth={2.5} />
            <span className="font-medium text-foreground/90">{t}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ---------- Services ----------

const SERVICES = [
  {
    icon: LayoutTemplate,
    title: "Webs corporativas",
    desc: "Presencia digital profesional para tu negocio: diseño a medida, contenido optimizado y estructura pensada para convertir.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    desc: "Páginas de aterrizaje enfocadas 100 % en conversión para campañas, lanzamientos o servicios concretos.",
  },
  {
    icon: RefreshCw,
    title: "Rediseño de webs",
    desc: "Renovamos tu web actual con diseño moderno, mejor velocidad y una experiencia móvil impecable.",
  },
  {
    icon: Cloud,
    title: "Despliegue en Cloudflare",
    desc: "Infraestructura moderna, tiempos de carga globales y CDN incluido. Tu web volando en cualquier país.",
  },
  {
    icon: Globe,
    title: "Configuración de dominio",
    desc: "Compra, migración y configuración DNS. Correo profesional listo con tu dominio.",
  },
  {
    icon: Server,
    title: "Hosting",
    desc: "Alojamiento gestionado, backups automáticos y monitorización 24/7. Tú te olvidas.",
  },
  {
    icon: Search,
    title: "SEO técnico",
    desc: "Fundamentos SEO desde el minuto uno: metadatos, sitemap, datos estructurados y velocidad.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    desc: "Actualizaciones, cambios de contenido y soporte continuo. Tu web siempre al día.",
  },
];

function Services() {
  return (
    <Section id="servicios">
      <motion.div {...fadeUp()} className="max-w-3xl">
        <Eyebrow>Servicios</Eyebrow>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-gradient md:text-6xl">
          Todo lo que necesitas para <span className="italic text-gradient-primary">estar online</span>.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          De la primera idea al lanzamiento. Un único interlocutor, sin agencias ni sorpresas.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/40 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-surface/70"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-border/60 bg-gradient-to-br from-white/[0.04] to-white/[0.02] text-primary">
              <s.icon className="size-5" strokeWidth={1.75} />
            </div>
            <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

// ---------- Projects ----------

const PROJECTS = [
  {
    img: projRestaurant,
    name: "Restaurante Ejemplo",
    category: "Restaurante",
    desc: "Web de reservas para una osteria italiana con menú digital y galería inmersiva.",
    tags: ["React", "Tailwind", "Reservas"],
  },
  {
    img: projGym,
    name: "Gimnasio Ejemplo",
    category: "Gimnasio",
    desc: "Landing potente con horarios de clases, planes y captación de leads para nuevo box.",
    tags: ["Landing", "Framer Motion", "CRM"],
  },
  {
    img: projRealEstate,
    name: "Inmobiliaria Ejemplo",
    category: "Inmobiliaria",
    desc: "Catálogo de propiedades con buscador avanzado y contacto directo por WhatsApp.",
    tags: ["Next.js", "Buscador", "SEO"],
  },
  {
    img: projBarber,
    name: "Barbería Ejemplo",
    category: "Barbería",
    desc: "Web con reservas online, catálogo de servicios y estética industrial-moderna.",
    tags: ["Reservas", "Diseño", "Móvil"],
  },
  {
    img: projSports,
    name: "Club de Fútbol Ejemplo",
    category: "Club deportivo",
    desc: "Portal para socios con calendario, plantilla y partidos en directo.",
    tags: ["Portal", "Calendario", "Contenido"],
  },
];

function Projects() {
  return (
    <Section id="proyectos">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <motion.div {...fadeUp()} className="max-w-2xl">
          <Eyebrow>Ejemplos conceptuales</Eyebrow>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-gradient md:text-6xl">
            Así <span className="italic text-gradient-primary">podría verse</span> tu web.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Diseños conceptuales pensados para distintos sectores, no clientes reales: una muestra
            de lo que puedo construir para tu negocio.
          </p>
        </motion.div>
        <motion.a
          {...fadeUp(0.1)}
          href="#contacto"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ¿Quieres algo así para tu negocio?
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.a>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any, delay: (i % 2) * 0.08 }}
            className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-surface/40 p-3 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant ${
              i === 4 ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={p.img}
                alt={`Web para ${p.name}`}
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <div className="absolute left-4 top-4">
                <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  Concepto · {p.category}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-between gap-4 p-5">
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold text-foreground">{p.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/70 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#contacto"
                aria-label={`Ver más sobre ${p.name}`}
                className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface transition-all group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

// ---------- Why me ----------

const WHY = [
  { icon: Zap, title: "Entrega rápida", desc: "Del brief al lanzamiento en 2–4 semanas." },
  { icon: MessageSquare, title: "Atención personal", desc: "Hablas conmigo directamente, no con una agencia." },
  { icon: Sparkles, title: "Tecnología moderna", desc: "React, Tailwind y las herramientas más actuales." },
  { icon: Smartphone, title: "100 % responsive", desc: "Perfecta en móvil, tablet y escritorio." },
  { icon: Rocket, title: "Rendimiento excelente", desc: "Puntuaciones 95+ en Lighthouse." },
  { icon: Shield, title: "Despliegue seguro", desc: "HTTPS, backups y protección anti-DDoS incluidos." },
  { icon: LifeBuoy, title: "Comunicación fluida", desc: "Respuesta en menos de 24 h por WhatsApp o email." },
  { icon: Search, title: "SEO desde el minuto uno", desc: "Estructura y contenido pensados para Google." },
];

function WhyMe() {
  return (
    <Section id="por-que">
      <motion.div {...fadeUp()} className="max-w-3xl">
        <Eyebrow>Por qué elegirme</Eyebrow>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-gradient md:text-6xl">
          Un socio, no <span className="italic text-gradient-primary">un proveedor</span>.
        </h2>
      </motion.div>

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            className="group relative rounded-2xl border border-border/60 bg-gradient-to-b from-surface/60 to-surface/20 p-6 transition-all hover:border-primary/30"
          >
            <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <w.icon className="size-5" strokeWidth={1.75} />
            </div>
            <div className="text-sm font-semibold text-foreground">{w.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{w.desc}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ---------- Process ----------

const PROCESS = [
  {
    icon: Compass,
    step: "01",
    title: "Descubrimiento",
    desc: "Nos reunimos para entender tu negocio, objetivos y clientes. Definimos alcance, plazos y presupuesto cerrado.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Diseño",
    desc: "Prototipos y diseño visual a medida. Iteramos hasta que cada sección represente perfectamente tu marca.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Desarrollo",
    desc: "Código limpio, rápido y accesible. Integraciones con formularios, WhatsApp, reservas o pagos.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Lanzamiento",
    desc: "Despliegue en Cloudflare, configuración de dominio, SEO técnico y formación para que puedas gestionarla.",
  },
];

function Process() {
  return (
    <Section id="proceso">
      <motion.div {...fadeUp()} className="max-w-3xl">
        <Eyebrow>El proceso</Eyebrow>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-gradient md:text-6xl">
          De la idea al lanzamiento, <span className="italic text-gradient-primary">sin fricción</span>.
        </h2>
      </motion.div>

      <div className="relative mt-16">
        <div aria-hidden className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2 md:block" />
        <ol className="space-y-8 md:space-y-16">
          {PROCESS.map((p, i) => (
            <motion.li
              key={p.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:col-start-2 md:[&>*:first-child]:row-start-1" : ""
              }`}
            >
              <div className={`glass rounded-2xl p-6 md:p-8 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-elegant">
                    <p.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div className="font-display text-2xl text-muted-foreground">{p.step}</div>
                </div>
                <h3 className="font-display text-3xl text-gradient md:text-4xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>
              </div>
              <div aria-hidden className="hidden md:block" />
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

// ---------- FAQ ----------

const FAQ = [
  {
    q: "¿Cuánto cuesta una web contigo?",
    a: "Depende del alcance, pero la mayoría de mis proyectos se sitúan entre 100 € y 400 €. Trabajo con presupuesto cerrado: sabrás el precio final antes de empezar, sin sorpresas.",
  },
  {
    q: "¿En cuánto tiempo estará lista?",
    a: "Una landing suele estar lista en 1–2 semanas. Una web corporativa completa entre 2 y 4 semanas desde la aprobación del diseño.",
  },
  {
    q: "¿La web es mía?",
    a: "Sí, al 100 %. Todo el código, dominio y cuentas de hosting quedan a tu nombre. Sin dependencias ni contratos ocultos.",
  },
  {
    q: "¿Me ayudas con el dominio?",
    a: "Por supuesto. Puedo comprarlo por ti o migrar uno existente, y dejar todo el DNS y el correo profesional configurados.",
  },
  {
    q: "¿Dónde se aloja la web?",
    a: "Uso Cloudflare por su velocidad global, CDN incluido y protección de seguridad. Recomendaría la solución más adecuada a tu caso.",
  },
  {
    q: "¿Ofreces mantenimiento?",
    a: "Sí. Ofrezco planes mensuales que incluyen cambios de contenido, actualizaciones y monitorización. Sin permanencia.",
  },
  {
    q: "¿Puedo pedir cambios después del lanzamiento?",
    a: "Claro. Puedes contratar horas sueltas o un plan de mantenimiento. Respondo en menos de 24 horas.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/70">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary"
      >
        <span className="text-lg font-medium text-foreground">{q}</span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground">
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as any }}
        className="overflow-hidden"
      >
        <p className="pb-6 pr-12 text-muted-foreground">{a}</p>
      </motion.div>
    </div>
  );
}

function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <motion.div {...fadeUp()}>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-gradient md:text-5xl">
            Todo lo que necesitas <span className="italic text-gradient-primary">saber</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            ¿No encuentras tu pregunta? Escríbeme directamente y te respondo en menos de 24 horas.
          </p>
        </motion.div>
        <motion.div {...fadeUp(0.1)}>
          {FAQ.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

// ---------- Contact ----------

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  return (
    <Section id="contacto" className="!pb-16">
      <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-surface/40 p-8 backdrop-blur-md md:p-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-hero-glow opacity-80" />
          <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.div {...fadeUp()}>
            <Eyebrow>Hablemos</Eyebrow>
            <h2 className="font-display text-5xl leading-[1.02] tracking-tight text-gradient md:text-7xl">
              Hablemos de <span className="italic text-gradient-primary">tu proyecto</span>.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Cuéntame qué necesitas y te enviaré una propuesta clara en menos de 48 horas.
              Sin compromiso.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="https://wa.me/34600293219"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-surface/60 p-4 transition-all hover:border-primary/40 hover:bg-surface"
              >
                <div className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <MessageSquare className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">WhatsApp</div>
                    <div className="text-xs text-muted-foreground">Respuesta más rápida</div>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:marcmartinez511@gmail.com"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-surface/60 p-4 transition-all hover:border-primary/40 hover:bg-surface"
              >
                <div className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Mail className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">marcmartinez511@gmail.com</div>
                    <div className="text-xs text-muted-foreground">Correo electrónico</div>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/marc-mart%C3%ADnez-miralles-9b83a3354/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-surface/60 p-4 transition-all hover:border-primary/40 hover:bg-surface"
              >
                <div className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Linkedin className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">LinkedIn</div>
                    <div className="text-xs text-muted-foreground">Conéctame profesionalmente</div>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            {...fadeUp(0.1)}
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("sending");
              setTimeout(() => setStatus("sent"), 900);
            }}
            className="glass-strong rounded-3xl p-6 shadow-elegant md:p-8"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Nombre
                </label>
                <input
                  id="name"
                  required
                  maxLength={80}
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={120}
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="type" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Tipo de proyecto
                </label>
                <select
                  id="type"
                  className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                >
                  <option>Web corporativa</option>
                  <option>Landing page</option>
                  <option>Rediseño</option>
                  <option>Mantenimiento</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="msg" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Cuéntame sobre tu proyecto
                </label>
                <textarea
                  id="msg"
                  required
                  rows={4}
                  maxLength={1000}
                  placeholder="Objetivos, referencias, plazos..."
                  className="w-full resize-none rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {status === "sent" ? (
                  <>
                    <Check className="size-4" /> Mensaje enviado
                  </>
                ) : status === "sending" ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                Nunca compartiré tus datos. Respuesta en menos de 24 horas.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </Section>
  );
}

// ---------- Footer ----------

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <span className="grid size-6 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow">
            <Sparkle className="size-3 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-semibold">Marc Martínez</span>
          <span className="text-muted-foreground">· Desarrollo web</span>
        </div>
        <nav aria-label="Enlaces del pie" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#servicios" className="hover:text-foreground">Servicios</a>
          <a href="#proyectos" className="hover:text-foreground">Proyectos</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
          <a href="#contacto" className="hover:text-foreground">Contacto</a>
        </nav>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Marc Martínez. Hecho con cariño en Barcelona.
        </div>
      </div>
    </footer>
  );
}

// ---------- Page ----------

function Index() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Projects />
      <WhyMe />
      <Process />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
