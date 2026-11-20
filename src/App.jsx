import './App.css'
import Tarjeta from './components/Tarjeta.jsx'

function App() {
  return (
    <main>
      <h1>Mis tarjetas de presentación</h1>

      <div className="contenedor">
        <Tarjeta
          nombre="Ana López"
          profesion="Diseñadora gráfica"
          imagen="https://i.pravatar.cc/300?img=47"
          descripcion="Diseño logos e identidades para marcas chicas."
        />
        <Tarjeta
          nombre="Miqueas Ferrer"
          profesion="Desarrollador web"
          imagen="/yo.webp"
          descripcion="Armo páginas web rápidas y fáciles de usar."
        />
        <Tarjeta
          nombre="Lucía Fernández"
          profesion="Fotógrafa"
          imagen="https://i.pravatar.cc/300?img=32"
          descripcion="Hago fotos de producto y retratos para redes."
        />
      </div>
    </main>
  )
}

export default App