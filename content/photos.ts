import type { StaticImageData } from "next/image";
import hero from "@/public/images/stok/hero.jpg";
import reformer from "@/public/images/stok/reformer.jpg";
import studio from "@/public/images/stok/studio.jpg";
import mat from "@/public/images/stok/mat.jpg";
import detail from "@/public/images/stok/detail.jpg";

/**
 * Pexels telifsiz stok görseller (işletmenin kendi fotoğrafı DEĞİL).
 * Bulunamayan görsel null olur; bileşenler null'a karşı yedek göstermelidir.
 */
type Photo = {
  src: StaticImageData;
  alt: string;
  credit: { author: string; url: string };
};

export const photos: Record<"hero" | "reformer" | "studio" | "mat" | "detail", Photo | null> = {
  hero: {
    src: hero,
    alt: "Aydınlık, beyaz duvarlı bir pilates stüdyosunda reformer, merdiven ve minderler",
    credit: { author: "Caio", url: "https://www.pexels.com/photo/a-gray-and-brown-gym-equipment-11075077/" },
  },
  reformer: {
    src: reformer,
    alt: "Beyaz bir odada ahşap gövdeli kuleli reformer aleti",
    credit: { author: "Ahmet Kurt", url: "https://www.pexels.com/photo/pilates-tower-in-a-white-room-25599832/" },
  },
  studio: {
    src: studio,
    alt: "Aynalı, ferah ve aydınlık bir stüdyoda sıralanmış reformer aletleri",
    credit: { author: "Ahmet Kurt", url: "https://www.pexels.com/photo/pilates-reformers-in-bright-room-25596894/" },
  },
  mat: {
    src: mat,
    alt: "Duvardaki askıda sıralanmış, rulo yapılmış pilates minderleri",
    credit: { author: "MART PRODUCTION", url: "https://www.pexels.com/photo/rolled-yoga-mat-on-shelf-on-the-wall-7318664/" },
  },
  detail: {
    src: detail,
    alt: "Reformer aletinin yayları ve ahşap çerçevesi, önden detay",
    credit: { author: "Ahmet Kurt", url: "https://www.pexels.com/photo/pilates-reformer-machine-in-a-studio-25599821/" },
  },
};
