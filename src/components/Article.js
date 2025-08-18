import React, { useMemo, useState } from "react";
import Pagination from "./Pagination";
import Badge from "react-bootstrap/Badge";
import "../Css/Article.css";

// Dummy dataset (15 items for pagination demo)
const allArticles = Array.from({ length: 15 }, (_, i) => {
  const id = i + 1;
  const statuses = ["Published", "Draft"];
  const status = statuses[i % 2];
  const edited = id % 3 === 0 ? "2 weeks ago" : id % 3 === 1 ? "2 days ago" : "1 week ago";
  const titles = [
    "The Art of Storytelling: A Guide to Captivating Your Audience",
    "Crafting Compelling Characters: A Step-by-Step Approach",
    "Mastering Dialogue in Fiction: Techniques for Realistic Conversations",
    "Worldbuilding Essentials: Designing Cohesive Fantasy Settings",
    "Writing Strong Protagonists and Memorable Antagonists",
    "Plotting 101: Outlines, Beats, and Structure",
  ];
  return {
    id,
    title: titles[i % titles.length],
    status,
    edited,
  };
});

export default function Article() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  const pageData = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return allArticles.slice(start, start + perPage);
  }, [currentPage]);

  const statusPill = (status) => {
    if (status === "Published") return <Badge pill bg="success">Published</Badge>;
    if (status === "Draft") return <Badge pill bg="warning">Draft</Badge>;
    return <Badge pill bg="secondary">{status}</Badge>;
  };

  return (
    <section className="articles-wrap">
      <div className="articles-header">
        <h2>My Article</h2>
      </div>

      <div className="table-card">
        <table className="articles-table">
          <thead>
            <tr>
              <th className="col-title">Title</th>
              <th className="col-status">Status</th>
              <th className="col-edited">Last Edited</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((row) => (
              <tr key={row.id}>
                <td className="title-cell">{row.title}</td>
                <td>{statusPill(row.status)}</td>
                <td>{row.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          totalItems={allArticles.length}
          itemsPerPage={perPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}
