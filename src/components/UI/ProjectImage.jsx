// Responsive project screenshot: WebP srcset with a JPEG fallback.
// width/height reserve the box so the image never causes layout shift.
const ProjectImage = ({ image, alt, sizes, className, eager = false }) => {
  const { name, widths, width, height } = image;
  const largest = Math.max(...widths);
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={widths.map((w) => `/img/${name}-${w}.webp ${w}w`).join(', ')}
        sizes={sizes}
      />
      <img
        src={`/img/${name}-${largest}.jpg`}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
};

export default ProjectImage;
