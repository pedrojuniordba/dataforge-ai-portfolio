import { Lang } from "../context/LanguageContext"

type Translation = {
  hero: { title: string; subtitle: string; cta: string }
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
        desc:
          "Otimização e gestão de bancos críticos com foco em performance, disponibilidade e redução de custos.",
      },
      cloud: {
        title: "Cloud",
        desc:
          "Arquitetura moderna, escalável e segura para ambientes cloud com alta eficiência operacional.",
      },
      ai: {
        title: "Automação com IA",
        desc:
          "Agentes inteligentes para automação de processos, redução de esforço manual e ganho de produtividade.",
      },
    },
    clientsTitle: "Empresas que confiam",
    clientsSubtitle:
      "Parceiros e clientes que utilizam soluções em dados e automação com IA",
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
        desc: "High-performance database optimization and management.",
      },
      cloud: {
        title: "Cloud",
        desc: "Scalable and secure cloud architecture.",
      },
      ai: {
        title: "AI Automation",
        desc: "Automation with intelligent AI agents.",
      },
    },
    clientsTitle: "Trusted by companies",
    clientsSubtitle:
      "Partners leveraging data engineering and AI automation",
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
        desc: "Optimización y alto rendimiento.",
      },
      cloud: {
        title: "Cloud",
        desc: "Arquitectura escalable y segura.",
      },
      ai: {
        title: "Automatización IA",
        desc: "Automatización con agentes inteligentes.",
      },
    },
    clientsTitle: "Empresas que confían",
    clientsSubtitle:
      "Clientes que utilizan soluciones en datos y automatización",
  },
}

export default translations