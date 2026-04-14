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
        desc:
          "Otimização e gestão de bancos de dados críticos, com foco em performance, disponibilidade e redução de custos. Atuação em Oracle, PostgreSQL e outros ambientes com tuning avançado e alta eficiência.",
      },
      cloud: {
        title: "Cloud",
        desc:
          "Arquitetura e modernização de ambientes em cloud, com foco em escalabilidade, segurança e eficiência operacional. Soluções robustas para crescimento sustentável e redução de custos.",
      },
      ai: {
        title: "Automação com IA",
        desc:
          "Desenvolvimento de agentes inteligentes para automatizar processos, reduzir esforço operacional e acelerar decisões. Integração de sistemas e criação de fluxos inteligentes com ganho real de produtividade.",
      },
    },
    clientsTitle: "Empresas que confiam",
    clientsSubtitle:
      "Parceiros e clientes que já contam com soluções em dados e automação com IA",
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
        desc:
          "Optimization and management of critical databases, focusing on performance, availability and cost reduction. Expertise in Oracle, PostgreSQL and high-performance environments.",
      },
      cloud: {
        title: "Cloud",
        desc:
          "Cloud architecture and modernization with focus on scalability, security and operational efficiency. Robust solutions to support growth and reduce infrastructure costs.",
      },
      ai: {
        title: "AI Automation",
        desc:
          "Development of intelligent agents to automate processes, reduce manual effort and accelerate decision-making. Smart workflows that drive real productivity gains.",
      },
    },
    clientsTitle: "Trusted by companies",
    clientsSubtitle:
      "Partners and clients leveraging data engineering and AI automation solutions",
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
        desc:
          "Optimización y gestión de bases de datos críticas, con enfoque en rendimiento, disponibilidad y reducción de costos. Experiencia en Oracle, PostgreSQL y entornos de alta demanda.",
      },
      cloud: {
        title: "Cloud",
        desc:
          "Arquitectura y modernización en cloud con enfoque en escalabilidad, seguridad y eficiencia operativa. Soluciones diseñadas para crecer y optimizar recursos.",
      },
      ai: {
        title: "Automatización con IA",
        desc:
          "Desarrollo de agentes inteligentes para automatizar procesos, reducir esfuerzo manual y acelerar decisiones. Flujos inteligentes que generan productividad real.",
      },
    },
    clientsTitle: "Empresas que confían",
    clientsSubtitle:
      "Clientes y socios que utilizan soluciones de datos y automatización con IA",
  },
}

export default translations