import Head from 'next/head';

const summaryCards = [
  { title: 'Günlük Gelir', value: '₺0' },
  { title: 'Günlük Gider', value: '₺0' },
  { title: 'Net Kâr', value: '₺0' },
  { title: 'Yaklaşan İşlemler', value: '0' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>M-Steritakip Admin</title>
      </Head>
      <main className="page">
        <header className="header">
          <div>
            <h1>Müşteri Takip Paneli</h1>
            <p>Gelir-gider, süreç ve hatırlatma yönetimi.</p>
          </div>
          <button className="primary">+ Yeni Müşteri</button>
        </header>

        <section className="grid">
          {summaryCards.map((card) => (
            <article key={card.title} className="card">
              <span>{card.title}</span>
              <strong>{card.value}</strong>
            </article>
          ))}
        </section>

        <section className="panel">
          <h2>Yaklaşan Hatırlatmalar</h2>
          <div className="panel-body">
            <p>Henüz kayıtlı hatırlatma bulunmuyor.</p>
          </div>
        </section>

        <section className="panel">
          <h2>Devam Eden İşlemler</h2>
          <div className="panel-body">
            <p>Şu anda aktif işlem bulunmuyor.</p>
          </div>
        </section>
      </main>
    </>
  );
}
