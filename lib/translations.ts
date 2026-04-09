export type Lang = "EN" | "PT" | "ES"

type Translation = {
  heroTitle: string
  heroDesc: string
  services: string
  about: string
  cta: string
  databases: string
  cloud: string
  ai: string
  authority: string
}

export const translations: Record<Lang, Translation> = {
  EN: {
    heroTitle: "Transform Your Data Into Intelligence",
    heroDesc: "Database, Cloud and AI Automation solutions focused on performance and scalability.",
    services: "Services",
    about: "About",
    cta: "Get Free Analysis",
    databases: "Databases",
    cloud: "Cloud",
    ai: "AI Automation",
    authority: "Certified Oracle • AI Agents • 24x7 Systems"
  },

  PT: {
    heroTitle: "Transforme seus dados em inteligência",
    heroDesc: "Soluções em banco de dados, cloud e IA.",
    services: "Serviços",
    about: "Sobre",
    cta: "Análise Gratuita",
    databases: "Bancos de Dados",
    cloud: "Cloud",
    ai: "Automação IA",
    authority: "Certificação Oracle • IA • Sistemas 24x7"
  },

  ES: {
    heroTitle: "Transforma tus datos en inteligencia",
    heroDesc: "Soluciones en bases de datos y automatización.",
    services: "Servicios",
    about: "Sobre",
    cta: "Análisis Gratis",
    databases: "Bases de Datos",
    cloud: "Cloud",
    ai: "IA",
    authority: "Oracle • IA • Sistemas Críticos"
  }
}