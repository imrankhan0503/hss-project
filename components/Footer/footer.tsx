"use client";

import Image from "next/image";
import Link from "next/link";
import HSSLogo from "@/assets/images/logo/HSSLogo.png";
import BiChat from "@/assets/images/bi_chat.svg"; // ← your chat icon asset
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
        <div className={styles.bannerInner}>
          <div className={styles.bannerContent}>
            {/* Your bi_chat.svg asset */}
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

      {/* ── Main footer body ── */}
      <div className={styles.body}>
        <div className={styles.bodyInner}>

          {/* Brand column */}
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

              {/* Instagram — typcn_social-instagram.svg */}
              <a
                href="https://www.instagram.com/hss_scout/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M31.5 5.25H10.5C7.525 5.25 5.25 7.525 5.25 10.5V31.5C5.25 34.475 7.525 36.75 10.5 36.75H31.5C34.475 36.75 36.75 34.475 36.75 31.5V10.5C36.75 7.525 34.475 5.25 31.5 5.25ZM21 15.75C23.975 15.75 26.25 18.025 26.25 21C26.25 23.975 23.975 26.25 21 26.25C18.025 26.25 15.75 23.975 15.75 21C15.75 18.025 18.025 15.75 21 15.75ZM27.65 12.25C27.65 11.025 28.7 10.15 29.75 10.15C30.8 10.15 31.85 11.2 31.85 12.25C31.85 13.3 30.975 14.35 29.75 14.35C28.525 14.35 27.65 13.475 27.65 12.25ZM31.5 33.25H10.5C9.45 33.25 8.75 32.55 8.75 31.5V21H12.25C12.25 25.9 16.1 29.75 21 29.75C25.9 29.75 29.75 25.9 29.75 21H33.25V31.5C33.25 32.55 32.55 33.25 31.5 33.25Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* YouTube — Vector.svg */}
              <a
                href="https://www.youtube.com/@hasselbystrandssjoscoutkar4026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={styles.socialLink}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M31.7944 7.06564C31.7944 3.31574 29.7254 0.299158 27.1688 0.299158C23.7059 0.0833308 20.1742 0 16.565 0H15.4398C11.8394 0 8.30143 0.0833309 4.83849 0.299992C2.28817 0.299992 0.219158 3.33324 0.219158 7.08314C0.062888 10.0489 -0.00337036 13.0155 0.000380115 15.9821C-0.00587067 18.9487 0.0649716 21.918 0.212907 24.8902C0.212907 28.6401 2.28192 31.6816 4.83224 31.6816C8.4702 31.9066 12.2019 32.0066 15.9961 31.9983C19.7966 32.015 23.5179 31.9094 27.1601 31.6816C29.7166 31.6816 31.7856 28.6401 31.7856 24.8902C31.9357 21.9152 32.0044 18.9487 31.9982 15.9737C32.0123 13.0071 31.9444 10.0378 31.7944 7.06564ZM12.9395 24.1568V7.78229L22.0032 15.9654L12.9395 24.1568Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Facebook — stash_social-facebook-solid.svg */}
              <a
                href="https://www.facebook.com/HSSScout"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M23.5515 37.968C31.7642 36.736 38.0625 29.6502 38.0625 21.0945C38.0625 11.6707 30.4237 4.03198 21 4.03198C11.5762 4.03198 3.9375 11.6707 3.9375 21.0945C3.9375 29.652 10.2358 36.736 18.4485 37.968V26.0715H14.861C14.6354 26.0715 14.4191 25.9819 14.2596 25.8224C14.1001 25.6629 14.0105 25.4465 14.0105 25.221V21.9957C14.0105 21.525 14.392 21.1452 14.861 21.1452H18.4485L18.3225 17.745C18.3225 16.0965 18.6288 13.4207 20.671 11.9577C22.099 10.9375 23.1612 10.745 24.8657 10.745C26.3445 10.745 27.3612 10.892 28.0332 10.99L28.3623 11.0337C28.4437 11.0444 28.5186 11.0844 28.5727 11.1462C28.6268 11.2081 28.6565 11.2875 28.6562 11.3697V14.9397C28.6562 15.1375 28.49 15.2897 28.2975 15.2792H28.231C28.0315 15.2862 26.9885 15.33 26.103 15.33C24.5455 15.33 23.5515 16.0405 23.5515 18.4012V21.1452H27.3875C27.9125 21.1452 28.3132 21.6177 28.2275 22.1357L27.7375 25.361C27.7044 25.5594 27.602 25.7397 27.4485 25.8698C27.295 25.9999 27.1004 26.0713 26.8993 26.0715H23.5515V37.968Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>

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
      </div>

    </footer>
  );
}