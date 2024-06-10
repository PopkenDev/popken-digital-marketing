import Link from "next/link";

const DashboardPage = () => {
  return (
    <main className="dashboard-container">
      <header className="dashboard-page_heading">
        <h1>Welkom terug Herman</h1>
      </header>
      <section>
        <div>
          <article className="dashboard-content_latest-news-col">
            <h2>Laatste nieuws</h2>
            <ul className="dashboard-content_latest-news-col_news-list">
              <li className="dashboard-content_latest-news-col_news-item">
                <span>10-06</span>
                Lancering van het nieuwe dashboard.
              </li>
              <li className="dashboard-content_latest-news-col_news-item">
                <span>12-06</span>
                Website analyse beschikbaar in dashboard.
              </li>
              <li className="dashboard-content_latest-news-col_news-item">
                <span>30-06</span>
                <Link href="/">AI chatsysteem beschikbaar 24/7</Link>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
