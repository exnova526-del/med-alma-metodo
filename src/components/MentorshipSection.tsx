import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const MentorshipSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              MENTORIA INDIVIDUAL COM ANNA FONTES
            </h2>
            <p className="text-xl text-muted-foreground italic">
              Excelência que transforma sua jornada médica de dentro para fora.
            </p>
          </div>

          {/* Introduction */}
          <div
            className={`mb-12 transition-all duration-1000 delay-200 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Estudar medicina é mais do que acumular conhecimento — é construir propósito, maturidade e direção.
              A mentoria individual com Anna Fontes foi criada para o estudante que deseja unir ciência, organização, constância e espiritualidade numa jornada de alta performance com profundidade e sentido.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Inspirada no arquétipo do Sábio, Anna orienta com autoridade serena e humanidade, oferecendo clareza, método e propósito enquanto caminha ao seu lado.
            </p>
          </div>

          {/* O que você vai receber */}
          <div
            className={`mb-12 transition-all duration-1000 delay-300 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              O QUE VOCÊ VAI RECEBER
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "4 encontros individuais ao longo do ano",
                  description: "Acompanhamento profundo e adaptado à sua rotina, desafios e metas."
                },
                {
                  title: "Direcionamento personalizado",
                  description: "Plano de estudo baseado em evidências, rotina estratégica e método claro para evoluir com constância."
                },
                {
                  title: "Acompanhamento humano + técnico",
                  description: "Integração entre desempenho científico, gestão emocional e clareza espiritual — o equilíbrio que sustenta uma carreira sólida."
                },
                {
                  title: "Kit exclusivo MED",
                  description: "Itens refinados e minimalistas, alinhados à estética clássica contemporânea da marca: sobriedade, elegância e propósito."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bônus */}
          <div
            className={`mb-12 p-8 bg-primary/5 rounded-lg border border-primary/10 transition-all duration-1000 delay-400 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              🎁 BÔNUS PARA OS 5 PRIMEIROS INSCRITOS
            </h3>
            <p className="text-xl font-semibold text-foreground mb-4">
              Curso Completo "Método de Excelência e Desempenho (MED)"
            </p>
            <p className="text-foreground/90 mb-6">
              O treinamento que fundamenta toda a filosofia da MED — integrando estudo, disciplina e propósito.
            </p>
            <p className="font-semibold text-foreground mb-4">Você vai aprender:</p>
            <ul className="space-y-2 mb-4">
              {[
                "Mentalidade de Excelência",
                "Estratégias científicas de estudo",
                "Constância e disciplina real",
                "Organização e rotina estruturada",
                "Vocação, carreira e propósito",
                "Aplicação prática da excelência"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground/90 italic">
              Um conteúdo que muda a forma como você pensa, aprende e constrói sua trajetória.
            </p>
          </div>

          {/* Para quem é */}
          <div
            className={`mb-12 transition-all duration-1000 delay-500 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
              PARA QUEM É ESTA MENTORIA?
            </h3>
            <ul className="space-y-3">
              {[
                "Estudantes que desejam alta performance com equilíbrio",
                "Quem busca disciplina e constância reais",
                "Quem quer aprender a estudar com profundidade e ciência",
                "Quem sente falta de direção, propósito e clareza",
                "Quem quer se tornar referência — e não apenas mais um nome",
                "Quem acredita na união entre vocação, fé e excelência"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/90">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Investimento */}
          <div
            className={`text-center mb-8 transition-all duration-1000 delay-600 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              INVESTIMENTO
            </h3>
            <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">
              R$ 1.297
            </p>
            <p className="text-foreground/70">
              Possibilidade de parcelamento diretamente pela plataforma.
            </p>
          </div>

          {/* CTA */}
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-700 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-6">
              <p className="text-lg font-semibold text-foreground mb-4">
                GARANTA SUA VAGA
              </p>
              <p className="text-foreground/80 mb-6">
                Somente alunos com real compromisso serão selecionados.
                Se você deseja construir uma jornada sólida, íntegra e guiada por propósito, este é o momento.
              </p>
            </div>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('#', '_blank')}
            >
              Garantir Minha Vaga na Mentoria Individual
            </Button>
          </div>

          {/* Frase final */}
          <div
            className={`text-center transition-all duration-1000 delay-800 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl italic text-foreground/90">
              "Os que confiam no processo voam mais alto. Sua jornada começa aqui."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
