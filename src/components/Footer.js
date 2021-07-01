import { ReactComponent as AndroidIcon } from "../assets/logo/android.svg";
import { ReactComponent as AppleIcon } from "../assets/logo/apple.svg";

export const Footer = () => (
  <div className="footer">
    <div className="footer-inner">
      <div className="footer-wrapper">
        <div className="footer-links-section">
          <div className="footer-links-section-container">
            <div className="title">
              <span>L'entreprise</span>
            </div>
            <div className="footer-link-list">
              <a href="#">Qui sommes-nous ?</a>
              <a href="#">Nous contacter</a>
              <a href="#">Nous recrutons</a>
            </div>
          </div>
          <div className="footer-links-section-container">
            <div className="title">
              <span>Nos applications</span>
            </div>
            <div className="link-box">
              <p>Découvrez nos applications</p>
              <div className="footer-link-list">
                <a href="#">
                  <AppleIcon />
                </a>
                <a href="#">
                  <AndroidIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-links-section-container">
            <div className="title">
              <span>Services pro</span>
            </div>
            <div className="footer-link-list">
              <a href="#">Tous nos services pro</a>
              <a href="#">Accès client</a>
              <a href="#">Mes annonces sur NormalisIMMO</a>
            </div>
          </div>
          <div className="footer-links-section-container">
            <div className="title">
              <span>à découvrir</span>
            </div>
            <div className="footer-link-list">
              <a href="#">Annuaire des professionnels</a>
              <a href="#">Tout l'immobilier</a>
              <a href="#">Toutes les villes</a>
              <a href="#">Tous les départements</a>
              <a href="#">Toutes les régions</a>
            </div>
          </div>
        </div>
        <div className="footer-copyright-section">
          <div>NormalisIMMO © 2020 - 2021</div>
          <a her="#">Condition générales d'utilisation</a>
          <a her="#">Politique Générale de Protection des Données</a>
          <a her="#">Fonctionnement de notre site</a>
        </div>
      </div>
    </div>
  </div>
);
