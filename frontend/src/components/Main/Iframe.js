import "../Main/Main.css";
function Iframe() {
  return (
    <>
      <h1>Viagem mais procuradas</h1>
      <div className="d-flex justify-content-center row ">
        <div className="divTop">
          <li>Lençóis Maranhenses</li>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/g1jgzPJw1NU?start=5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="divTop">
          <li>A Praia de Coqueirinho - Conde - Paraíba</li>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UljLgBsjPaA?start=11"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="divTop">
          <li>Gramado e Canela:</li>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GNqtbaazZ7A?start=5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default Iframe;
