"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { business, nav } from "@/content/business";
import { waLink } from "@/lib/whatsapp";
import { WaIcon } from "@/components/ui/WaIcon";
import { Logo } from "./Logo";

export function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label="Menüyü aç"
        className="tap inline-flex items-center justify-center rounded-full text-ink hover:bg-oat"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/30" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col bg-snow px-5 pb-8 pt-3 outline-none">
          <Dialog.Title className="sr-only">Menü</Dialog.Title>
          <Dialog.Description className="sr-only">Sayfalar ve iletişim bağlantıları</Dialog.Description>
          <div className="flex h-14 items-center justify-between">
            <Logo asLink={false} />
            <Dialog.Close aria-label="Menüyü kapat" className="tap inline-flex items-center justify-center rounded-full hover:bg-oat">
              <X className="h-6 w-6" aria-hidden="true" />
            </Dialog.Close>
          </div>
          <nav aria-label="Mobil menü" className="mt-10 flex flex-col">
            {[{ href: "/", label: "Ana sayfa" }, ...nav].map((item) => (
              <Dialog.Close asChild key={item.href}>
                <Link href={item.href} className="font-display border-b border-line py-5 text-4xl tracking-tight text-ink">
                  {item.label}
                </Link>
              </Dialog.Close>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="tap inline-flex items-center justify-center gap-2.5 rounded-full bg-clay-deep px-6 py-3.5 font-semibold text-white"
            >
              <WaIcon /> WhatsApp&apos;tan yaz
            </a>
            <a href={`tel:${business.phone.e164}`} className="tap inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 font-semibold">
              Ara · {business.phone.display}
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
