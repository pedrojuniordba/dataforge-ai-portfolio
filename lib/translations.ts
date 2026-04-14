import { Lang } from "../context/LanguageContext"

type Translation = {
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  services: {
    title: string
    databases: { title: string; desc: string }
    cloud: { title: string; desc: string }
    ai: { title: string; desc: string }
  }
  clientsTitle: string
  clientsSubtitle: string
}

const translations: Record<Lang, Translation> = {
  PT: {
    hero: {
      title: "Transforme seus dados em inteligência",
      subtitle:
        "Soluções em banco de dados, engenharia de dados e automação com agentes de IA",
      cta: "Análise gratuita",
    },
    services: {
      title: "Serviços",
      databases: {
        title: "Databases",
        desc: "Otimização e alta performance para Oracle e PostgreSQL.",
      },
      cloud: {
        title: "Cloud",
        desc: "Arquitetura escalável e segura.",
      },
      ai: {
        title: "Automação com IA",
        desc: "Agentes inteligentes para automação de processos.",
      },
    },
    clientsTitle: "Empresas que confiam",
    clientsSubtitle:
      "Parceiros e clientes que já contam com soluções em dados e automação com IA",
  },

  EN: {
    hero: {
      title: "Transform your data into intelligence",
      subtitle: "Database and AI automation solutions",
      cta: "Free analysis",
    },
    services: {
      title: "Services",
      databases: {
        title: "Databases",
        desc: "Performance and optimization.",
      },
      cloud: {
        title: "Cloud",
        desc: "Scalable architecture.",
      },
      ai: {
        title: "AI Automation",
        desc: "Automation with AI agents.",
      },
    },
    clientsTitle: "Trusted by companies",
    clientsSubtitle:
      "Partners and clients leveraging data engineering and AI automation solutions",
  },

  ES: {
    hero: {
      title: "Transforma tus datos en inteligencia",
      subtitle: "Soluciones en datos y automatización con IA",
      cta: "Análisis gratuito",
    },
    services: {
      title: "Servicios",
      databases: {
        title: "Bases de datos",
        desc: "Optimización y rendimiento.",
      },
      cloud: {
        title: "Cloud",
        desc: "Arquitectura escalable.",
      },
      ai: {
        title: "Automatización IA",
        desc: "Agentes inteligentes.",
      },
    },
    clientsTitle: "Empresas que confían",
    clientsSubtitle:
      "Clientes y socios que utilizan soluciones de datos y automatización con IA",
  },
}

export default translations