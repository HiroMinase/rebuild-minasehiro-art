import { Cormorant_Infant, Lora, Noto_Serif_JP } from "@next/font/google";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/root.module.scss";

const cormorantInfant = Cormorant_Infant({ weight: "300", subsets: ["latin"] });
const lora = Lora({ weight: "400", subsets: ["latin"] });
const notoSerifJp = Noto_Serif_JP({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return <main className={lora.className}>
    <Image
      src="/images/background.jpg"
      priority={true}
      alt="トップ背景"
      width={1125}
      height={2000}
      sizes="95vh"
      style={{
        width: '100vw',
        height: '95vh',
      }}
    />
    <div className={cormorantInfant.className}>
      <div className={styles.headline}>
        <div className={styles.name}>
          MINASE HIRO
        </div>
        <div className={styles.propaty}>
          engineer / photographer
        </div>
      </div>
    </div>
    <div className={notoSerifJp.className}>
      <div className={styles.intro}>
        <div className={styles.name}>
          水瀬ひろ
        </div>
        <hr className={styles.divider} />
        <div className={styles.description}>
          エンジニア。写真家。岡山県玉野市出身。2016年に株式会社ラブグラフが運営する写真教室 ラブグラフアカデミーと出会い、写真を本格的に撮り始める。ラブグラフの創業者である駒下純兵の考えに心酔し、カメラマン（ラブグラファー）として活動するかたわら、プログラミング未経験ながらラブグラフのエンジニアとして働き始める。2019年より正式に社員エンジニアとして仲間入りし現在に至る。
        </div>
      </div>
    </div>
    <div className={lora.className}>
      <div className={styles.intro}>
        <div className={styles.name}>
          Minase Hiro
        </div>
        <hr className={styles.divider} />
        <div className={styles.description}>
          Engineer. Photographer. Born in Tamano City, Okayama Prefecture in 1995. In 2016, I encountered Lovegraph Academy, a photography school operated by Lovegraph Co., Ltd., and started taking photography seriously. I was inspired by the founder Junpei Komashita’s ideas and started working as a Lovegraph photographer (Lovegrapher) while also working as a Lovegraph engineer despite having no prior programming experience. I officially joined the company as a full-time engineer in 2019 and have been working there since then.
        </div>
      </div>
    </div>
    <div className={styles.albumIndex}>
      <Image
        src="/images/albums/blue/01.jpg"
        alt="アルバムサムネイル01"
        width={2000}
        height={1125}
        sizes="90vw"
        style={{
          width: '90vw',
          height: 'auto',
        }}
        className={styles.albumThumbnail}
      />
      <Image
        src="/images/albums/snap/01.jpg"
        alt="アルバムサムネイル01"
        width={2000}
        height={1125}
        sizes="90vw"
        style={{
          width: '90vw',
          height: 'auto',
        }}
        className={styles.albumThumbnail}
      />
      <Image
        src="/images/albums/portrait/01.jpg"
        alt="アルバムサムネイル01"
        width={2000}
        height={1125}
        sizes="90vw"
        style={{
          width: '90vw',
          height: 'auto',
        }}
        className={styles.albumThumbnail}
      />
      <Image
        src="/images/albums/nature/01.jpg"
        alt="アルバムサムネイル01"
        width={2000}
        height={1125}
        sizes="90vw"
        style={{
          width: '90vw',
          height: 'auto',
        }}
        className={styles.albumThumbnail}
      />
      <Image
        src="/images/albums/trip/01.jpg"
        alt="アルバムサムネイル01"
        width={2000}
        height={1125}
        sizes="90vw"
        style={{
          width: '90vw',
          height: 'auto',
        }}
        className={styles.albumThumbnail}
      />
    </div>
    <div className={styles.topicIndex}>
      <div className={styles.topicSectionLabel}>Topic</div>
      <hr className={styles.divider} />
      <div className={styles.topicItem}>
        <div className={styles.topicHeadline}>
          <span className={lora.className}>iOS</span>アプリをリリースしました！
        </div>
        <div className={styles.topicDescription}>
          スキンケア製品の成分欄を読み取ってどんな成分が含まれているのか調べられる「スキンケア成分スキャナー」というアプリを作りました。
        </div>
      </div>
      <div className={styles.topicItem}>
        <div className={styles.topicHeadline}>
          ラブグラフ8周年イベント「Lovegraphジャーニー2023」に参加しました！
        </div>
        <div className={styles.topicDescription}>
          2016年から関わっているラブグラフが 2023年2月12日 に創立8周年を迎えることを記念したイベント。普段なかなか会えないラブグラファーさんと交流できました。
        </div>
      </div>
    </div>
    <div className={styles.footer}>
      <div className={lora.className}>
        <div className={styles.snsLink}>
          <Link href="https://instagram.com/minasehiro">
            <Image
              src="/images/icons/instagram_icon.png"
              alt="インスタグラム"
              width={300}
              height={300}
              sizes="300px"
              style={{
                width: '30px',
                height: 'auto',
              }}
              className={styles.snsIcon}
            />
          </Link>
          <Link href="https://twitter.com/minase_hiro_">
            <Image
              src="/images/icons/twitter_icon.png"
              alt="ツイッター"
              width={300}
              height={300}
              sizes="300px"
              style={{
                width: '30px',
                height: 'auto',
              }}
              className={styles.snsIcon}
            />
          </Link>
        </div>
        <div className={styles.navigation}>
          <Link href="/" className={styles.navigationItem}>
            HOME
          </Link>
          <Link href="/albums" className={styles.navigationItem}>
            ALBUM
          </Link>
          <Link href="/topics" className={styles.navigationItem}>
            TOPIC
          </Link>
          <Link href="/about" className={styles.navigationItem}>
            ABOUT
          </Link>
        </div>
        <div className={styles.copyright}>
          Copyright ©︎ 2018 Minase Hiro.
        </div>
      </div>
    </div>
  </main>;
}