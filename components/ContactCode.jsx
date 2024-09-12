import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'twilighttechie.com',
    href: 'https://twilighttechie.com',
  },
  {
    social: 'email',
    link: 'da.kings.air@gmail.com',
    href: 'mailto:da.kings.air@gmail.com',
  },
  {
    social: 'github',
    link: 'Twilight-Techie-X',
    href: 'https://github.com/Twilight-Techie-X',
  },
  {
    social: 'linkedin',
    link: 'Ibrahim_Makanjuola',
    href: 'https://www.linkedin.com/in/ibrahim-makanjuola-94a24b242/',
  },
  {
    social: 'x',
    link: '@Twilight_Techie',
    href: 'https://x.com/Twilight_Techie',
  },
  {
    social: 'instagram',
    link: '@imakz.da.king',
    href: 'https://www.instagram.com/imakz.da.king/',
  },
  {
    social: 'polywork',
    link: 'ibrahim_makanjuola',
    href: 'https://www.polywork.com/ibrahim_makanjuola',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
