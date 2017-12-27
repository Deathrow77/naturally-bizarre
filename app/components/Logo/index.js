import styles from './styles.scss';

class LogoManager {
  constructor () {
    this.element = document.createElement('div')
    this.element.className = styles.logo

    this.element.innerHTML = `
      <svg class="${styles.logo__media}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.606 80.212">
        <path fill="none" d="M40.106,68.396v11.316H0.5" />
        <path fill="none" d="M0.5,62.737h39.606" />
        <path fill="none" d="M0.5,51.422h39.606" />
        <path fill="none" d="M0.5,45.765v-2.83c0-4.687,3.8-8.486,8.487-8.486 s8.487,3.8,8.487,8.486v25.461V42.935c0-4.687,3.8-8.486,8.487-8.486h5.658c4.687,0,8.486,3.8,8.486,8.486v2.83" />
        <path fill="none" d="M28.791,17.475h11.315V28.79h-8.972 c-5.124,0-10.037-2.035-13.66-5.658s-8.536-5.657-13.66-5.657H0.5V28.79" />
        <path fill="none" d="M0.5,11.816V8.987C0.5,4.3,4.3,0.5,8.987,0.5s8.487,3.8,8.487,8.487 v22.479V8.987c0-4.688,3.8-8.487,8.487-8.487h14.145" />
      </svg>
    `

    document.body.appendChild(this.element)
  }
}

export const Logo = new LogoManager()
