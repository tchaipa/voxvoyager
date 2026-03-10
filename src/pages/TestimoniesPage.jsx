import "./TestimoniesPage.css";

function TestimoniesPage() {
  return (
    <div className="testimonies-page">
      <div class="container my-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb p-3 bg-body-tertiary rounded-3">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Testimonials</a>
            </li>
            {/* <li class="breadcrumb-item active" aria-current="page">
              Data
            </li> */}
          </ol>
        </nav>
      </div>
      <h1 className="testimonies-title">Testimonies</h1>
    </div>
  );
}

export default TestimoniesPage;
