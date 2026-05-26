"use client";

import Image from "next/image";
import { VerksamhetGroup } from "../../data/hssdata";
import styles from "./verksamhetcards.module.css";

interface Props {
  groups: VerksamhetGroup[];
  onExpand: (id: string) => void;
}

export default function VerksamhetCards({ groups, onExpand }: Props) {
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
                  width={group.iconWidth ?? 100}
                  height={group.iconHeight ?? 88}
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

                  <div className={styles.mobileMeta}>
                    <div className={styles.metaGroup}>
                      <div className={styles.metaBlock}>
                        <Image
                          src={group.timeIcon}
                          alt="Tid"
                          width={12}
                          height={12}
                        />
                        <div>
                          <p className={styles.metaLabel}>Mötestider</p>
                          <p className={styles.metaValue}>
                            {group.meetingDays} ({group.meetingTime})
                          </p>
                        </div>
                      </div>
                      <div className={styles.metaBlock}>
                        <Image
                          src={group.locationIcon}
                          alt="Plats"
                          width={12}
                          height={12}
                        />
                        <div>
                          <p className={styles.metaLabel}>Mötesplats</p>
                          <p className={styles.metaValue}>
                            {group.meetingPlace}
                          </p>
                        </div>
                      </div>
                      <div className={styles.metaBlock}>
                        <Image
                          src={group.leaderIcon}
                          alt="Ledare"
                          width={12}
                          height={12}
                        />
                        <div>
                          <p className={styles.metaLabel}>Ledare</p>
                          <p className={styles.metaValue}>{group.leader}</p>
                        </div>
                      </div>
                    </div>
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

              <div className={styles.desktopGrid}>
                <div>
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

                <div>
                  <div className={styles.badgeRow}>
                    <Image
                      src={group.badgeIcon}
                      alt="Märken"
                      width={16}
                      height={16}
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

                <div>
                  <div className={styles.metaGroup}>
                    <div className={styles.metaBlock}>
                      <Image
                        src={group.timeIcon}
                        alt="Tid"
                        width={16}
                        height={16}
                      />
                      <div>
                        <p className={styles.metaLabel}>Mötestider</p>
                        <p className={styles.metaValue}>
                          {group.meetingDays} ({group.meetingTime})
                        </p>
                      </div>
                    </div>
                    <div className={styles.metaBlock}>
                      <Image
                        src={group.locationIcon}
                        alt="Plats"
                        width={16}
                        height={16}
                      />
                      <div>
                        <p className={styles.metaLabel}>Mötesplats</p>
                        <p className={styles.metaValue}>{group.meetingPlace}</p>
                      </div>
                    </div>
                    <div className={styles.metaBlock}>
                      <Image
                        src={group.leaderIcon}
                        alt="Ledare"
                        width={16}
                        height={16}
                      />
                      <div>
                        <p className={styles.metaLabel}>Ledare</p>
                        <p className={styles.metaValue}>{group.leader}</p>
                      </div>
                    </div>
                  </div>
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
      ))}
    </div>
  );
}
