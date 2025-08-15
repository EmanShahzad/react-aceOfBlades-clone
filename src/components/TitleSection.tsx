import "../styling/TitleSection.css";

function TitleSection({ title }: { title: string }) {
  return (
    <div className="scrollspy-example zn-1 bg-image">
      <div className="container p-5">
        <div
          className="w-100 text-white text-center text-uppercase"
          style={{ fontFamily: "Barlow Semi Condensed" }}
        >
          <div className="fw-semibold fs-2 p-4">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default TitleSection;
