import "./App.css";

const Home = () => {
    return(
        <>
  <div className="header-wrapper" id="home">
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">Nakama Books</h2>
          <h1 className="subtitle profession">
            Vaše destinace pro všechny manga milovníky
          </h1>
        </div>
      </div>
    </section>
  </div>
  <div className="main-content">
    <div className="section-light about-me" id="about-me">
      <div className="container">
        <div className="column is-12 about-me">
          <h1 className="title has-text-centered section-title">O nás</h1>
        </div>
        <div className="columns is-multiline">
          <div
            className="column is-6 has-vertically-aligned-content"
            data-aos="fade-right"
          >
            <p className="is-larger">
              <strong>
                Vítejte v našem malém obchodě s mangami! Jsme skupina nadšenců,
                kteří se společně rozhodli sdílet svou lásku k japonským
                komiksům a grafickým románům s ostatními fanoušky. Naše malá
                firma se specializuje na prodej autentických japonských mang,
                které jsou populární po celém světě.
              </strong>
            </p>
            <br />
            <p>
              Naše vášeň pro mangu se promítá do každého aspektu našeho obchodu.
              Pečlivě vybíráme každou položku v naší nabídce a zajistíme, aby
              byla autentická, kvalitní a v souladu s nejnovějšími trendy.
              Snažíme se poskytnout co nejlepší služby a produkty, aby si naši
              zákazníci mohli užít autentickou zkušenost s japonskou kulturou.
            </p> <br />
            <p>
              Kromě toho, že nabízíme širokou škálu mangu, jsme také tu pro
              fanoušky, kteří hledají nové tituly, rady na čtení, nebo
              doporučení z určitého žánru. Jsme tu pro všechny fanoušky mangu,
              kteří chtějí objevit nové světy a dobrodružství prostřednictvím
              vizuálních příběhů.
            </p> <br />
            <p>
              Děkujeme vám za vaši podporu a doufáme, že se staneme vaší
              oblíbenou destinací pro nákupy mang. Sledujte nás na sociálních
              sítích a zůstaňte v obraze s našimi nejnovějšími přírůstky do
              vaší kolekce.
            </p>
            <br />
            <div className="is-divider" />
          </div>
          <div className="column is-6 right-image " data-aos="fade-left">
            <img
              className="is-rounded"
              src="https://picsum.photos/id/366/600/375"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="section-color services" id="services">
      <div className="container">
        <div className="columns is-multiline">
          <div
            className="column is-12 about-me"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <h1 className="title has-text-centered section-title">
              Naše služby
            </h1>
          </div>
          <div className="columns is-12">
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fad fa-meteor fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-paint-brush fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-rocket fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
          </div>
          <hr />
          <div className="columns is-12">
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-upload fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-truck fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-phone fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="section-light contact" id="contact">
      <div className="container">
        <div
          className="columns is-multiline"
          data-aos="fade-in-up"
          data-aos-easing="linear"
        >
          <div className="column is-12 about-me">
            <h1 className="title has-text-centered section-title">
              Kontaktujte nás
            </h1>
          </div>
          <div className="column is-8 is-offset-2">
            <form action="https://formspree.io/email@example.com" method="POST">
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="email"
                    placeholder="email"
                    name="Email"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Zpráva</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="zpráva"
                    name="Message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control ">
                  <button className="button submit-button">
                    poslat&nbsp;&nbsp;
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    );
};   

export default Home;