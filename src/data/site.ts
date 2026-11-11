export const site = {
  name: '表川 知由',
  englishName: 'Kazuyoshi Omotegawa',
  affiliation: '大阪大学 基礎工学部 情報科学科',
  description: '大阪大学で情報科学を学びながら、Web開発、デジタルマーケティング、新規事業の立ち上げに取り組む表川知由のポートフォリオ。',
  // URLを設定するとContactに表示されます。Emailは mailto: から始めてください。
  contact: { x: 'https://x.com/yHVJV3uuD040400', github: '', email: 'mailto:k.omotegawa@edore-edu.com' },
};

export const projects = [
  {
    number: '01', category: 'WEB開発 / マーケティング', title: 'Construction Tech Company',
    subtitle: '建設Tech企業でのWeb開発・マーケティング',
    description: 'BtoB SaaSのサービスサイト開発から、集客・計測・業務自動化まで。事業の接点を横断して、実装と改善に取り組んでいます。',
    scope: ['Astroによるサービスサイトの開発', 'LP制作・改善、Meta広告運用', 'GA4 / GTMによる計測環境の構築', 'GAS / Makeによる業務自動化'],
    tags: 'Astro  /  Meta Ads  /  GA4  /  GTM  /  GAS  /  Make',
  },
  {
    number: '02', category: '新規事業 / 集客', title: 'ナセバ進学予備校オンライン校舎',
    subtitle: 'オンライン予備校の新規事業立ち上げ支援',
    description: 'オンライン校舎の立ち上げに伴い、Webサイトの制作から集客施策の設計・改善までを支援しています。',
    scope: ['Webサイト・LP制作', '広告運用・計測環境構築', '集客施策の設計・改善'],
    tags: 'Web開発  /  広告運用  /  データ分析', link: 'https://online.naseva.net/', image: '/work-naseva.webp', imageAlt: 'ナセバオンライン校舎のウェブサイトのトップ画面', imageLink: 'https://online.naseva.net/', imageCaption: 'ナセバオンライン校舎のウェブサイト',
  },
  {
    number: '03', category: '個人事業 / WEB開発', title: 'Independent Web Development',
    subtitle: '個人でのWebサイト制作',
    description: '飲食店などのWebサイトを制作。目的や課題を整理するところから、公開後の運用まで一貫して対応しています。',
    scope: ['要件定義・設計', '開発・公開・保守', 'Astro / microCMS / Cloudflareの活用'],
    tags: 'Astro  /  microCMS  /  Cloudflare', link: 'https://mise-route.jp/', image: '/work-sho.webp', imageAlt: '炭火ジンギスカン翔のウェブサイトのトップ画面', imageLink: 'https://www.jingisukan-sho.com/', imageCaption: '制作事例：炭火ジンギスカン翔',
  },
  {
    number: '04', category: 'メディア / コンテンツ', title: 'YouTube Media Business',
    subtitle: 'YouTubeメディアの企画・運営',
    description: 'コンテンツの企画から公開後の分析・改善までを実践。開設約48日でチャンネル登録者1,000人に到達しました。',
    scope: ['メディア・コンテンツの企画', 'データ分析に基づく改善', 'チャンネル運営'],
    tags: 'コンテンツ企画  /  データ分析  /  改善', link: 'https://www.youtube.com/@nemureru-nihonshi', image: '/work-youtube.webp', imageAlt: 'YouTubeチャンネル「おやすみ日本史ばなし」の画面', imageLink: 'https://www.youtube.com/@nemureru-nihonshi', imageCaption: 'YouTubeチャンネル「おやすみ日本史ばなし」',
  },
];

export const skills = [
  { name: '開発', items: 'Astro、JavaScript、TypeScript、HTML、CSS、Tailwind CSS、Git、microCMS' },
  { name: 'マーケティング', items: 'Meta広告、GA4、GTM、検索エンジン最適化、AI検索最適化、LP改善' },
  { name: '自動化・運用', items: 'Google Apps Script、Make、Cloudflare、Netlify' },
  { name: 'ビジネス', items: 'Webマーケティング、プロジェクト管理、顧客対応、新規事業' },
];
