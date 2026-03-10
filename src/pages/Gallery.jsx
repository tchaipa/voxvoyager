import "./Gallery.css";
import Masonry from "../component/Masonry";
import Navbarr from "../Navbar";

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  // ... more items
];

function GalleryPage() {
  return (
    <div className="gallery-page container-fluid">
      <Navbarr />
      <div class="container my-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb p-3 bg-body-tertiary rounded-3">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Gallery</a>
            </li>
            {/* <li class="breadcrumb-item active" aria-current="page">
              Data
            </li> */}
          </ol>
        </nav>
      </div>
      '<h1>Gallery</h1>
      <p>
        Browse through some of the moments captured on trips that we have gone
        to.
      </p>
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
    </div>
  );
}

export default GalleryPage;
