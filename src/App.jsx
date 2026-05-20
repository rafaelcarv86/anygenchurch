import './App.css'

function App() {
  return (
    <main className="page">
      <header className="navbar">
       <div className="brand">
         <img src="/logo-anygen.png" alt="AnyGen" className="brandLogo" />
       </div>

        <nav>
          <a>Recursos</a>
          <a>Comunidades</a>
          <a>Eventos</a>
          <a>Para igrejas</a>
          <a>Sobre</a>
        </nav>

        <button className="loginButton">Entrar</button>
      </header>

      <section className="hero">
        <div className="heroText">
          <span className="tag">PLATAFORMA DE COMUNIDADES</span>

          <h1>
            Conectando <strong>gerações.</strong><br />
            Transformando vidas.
          </h1>

          <p>
            AnyGen Church é o lugar onde igrejas, grupos e pessoas se conectam,
            crescem e fazem a diferença juntas.
          </p>

          <div className="actions">
            <button>Entrar na plataforma</button>
            <button className="outline">Criar minha comunidade</button>
          </div>

          <div className="features">
            <div>👥<span>Comunidades</span></div>
            <div>📍<span>Células próximas</span></div>
            <div>📅<span>Eventos</span></div>
            <div>▶️<span>Cultos online</span></div>
          </div>
        </div>

        <div className="phoneArea">
          <div className="phone">
            <div className="phoneTop">9:41</div>

            <h3>Olá, João! 👋</h3>
            <p>Que bom te ver por aqui.</p>

            <div className="eventCard">
              <small>CONFERÊNCIA</small>
              <strong>GERAÇÃO QUE TRANSFORMA</strong>
              <span>20 - 22 DE JUNHO</span>
            </div>

            <h4>Acesso rápido</h4>

            <div className="appGrid">
              <div>▶️<span>Culto</span></div>
              <div>👥<span>Células</span></div>
              <div>🙏<span>Oração</span></div>
              <div>📅<span>Eventos</span></div>
            </div>

            <h4>Feed da comunidade</h4>

            <div className="feedCard">
              <strong>Maria Oliveira</strong>
              <p>Foi incrível nosso encontro hoje! 🔥</p>
            </div>
          </div>

          <aside className="sideCards">
            <div>
              <span>🎵</span>
              <h3>Louvores da Igreja</h3>
              <p>Ouça e compartilhe louvores da sua comunidade.</p>
            </div>

            <div>
              <span>💬</span>
              <h3>Feed da Comunidade</h3>
              <p>Compartilhe momentos, ideias e testemunhos.</p>
            </div>

            <div>
              <span>🤝</span>
              <h3>Conexões reais</h3>
              <p>Encontre pessoas com o mesmo propósito.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default App