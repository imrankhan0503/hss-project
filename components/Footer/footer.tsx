"use client";

import Image from "next/image";
import Link from "next/link";
import HSSLogo from "@/assets/images/logo/HSSLogo.png";
import styles from "./footer.module.css";

const translations = {
  sv: {
    community: "Gå med i vår community",
    chat: "Chatta med oss på facebook",
    cta: "Kom igång",
    tagline: "Scouting på vattnet sedan 1945",
    contact: "Kontakt",
    email: "info@hss.scout.se",
    address: "Hässelby Strandväg 55, 165 65 Hässelby",
    followUs: "Följ oss",
    copyright:
      "© 2026 Hässelby Strands Sjöscoutkår. Alla rättigheter förbehållna.",
    privacy: "Integritetspolicy",
    gdpr: "GDPR",
    partner: "Partner:",
    stockholm: "Stockholm Stad",
    stadhsbk: "StadHSBK",
  },

  en: {
    community: "Join our community",
    chat: "Chat with us on Facebook",
    cta: "Get started",
    tagline: "Scouting on the water since 1945",
    contact: "Contact",
    email: "info@hss.scout.se",
    address: "Hässelby Strandväg 55, 165 65 Hässelby",
    followUs: "Follow us",
    copyright:
      "© 2026 Hässelby Strands Sjöscoutkår. All rights reserved.",
    privacy: "Privacy policy",
    gdpr: "GDPR",
    partner: "Partner:",
    stockholm: "Stockholm Stad",
    stadhsbk: "StadHSBK",
  },
} as const;

type Locale = keyof typeof translations;

interface FooterProps {
  locale?: Locale;
}

export default function Footer({ locale = "sv" }: FooterProps) {
  const t = translations[locale];

  return (
    <footer className={styles.footer}>
      {/* ── Community banner ── */}
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          {/* Chat bubble icon */}
          <svg
            className={styles.bannerIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 8a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H14l-8 8V8Z"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>

          <div>
            <p className={styles.bannerHeading}>{t.community}</p>
            <p className={styles.bannerSubtext}>{t.chat}</p>
          </div>
        </div>

        <a
          href="https://www.facebook.com/messages/t/HSSScout"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bannerCta}
        >
          {t.cta}
        </a>
      </div>

      {/* ── Main footer body ── */}
      <div className={styles.body}>
        {/* Brand column */}
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <Image
              src={HSSLogo}
              alt="Hässelby Strands Sjöscoutkår logotyp"
              width={48}
              height={48}
              className={styles.logoImg}
            />

            <span className={styles.brandName}>
              Hässelby Strands Sjöscoutkår
            </span>
          </div>

          <p className={styles.brandTagline}>{t.tagline}</p>
        </div>

        {/* Contact column */}
        <div className={styles.contactCol}>
          <h3 className={styles.colHeading}>{t.contact}</h3>

          <a href={`mailto:${t.email}`} className={styles.contactLink}>
            {t.email}
          </a>

          <a
            href="https://www.google.com/maps/place/H%C3%A4sselby+strandv%C3%A4g+55,+165+65+H%C3%A4sselby/@59.3655514,17.8173764,17z"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <address className={styles.address}>{t.address}</address>
          </a>
        </div>

        {/* Social column */}
        <div className={styles.socialCol}>
          <h3 className={styles.colHeading}>{t.followUs}</h3>

          <div className={styles.socialIcons}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/hss_scout/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="36"
                  height="36"
                  rx="9"
                  ry="9"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />

                <circle
                  cx="21"
                  cy="21"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />

                <circle cx="30.5" cy="11.5" r="2" fill="currentColor" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@hasselbystrandssjoscoutkar4026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={styles.socialLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect
                  x="1"
                  y="5"
                  width="30"
                  height="22"
                  rx="6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                />

                <polygon points="13,11 23,16 13,21" fill="currentColor" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/HSSScout"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.socialLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle
                  cx="21"
                  cy="21"
                  r="19"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />

                <path
                  d="M26 14h-3a2 2 0 0 0-2 2v3h5l-.5 5H21v12h-5V24h-3v-5h3v-3a7 7 0 0 1 7-7h3v5Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomTop}>
          <p className={styles.copyright}>{t.copyright}</p>

          <nav className={styles.legalLinks} aria-label="Legal">
            <Link href="/integritetspolicy" className={styles.legalLink}>
              {t.privacy}
            </Link>

            <Link href="/gdpr" className={styles.legalLink}>
              {t.gdpr}
            </Link>
          </nav>
        </div>

        <div className={styles.partnerRow}>
          <span className={styles.partnerLabel}>{t.partner}</span>

          <span className={styles.partnerName}>{t.stockholm}</span>

          <span className={styles.partnerName}>{t.stadhsbk}</span>
        </div>
      </div>
    </footer>
  );
}