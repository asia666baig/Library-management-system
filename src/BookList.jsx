import { useState } from "react";

function BookList() {
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    { title: "Java Programming", category: "Programming", color: "coral" },
    { title: "Artificial Intelligence and Machine Learning", category: "Artificial Intelligence", color: "blue" },
    { title: "Python Programming", category: "Computer Science", color: "violet" },
    { title: "Operating System", category: "Systems", color: "green" },
    { title: "DBMS", category: "Database", color: "amber" }
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(normalizedQuery)
  );

  return (
    <main className="library-page">
      <header className="page-heading">
        <div>
          <span className="eyebrow">Library collection</span>
          <h2>Discover your next book</h2>
        </div>
      </header>

      <section className="catalog">
        <div className="catalog-toolbar">
          <h3>Subjects</h3>
          <div className="search-box">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6" />
              <path d="m16 16 4 4" />
            </svg>
            <input
              type="search"
              placeholder="Search subject..."
              aria-label="Search subjects"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="book-grid">
          {filteredBooks.map((book) => (
            <article className="book-card" key={book.title}>
              <div className="book-info">
                <span className="book-category">{book.category}</span>
                <h4>{book.title}</h4>
                <div className="book-meta">
                  <button aria-label={`View details for ${book.title}`}>View</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {filteredBooks.length === 0 && (
          <p className="empty-search" role="status">No subject found.</p>
        )}
      </section>
    </main>
  );
}

export default BookList;