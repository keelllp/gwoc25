import GallerySlideshow from "@/app/components/GallerySlideshow";
import "@/app/components/gallery.css";

export default function GalleryPage() {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <GallerySlideshow />
    </div>
  );
}
