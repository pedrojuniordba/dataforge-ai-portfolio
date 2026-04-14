import { Lang } from "../context/LanguageContext"

type Translation = {
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  services: {
    title: string
    databases: {
      title: string
      desc: string
    }
    cloud: {
      title: string
      desc: string
    }
    ai: {
      title: string
      desc: string
    }
  }
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
        desc: "Otimização, tuning e alta performance para Oracle, PostgreSQL e outros bancos.",
      },
      cloud: {
        title: "Cloud",
        desc: "Arquitetura escalável, segura e otimizada para ambientes cloud.",
      },
      ai: {
        title: "Automação com IA",
        desc: "Automação de processos com agentes inteligentes e IA.",
      },
    },
  },

  EN: {
    hero: {
      title: "Transform your data into intelligence",
      subtitle:
        "Database, data engineering and AI automation solutions focused on performance",
      cta: "Free analysis",
    },
    services: {
      title: "Services",
      databases: {
        title: "Databases",
        desc: "Optimization and performance tuning for Oracle, PostgreSQL and more.",
      },
      cloud: {
        title: "Cloud",
        desc: "Scalable and secure cloud architecture.",
      },
      ai: {
        title: "AI Automation",
        desc: "Process automation with AI agents.",
      },
    },
  },

  ES: {
    hero: {
      title: "Transforma tus datos en inteligencia",
      subtitle:
        "Soluciones en bases de datos, ingeniería de datos y automatización con IA",
      cta: "Análisis gratuito",
    },
    services: {
      title: "Servicios",
      databases: {
        title: "Bases de datos",
        desc: "Optimización y rendimiento para Oracle, PostgreSQL y más.",
      },
      cloud: {
        title: "Cloud",
        desc: "Arquitectura escalable y segura.",
      },
      ai: {
        title: "Automatización IA",
        desc: "Automatización de procesos con agentes inteligentes.",
      },
    },
  },
}

export default translations