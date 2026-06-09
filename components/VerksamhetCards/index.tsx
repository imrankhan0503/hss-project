"use client";

import Image from "next/image";
import { VerksamhetGroup } from "../../data/hssdata";
import styles from "./verksamhetcards.module.css";
import { t } from "@/i18n/t";
import { useLang } from "@/i18n/useLang";
import Link from "next/link";

interface Props {
  groups: VerksamhetGroup[];
}

export default function VerksamhetCards({
  groups
}: Props) {
  const lang = useLang();

  return (
    <div className={styles.wrapper}>
      {groups.map((group) => (
        <div
          key={group.id}
          className={styles.card}
          style={{ borderColor: group.bulletColor }}
        >
          <div
            className={styles.cardBg}
            style={{
              background: `linear-gradient(to right, ${group.bulletColor} 0%, ${group.bulletColor}77 18%, ${group.bulletColor}66 30%, ${group.bulletColor}22 50%, transparent 82%)`,
            }}
          />

          <div className={styles.cardInner}>
            <div className={styles.leftPanel}>
              <h2 className={styles.cardTitle}>{group.title}</h2>
              <div className={styles.iconBox}>
                <Image
                  src={group.icon}
                  alt={group.title}
                  width={group.iconWidth ?? 110}
                  height={group.iconHeight ?? 95}
                />
              </div>
              <p className={styles.cardSubtitle}>{group.subtitle}</p>
            </div>

            <div className={styles.rightPanel}>
              <div className={styles.mobileContent}>
                <div className={styles.mobileTop}>
                  <div className={styles.mobileActivities}>
                    <h3 className={styles.sectionTitle}>
                      {t("verksamhet.activities", lang)}
                    </h3>
                    <ul className={styles.activityList}>
                      {group.activities.map((item) => (
                        <li key={item} className={styles.activityItem}>
                          <span
                            className={styles.bullet}
                            style={{ backgroundColor: group.bulletColor }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.mobileBadges}>
                    <div className={styles.badgeRow}>
                      <Image
                        src={group.badgeIcon}
                        alt={t("verksamhet.badges", lang)}
                        width={20}
                        height={20}
                      />
                      <p className={styles.badgeLabel}>
                        {t("verksamhet.badges", lang)}
                      </p>
                    </div>
                    <ul className={styles.badgeList}>
                      {group.badges.map((badge) => (
                        <li key={badge}>{badge}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.mobileLasMer}>
                  <Link
                    href={`/verksamhet/${group.id}`}
                    className={styles.readMore}
                    style={{ color: group.bulletColor }}
                  >
                    {t("verksamhet.readMore", lang)}
                  </Link>
                </div>
              </div>

              <div className={styles.desktopGridContainer}>
                <div className={styles.desktopGrid}>
                  <div className={styles.desktopCol}>
                    <h3 className={styles.sectionTitle}>
                      {t("verksamhet.activities", lang)}
                    </h3>
                    <ul className={styles.activityList}>
                      {group.activities.map((item) => (
                        <li key={item} className={styles.activityItem}>
                          <span
                            className={styles.bullet}
                            style={{ backgroundColor: group.bulletColor }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.desktopCol}>
                    <div className={styles.badgeRow}>
                      <Image
                        src={group.badgeIcon}
                        alt={t("verksamhet.badges", lang)}
                        width={22}
                        height={22}
                      />
                      <p className={styles.badgeLabel}>
                        {t("verksamhet.badges", lang)}
                      </p>
                    </div>
                    <ul className={styles.badgeList}>
                      {group.badges.map((badge) => (
                        <li key={badge}>{badge}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.desktopReadMore}>
                  <Link
                    href={`/verksamhet/${group.id}`}
                    className={styles.readMore}
                    style={{ color: group.bulletColor }}
                  >
                    {t("verksamhet.readMore", lang)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
