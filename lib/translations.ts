export type Lang = "EN" | "PT" | "ES"

type Client = {
  name: string
  logo: string
}

type Translation = {
  heroTitle: string
  heroDesc: string
  cta: string

  services: string
  databases: string
  cloud: string
  ai: string

  clientsTitle: string
  clients: Client[]
}

export const translations: Record<Lang, Translation> = {
  EN: {
    heroTitle: "Data Engineering & AI Automation",
    heroDesc:
      "I help companies optimize databases, build scalable data pipelines and automate processes using AI agents.",
    cta: "Get Free Analysis",

    services: "What I Do",
    databases: "Databases",
    cloud: "Data Engineering",
    ai: "AI Automation",

    clientsTitle: "Trusted by teams working with critical data",

    clients: [
      { name: "Stripe", logo: "/logos/stripe.svg" },
      { name: "Amazon", logo: "/logos/amazon.svg" },
      { name: "Google", logo: "/logos/google.svg" },
      { name: "Microsoft", logo: "/logos/microsoft.svg" },
      { name: "IBM", logo: "/logos/ibm.svg" },
      { name: "Oracle", logo: "/logos/oracle.svg" }
    ]
  },

  PT: {
    heroTitle: "Engenharia de Dados & Automação com IA",
    heroDesc:
      "Ajudo empresas a otimizar bancos de dados, construir pipelines escaláveis e automatizar processos com agentes de IA.",
    cta: "Análise Gratuita",

    services: "O que eu faço",
    databases: "Bancos de Dados",
    cloud: "Engenharia de Dados",
    ai: "Automação com IA",

    clientsTitle: "Empresas que confiam em soluções de dados críticos",

    clients: [
      { name: "Stripe", logo: "/logos/stripe.svg" },
      { name: "Amazon", logo: "/logos/amazon.svg" },
      { name: "Google", logo: "/logos/google.svg" },
      { name: "Microsoft", logo: "/logos/microsoft.svg" },
      { name: "IBM", logo: "/logos/ibm.svg" },
      { name: "Oracle", logo: "/logos/oracle.svg" }
    ]
  },

  ES: {
    heroTitle: "Ingeniería de Datos & Automatización con IA",
    heroDesc:
      "Ayudo a empresas a optimizar bases de datos, construir pipelines escalables y automatizar procesos con agentes de IA.",
    cta: "Análisis Gratis",

    services: "Qué hago",
    databases: "Bases de Datos",
    cloud: "Ingeniería de Datos",
    ai: "Automatización IA",

    clientsTitle: "Empresas que confían en soluciones de datos críticos",

    clients: [
      { name: "Stripe", logo: "/logos/stripe.svg" },
      { name: "Amazon", logo: "/logos/amazon.svg" },
      { name: "Google", logo: "/logos/google.svg" },
      { name: "Microsoft", logo: "/logos/microsoft.svg" },
      { name: "IBM", logo: "/logos/ibm.svg" },
      { name: "Oracle", logo: "/logos/oracle.svg" }
    ]
  }
}