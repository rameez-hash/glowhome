"use client";

import Image from "next/image";
import { useState } from "react";
import { productGalleryPageSize } from "@/lib/site";

type ProductGalleryProps = {
  title: string;
  images: string[];
};

export function ProductGallery({ title, images }: ProductGalleryProps) {
  const [visible, setVisible] = useState(
    Math.min(productGalleryPageSize, images.length),
  );
  const shown = images.slice(0, visible);
  const hasMore = visible < images.length;

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {shown.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative aspect-[4/5] overflow-hidden bg-bg"
          >
            <Image
              src={src}
              alt={`${title} lighting gallery by Glow Home, view ${index + 1}`}
              fill
              loading={index < 3 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>

      {hasMore ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="btn btn-ghost !min-h-11"
            onClick={() =>
              setVisible((count) =>
                Math.min(count + productGalleryPageSize, images.length),
              )
            }
          >
            Load more
          </button>
        </div>
      ) : null}
    </div>
  );
}
