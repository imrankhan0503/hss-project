"use client";

import Image from "next/image";
import Link from "next/link";
import HSSLogo from "@/assets/images/logo/HSSLogo.png";
import BiChat from "@/assets/images/icons/bi_chat.svg";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import styles from "./footer.module.css";

const translations = {
  sv: {
    community: "Gå med i vår community",
    chat: "Chatta med oss på facebook",
    cta: "Kom igång",
    tagline: "Scouting på vattnet sedan 1959",
    contact: "Kontakt",
    email: "info@hss.scout.se",
    address: "Ruffen | Hässelby Strands Sjöscoutkår,Hässelby, 165 65 Stockholm",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ruffen+Hässelby+Strands+Sjöscoutkår+Stockholm",
    followUs: "Följ oss",
    copyright: "© 2026 Hässelby Strands Sjöscoutkår. Alla rättigheter förbehållna.",
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
    tagline: "Scouting on the water since 1959",
    contact: "Contact",
    email: "info@hss.scout.se",
    address: "Ruffen | Hässelby Strands Sjöscoutkår,Hässelby, 165 65 Stockholm",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ruffen+Hässelby+Strands+Sjöscoutkår+Stockholm",
    followUs: "Follow us",
    copyright: "© 2026 Hässelby Strands Sjöscoutkår. All rights reserved.",
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

      <div className={styles.banner}>
        <div className={styles.bannerInner}>
          <div className={styles.bannerContent}>
            <Image
              src={BiChat}
              alt=""
              width={44}
              height={44}
              className={styles.bannerIcon}
              aria-hidden="true"
            />
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
      </div>

      <div className={styles.body}>
        <div className={styles.bodyInner}>

          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <Image
                src={HSSLogo}
                alt="Hässelby Strands Sjöscoutkår logotyp"
                width={72}
                height={72}
                className={styles.logoImg}
              />
              <span className={styles.brandName}>
                Hässelby Strands Sjöscoutkår
              </span>
            </div>
            <p className={styles.brandTagline}>{t.tagline}</p>
          </div>

          <div className={styles.contactCol}>
            <h3 className={styles.colHeading}>{t.contact}</h3>
            <a href={`mailto:${t.email}`} className={styles.contactLink}>
              {t.email}
            </a>
            <a
              href={t.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <address className={styles.address}>{t.address}</address>
            </a>
          </div>

          <div className={styles.socialCol}>
            <h3 className={styles.colHeading}>{t.followUs}</h3>

            <div className={styles.socialIcons}>

              <a
                href="https://www.instagram.com/hss_scout/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@hasselbystrandssjoscoutkar4026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={styles.socialLink}
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.facebook.com/HSSScout"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <FaFacebookF />
              </a>

            </div>
          </div>

        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>

          <div className={styles.bottomTop}>
            <p className={styles.copyright}>{t.copyright}</p>
            
          </div>

          <div className={styles.partnerRow}>
            <span className={styles.partnerLabel}>{t.partner}</span>
            <span className={styles.partnerName}>{t.stockholm}</span>
            <span className={styles.partnerName}>{t.stadhsbk}</span>
          </div>

        </div>
      </div>

    </footer>
  );
}