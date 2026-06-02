"use client";

import Image from "next/image";
import { VerksamhetGroup } from "../../data/hssdata";
import styles from "./verksamhetcards.module.css";

interface Props {
  groups: VerksamhetGroup[];
  expandedId: string | null;
  onExpand: (id: string | null) => void;
}

export default function VerksamhetCards({ groups, expandedId, onExpand }: Props) {
  const expandedGroup = groups.find((g) => g.id === expandedId);

  if (expandedGroup) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.detailCard} style={{ borderColor: expandedGroup.bulletColor }}>
          <div
            className={styles.detailHeader}
            style={{ backgroundColor: expandedGroup.bulletColor }}
          >
            <h2 className={styles.detailTitle}>{expandedGroup.title}</h2>
            <div className={styles.detailIconBox}>
              <Image
                src={expandedGroup.icon}
                alt={expandedGroup.title}
                width={expandedGroup.iconWidth ?? 110}
                height={expandedGroup.iconHeight ?? 95}
              />
            </div>
            <p className={styles.detailSubtitle}>{expandedGroup.subtitle}</p>
          </div>

          <div className={styles.detailContent}>
            <div className={styles.detailGrid}>
              <div className={styles.desktopCol}>
                <h3 className={styles.sectionTitle}>Aktiviteter</h3>
                <ul className={styles.activityList}>
                  {expandedGroup.activities.map((item) => (
                    <li key={item} className={styles.activityItem}>
                      <span
                        className={styles.bullet}
                        style={{ backgroundColor: expandedGroup.bulletColor }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.desktopCol}>
                <div className={styles.badgeRow}>
                  <Image
                    src={expandedGroup.badgeIcon}
                    alt="Märken"
                    width={22}
                    height={22}
                  />
                  <p className={styles.badgeLabel}>Märken &amp; Färdigheter</p>
                </div>
                <ul className={styles.badgeList}>
                  {expandedGroup.badges.map((badge) => (
                    <li key={badge}>{badge}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.descriptionWrapper}>
              {expandedGroup.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className={styles.descriptionParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.backButtonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => onExpand(null)}
                aria-label="Tillbaka"
              >
                <Image
                  src={expandedGroup.backIcon}
                  alt="Tillbaka"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              background: `linear-gradient(to right, ${group.bulletColor} 0%, ${group.bulletColor}CC 15%, ${group.bulletColor}66 30%, ${group.bulletColor}22 50%, ${group.bulletColor}08 70%, transparent 100%)`,
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
                    <h3 className={styles.sectionTitle}>Aktiviteter</h3>
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
                        alt="Märken"
                        width={20}
                        height={20}
                      />
                      <p className={styles.badgeLabel}>Märken &amp; Färdigheter</p>
                    </div>
                    <ul className={styles.badgeList}>
                      {group.badges.map((badge) => (
                        <li key={badge}>{badge}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.mobileLasMer}>
                  <button
                    className={styles.readMore}
                    style={{ color: group.bulletColor }}
                    onClick={() => onExpand(group.id)}
                  >
                    Läs Mer ...
                  </button>
                </div>
              </div>

              <div className={styles.desktopGridContainer}>
                <div className={styles.desktopGrid}>
                  <div className={styles.desktopCol}>
                    <h3 className={styles.sectionTitle}>Aktiviteter</h3>
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
                        alt="Märken"
                        width={22}
                        height={22}
                      />
                      <p className={styles.badgeLabel}>
                        Märken &amp; Färdigheter
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
                  <button
                    className={styles.readMore}
                    style={{ color: group.bulletColor }}
                    onClick={() => onExpand(group.id)}
                  >
                    Läs Mer ...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}