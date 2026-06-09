'use client'

import { getGroups} from "@/data/hssdata"
import { notFound } from "next/navigation";
import styles from '@/components/VerksamhetCards/verksamhetcards.module.css'
import Image from "next/image";
import { t } from "@/i18n/t";
import { useLang } from "@/i18n/useLang";
import Link from "next/link";
import { use } from 'react'

type VerksamhetTypeProps = {
  params: Promise<{
    id: string
  }>;
}

const VerksamhetDetailPage = ({ params }: VerksamhetTypeProps) => {
  const { id } = use(params);
  const lang = useLang();
  const groups = getGroups(lang);

  const selectedGroup = groups.find(g => g.id === id);

  if (!selectedGroup) return notFound();

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.detailCard}
        style={{ borderColor: selectedGroup.bulletColor }}
      >
        <div
          className={styles.detailHeader}
          style={{ backgroundColor: selectedGroup.bulletColor }}
        >
          <h2 className={styles.detailTitle}>{selectedGroup.title}</h2>
          <div className={styles.detailIconBox}>
            <Image
              src={selectedGroup.icon}
              alt={selectedGroup.title}
              width={selectedGroup.iconWidth ?? 110}
              height={selectedGroup.iconHeight ?? 95}
            />
          </div>
          <p className={styles.detailSubtitle}>{selectedGroup.subtitle}</p>
        </div>

        <div className={styles.detailContent}>
          <div className={styles.detailGrid}>
            <div className={styles.desktopCol}>
              <h3 className={styles.sectionTitle}>
                {t("verksamhet.activities", lang)}
              </h3>
              <ul className={styles.activityList}>
                {selectedGroup.activities.map((item) => (
                  <li key={item} className={styles.activityItem}>
                    <span
                      className={styles.bullet}
                      style={{ backgroundColor: selectedGroup.bulletColor }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.desktopCol}>
              <div className={styles.badgeRow}>
                <Image
                  src={selectedGroup.badgeIcon}
                  alt={t("verksamhet.badges", lang)}
                  width={22}
                  height={22}
                />
                <p className={styles.badgeLabel}>
                  {t("verksamhet.badges", lang)}
                </p>
              </div>
              <ul className={styles.badgeList}>
                {selectedGroup.badges.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.descriptionWrapper}>
            {selectedGroup.description
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index} className={styles.descriptionParagraph}>
                  {paragraph}
                </p>
              ))}
          </div>

          <div className={styles.backButtonWrapper}>
            <Link
              href='/verksamhet'
              className={styles.backButton}
              aria-label={t("verksamhet.back", lang)}
            >
              <Image
                src={selectedGroup.backIcon}
                alt={t("verksamhet.back", lang)}
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerksamhetDetailPage;

