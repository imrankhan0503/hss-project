"use client";

import Image from "next/image";
import HSSLogo from "@/assets/images/logo/HSSLogo.png";
import BiChat from "@/assets/images/icons/bi_chat.svg";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import styles from "./footer.module.css";
import InstagramSection from "./Instagram";
import JoinCTASection from "./JoinCTA";
import { t } from "@/i18n/t";
import { useLang } from "@/i18n/useLang";

export default function Footer() {
  const lang = useLang();

  return (
    <footer className={styles.footer}>
      <JoinCTASection />
      <InstagramSection />

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
              <p className={styles.bannerHeading}>{t("footer.community", lang)}</p>
              <p className={styles.bannerSubtext}>{t("footer.chat", lang)}</p>
            </div>
          </div>

          <a
            href="https://www.facebook.com/messages/t/HSSScout"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bannerCta}
          >
            {t("footer.cta", lang)}
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
            <p className={styles.brandTagline}>{t("footer.tagline", lang)}</p>
          </div>

          <div className={styles.contactCol}>
            <h3 className={styles.colHeading}>{t("footer.contact", lang)}</h3>
            <a
              href={`mailto:${t("footer.email", lang)}`}
              className={styles.contactLink}
            >
              {t("footer.email", lang)}
            </a>
            <a
              href={t("footer.mapsUrl", lang)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <address className={styles.address}>
                {t("footer.address", lang)}
              </address>
            </a>
          </div>

          <div className={styles.socialCol}>
            <h3 className={styles.colHeading}>{t("footer.followUs", lang)}</h3>

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
            <p className={styles.copyright}>{t("footer.copyright", lang)}</p>
          </div>

          <div className={styles.partnerRow}>
            <span className={styles.partnerLabel}>{t("footer.partner", lang)}</span>
            <span className={styles.partnerName}>{t("footer.stockholm", lang)}</span>
            <span className={styles.partnerName}>{t("footer.stadhsbk", lang)}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
