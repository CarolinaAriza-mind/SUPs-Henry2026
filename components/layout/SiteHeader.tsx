export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#inicio" aria-label="SUP Soft Skills Lab">
          <span className="brand-mark">SUP</span>
          <span>Soft Skills Lab</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#como-usar">Cómo usar</a>
          <a href="#actividades">Actividades</a>
          <a href="#modelo">Modelo</a>
          <a href="#facilitacion">Facilitación</a>
        </nav>
      </div>
    </header>
  );
}
