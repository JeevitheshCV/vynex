import services from '../data/services';

export default function Services() {
  return (
    <section className="section services">
      <h2>What We Offer</h2>
      <div className="services-list">
        {services.map((srv) => (
          <div key={srv.id} className="service-card">
            <h3>{srv.title}</h3>
            <p>{srv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
