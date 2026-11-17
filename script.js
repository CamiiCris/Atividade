document.addEventListener('DOMContentLoaded', () => {
    // =========================================================
    // 1. BANCO DE DADOS DE CURSOS E OFICINAS
    // =========================================================
    const cursosData = [
        {
            id: 1,
            titulo: "Oficina Jovem Empreendedor: Do Zero ao Primeiro Negócio",
            categoria: "jovens",
            categoriaLabel: "Jovens e Adolescentes",
            areaRelacionada: "Ciências Sociais Aplicadas",
            modalidade: "Presencial / Híbrido",
            cargaHoraria: "40 horas",
            publico: "Jovens de 15 a 24 anos",
            resumo: "Oficinas práticas de ideação, modelo de negócios, educação financeira e geração de renda para jovens.",
            ementa: [
                "Identificação de oportunidades na comunidade local",
                "Modelagem ágil de negócios (Canvas) e precificação",
                "Marketing digital básico e vendas",
                "Pitch final com mentores locais"
            ]
        },
        {
            id: 2,
            titulo: "Inclusão Produtiva e Autonomia Econômica",
            categoria: "vulneraveis",
            categoriaLabel: "Inclusão Produtiva",
            areaRelacionada: "Ciências Humanas e Licenciaturas",
            modalidade: "Presencial com Acessibilidade",
            cargaHoraria: "60 horas",
            publico: "Pessoas em vulnerabilidade e PcD",
            resumo: "Capacitação profissional e empreendedora com acompanhamento psicopedagógico e foco em inserção digna.",
            ementa: [
                "Direitos trabalhistas e formalização (MEI)",
                "Desenvolvimento de habilidades socioemocionais e comunicação",
                "Gestão financeira familiar e microcrédito orientado",
                "Oficinas práticas de economia solidária"
            ]
        },
        {
            id: 3,
            titulo: "Tech Social Lab: Soluções Digitais para Problemas Reais",
            categoria: "tecnologia",
            categoriaLabel: "Tecnologia e Inovação",
            areaRelacionada: "Engenharias e Exatas",
            modalidade: "Online ao Vivo",
            cargaHoraria: "80 horas",
            publico: "Estudantes e desenvolvedores",
            resumo: "Programa de inovação para criar protótipos, aplicativos e ferramentas que resolvam desafios sociais e profissionais.",
            ementa: [
                "Design Thinking aplicado a problemas sociais",
                "Prototipação rápida e desenvolvimento No-Code / Web",
                "Testes de usabilidade e acessibilidade digital",
                "Validação de produto mínimo viável (MVP)"
            ]
        },
        {
            id: 4,
            titulo: "Tecnologias Assistivas e Inovação em Saúde",
            categoria: "tecnologia",
            categoriaLabel: "Tecnologia e Inovação",
            areaRelacionada: "Ciências da Saúde",
            modalidade: "Híbrido",
            cargaHoraria: "50 horas",
            publico: "Profissionais e estudantes de Saúde/Engenharia",
            resumo: "Criação de soluções de baixo custo para reabilitação, ergonomia e inclusão de pessoas com deficiência no trabalho.",
            ementa: [
                "Ergonomia e adaptação de postos de trabalho",
                "Impressão 3D aplicada a dispositivos assistivos",
                "Empreendedorismo em HealthTechs",
                "Estudos de caso de inclusão laboral"
            ]
        },
        {
            id: 5,
            titulo: "Bioeconomia e Agronegócio Familiar Sustentável",
            categoria: "bioagro",
            categoriaLabel: "Bio & Agro Sustentável",
            areaRelacionada: "Ciências Agrárias",
            modalidade: "Presencial (Campo)",
            cargaHoraria: "45 horas",
            publico: "Pequenos produtores e jovens rurais",
            resumo: "Agregação de valor a produtos da sociobiodiversidade e gestão sustentável para geração de renda no campo.",
            ementa: [
                "Boas práticas de manejo sustentável e agroecologia",
                "Beneficiamento e rotulagem de produtos locais",
                "Acesso a mercados institucionais e feiras",
                "Cooperativismo e associativismo rural"
            ]
        },
        {
            id: 6,
            titulo: "Biotecnologia Verde e Empreendedorismo Ambiental",
            categoria: "bioagro",
            categoriaLabel: "Bio & Agro Sustentável",
            areaRelacionada: "Ciências Biológicas",
            modalidade: "Híbrido",
            cargaHoraria: "60 horas",
            publico: "Graduandos e empreendedores ambientais",
            resumo: "Transformando pesquisas biológicas em negócios sustentáveis de reaproveitamento de resíduos e bioprodutos.",
            ementa: [
                "Economia circular e gestão de resíduos orgânicos",
                "Desenvolvimento de bioprodutos e bioinsumos",
                "Captação de recursos e editais de fomento à inovação",
                "Propriedade intelectual e transferência de tecnologia"
            ]
        }
    ];

    // =========================================================
    // 2. BANCO DE DADOS DE REPORTAGENS
    // =========================================================
    const reportagensData = [
        {
            id: 101,
            categoria: "Inclusão & Trabalho",
            data: "Outubro de 2026",
            corBanner: "bg-crimson",
            titulo: "Jovens da periferia criam cooperativa de tecnologia e faturam com soluções locais",
            resumo: "Após passarem por oficinas de capacitação empreendedora, 18 jovens desenvolveram plataformas de comércio para pequenos comerciantes do bairro.",
            conteudoCompleto: `
                <p>O projeto nasceu dentro de uma extensão universitária conectada às metas da <strong>ODS 8</strong>. Durante quatro meses, jovens entre 17 e 23 anos participaram de oficinas de programação básica, gestão financeira e atendimento ao cliente.</p><br>
                <p>Ao perceberem que os comércios locais tinham dificuldade para vender online, os participantes criaram uma cooperativa de serviços digitais. Hoje, atendem mais de 45 empreendedores locais, gerando renda digna e mantendo os jovens estudando.</p>
            `
        },
        {
            id: 102,
            categoria: "Acessibilidade & Saúde",
            data: "Setembro de 2026",
            corBanner: "bg-slate",
            titulo: "Parceria entre Saúde e Engenharia desenvolve órteses de baixo custo para trabalhadores",
            resumo: "Projeto multidisciplinar utiliza impressão 3D para adaptar ferramentas de trabalho e garantir emprego produtivo para pessoas com deficiência.",
            conteudoCompleto: `
                <p>Garantir que pessoas com deficiência tenham acesso a empregos decentes exige eliminar barreiras físicas no ambiente laboral. Foi com esse objetivo que estudantes de <strong>Ciências da Saúde e Engenharias</strong> uniram forças.</p><br>
                <p>Utilizando scanners 3D e polímeros sustentáveis, a equipe desenvolveu adaptadores ergonômicos personalizados para profissionais de escritórios e indústrias, reduzindo custos em até 70%.</p>
            `
        },
        {
            id: 103,
            categoria: "Campo & Sustentabilidade",
            data: "Agosto de 2026",
            corBanner: "bg-emerald",
            titulo: "Programa de capacitação rural multiplica renda de famílias na agricultura sustentável",
            resumo: "Com apoio das Ciências Agrárias e Sociais Aplicadas, produtores aprenderam a beneficiar alimentos e acessar novos mercados.",
            conteudoCompleto: `
                <p>A sucessão rural e a geração de renda no campo são desafios centrais para o desenvolvimento sustentável. Por meio de oficinas práticas de gestão e agroecologia, 60 famílias passaram a processar frutas nativas e hortaliças orgânicas.</p>
            `
        }
    ];

    // =========================================================
    // 3. LÓGICA DO QUIZ DE PERFIL (INTERATIVO)
    // =========================================================
    window.avancarQuiz = (proximoPasso) => {
        if (proximoPasso === 3) {
            const p1 = document.querySelector('input[name="p1"]:checked');
            if (!p1) {
                alert('Por favor, selecione uma opção para continuar.');
                return;
            }

            // Mapeia o resultado
            const perfis = {
                tecnologia: { titulo: "Perfil: Inovador Tecnológico 🚀", curso: "Tech Social Lab: Soluções Digitais para Problemas Reais", area: "Engenharias e Exatas", desc: "Seu foco é criar produtos, softwares e soluções tecnológicas para resolver gargalos sociais." },
                vulneraveis: { titulo: "Perfil: Agente de Inclusão Social 🤝", curso: "Inclusão Produtiva e Autonomia Econômica", area: "Ciências Humanas e Licenciaturas", desc: "Você se importa com autonomia econômica, direitos e apoio humanizado a grupos vulneráveis." },
                jovens: { titulo: "Perfil: Educador & Líder Empreendedor 💡", curso: "Oficina Jovem Empreendedor: Do Zero ao Primeiro Negócio", area: "Ciências Sociais Aplicadas", desc: "Sua vocação é inspirar jovens, ensinar habilidades práticas e fomentar a cultura empreendedora." },
                bioagro: { titulo: "Perfil: Empreendedor Verde & Sustentável 🌱", curso: "Bioeconomia e Agronegócio Familiar Sustentável", area: "Ciências Agrárias", desc: "Você foca em bioeconomia, manejo sustentável e desenvolvimento de bioprodutos no campo." }
            };

            const resultado = perfis[p1.value] || perfis.tecnologia;
            document.getElementById('quizResultContent').innerHTML = `
                <h3>${resultado.titulo}</h3>
                <p>${resultado.desc}</p>
                <p style="font-size:0.9rem; color:var(--text-main); margin-bottom:16px;"><strong>Curso Ideal Recomendado:</strong> ${resultado.curso}</p>
                <button class="btn btn-primary" onclick="selecionarCursoParaInscricao('${resultado.curso}', '${resultado.area}')">Quero me inscrever neste curso</button>
            `;
        }

        document.querySelectorAll('.quiz-step').forEach(step => step.classList.add('hidden'));
        document.getElementById(`step-${proximoPasso}`).classList.remove('hidden');
    };

    window.reiniciarQuiz = () => {
        document.querySelectorAll('input[type="radio"]').forEach(inp => inp.checked = false);
        document.querySelectorAll('.quiz-step').forEach(step => step.classList.add('hidden'));
        document.getElementById('step-1').classList.remove('hidden');
    };

    // =========================================================
    // 4. FAQ (ACORDEÃO INTERATIVO)
    // =========================================================
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // =========================================================
    // 5. RENDERIZAR CURSOS E FILTRAGEM
    // =========================================================
    const coursesContainer = document.getElementById('coursesContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderCourses(filter = 'todos') {
        if (!coursesContainer) return;
        coursesContainer.innerHTML = '';

        const filtered = filter === 'todos' ? cursosData : cursosData.filter(c => c.categoria === filter);

        filtered.forEach(curso => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                <div>
                    <div class="course-tags">
                        <span class="course-badge">${curso.categoriaLabel}</span>
                        <span class="course-modality">${curso.modalidade}</span>
                    </div>
                    <h3>${curso.titulo}</h3>
                    <p>${curso.resumo}</p>
                </div>
                <div>
                    <div class="course-meta">
                        <span><i data-lucide="clock" style="width:14px;height:14px;"></i> ${curso.cargaHoraria}</span>
                        <span><i data-lucide="graduation-cap" style="width:14px;height:14px;"></i> ${curso.areaRelacionada}</span>
                    </div>
                    <div class="course-actions">
                        <button class="btn-card-outline" onclick="abrirModalCurso(${curso.id})">Ver Ementa</button>
                        <button class="btn-card-fill" onclick="selecionarCursoParaInscricao('${curso.titulo}', '${curso.areaRelacionada}')">Inscrever-se</button>
                    </div>
                </div>
            `;
            coursesContainer.appendChild(card);
        });

        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCourses(btn.dataset.category);
        });
    });

    document.querySelectorAll('.clickable-area').forEach(areaCard => {
        areaCard.addEventListener('click', () => {
            const mapAreaToFilter = { saude: 'tecnologia', humanas: 'vulneraveis', biologicas: 'bioagro', agrarias: 'bioagro', sociais: 'jovens', exatas: 'tecnologia' };
            const targetFilter = mapAreaToFilter[areaCard.dataset.filter] || 'todos';
            
            filterButtons.forEach(b => b.classList.toggle('active', b.dataset.category === targetFilter));
            renderCourses(targetFilter);
            document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // =========================================================
    // 6. RENDERIZAR REPORTAGENS
    // =========================================================
    const newsContainer = document.getElementById('newsContainer');

    function renderNews() {
        if (!newsContainer) return;
        newsContainer.innerHTML = '';

        reportagensData.forEach(item => {
            const article = document.createElement('article');
            article.className = 'news-card';
            article.innerHTML = `
                <div class="news-banner ${item.corBanner}">
                    <span class="news-category">${item.categoria}</span>
                    <span class="news-date">${item.data}</span>
                </div>
                <div class="news-body">
                    <div>
                        <h3>${item.titulo}</h3>
                        <p>${item.resumo}</p>
                    </div>
                    <button class="read-more-btn" onclick="abrirModalReportagem(${item.id})">
                        <span>Ler reportagem completa</span>
                        <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
                    </button>
                </div>
            `;
            newsContainer.appendChild(article);
        });

        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    // =========================================================
    // 7. MODAL E FORMULÁRIO
    // =========================================================
    const modal = document.getElementById('dynamicModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModalBtn');

    window.abrirModalCurso = (id) => {
        const curso = cursosData.find(c => c.id === id);
        if (!curso) return;

        const ementaHtml = curso.ementa.map(topico => `<li>${topico}</li>`).join('');
        modalBody.innerHTML = `
            <span class="modal-tag">${curso.categoriaLabel} • ${curso.cargaHoraria}</span>
            <h3 class="modal-title">${curso.titulo}</h3>
            <p class="modal-text">${curso.resumo}</p>
            <div class="modal-list">
                <h4>O que você vai aprender (Módulos):</h4>
                <ul>${ementaHtml}</ul>
            </div>
            <button class="btn btn-primary btn-block" onclick="selecionarCursoParaInscricao('${curso.titulo}', '${curso.areaRelacionada}'); fecharModal();">
                Quero me inscrever neste curso
            </button>
        `;
        modal.classList.remove('hidden');
    };

    window.abrirModalReportagem = (id) => {
        const rep = reportagensData.find(r => r.id === id);
        if (!rep) return;

        modalBody.innerHTML = `
            <span class="modal-tag">${rep.categoria} • ${rep.data}</span>
            <h3 class="modal-title">${rep.titulo}</h3>
            <div class="modal-text">${rep.conteudoCompleto}</div>
            <button class="btn btn-primary btn-block" onclick="fecharModal()">Fechar Leitura</button>
        `;
        modal.classList.remove('hidden');
    };

    window.selecionarCursoParaInscricao = (tituloCurso, areaCurso) => {
        document.getElementById('area').value = areaCurso;
        document.getElementById('programa').value = tituloCurso;
        document.getElementById('participar').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => document.getElementById('nome').focus(), 600);
    };

    window.fecharModal = () => modal.classList.add('hidden');
    if (closeModalBtn) closeModalBtn.addEventListener('click', fecharModal);
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) fecharModal(); });

    // Contadores
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const update = () => {
            current += Math.max(1, Math.ceil(target / 50));
            if (current < target) { counter.innerText = current; requestAnimationFrame(update); }
            else { counter.innerText = target; }
        };
        update();
    });

    // Menu Mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
        navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));
    }

    // Formulário
    const odsForm = document.getElementById('odsForm');
    const formFeedback = document.getElementById('formFeedback');
    if (odsForm && formFeedback) {
        odsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const programa = document.getElementById('programa').value.trim();
            formFeedback.textContent = `Inscrição confirmada, ${nome}! Registramos seu interesse em "${programa}".`;
            formFeedback.className = 'feedback-message success';
            odsForm.reset();
            setTimeout(() => formFeedback.classList.add('hidden'), 7000);
        });
    }

    renderCourses('todos');
    renderNews();
});